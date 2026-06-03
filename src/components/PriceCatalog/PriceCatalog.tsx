"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import "./PriceCatalog.css";

export default function PriceCatalog() {
  const { t, dict } = useTranslation();

  return (
    <section className="pricing ns-section">
      <div className="ns-container">
        <Reveal className="pricing-head">
          <span className="ns-eyebrow">{t("pricing.eyebrow")}</span>
          <h1>{t("pricing.title")}</h1>
          <p>{t("pricing.subtitle")}</p>
        </Reveal>

        <Stagger className="pricing-grid" amount={0.05}>
          {dict.pricing.plans.map((plan) => (
            <StaggerItem
              key={plan.id}
              className={`pricing-card ${plan.highlight ? "is-highlight" : ""}`}
            >
              {plan.highlight && (
                <span className="pricing-tag">
                  <Star size={13} aria-hidden /> {t("pricing.popular")}
                </span>
              )}

              <h3>{plan.name}</h3>

              <div className="pricing-price">
                {plan.price}
                <span>
                  {" "}
                  / {t("pricing.period")}
                </span>
              </div>

              <ul className="pricing-feats">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} aria-hidden /> {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`/payment?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`}
                className={`ns-btn ${plan.highlight ? "ns-btn-accent" : "ns-btn-primary"} pricing-btn`}
              >
                {plan.button}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
