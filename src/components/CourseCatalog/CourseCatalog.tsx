"use client";

import { useState } from "react";
import "./CourseCatalog.css";
import { Star, Clock, Search, Filter } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  level: string;
  category: string;
  duration_weeks: number;
  price_uzs: number;
}

interface Props {
  courses?: Course[];
  onSelectCourse?: (id: string) => void;
}

export default function CourseCatalog({
  courses = [],
  onSelectCourse = () => { },
}: Props) {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("all");
  const [category, setCategory] = useState("all");

  /* ✅ NO useEffect, NO state */
  const filtered = courses
    .filter((c) =>
      search
        ? c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((c) => (level !== "all" ? c.level === level : true))
    .filter((c) => (category !== "all" ? c.category === category : true));

  const categories = [...new Set(courses.map((c) => c.category))];

  const formatPrice = (p: number) => ({
    uzs: p.toLocaleString("ru-UZ"),
    usd: Math.round(p / 11000),
  });

  return (
    <div className="catalog">
      <div className="catalog-header">
        <div className="container">
          <h1>Каталог курсов</h1>
          <p>Выберите курс, который поможет вам развить когнитивные <br /> способности и достичь новых высот</p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <div className="search-box">
            <Search size={18} />
            <input
              placeholder="Поиск курсов..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="select-wrapper">
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="all">Все уровни</option>
              <option value="beginner">Начальный</option>
              <option value="intermediate">Средний</option>
              <option value="advanced">Продвинутый</option>
            </select>
          </div>

          <div className="select-wrapper">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Все категории</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
        </div>
        </div>

        <div className="results-bar">
          <p>Найдено: {filtered.length}</p>
          <span className="sort">
            <Filter size={16} /> По дате
          </span>
        </div>

        <div className="grid">
          {filtered.map((course) => {
            const price = formatPrice(course.price_uzs);

            return (
              <div key={course.id} className="card">
                <div className="image">
                  <img src={course.image_url} alt={course.title} />
                  <span className="badge">{course.level}</span>
                </div>

                <div className="card-body">
                  <span className="category">{course.category}</span>
                  <h3>{course.title}</h3>
                  <p className="desc">{course.description}</p>

                  <div className="meta">
                    <span>
                      <Star size={14} /> 4.8
                    </span>
                    <span>
                      <Clock size={14} /> {course.duration_weeks} недель
                    </span>
                  </div>

                  <div className="price">
                    {price.uzs} сум
                    <small> или ${price.usd}</small>
                  </div>

                  <button onClick={() => onSelectCourse(course.id)}>
                    Подробнее
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
