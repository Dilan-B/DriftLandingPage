"use client";

import { useEffect, useRef } from "react";
import "./TiltCard.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** corner radius (px) - match the wrapped card */
  radius?: number;
  /** behind-glow color */
  glowColor?: string;
  /** max tilt in degrees */
  maxTilt?: number;
  /** visible resting glow/sheen for hero-level objects */
  featured?: boolean;
}

/**
 * Wraps an important card with tactile 3D cursor tilt, a tracking sheen,
 * and a soft glow behind it. Markup is identical on server and client.
 */
const TiltCard = ({
  children,
  className = "",
  radius = 18,
  glowColor = "rgba(127, 190, 150, 0.5)",
  maxTilt = 9,
  featured = false,
}: TiltCardProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    if (!featured && window.matchMedia("(max-width: 768px)").matches) return;

    const restGlow = featured ? 0.6 : 0;
    const cur = { rx: 0, ry: 0, mx: 58, my: 34, a: restGlow };
    const tgt = { rx: 0, ry: 0, mx: 58, my: 34, a: restGlow };
    let raf = 0;
    let running = false;

    const apply = () => {
      wrap.style.setProperty("--rx", `${cur.rx.toFixed(2)}deg`);
      wrap.style.setProperty("--ry", `${cur.ry.toFixed(2)}deg`);
      wrap.style.setProperty("--mx", `${cur.mx.toFixed(1)}%`);
      wrap.style.setProperty("--my", `${cur.my.toFixed(1)}%`);
      wrap.style.setProperty("--glow", cur.a.toFixed(3));
    };

    const tick = () => {
      const k = 0.18;
      cur.rx += (tgt.rx - cur.rx) * k;
      cur.ry += (tgt.ry - cur.ry) * k;
      cur.mx += (tgt.mx - cur.mx) * k;
      cur.my += (tgt.my - cur.my) * k;
      cur.a += (tgt.a - cur.a) * k;
      apply();

      const settled =
        Math.abs(tgt.rx - cur.rx) < 0.02 &&
        Math.abs(tgt.ry - cur.ry) < 0.02 &&
        Math.abs(tgt.a - cur.a) < 0.01;

      if (settled) {
        running = false;
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;

      tgt.ry = ((px - 50) / 50) * maxTilt;
      tgt.rx = -((py - 50) / 50) * maxTilt;
      tgt.mx = px;
      tgt.my = py;
      tgt.a = 1;
      start();
    };

    const onEnter = () => {
      tgt.a = 1;
      start();
    };

    const onLeave = () => {
      tgt.rx = 0;
      tgt.ry = 0;
      tgt.mx = 58;
      tgt.my = 34;
      tgt.a = restGlow;
      start();
    };

    apply();
    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, [featured, maxTilt]);

  const styleVars = {
    "--tilt-radius": `${radius}px`,
    "--tilt-glow-color": glowColor,
  } as React.CSSProperties;

  return (
    <div
      ref={wrapRef}
      className={`tilt-wrap ${featured ? "tilt-wrap-featured" : ""} ${className}`.trim()}
      style={styleVars}
    >
      <div className="tilt-glow" />
      <div ref={cardRef} className="tilt-card">
        {children}
        <div className="tilt-sheen" />
      </div>
    </div>
  );
};

export default TiltCard;
