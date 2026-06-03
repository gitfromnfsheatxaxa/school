"use client";

import Link from "next/link";
import { BookOpen, Clock, Award, Flame, ArrowRight, Play } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion/Motion";
import "./dashboard.css";

export default function DashboardPage() {
  const { t, dict } = useTranslation();

  const stats = [
    { icon: BookOpen, value: "3", label: t("dashboard.statCourses") },
    { icon: Clock, value: "48", label: t("dashboard.statHours") },
    { icon: Award, value: "2", label: t("dashboard.statCerts") },
    {
      icon: Flame,
      value: `12 ${t("dashboard.streakUnit")}`,
      label: t("dashboard.statStreak"),
    },
  ];

  return (
    <div className="dash">
      <div className="dash-head ns-dots-dark">
        <div className="ns-container">
          <Reveal>
            <span className="ns-eyebrow">{t("dashboard.eyebrow")}</span>
            <h1>{t("dashboard.title")}</h1>
            <p>{t("dashboard.subtitle")}</p>
          </Reveal>

          <Stagger className="dash-stats" amount={0.2}>
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.label} className="dash-stat">
                  <span className="dash-stat-icon">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>

      <div className="ns-container dash-body">
        <section className="dash-section">
          <Reveal>
            <h2>{t("dashboard.continueTitle")}</h2>
          </Reveal>

          <Stagger className="dash-courses" amount={0.1}>
            {dict.dashboard.items.map((item) => (
              <StaggerItem key={item.title} className="dash-course">
                <div className="dash-course-top">
                  <h3>{item.title}</h3>
                  <button className="dash-resume">
                    <Play size={14} aria-hidden /> {t("dashboard.resume")}
                  </button>
                </div>
                <div className="dash-progress-row">
                  <span>{t("dashboard.progress")}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="dash-bar">
                  <motion.span
                    className="dash-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Reveal>
          <div className="dash-browse">
            <div>
              <h2>{t("dashboard.browseTitle")}</h2>
              <p>{t("dashboard.browseText")}</p>
            </div>
            <Link href="/courses" className="ns-btn ns-btn-accent ns-btn-lg">
              {t("dashboard.browseCta")} <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
