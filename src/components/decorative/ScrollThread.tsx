"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./ScrollThread.css";

interface Pt {
  x: number;
  y: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

function smoothPath(pts: Pt[]): string {
  if (pts.length < 2) return "";
  const f = (n: number) => n.toFixed(1);
  let d = `M ${f(pts[0].x)} ${f(pts[0].y)}`;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2.x)} ${f(p2.y)}`;
  }

  return d;
}

const ScrollThread = () => {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const track = trackRef.current;
    const draw = drawRef.current;
    const ball = ballRef.current;
    if (!wrap || !svg || !track || !draw || !ball) return;

    let pathLength = 0;
    let currentDistance = 0;
    let targetDistance = 0;
    let rafId = 0;
    let resizeQueued = false;
    let lastFrame = 0;

    const render = (distance: number) => {
      const safeDistance = clamp(distance, 0, pathLength);
      draw.style.strokeDashoffset = `${pathLength - safeDistance}`;
      const pt = draw.getPointAtLength(safeDistance);
      ball.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      ball.style.opacity = "1";
    };

    const findDistanceForY = (desiredY: number) => {
      let lo = 0;
      let hi = pathLength;

      for (let i = 0; i < 18; i++) {
        const mid = (lo + hi) / 2;
        const point = draw.getPointAtLength(mid);
        if (point.y < desiredY) lo = mid;
        else hi = mid;
      }

      return (lo + hi) / 2;
    };

    const computeTargetDistance = () => {
      const viewportAnchor = clamp(window.innerHeight * 0.28, 150, 260);
      const footer = document.querySelector("footer");
      const footerTop = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : document.documentElement.scrollHeight;
      const endY = Math.max(260, footerTop - 110);
      const desiredY = clamp(window.scrollY + viewportAnchor, viewportAnchor, endY);

      return findDistanceForY(desiredY);
    };

    const animate = (time = performance.now()) => {
      const dt = lastFrame ? Math.min(0.05, (time - lastFrame) / 1000) : 0.016;
      lastFrame = time;

      const stiffness = 16;
      const ease = 1 - Math.exp(-stiffness * dt);
      currentDistance += (targetDistance - currentDistance) * ease;
      render(currentDistance);

      if (Math.abs(targetDistance - currentDistance) > 0.35) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      currentDistance = targetDistance;
      render(currentDistance);
      rafId = 0;
      lastFrame = 0;
    };

    const retarget = (snap = false) => {
      if (!pathLength) return;
      targetDistance = computeTargetDistance();

      if (snap) {
        currentDistance = targetDistance;
        render(currentDistance);
        return;
      }

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const build = () => {
      const width = Math.max(1, wrap.clientWidth || window.innerWidth);
      const footer = document.querySelector("footer");
      const footerTop = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : document.documentElement.scrollHeight;
      const height = Math.max(window.innerHeight + 1, footerTop - 84);
      const isNarrow = width < 768;
      const leftX = width * 0.09;
      const rightX = width * 0.91;
      const mobileRailX = Math.min(width - 18, Math.max(18, width * 0.94));

      const pts: Pt[] = [
        { x: isNarrow ? mobileRailX : width * 0.5, y: 0 },
        {
          x: isNarrow ? mobileRailX : width * 0.55,
          y: clamp(window.innerHeight * 0.18, 100, 180),
        },
      ];
      const main = document.querySelector("main");

      if (main) {
        const heads = Array.from(main.querySelectorAll("h1, h2"));
        heads.forEach((el, i) => {
          const rect = el.getBoundingClientRect();
          if (rect.height === 0) return;

          const y = rect.top + window.scrollY + rect.height / 2;
          if (y > height - 120) return;

          if (isNarrow) {
            pts.push({ x: mobileRailX, y });
            return;
          }

          const clearance = 56;
          const wantsRight = i % 2 === 0;
          const rightClears = rightX > rect.right + clearance;
          const leftClears = leftX < rect.left - clearance;
          let x = wantsRight ? rightX : leftX;

          if (wantsRight && !rightClears && leftClears) x = leftX;
          if (!wantsRight && !leftClears && rightClears) x = rightX;
          pts.push({ x, y });
        });
      }

      pts.push({
        x: isNarrow ? mobileRailX : width * 0.5,
        y: Math.max(height - 80, 240),
      });

      const d = smoothPath(pts);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));
      wrap.style.height = `${height}px`;
      track.setAttribute("d", d);
      draw.setAttribute("d", d);

      pathLength = draw.getTotalLength();
      draw.style.strokeDasharray = `${pathLength}`;
      retarget(true);
    };

    const onScroll = () => retarget();
    const onWheel = () => requestAnimationFrame(() => retarget());
    const onResize = () => {
      if (resizeQueued) return;
      resizeQueued = true;
      requestAnimationFrame(() => {
        resizeQueued = false;
        build();
      });
    };

    build();
    const t1 = window.setTimeout(build, 400);
    const t2 = window.setTimeout(build, 1200);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", build);

    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", build);
      ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div ref={wrapRef} className="scroll-thread" aria-hidden="true">
      <svg ref={svgRef} preserveAspectRatio="none">
        <defs>
          <linearGradient id="thread-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--earn-sage)" />
            <stop offset="50%" stopColor="var(--earn-terra)" />
            <stop offset="100%" stopColor="var(--earn-sage)" />
          </linearGradient>
          <radialGradient id="thread-ball-grad">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="34%" stopColor="var(--earn-terra)" />
            <stop offset="100%" stopColor="rgba(45,122,82,0)" />
          </radialGradient>
        </defs>
        <path ref={trackRef} className="thread-track" fill="none" />
        <path ref={drawRef} className="thread-draw" fill="none" />
        <g ref={ballRef} className="scroll-thread-ball">
          <circle className="thread-ball-halo" r="15" fill="url(#thread-ball-grad)" />
          <circle className="thread-ball-core" r="4.5" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

export default ScrollThread;
