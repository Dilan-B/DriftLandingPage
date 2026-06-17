"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honors the user's reduced-motion preference: when set, framer-motion
 * snaps elements to their final (visible) state instead of animating —
 * so reveal effects never leave content hidden.
 */
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
