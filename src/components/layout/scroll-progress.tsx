"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary shadow-[0_0_14px_rgba(196,122,55,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
