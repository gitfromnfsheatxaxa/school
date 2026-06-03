"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  BarChart3,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import "./course.css";

const IMAGES = [
  "/img/photo-1434030216411-0b793f4b4173.jpg",
  "/img/photo-1516534775068-ba3e7458af70.jpg",
  "/img/photo-1559757175-0eb30cd8c063.jpg",
];

export default function CourseDetails() {
  const { t, dict, locale } = useTranslation();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const index = dict.courses.samples.findIndex((c) => c.id === params.id);
  const course = index >= 0 ? dict.courses.samples[index] : dict.courses.samples[0];
  const image = IMAGES[(index < 0 ? 0 : index) % IMAGES.length];

  const levelLabel = {
    beginner: t("courses.levelBeginner"),
    intermediate: t("courses.levelIntermediate"),
    advanced: t("courses.levelAdvanced"),
  }[course.level];

  const price = new Intl.NumberFormat(locale).format(course.priceUzs);

  return (
    <div className="cd">
      <div className="cd-hero ns-dots-dark">
        <div className="ns-container">
          <Link href="/courses" className="cd-back">
            <ArrowLeft size={16} aria-hidden /> {t("courseDetail.back")}
          </Link>

          <Reveal className="cd-hero-grid">
            <div className="cd-hero-copy">
              <span className="cd-cat">{course.category}</span>
              <h1>{course.title}</h1>
              <p>{course.desc}</p>

              <div className="cd-meta">
                <span>
                  <BarChart3 size={16} aria-hidden /> {t("courseDetail.level")}:{" "}
                  {levelLabel}
                </span>
                <span>
                  <Clock size={16} aria-hidden /> {t("courseDetail.duration")}:{" "}
                  {t("courseDetail.weeks", { count: course.durationWeeks })}
                </span>
                <span>
                  <Star size={16} aria-hidden /> 4.8
                </span>
              </div>
            </div>

            <div className="cd-card">
              <div className="cd-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" />
              </div>
              <div className="cd-card-body">
                <div className="cd-price">{price} <small>UZS</small></div>
                <button
                  className="ns-btn ns-btn-accent ns-btn-lg cd-enroll"
                  onClick={() => router.push("/payment?plan=" + encodeURIComponent(course.title))}
                >
                  {t("courseDetail.enroll")} <ArrowRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="ns-container cd-content">
        <Reveal className="cd-block">
          <span className="ns-eyebrow">{t("courseDetail.overview")}</span>
          <p className="cd-overview">{t("courseDetail.overviewText")}</p>
        </Reveal>

        <div className="cd-block">
          <Reveal>
            <h2>{t("courseDetail.learnTitle")}</h2>
          </Reveal>
          <Stagger className="cd-learn">
            {dict.courseDetail.learn.map((item) => (
              <StaggerItem key={item} className="cd-learn-item">
                <span className="cd-learn-check">
                  <Check size={15} aria-hidden />
                </span>
                {item}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}
