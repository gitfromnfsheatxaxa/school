"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, ShieldCheck, Wallet, Smartphone } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import { AnimatePresence, motion, Reveal } from "@/components/motion/Motion";
import "./PaymentPage.css";

type Method = "card" | "uzcard" | "payme";

export default function PaymentPage() {
  const { t } = useTranslation();
  const params = useSearchParams();
  const plan = params.get("plan");
  const price = params.get("price");
  const [method, setMethod] = useState<Method>("card");

  const methods: { id: Method; label: string; icon: typeof CreditCard }[] = [
    { id: "card", label: t("payment.methodCard"), icon: CreditCard },
    { id: "uzcard", label: t("payment.methodUzcard"), icon: Wallet },
    { id: "payme", label: t("payment.methodPayme"), icon: Smartphone },
  ];

  return (
    <section className="payment ns-dots">
      <Reveal className="payment-card">
        <h1 className="payment-title">{t("payment.title")}</h1>
        <p className="payment-sub">{t("payment.subtitle")}</p>

        {plan && (
          <div className="payment-plan">
            <span>{t("payment.plan")}</span>
            <strong>
              {plan}
              {price ? ` · ${price}` : ""}
            </strong>
          </div>
        )}

        <div className="payment-methods" role="tablist">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                role="tab"
                aria-selected={method === m.id}
                className={`payment-method ${method === m.id ? "is-active" : ""}`}
                onClick={() => setMethod(m.id)}
              >
                <Icon size={18} aria-hidden />
                {m.label}
              </button>
            );
          })}
        </div>

        <div className="payment-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={method}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {method === "card" && (
                <form className="payment-form" onSubmit={(e) => e.preventDefault()}>
                  <input className="ns-field" placeholder={t("payment.cardNumber")} inputMode="numeric" />
                  <input className="ns-field" placeholder={t("payment.cardHolder")} />
                  <div className="payment-row">
                    <input className="ns-field" placeholder={t("payment.expiry")} />
                    <input className="ns-field" placeholder={t("payment.cvc")} inputMode="numeric" />
                  </div>
                  <button className="ns-btn ns-btn-primary ns-btn-lg payment-pay">
                    {t("payment.pay")}
                  </button>
                </form>
              )}

              {method === "uzcard" && (
                <div className="payment-provider">
                  <p>{t("payment.redirectUzcard")}</p>
                  <button className="ns-btn ns-btn-primary ns-btn-lg payment-pay">
                    {t("payment.goToPayment")}
                  </button>
                </div>
              )}

              {method === "payme" && (
                <div className="payment-provider">
                  <p>{t("payment.redirectPayme")}</p>
                  <button className="ns-btn ns-btn-primary ns-btn-lg payment-pay">
                    {t("payment.payViaPayme")}
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="payment-secure">
          <ShieldCheck size={15} aria-hidden /> {t("payment.secure")}
        </p>
      </Reveal>
    </section>
  );
}
