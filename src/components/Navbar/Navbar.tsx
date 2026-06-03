"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/provider";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { AnimatePresence, motion } from "@/components/motion/Motion";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/courses", label: t("nav.courses") },
    { href: "/pricing", label: t("nav.pricing") },
  ];

  return (
    <header className="nav">
      <div className="nav-inner ns-container">
        <Link href="/" className="nav-logo" aria-label="NeuroSchool">
          <span className="nav-logo-mark" aria-hidden>
            N
          </span>
          <span className="nav-logo-text">
            Neuro<b>School</b>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <Link href="/login" className="ns-btn ns-btn-ghost nav-cta">
            {t("nav.signIn")}
          </Link>
          <Link href="/register" className="ns-btn ns-btn-primary nav-cta">
            {t("nav.signUp")}
          </Link>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ns-container nav-mobile-inner">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`nav-mobile-link ${
                    pathname === link.href ? "is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="nav-mobile-row">
                <LanguageSwitcher />
              </div>
              <Link href="/login" onClick={close} className="ns-btn ns-btn-ghost">
                {t("nav.signIn")}
              </Link>
              <Link href="/register" onClick={close} className="ns-btn ns-btn-primary">
                {t("nav.signUp")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
