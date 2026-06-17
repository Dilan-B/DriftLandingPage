"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  createElement,
  type ElementType,
} from "react";

type Snapshot = Record<string, string | number>;

// Cast once to a simple element type so JSX doesn't expand motion's
// (very large) prop union at each call site.
const MotionSpan = motion.span as ElementType;

const NBSP = " ";

const buildKeyframes = (
  from: Snapshot,
  steps: Snapshot[]
): Record<string, (string | number)[]> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, (string | number)[]> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Snapshot;
  animationTo?: Snapshot[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  /** semantic tag for the container — defaults to <p> */
  as?: ElementType;
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  as = "p",
}: BlurTextProps) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Only apply the reduced-motion branch after mount so the server and first
  // client render match (avoids a hydration mismatch from useReducedMotion).
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in the viewport on mount (e.g. above-the-fold headlines),
    // reveal immediately instead of waiting on the observer.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);

    // Safety net: never leave text permanently hidden if the observer
    // fails to fire (e.g. some headless / background-tab contexts).
    const fallback = setTimeout(() => setInView(true), 1400);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<Snapshot>(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo<Snapshot[]>(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  // Reduced-motion: render the text plainly and fully visible, no animation.
  if (mounted && reduce) {
    return createElement(
      as,
      { className, style: { display: "flex", flexWrap: "wrap" } },
      text
    );
  }

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  const spans = elements.map((segment, index) => {
    const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

    const spanTransition: Transition = {
      duration: totalDuration,
      times,
      delay: (index * delay) / 1000,
      ease: easing,
    };

    // Pre-build props as one object so TS doesn't expand motion's prop
    // union inline (avoids the "union type too complex" error).
    const spanProps = {
      className: "inline-block will-change-[transform,filter,opacity]",
      initial: fromSnapshot as TargetAndTransition,
      animate: (inView ? animateKeyframes : fromSnapshot) as TargetAndTransition,
      transition: spanTransition,
      onAnimationComplete:
        index === elements.length - 1 ? onAnimationComplete : undefined,
    };

    return (
      <MotionSpan key={index} {...spanProps}>
        {segment === " " ? NBSP : segment}
        {animateBy === "words" && index < elements.length - 1 ? NBSP : null}
      </MotionSpan>
    );
  });

  return createElement(
    as,
    {
      ref,
      className,
      style: { display: "flex", flexWrap: "wrap" },
    },
    spans
  );
};

export default BlurText;
