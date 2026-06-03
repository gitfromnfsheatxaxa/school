"use client";

import { LazyMotion, domAnimation, MotionConfig, m, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { I18nProvider } from "@/i18n/provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const BARE_ROUTES = ["/login", "/register"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.includes(pathname);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <I18nProvider>
          {!bare && <Navbar />}
          <AnimatePresence mode="wait" initial={false}>
            <m.main
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ minHeight: bare ? "100vh" : "60vh" }}
            >
              {children}
            </m.main>
          </AnimatePresence>
          {!bare && <Footer />}
        </I18nProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
