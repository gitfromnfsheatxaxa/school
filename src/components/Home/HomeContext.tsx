"use client";

import {
    Brain,
    Users,
    Award,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Star,
} from "lucide-react";

interface Props {
    onGetStarted: () => void;
    onViewCourses: () => void;
}

import "./HomeContext.css";

export default function HomeContext({ onGetStarted, onViewCourses }: Props) {
    const features = [
        {
            icon: Brain,
            title: "Научный подход",
            description:
                "Курсы основаны на последних исследованиях нейронауки и когнитивной психологии",
        },
        {
            icon: Users,
            title: "Опытные преподаватели",
            description: "Эксперты с практическим опытом обучения и исследований мозга",
        },
        {
            icon: Award,
            title: "Сертификаты",
            description: "Официальные сертификаты после завершения обучения",
        },
        {
            icon: TrendingUp,
            title: "Прогресс 24/7",
            description: "Отслеживайте рост навыков в реальном времени",
        },
    ];

    const benefits = [
        "Доступ 24/7",
        "Интерактивные задания",
        "Поддержка кураторов",
        "Сообщество студентов",
        "Практические упражнения",
        "Доп. материалы",
    ];

    return (
        <div className="wrapper">
            {/* HERO */}
            <section className="hero">
                <div className="heroContent">
                    <span className="badge">🧠 NeuroSchool</span>

                    <h1>
                        Раскройте потенциал
                        <br /> вашего мозга
                    </h1>

                    <p>
                        Научно обоснованные курсы по памяти, вниманию и когнитивному развитию
                        для студентов Узбекистана
                    </p>

                    <div className="actions">
                        <button className="btn btn-lg" onClick={onGetStarted}>
                            Начать обучение <ArrowRight size={18} />
                        </button>

                        <button className="btn btn-lg btn-outline" onClick={onViewCourses}>
                            Посмотреть курсы
                        </button>
                    </div>

                    <div className="stats">
                        <div>
                            <b>3000+</b>
                            <span>Студентов</span>
                        </div>
                        <div>
                            <b>25+</b>
                            <span>Курсов</span>
                        </div>
                        <div>
                            <b>4.9</b>
                            <span>
                                <Star size={14} /> Рейтинг
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                <h2>Почему выбирают NeuroSchool?</h2>

                <div className="grid">
                    {features.map((f, i) => {
                        const Icon = f.icon;

                        return (
                            <div key={i} className="card">
                                <Icon size={26} />
                                <h3>{f.title}</h3>
                                <p>{f.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* BENEFITS */}
            <section className="benefits">
                <h2>Что вы получите</h2>

                <div className="benefitGrid">
                    {benefits.map((b, i) => (
                        <div key={i} className="benefit">
                            <CheckCircle size={18} />
                            {b}
                        </div>
                    ))}
                </div>

                <button className="btn btn-lg" onClick={onGetStarted}>
                    Присоединиться сейчас
                </button>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Готовы начать?</h2>
                <p>Начните обучение сегодня и прокачайте свой мозг 🚀</p>

                <button className="btn btn-lg" onClick={onGetStarted}>
                    Зарегистрироваться бесплатно
                </button>
            </section>
        </div>
    );
}
