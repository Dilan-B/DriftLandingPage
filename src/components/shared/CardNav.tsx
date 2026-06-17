"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ThemeToggle from "@/components/shared/ThemeToggle";
import "./CardNav.css";

interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
}
interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

const ITEMS: NavItem[] = [
  {
    label: "Explore",
    bgColor: "#1F3A2A",
    textColor: "#FAF6EE",
    links: [
      { label: "How it works", href: "/#how", ariaLabel: "How Drift works" },
      { label: "Features", href: "/#features", ariaLabel: "Drift features" },
      { label: "Growth ladder", href: "/#ladder", ariaLabel: "The growth ladder" },
      { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
    ],
  },
  {
    label: "Help",
    bgColor: "#25462F",
    textColor: "#FAF6EE",
    links: [
      { label: "Support & FAQ", href: "/support", ariaLabel: "Support" },
      { label: "Contact", href: "/contact", ariaLabel: "Contact us" },
    ],
  },
  {
    label: "Legal",
    bgColor: "#2A4D38",
    textColor: "#FAF6EE",
    links: [
      { label: "Privacy", href: "/privacy", ariaLabel: "Privacy policy" },
      { label: "Terms", href: "/terms", ariaLabel: "Terms of service" },
      { label: "Community", href: "/community-guidelines", ariaLabel: "Community guidelines" },
      { label: "Safety & AI", href: "/safety", ariaLabel: "Safety and AI" },
    ],
  },
];

const ArrowIcon = () => (
  <svg className="nav-card-link-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M5 11L11 5M11 5H6M11 5V10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardNav = ({ ease = "power3.out" }: { ease?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 240;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector<HTMLElement>(".card-nav-content");
      if (contentEl) {
        const prev = {
          v: contentEl.style.visibility,
          p: contentEl.style.pointerEvents,
          pos: contentEl.style.position,
          h: contentEl.style.height,
        };
        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";
        void contentEl.offsetHeight;
        const total = 60 + contentEl.scrollHeight + 16;
        contentEl.style.visibility = prev.v;
        contentEl.style.pointerEvents = prev.p;
        contentEl.style.position = prev.pos;
        contentEl.style.height = prev.h;
        return total;
      }
    }
    return 240;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.07 },
      "-=0.1"
    );
    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease]);

  // hide on scroll-down, reveal on scroll-up (only when collapsed)
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (!isExpanded) {
        if (y > lastY && y > 90) setHidden(true);
        else if (y < lastY) setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsExpanded(true);
      tl.play(0);
    } else {
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container ${hidden ? "card-nav-container--hidden" : ""}`}
    >
      <nav ref={navRef} className={`card-nav ${isExpanded ? "open" : ""}`}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isExpanded ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
            style={{ color: "var(--ink-deep)" }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <Link href="/" className="card-nav-logo" aria-label="Drift home">
            <span className="card-nav-wordmark">Drift</span>
            <span className="card-nav-dot" />
          </Link>

          <div className="card-nav-right">
            <ThemeToggle />
            <Link href="/#waitlist" className="card-nav-cta">
              Get early access
            </Link>
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links.map((lnk) => (
                  <Link
                    key={lnk.label}
                    href={lnk.href}
                    className="nav-card-link"
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                      if (isExpanded) toggleMenu();
                    }}
                  >
                    <ArrowIcon />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
