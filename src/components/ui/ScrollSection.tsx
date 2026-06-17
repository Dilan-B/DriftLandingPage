"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a page section so it rises and fades into view as you scroll.
 * Reduced-motion users get the content plainly, always visible. The branch is
 * gated behind a mount flag so SSR and first client render match.
 */
const ScrollSection = ({ children, className }: ScrollSectionProps) => {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
