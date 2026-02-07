"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./register.css";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // demo loader effect
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    }, 1000);
  };

  if (success) {
    return (
      <div className="register-page">
        <div className="register-card">
          <h2 className="register-card-title">Регистрация успешна! ✓</h2>
          <p className="register-card-description">
            Ваш аккаунт был создан. Сейчас вы будете перенаправлены для входа.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
 

   
      <div className="register-card">
        
        <button className="btn-back" onClick={() => router.back()}>
          ← Назад
        </button>
        <h2 className="register-card-title">Создать аккаунт</h2>
        <p className="register-card-description">Зарегистрируйтесь в NeuroSchool</p>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Полное имя</label>
            <input
              id="fullName"
              type="text"
              placeholder="Иван Иванов"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="ivan@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="Минимум 6 символов"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading && <span className="loader"></span>}
            Зарегистрироваться
          </button>

          <div className="login-switch">
            Уже есть аккаунт?{" "}
            <button
              type="button"
              className="btn-link"
              onClick={() => router.push("/login")}
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
