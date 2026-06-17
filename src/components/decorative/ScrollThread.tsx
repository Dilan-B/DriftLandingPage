"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./ScrollThread.css";

// A meandering vine that weaves in and out across the page width.
// viewBox is 0 0 100 1200; preserveAspectRatio="none" stretches it to the
// full document height, while vector-effect keeps the stroke width uniform.
const PATH_D =
  "M50 0 C84 80 16 150 50 230 C84 310 14 380 48 460 C82 540 20 610 56 690 C90 770 16 840 46 920 C76 1000 28 1060 52 1130 C66 1175 44 1192 50 1200";

const ScrollThread = () => {
  const brightRef = useRef<SVGPathElement>(null);
  const lenRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const [docHeight, setDocHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tip, setTip] = useState({ x: 0, y: 0, show: false });

  useEffect(() => {
    setMounted(true);
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    const measure = () =>
      setDocHeight(document.documentElement.scrollHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // cache the path length whenever the page height changes
  useEffect(() => {
    if (brightRef.current) {
      lenRef.current = brightRef.current.getTotalLength();
    }
  }, [docHeight]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const path = brightRef.current;
    if (!path || reduced) return;
    const len = lenRef.current || path.getTotalLength();
    const clamped = Math.max(0, Math.min(1, p));
    const pt = path.getPointAtLength(clamped * len);
    const ctm = path.getScreenCTM();
    if (!ctm) return;
    // map the vine's local point to viewport pixels for the fixed tip
    const x = ctm.a * pt.x + ctm.c * pt.y + ctm.e;
    const y = ctm.b * pt.x + ctm.d * pt.y + ctm.f;
    setTip({ x, y, show: p > 0.012 && p < 0.985 });
  });

  if (!mounted) return null;

  return (
    <>
      <div
        className="scroll-thread"
        style={{ height: docHeight || undefined }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 1200" preserveAspectRatio="none">
          <defs>
            <filter
              id="thread-glow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feGaussianBlur stdDeviation="2.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="thread-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--earn-sage)" />
              <stop offset="50%" stopColor="var(--earn-terra)" />
              <stop offset="100%" stopColor="var(--earn-sage)" />
            </linearGradient>
          </defs>

          {/* faint full-length track */}
          <path
            d={PATH_D}
            fill="none"
            stroke="var(--earn-sage)"
            strokeOpacity="0.14"
            strokeWidth="1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* bright vine drawn in sync with scroll */}
          <motion.path
            ref={brightRef}
            d={PATH_D}
            fill="none"
            stroke="url(#thread-stroke)"
            strokeWidth="2.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#thread-glow)"
            style={{ pathLength: reduced ? 1 : scrollYProgress }}
          />
        </svg>
      </div>

      {!reduced && (
        <div
          className="scroll-thread-tip"
          style={{
            transform: `translate(${tip.x}px, ${tip.y}px)`,
            opacity: tip.show ? 1 : 0,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default ScrollThread;
