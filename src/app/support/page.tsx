import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";
import ContactForm from "@/components/ui/ContactForm";
import { APP_STORE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description: "Get help with Drift and find answers to common questions.",
};

const categories = [
  {
    title: "Getting Started",
    icon: "spark",
    items: [
      {
        question: "How do I download Drift?",
        answer:
          "Drift is available now on the iOS App Store. Download it from the App Store and create your account inside the app.",
      },
      {
        question: "Do I need an account?",
        answer:
          "Yes — you create an account in the app to track tasks and earned time. Account setup happens entirely inside Drift.",
      },
    ],
  },
  {
    title: "App Blocking & Access",
    icon: "shield",
    items: [
      {
        question: "Can I change which apps are blocked?",
        answer:
          "Yes. Manage your shielded apps anytime in Drift's settings. Removing an app takes effect once your current session rules allow it.",
      },
      {
        question: "What happens if I force-close Drift?",
        answer:
          "Blocking is enforced through iOS Screen Time at the system level, so force-closing the app won't bypass the shield.",
      },
    ],
  },
  {
    title: "Tasks & Verification",
    icon: "check",
    items: [
      {
        question: "What if the AI rejects my submission?",
        answer:
          "AI makes mistakes. If you believe a task was completed correctly, appeal in the app or email support — we review appeals manually.",
      },
      {
        question: "Can I create custom tasks?",
        answer:
          "Yes. Build your own tasks around your goals, or pull from Drift's suggested task library.",
      },
    ],
  },
  {
    title: "Account & Login",
    icon: "user",
    items: [
      {
        question: "How do I reset my password?",
        answer:
          "Use the 'Forgot password' option on the app's login screen. You'll get an email with a reset link.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Account deletion is handled inside the Drift app through Settings. This website does not manage accounts.",
      },
    ],
  },
  {
    title: "Privacy & Data",
    icon: "lock",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard encryption in transit and at rest. See our Privacy Policy for the full picture.",
      },
      {
        question: "Can I download my data?",
        answer:
          "Yes. Request a copy in the app under Privacy & Data and we'll provide it within 30 days.",
      },
    ],
  },
  {
    title: "General",
    icon: "info",
    items: [
      {
        question: "Is Drift free?",
        answer:
          "Yes. Drift is free right now, and every feature is included — blocking, earned time, routines, blocked hours, and deeper insights.",
      },
      {
        question: "Does Drift work on Android?",
        answer:
          "Drift is iOS-first today (it relies on iOS Screen Time). Android support is on the roadmap.",
      },
    ],
  },
];

const CategoryIcon = ({ name }: { name: string }) => {
  const c = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<string, React.ReactNode> = {
    spark: <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />,
    shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3ZM9 12l2 2 4-4" />,
    check: <path d="M5 12l4 4L19 6" />,
    user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0" />,
    lock: <path d="M6 11V8a6 6 0 0 1 12 0v3M5 11h14v9H5z" />,
    info: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 11v5M12 8h.01" />,
  };
  return <svg {...c}>{paths[name]}</svg>;
};

const SupportPage = () => {
  return (
    <div className="bg-paper-warm">
      <header className="bg-paper-cream border-b border-line">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-12 text-center">
          <Kicker className="justify-center">Support</Kicker>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-ink-deep">
            How can we help?
          </h1>
          <p className="mt-4 text-lg text-ink-mid max-w-xl mx-auto leading-relaxed">
            Browse common questions below, or reach out and we&apos;ll get back
            to you.
          </p>
          <p className="mt-6 inline-block rounded-full bg-paper-sand border border-line px-4 py-2 text-sm text-ink-mid">
            <strong className="text-ink-deep font-medium">Note:</strong> account
            settings and deletion are handled inside the Drift app.
          </p>
          <div className="mt-7">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-btn bg-cta-bg px-6 py-3 text-[15px] font-medium text-cta-text shadow-soft transition-all hover:-translate-y-[1px] hover:bg-cta-bg-hi active:scale-[0.98]"
            >
              Download Drift
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-card bg-paper-card border border-line shadow-soft p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="grid place-items-center h-10 w-10 rounded-[12px] bg-earn-sage-lo text-earn-sage">
                  <CategoryIcon name={cat.icon} />
                </span>
                <h2 className="font-display text-xl text-ink-deep">
                  {cat.title}
                </h2>
              </div>
              <div className="mt-1">
                {cat.items.map((item) => (
                  <FAQItem key={item.question} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* contact band */}
        <div className="mt-16 grid md:grid-cols-[1fr_1.1fr] gap-8 items-center rounded-card bg-paper-cream border border-line p-7 sm:p-10">
          <div>
            <Kicker>Still stuck?</Kicker>
            <h2 className="mt-4 font-display text-3xl text-ink-deep">
              Talk to a human.
            </h2>
            <p className="mt-3 text-ink-mid leading-relaxed">
              Email us at{" "}
              <a
                href="mailto:driftappcontact@gmail.com"
                className="text-earn-deep font-medium hover:text-earn-deep-hi"
              >
                driftappcontact@gmail.com
              </a>{" "}
              or use the form. You can also visit the{" "}
              <Link
                href="/contact"
                className="text-earn-deep font-medium hover:text-earn-deep-hi"
              >
                contact page
              </Link>
              .
            </p>
          </div>
          <div className="rounded-card bg-paper-card border border-line shadow-soft p-6 sm:p-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
