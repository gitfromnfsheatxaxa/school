"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // demo loader effect
  };

  return (
    <div className="login-page">
    

   
      <div className="login-card">
        <button className="btn-back" onClick={() => router.back()}>
          ← Назад
        </button>
        
        <div className="login-card-header">
          <h2 className="login-card-title">NeuroSchool</h2>
          <p className="login-card-description">Войдите в свою учетную запись</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@neuroschool.uz"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="пароль"
              required
              disabled={loading}
            />
          </div>


          <button type="submit" className="btn-submit" disabled={loading}>
            {loading && <span className="loader"></span>}
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
