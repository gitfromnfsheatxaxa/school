"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import "./Footer.css";

export default function Footer() {
  const { t, dict } = useTranslation();
  const year = 2026;

  const columns = [
    { title: t("footer.colCourses"), items: dict.footer.courses },
    { title: t("footer.colCompany"), items: dict.footer.company },
    { title: t("footer.colSupport"), items: dict.footer.support },
  ];

  return (
    <footer className="footer ns-dots-dark">
      <div className="ns-container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="NeuroSchool">
            <span className="footer-logo-mark" aria-hidden>
              N
            </span>
            <span>
              Neuro<b>School</b>
            </span>
          </Link>
          <p>{t("footer.tagline")}</p>
          <p className="footer-loc">
            <MapPin size={15} aria-hidden /> {t("footer.location")}
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="footer-col" aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="ns-container footer-bottom">
        {t("footer.rights", { year })}
      </div>
    </footer>
  );
}
