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
      initial={shouldReduceMotion ? false : { y: 24, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
