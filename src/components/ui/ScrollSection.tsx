"use client";

import { motion } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a page section so it rises and fades into view as you scroll,
 * giving the page a continuous, seamless flow between sections.
 * Reduced-motion users get the final state instantly (via MotionConfig).
 */
const ScrollSection = ({ children, className }: ScrollSectionProps) => (
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

export default ScrollSection;
