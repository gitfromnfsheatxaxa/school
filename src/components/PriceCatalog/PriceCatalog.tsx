"use client";

import "./PriceCatalog.css";
import Link from "next/link";

export default function PriceCatalog() {
    const plans = [
        {
            name: "Бесплатный",
            price: "₽0",
            period: "месяц",
            features: [
                "Доступ к бесплатным курсам",
                "Базовая панель студента",
                "Поддержка сообщества",
            ],
            button: "Начать бесплатно",
            highlight: false,
        },
        {
            name: "Базовый",
            price: "₽799",
            period: "месяц",
            features: [
                "Все возможности бесплатного плана",
                "Доступ к премиум-курсам",
                "Отслеживание прогресса",
            ],
            button: "Выбрать",
            highlight: false,
        },
        {
            name: "Профессиональный",
            price: "₽2499",
            period: "месяц",
            features: [
                "Все функции базового плана",
                "Сертификаты",
                "Персональный наставник",
                "Приоритетная поддержка",
            ],
            button: "Стать PRO",
            highlight: true,
        },
        {
            name: "Корпоративный",
            price: "₽8999",
            period: "месяц",
            features: [
                "Неограниченный доступ",
                "Командные аккаунты",
                "Админ панель",
                "Персональный менеджер",
            ],
            button: "Связаться с нами",
            highlight: false,
        },
    ];

    return (
        <section className="pricing">
            <h2 className="pricing-title">Тарифные планы</h2>
            <p className="pricing-subtitle">Выберите подходящий тариф</p>

            <div className="pricing-grid">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
                    >
                        <h3>{plan.name}</h3>

                        <div className="price">
                            {plan.price}
                            <span> / {plan.period}</span>
                        </div>

                        <ul>
                            {plan.features.map((f, idx) => (
                                <li key={idx}>✓ {f}</li>
                            ))}
                        </ul>

                        <Link
                            href={`/payment?plan=${encodeURIComponent(
                                plan.name
                            )}&price=${encodeURIComponent(plan.price)}`}
                            className="pricing-btn"
                        >
                            {plan.button}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
