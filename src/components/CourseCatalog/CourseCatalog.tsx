"use client";

import { useMemo, useState } from "react";
import { Star, Clock, Search, SlidersHorizontal, ArrowUpRight, SearchX } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import "./CourseCatalog.css";

export interface Course {
  id: string;
  title: string;
  desc: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  durationWeeks: number;
  priceUzs: number;
  image: string;
}

interface Props {
  courses?: Course[];
  onSelectCourse?: (id: string) => void;
}

export default function CourseCatalog({
  courses = [],
  onSelectCourse = () => {},
}: Props) {
  const { t, locale } = useTranslation();
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("all");
  const [category, setCategory] = useState("all");

  const levelLabel: Record<Course["level"], string> = {
    beginner: t("courses.levelBeginner"),
    intermediate: t("courses.levelIntermediate"),
    advanced: t("courses.levelAdvanced"),
  };

  const categories = useMemo(
    () => [...new Set(courses.map((c) => c.category))],
    [courses]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses
      .filter((c) =>
        q ? c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) : true
      )
      .filter((c) => (level !== "all" ? c.level === level : true))
      .filter((c) => (category !== "all" ? c.category === category : true));
  }, [courses, search, level, category]);

  const fmt = useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const reset = () => {
    setSearch("");
    setLevel("all");
    setCategory("all");
  };

  return (
    <div className="catalog">
      <div className="catalog-head">
        <div className="ns-container">
          <Reveal>
            <span className="ns-eyebrow">{t("courses.eyebrow")}</span>
            <h1>{t("courses.title")}</h1>
            <p>{t("courses.subtitle")}</p>
          </Reveal>
        </div>
      </div>

      <div className="ns-container">
        <Reveal className="filters">
          <div className="search-box">
            <Search size={18} aria-hidden />
            <input
              type="search"
              placeholder={t("courses.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={t("courses.search")}
            />
          </div>

          <div className="select-wrap">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              aria-label={t("courses.levelAll")}
            >
              <option value="all">{t("courses.levelAll")}</option>
              <option value="beginner">{t("courses.levelBeginner")}</option>
              <option value="intermediate">{t("courses.levelIntermediate")}</option>
              <option value="advanced">{t("courses.levelAdvanced")}</option>
            </select>
          </div>

          <div className="select-wrap">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label={t("courses.categoryAll")}
            >
              <option value="all">{t("courses.categoryAll")}</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="results-bar">
          <p>{t("courses.found", { count: filtered.length })}</p>
          <span className="sort">
            <SlidersHorizontal size={15} aria-hidden /> {t("courses.sort")}
          </span>
        </div>

        {filtered.length === 0 ? (
          <Reveal className="empty">
            <span className="empty-icon">
              <SearchX size={28} aria-hidden />
            </span>
            <h3>{t("courses.emptyTitle")}</h3>
            <p>{t("courses.emptyText")}</p>
            <button className="ns-btn ns-btn-ghost" onClick={reset}>
              {t("courses.reset")}
            </button>
          </Reveal>
        ) : (
          <Stagger className="course-grid" amount={0.1}>
            {filtered.map((course) => {
              const usd = Math.round(course.priceUzs / 12300);
              return (
                <StaggerItem key={course.id} className="course-card">
                  <button
                    className="course-card-btn"
                    onClick={() => onSelectCourse(course.id)}
                    aria-label={course.title}
                  >
                    <div className="course-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={course.image} alt="" loading="lazy" />
                      <span className="course-badge">{levelLabel[course.level]}</span>
                    </div>

                    <div className="course-body">
                      <span className="course-cat">{course.category}</span>
                      <h3>{course.title}</h3>
                      <p className="course-desc">{course.desc}</p>

                      <div className="course-meta">
                        <span>
                          <Star size={14} aria-hidden /> 4.8
                        </span>
                        <span>
                          <Clock size={14} aria-hidden />{" "}
                          {t("courses.weeks", { count: course.durationWeeks })}
                        </span>
                      </div>

                      <div className="course-foot">
                        <div className="course-price">
                          {fmt.format(course.priceUzs)}
                          <small>
                            {" "}
                            {t("courses.priceOr")} ${usd}
                          </small>
                        </div>
                        <span className="course-go" aria-hidden>
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}
      </div>
    </div>
  );
}
