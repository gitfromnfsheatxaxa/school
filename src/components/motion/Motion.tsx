"use client";

/**
 * Reusable Framer Motion (Motion) primitives.
 * - Uses the lightweight `m` component + LazyMotion to keep the bundle small.
 * - Respects prefers-reduced-motion (via the app-level MotionConfig + guards).
 * - Animates only transform/opacity (GPU-composited) for performance.
 */
import {
  AnimatePresence,
  m,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ComponentProps, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Scroll / mount reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12%" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/* ---------- Staggered list ---------- */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <m.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & ComponentProps<typeof m.div>) {
  return (
    <m.div className={className} variants={staggerItem} {...rest}>
      {children}
    </m.div>
  );
}

/* ---------- Re-exports for direct use in client components ---------- */
export { m as motion, AnimatePresence, useReducedMotion };
export type { Variants };
