"use client";
import { useState } from "react";
import "./PaymentPage.css";

type Method = "card" | "uzcard" | "payme";

export default function PaymentPage() {
    const [method, setMethod] = useState<Method>("card");

    return (
        <section className="payment">
            <div className="payment-container">
                <h1 className="payment-title">Оплата подписки</h1>
                <p className="payment-subtitle">
                    Выберите удобный способ оплаты
                </p>

                {/* METHODS */}
                <div className="methods">
                    <button
                        className={method === "card" ? "active" : ""}
                        onClick={() => setMethod("card")}
                    >
                        💳 Банковская карта
                    </button>

                    <button
                        className={method === "uzcard" ? "active" : ""}
                        onClick={() => setMethod("uzcard")}
                    >
                        🟢 Uzcard
                    </button>

                    <button
                        className={method === "payme" ? "active" : ""}
                        onClick={() => setMethod("payme")}
                    >
                        🟣 Payme
                    </button>
                </div>

                {/* FORM */}
                <div className="payment-card">
                    {method === "card" && (
                        <form className="form">
                            <input placeholder="Номер карты" />
                            <input placeholder="Имя владельца" />

                            <div className="row">
                                <input placeholder="MM/YY" />
                                <input placeholder="CVC" />
                            </div>

                            <button className="pay-btn">Оплатить</button>
                        </form>
                    )}

                    {method === "uzcard" && (
                        <div className="provider">
                            <p>Вы будете перенаправлены на Uzcard для завершения оплаты.</p>
                            <button className="pay-btn">Перейти к оплате</button>
                        </div>
                    )}

                    {method === "payme" && (
                        <div className="provider">
                            <p>Оплатите быстро через Payme.</p>
                            <button className="pay-btn">Оплатить через Payme</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
