import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Product",
      links: [
        { href: "/#how", label: "How it works" },
        { href: "/#features", label: "Features" },
        { href: "/#ladder", label: "Growth ladder" },
        { href: "/#pricing", label: "Pricing" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/community-guidelines", label: "Community Guidelines" },
        { href: "/safety", label: "Safety & AI" },
      ],
    },
    {
      title: "Help",
      links: [
        { href: "/support", label: "Support & FAQ" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  const social = [
    { href: "https://instagram.com/joindrift", label: "Instagram" },
    { href: "https://tiktok.com/@joindrift", label: "TikTok" },
  ];

  return (
    <footer className="mt-24 border-t border-line bg-paper-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-wordmark font-bold text-2xl tracking-tight text-ink-deep">
                Drift
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-earn-terra mt-2" />
            </div>
            <p className="text-ink-mid text-[15px] leading-relaxed max-w-xs">
              Earn your screen time. Gentle accountability that helps you grow,
              one real task at a time.
            </p>
            <div className="mt-5 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-mid hover:text-earn-deep transition-colors px-3 py-1.5 rounded-full border border-line hover:bg-paper-sand"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ink-mid hover:text-earn-deep transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-faint text-sm">
            © {year} Drift. All rights reserved.
          </p>
          <p className="text-ink-faint text-sm">
            iOS now · Android coming soon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
