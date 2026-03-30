"use client";

import { motion, useReducedMotion } from "motion/react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24, visibility: "hidden" as const }}
      whileInView={{ opacity: 1, y: 0, visibility: "visible" as const }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98], visibility: { delay } }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
