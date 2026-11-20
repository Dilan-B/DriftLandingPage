import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/ui/Kicker";
import FAQItem from "@/components/ui/FAQItem";
import JsonLd from "@/components/seo/JsonLd";
import { APP_STORE_URL } from "@/lib/links";
import { pageMetadata } from "@/lib/pageMetadata";
import { canonical } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";

// Every claim here matches how the Family plan works in the app (parent
// assigns a task with a minute reward → kid taps Done → parent approves →
// minutes are added). Don't add features the app doesn't enforce, such as
// "always allowed" apps or app requests.

const PATH = "/family";

export const metadata: Metadata = pageMetadata({
  title: "Screen Time App for Kids: Chores That Earn Screen Time",
  description:
    "Drift's Family plan lets kids earn screen time by finishing chores, reading or homework. You set the task and the minutes, they tap Done, you approve. For iPhone.",
  path: PATH,
});

const steps = [
  {
    title: "Set up your family",
    text: "Create a parent account in Drift and choose the Family plan. You get a private 6-character family code.",
  },
  {
    title: "Add your kid's iPhone",
    text: "On their iPhone, install Drift, tap “I'm a kid”, and enter their first name and your code. No email or password needed.",
  },
  {
    title: "Give them a task",
    text: "Name the task and choose how many minutes of screen time it's worth. It shows up on their phone.",
  },
  {
    title: "Approve it",
    text: "When they're done, they tap Done. You tap Approve and the minutes are theirs, or Not yet to send it back.",
  },
];

const parentView = [
  "Your family code, ready to share",
  "Tasks waiting for your OK",
  "Minutes each kid has left",
  "A history of approved tasks",
];

const kidView = [
  "How much screen time they have left",
  "The tasks you've given them and what each is worth",
  "Which tasks are waiting for you or sent back",
  "Their own history of finished tasks",
];

const ideas = [
  "Make your bed",
  "Empty the dishwasher",
  "Read for 20 minutes",
  "Finish homework",
  "Practice an instrument",
  "Tidy your room",
  "Walk the dog",
  "Play outside for an hour",
];

const prices = [
  { kids: "1 kid", price: "$7.99" },
  { kids: "2 kids", price: "$10.99" },
  { kids: "3 kids", price: "$13.99" },
  { kids: "4 kids", price: "$16.99" },
  { kids: "5 kids", price: "$19.99" },
];

const faqs = [
  {
    question: "What ages is the Family plan for?",
    answer:
      "It's built for younger kids, roughly 11 and under, who have their own iPhone. The parent account belongs to the adult who sets tasks and approves them.",
  },
  {
    question: "Does each kid need their own iPhone?",
    answer:
      "Yes. Drift runs on iPhone, and each kid joins your family from their own phone using your family code.",
  },
  {
    question: "Does my kid need an email address?",
    answer:
      "No. Kids join with just their first name and your family code. They never see a payment screen.",
  },
  {
    question: "How does my kid prove they finished a task?",
    answer:
      "They tap Done and you decide. There are no photos or AI checks for kids; you're the judge. If it isn't done yet, tap Not yet and it goes back on their list.",
  },
  {
    question: "How much screen time does a task earn?",
    answer:
      "You choose, anywhere from 1 to 600 minutes per task. The minutes are added only when you approve.",
  },
  {
    question: "What happens when my kid runs out of time?",
    answer:
      "Drift blocks apps on their iPhone until you approve another task. Their time only counts down while they're using blocked apps. If you want to choose exactly which apps are blocked, set a parent PIN and enter it on their phone.",
  },
  {
    question: "Is my phone blocked too?",
    answer:
      "No. The parent account is for managing your family. If you want Drift for your own phone, that's the Personal plan.",
  },
  {
    question: "How much does the Family plan cost?",
    answer:
      "$7.99 a month for one kid, plus $3 a month for each additional kid, up to $19.99 a month for five. There's no free tier.",
  },
  {
    question: "What information does Drift collect about my child?",
    answer:
      "Very little: the first name they join with, the tasks you assign, and their screen-time balance. No email, photos, location or contacts, and no AI. You can ask us to delete it at any time. Our privacy policy has the details.",
  },
];

const FamilyPage = () => (
  <div className="bg-paper-warm">
    <JsonLd
      data={[
        breadcrumbSchema([{ name: "Family plan", url: canonical(PATH) }]),
        faqSchema(faqs),
      ]}
    />

    <header className="bg-paper-cream border-b border-line">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-14 text-center">
        <Kicker className="justify-center">Family plan</Kicker>
        <h1 className="mt-5 font-display text-4xl sm:text-6xl leading-tight text-ink-deep max-w-3xl mx-auto">
          Screen time your kids earn, not argue about.
        </h1>
        <p className="mt-5 text-lg text-ink-mid max-w-2xl mx-auto leading-relaxed">
          You give them a task and decide what it&apos;s worth. They do it and
          tap Done. You approve, and their apps unlock. No timers to negotiate,
          just a deal everyone understands.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn bg-cta-bg text-cta-text font-medium px-7 py-3.5 text-[15px] hover:-translate-y-[1px] active:scale-[0.98] transition-all"
          >
            Download Drift for iPhone
          </a>
          <a
            href="#pricing"
            className="rounded-btn border border-line px-7 py-3.5 text-[15px] text-ink-deep hover:bg-paper-sand transition-colors"
          >
            See pricing
          </a>
        </div>
        <p className="mt-4 text-sm text-ink-faint">
          From $7.99/month. Each kid needs their own iPhone.
        </p>
      </div>
    </header>

    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 space-y-24">
      {/* how it works */}
      <section aria-labelledby="how">
        <Kicker>How it works</Kicker>
        <h2 id="how" className="mt-4 font-display text-3xl text-ink-deep">
          Four steps, then it runs itself
        </h2>
        <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="h-full rounded-card bg-paper-card border border-line shadow-soft p-6"
            >
                <span className="font-display text-3xl text-earn-deep">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-medium text-ink-deep">{s.title}</h3>
                <p className="mt-2 text-ink-mid leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* two views */}
      <section aria-labelledby="views">
        <Kicker>Two phones, one deal</Kicker>
        <h2 id="views" className="mt-4 font-display text-3xl text-ink-deep">
          What you see, and what they see
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            { title: "On your phone", items: parentView },
            { title: "On their phone", items: kidView },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-card bg-paper-sand border border-line p-7"
            >
              <h3 className="font-display text-xl text-ink-deep">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-mid">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-earn-terra"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-ink-mid leading-relaxed max-w-3xl">
          When their time runs out, Drift blocks apps on their iPhone until you
          approve another task. Their minutes only count down while they&apos;re
          using blocked apps. Want to choose exactly which apps? Set a parent
          PIN, enter it on their phone, and pick them yourself.
        </p>
      </section>

      {/* ideas */}
      <section aria-labelledby="ideas">
        <Kicker>Ideas</Kicker>
        <h2 id="ideas" className="mt-4 font-display text-3xl text-ink-deep">
          Things kids can earn screen time for
        </h2>
        <p className="mt-3 text-ink-mid max-w-2xl leading-relaxed">
          Anything you&apos;d like them to do first. You decide what each one is
          worth, from 1 minute up.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {ideas.map((idea) => (
            <li
              key={idea}
              className="rounded-full border border-line bg-paper-card px-4 py-2 text-[15px] text-ink-deep"
            >
              {idea}
            </li>
          ))}
        </ul>
      </section>

      {/* pricing */}
      <section id="pricing" aria-labelledby="pricing-h" className="scroll-mt-24">
        <Kicker>Pricing</Kicker>
        <h2 id="pricing-h" className="mt-4 font-display text-3xl text-ink-deep">
          One plan for the whole family
        </h2>
        <p className="mt-3 text-ink-mid max-w-2xl leading-relaxed">
          Pick how many kids when you subscribe. You pay; your kids never see a
          payment screen.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {prices.map((p) => (
            <div
              key={p.kids}
              className="rounded-card bg-paper-card border border-line p-5 text-center"
            >
              <p className="font-kicker uppercase text-[10px] tracking-[0.14em] text-ink-faint">
                {p.kids}
              </p>
              <p className="mt-2 font-display text-3xl text-ink-deep">
                {p.price}
              </p>
              <p className="text-sm text-ink-mid">per month</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-faint">
          Prices in US dollars. Billed through the App Store, where you can
          manage or cancel your subscription.
        </p>
      </section>

      {/* why not screen time limits */}
      <section aria-labelledby="why" className="max-w-3xl">
        <Kicker>Why earning works</Kicker>
        <h2 id="why" className="mt-4 font-display text-3xl text-ink-deep">
          Why not just set a time limit?
        </h2>
        <div className="mt-5 space-y-4 text-[17px] text-ink-mid leading-relaxed">
          <p>
            Time limits are a good start, and Apple&apos;s Screen Time is free.
            But a limit only says &ldquo;stop&rdquo;, so every limit turns into a
            negotiation: five more minutes, just this level, everyone else is
            still online.
          </p>
          <p>
            Earning changes the conversation. Screen time comes from finishing
            something, so the answer to &ldquo;can I have more?&rdquo; is
            already on their list. You set the tasks and the rewards, and you
            stay the one who says yes.
          </p>
          <p>
            Curious how Drift and Apple&apos;s tools compare?{" "}
            <Link
              href="/vs/apple-screen-time"
              className="text-earn-deep font-medium underline underline-offset-2 hover:text-earn-deep-hi"
            >
              Read our honest comparison
            </Link>
            .
          </p>
        </div>
      </section>

      {/* faq */}
      <section aria-labelledby="faq" className="max-w-3xl">
        <Kicker>Questions</Kicker>
        <h2 id="faq" className="mt-4 font-display text-3xl text-ink-deep">
          Family plan questions
        </h2>
        <div className="mt-6 rounded-card bg-paper-card border border-line px-6">
          {faqs.map((f) => (
            <FAQItem key={f.question} {...f} />
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-mid">
          See exactly what we collect about children in our{" "}
          <Link
            href="/privacy#family"
            className="text-earn-deep font-medium hover:text-earn-deep-hi"
          >
            privacy policy
          </Link>
          .
        </p>
      </section>

      {/* cta */}
      <section className="rounded-card bg-earn-deep text-cta-text p-8 sm:p-12 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">
          Make screen time something they earn.
        </h2>
        <p className="mt-3 text-cta-text/80">
          Set up your family in a few minutes.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-btn bg-cta-text text-earn-deep font-medium px-7 py-3.5 text-[15px] hover:-translate-y-[1px] active:scale-[0.98] transition-all"
        >
          Download Drift for iPhone
        </a>
      </section>
    </div>
  </div>
);

export default FamilyPage;
