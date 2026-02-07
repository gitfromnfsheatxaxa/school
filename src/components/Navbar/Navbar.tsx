"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // текущий путь

  const links = [
    { href: "/", label: "Главная" },
    { href: "/courses", label: "Курсы" },
    { href: "/pricing", label: "Цены" }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <Link href="/" className="logo">
          <div className="logo-icon">N</div>
          <h2>NeuroSchool</h2>
        </Link>

        {/* Ссылки для десктопа */}
        <nav className="nav-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Кнопки для десктопа */}
        <div className="nav-buttons">
          <Link href="/login" className="btn-login">Войти</Link>
          <Link href="/register" className="btn-signup">Регистрация</Link>
        </div>

        {/* Кнопка гамбургера для мобильных */}
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="mobile-menu">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="btn-login" onClick={() => setMobileOpen(false)}>Вход</Link>
          <Link href="/signup" className="btn-signup" onClick={() => setMobileOpen(false)}>Регистрация</Link>
        </div>
      )}
    </header>
  );
}
