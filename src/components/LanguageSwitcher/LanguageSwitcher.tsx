"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LANGS } from "@/i18n/config";
import { useTranslation } from "@/i18n/provider";
import { AnimatePresence, motion } from "@/components/motion/Motion";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`lang ${dark ? "lang--dark" : ""}`} ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={16} aria-hidden />
        <span>{current.short}</span>
        <ChevronDown
          size={14}
          aria-hidden
          style={{
            transition: "transform .2s ease",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="lang-menu"
            role="listbox"
            aria-label={t("nav.language")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {LANGS.map((l) => (
              <li key={l.code} role="option" aria-selected={l.code === lang}>
                <button
                  type="button"
                  className={`lang-item ${l.code === lang ? "is-active" : ""}`}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                >
                  <span className="lang-flag" aria-hidden>
                    {l.flag}
                  </span>
                  <span className="lang-label">{l.label}</span>
                  {l.code === lang && <Check size={15} aria-hidden />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
