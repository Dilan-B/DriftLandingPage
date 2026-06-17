import Kicker from "@/components/ui/Kicker";
import BlurText from "@/components/ui/BlurText";

interface LegalPageLayoutProps {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: React.ReactNode;
  sections: Array<{ id: string; title: string }>;
}

const LegalPageLayout = ({
  title,
  intro,
  lastUpdated,
  children,
  sections,
}: LegalPageLayoutProps) => {
  return (
    <div className="bg-paper-warm">
      {/* header band */}
      <header className="bg-paper-cream border-b border-line">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12">
          <Kicker>Legal</Kicker>
          <BlurText
            as="h1"
            text={title}
            animateBy="words"
            direction="top"
            delay={90}
            className="mt-5 font-display text-4xl sm:text-5xl leading-tight text-ink-deep"
          />
          {intro && (
            <p className="mt-4 text-lg text-ink-mid leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-earn-terra" />
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          {/* sidebar */}
          <nav className="hidden lg:block">
            <div className="sticky top-24">
              <p className="font-kicker uppercase text-[10px] tracking-[0.16em] text-ink-faint mb-4">
                On this page
              </p>
              <ul className="space-y-1 border-l border-line">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block -ml-px border-l border-transparent pl-4 py-1.5 text-sm text-ink-mid hover:text-earn-deep hover:border-earn-sage transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* content */}
          <article className="legal-content max-w-2xl">{children}</article>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
