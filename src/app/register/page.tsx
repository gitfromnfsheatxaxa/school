"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Check } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Reveal } from "@/components/motion/Motion";
import "../login/login.css";

export default function RegisterPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1800);
    }, 900);
  };

  if (success) {
    return (
      <div className="auth ns-dots-dark">
        <Reveal className="auth-card auth-success">
          <span className="auth-success-icon">
            <Check size={30} aria-hidden />
          </span>
          <h1>{t("register.successTitle")}</h1>
          <p className="auth-sub">{t("register.successText")}</p>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="auth ns-dots-dark">
      <div className="auth-topbar ns-container">
        <button className="auth-back" onClick={() => router.back()}>
          <ArrowLeft size={16} aria-hidden /> {t("register.back")}
        </button>
        <LanguageSwitcher dark />
      </div>

      <Reveal className="auth-card">
        <Link href="/" className="auth-brand">
          <span className="auth-brand-mark">N</span>
          Neuro<b>School</b>
        </Link>

        <h1>{t("register.title")}</h1>
        <p className="auth-sub">{t("register.subtitle")}</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-field">
            <span>{t("register.fullName")}</span>
            <input
              className="ns-field"
              type="text"
              placeholder={t("register.fullNamePlaceholder")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={loading}
            />
          </label>

          <label className="auth-field">
            <span>{t("register.email")}</span>
            <input
              className="ns-field"
              type="email"
              placeholder="email@neuroschool.uz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </label>

          <label className="auth-field">
            <span>{t("register.password")}</span>
            <input
              className="ns-field"
              type="password"
              placeholder={t("register.passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
          </label>

          <button type="submit" className="ns-btn ns-btn-primary ns-btn-lg auth-submit" disabled={loading}>
            {loading && <Loader2 size={17} className="auth-spin" aria-hidden />}
            {t("register.submit")}
          </button>
        </form>

        <p className="auth-switch">
          {t("register.haveAccount")}{" "}
          <Link href="/login">{t("register.signInLink")}</Link>
        </p>
      </Reveal>
    </div>
  );
}
