"use client";

import {
  Brain,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import {
  Reveal,
  Stagger,
  StaggerItem,
  motion,
} from "@/components/motion/Motion";
import "./HomeContext.css";

interface Props {
  onGetStarted: () => void;
  onViewCourses: () => void;
}

const FEATURE_ICONS = [Brain, Users, Award, TrendingUp];
const STATS = [
  { value: "3 000+", key: "statStudents" as const },
  { value: "25+", key: "statCourses" as const },
  { value: "4.9", key: "statRating" as const, star: true },
];

export default function HomeContext({ onGetStarted, onViewCourses }: Props) {
  const { t, dict } = useTranslation();

  return (
    <div className="home">
      {/* ============ HERO ============ */}
      <section className="hero ns-dots-dark">
        <div className="ns-container hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              className="hero-badge"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Sparkles size={14} aria-hidden />
              {t("home.badge")}
            </motion.span>

            <motion.h1
              className="hero-title"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {t("home.heroTop")}{" "}
              <span className="hero-accent">{t("home.heroAccent")}</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {t("home.heroSubtitle")}
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <button
                className="ns-btn ns-btn-accent ns-btn-lg"
                onClick={onGetStarted}
              >
                {t("home.ctaStart")} <ArrowRight size={18} aria-hidden />
              </button>
              <button
                className="ns-btn ns-btn-on-dark ns-btn-lg"
                onClick={onViewCourses}
              >
                {t("home.ctaCourses")}
              </button>
            </motion.div>

            <motion.dl
              className="hero-stats"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 0.1 } },
              }}
            >
              {STATS.map((s) => (
                <div key={s.key} className="hero-stat">
                  <dt>{s.value}</dt>
                  <dd>
                    {s.star && <Star size={13} aria-hidden />} {t(`home.${s.key}`)}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Decorative orbiting card cluster */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            aria-hidden
          >
            <motion.div
              className="orb orb-brain"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain size={34} />
            </motion.div>
            <motion.div
              className="orb orb-chip orb-chip-1"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={18} /> +38%
            </motion.div>
            <motion.div
              className="orb orb-chip orb-chip-2"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <Award size={18} /> Certified
            </motion.div>
            <div className="orb-glow" />
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="ns-section ns-container">
        <Reveal className="section-head">
          <span className="ns-eyebrow">{t("home.featuresEyebrow")}</span>
          <h2>{t("home.featuresTitle")}</h2>
        </Reveal>

        <Stagger className="feature-grid">
          {dict.home.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i] ?? Brain;
            return (
              <StaggerItem key={f.title} className="feature-card">
                <span className="feature-index">0{i + 1}</span>
                <span className="feature-icon">
                  <Icon size={22} aria-hidden />
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="ns-section ns-container">
        <div className="benefits">
          <Reveal className="benefits-aside">
            <span className="ns-eyebrow">{t("home.benefitsEyebrow")}</span>
            <h2>{t("home.benefitsTitle")}</h2>
            <button
              className="ns-btn ns-btn-primary ns-btn-lg"
              onClick={onGetStarted}
            >
              {t("home.benefitsCta")} <ArrowRight size={18} aria-hidden />
            </button>
          </Reveal>

          <Stagger className="benefit-grid">
            {dict.home.benefits.map((b) => (
              <StaggerItem key={b} className="benefit-item">
                <CheckCircle2 size={18} aria-hidden />
                <span>{b}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ns-container">
        <Reveal>
          <div className="home-cta">
            <div className="home-cta-glow" aria-hidden />
            <h2>{t("home.ctaTitle")}</h2>
            <p>{t("home.ctaText")}</p>
            <button className="ns-btn ns-btn-primary ns-btn-lg" onClick={onGetStarted}>
              {t("home.ctaButton")} <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
