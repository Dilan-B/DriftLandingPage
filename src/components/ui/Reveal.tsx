"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in seconds */
  delay?: number;
  y?: number;
}

/**
 * Subtle fade-up on scroll into view. Reusable across card grids.
 * Respects reduced-motion via framer-motion's reduced-motion handling.
 */
const Reveal = ({ children, className, delay = 0, y = 18 }: RevealProps) => (
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

export default Reveal;
