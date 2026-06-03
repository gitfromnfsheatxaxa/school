"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Reveal } from "@/components/motion/Motion";
import "./login.css";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 900);
  };

  return (
    <div className="auth ns-dots-dark">
      <div className="auth-topbar ns-container">
        <button className="auth-back" onClick={() => router.back()}>
          <ArrowLeft size={16} aria-hidden /> {t("login.back")}
        </button>
        <LanguageSwitcher dark />
      </div>

      <Reveal className="auth-card">
        <Link href="/" className="auth-brand">
          <span className="auth-brand-mark">N</span>
          Neuro<b>School</b>
        </Link>

        <h1>{t("login.title")}</h1>
        <p className="auth-sub">{t("login.subtitle")}</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-field">
            <span>{t("login.email")}</span>
            <input
              className="ns-field"
              type="email"
              placeholder={t("login.emailPlaceholder")}
              required
              disabled={loading}
            />
          </label>

          <label className="auth-field">
            <span>{t("login.password")}</span>
            <input
              className="ns-field"
              type="password"
              placeholder={t("login.passwordPlaceholder")}
              required
              disabled={loading}
            />
          </label>

          <button type="submit" className="ns-btn ns-btn-primary ns-btn-lg auth-submit" disabled={loading}>
            {loading && <Loader2 size={17} className="auth-spin" aria-hidden />}
            {t("login.submit")}
          </button>
        </form>

        <p className="auth-switch">
          {t("login.noAccount")}{" "}
          <Link href="/register">{t("login.signUpLink")}</Link>
        </p>
      </Reveal>
    </div>
  );
}
