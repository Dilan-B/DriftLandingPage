"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in seconds */
  delay?: number;
  y?: number;
}

/**
 * Subtle fade-up on scroll into view. Reusable across card grids.
 * Reduced-motion users get the content plainly, always visible. The branch is
 * gated behind a mount flag so SSR and first client render match.
 */
const Reveal = ({ children, className, delay = 0, y = 18 }: RevealProps) => {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
