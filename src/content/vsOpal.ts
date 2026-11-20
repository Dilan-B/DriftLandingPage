import type { Article } from "./types";

// Opal facts checked against opalapp.com/pricing and opalapp.com on
// 2026-11-20. Re-check prices and plan limits before changing `updated`.

export const vsOpal: Article = {
  path: "/vs/opal",
  section: "Compare",
  title: "Opal Alternative: Drift vs Opal Compared",
  description:
    "Looking for an Opal alternative? An honest comparison of Drift and Opal: how each blocks apps, what they cost, and which one fits how you actually use your phone.",
  kicker: "Compare",
  h1: "Drift vs Opal",
  intro:
    "Opal and Drift both block distracting apps using Apple's Screen Time system. Opal is built around rules and focus sessions you set. Drift is built around earning: apps unlock after you've finished something. Here's an honest look at both.",
  published: "2026-11-20",
  updated: "2026-11-20",
  sections: [
    {
      heading: "The short answer",
      id: "short-answer",
      blocks: [
        {
          type: "p",
          text: "Choose **Opal** if you want polished focus sessions and schedules across your iPhone, Android and Mac, plus a free plan to start. Choose **Drift** if you want your screen time tied to getting real things done, at a lower price, on iPhone.",
        },
      ],
    },
    {
      heading: "Side by side",
      id: "side-by-side",
      blocks: [
        {
          type: "table",
          caption: "Opal compared with Drift",
          columns: ["", "Opal", "Drift"],
          rows: [
            [
              "Core idea",
              "Block apps with rules, schedules and focus sessions",
              "Earn screen time by finishing tasks",
            ],
            [
              "How blocked apps unlock",
              "When a session, schedule or limit ends",
              "When you've earned time, which drains while you use them",
            ],
            ["Free plan", "Yes, up to 3 rules", "No"],
            [
              "Paid price",
              "$19.99/month, $99.99/year, or $399 lifetime",
              "$4.99/month or $29.99/year",
            ],
            ["Strictest setting", "Hard Mode (can't turn Opal off)", "No ignore button; unlock only by earning"],
            ["Platforms", "iPhone, Android and Mac", "iPhone"],
            ["Family plan", "Not listed on its pricing page", "Yes, for up to 5 kids"],
          ],
        },
        {
          type: "note",
          text: "Opal's plans and prices are from its pricing page as of November 2026 and may vary by region. Check their site for current details.",
        },
      ],
    },
    {
      heading: "How Opal works",
      id: "how-opal-works",
      blocks: [
        {
          type: "p",
          text: "Opal lets you create **rules** that block apps on a schedule, after a time limit, or after a number of opens. You can also start a **focus session**: pick what to block and for how long, and stay locked in until the timer ends. Its **Opal Score** gives you a daily summary, and on Pro you get history.",
        },
        {
          type: "p",
          text: "The free plan includes three rules. Pro adds unlimited rules, **Hard Mode** (you can't turn Opal off during a session), an **Allow Only** mode that blocks everything except the apps you choose, and more timers and soundscapes.",
        },
      ],
    },
    {
      heading: "How Drift works",
      id: "how-drift-works",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Pick the apps you overuse",
              text: "Drift uses Apple's Screen Time system to block them.",
            },
            {
              title: "Finish a task",
              text: "A task earns about half its length in screen time, up to 60 minutes per task. A 30-minute workout earns 15 minutes.",
            },
            {
              title: "Spend what you earned",
              text: "Your balance only goes down while you use blocked apps. At zero, they lock again.",
            },
            {
              title: "Earn more by doing more",
              text: "There's no ignore button. You can also earn time with a Drift In focus session.",
            },
          ],
        },
        {
          type: "p",
          text: "Drift also has **blocked hours** (like 10 PM to 7 AM, when blocked apps stay locked regardless of your balance), recurring tasks, and a Family plan where parents set tasks and approve them on their kids' iPhones. See [how the Family plan works](/family).",
        },
      ],
    },
    {
      heading: "Where Opal is better",
      id: "where-opal-wins",
      blocks: [
        {
          type: "list",
          items: [
            "**It works across devices.** Opal runs on iPhone, Android and Mac. Drift is iPhone only.",
            "**There's a free plan.** You can try Opal's core blocking with up to three rules without paying. Drift has no free tier.",
            "**Hard Mode is very strict.** If you want a lock you genuinely can't switch off mid-session, Opal Pro offers that.",
            "**Allow Only mode** makes it easy to block everything except a short list of apps.",
          ],
        },
      ],
    },
    {
      heading: "Where Drift is better",
      id: "where-drift-wins",
      blocks: [
        {
          type: "list",
          items: [
            "**Screen time is earned, not just scheduled.** Drift connects your to-do list to your phone, so scrolling becomes a reward for finishing things rather than something you wait out.",
            "**It costs less.** Drift is $4.99 a month or $29.99 a year, compared with Opal Pro's $19.99 a month or $99.99 a year.",
            "**It has a Family plan.** Parents can assign tasks and approve them before their kids' screen time unlocks.",
            "**Flexible time, not fixed windows.** Instead of all-or-nothing sessions, you get a balance you can spend when it suits you.",
          ],
        },
      ],
    },
    {
      heading: "Which should you choose?",
      id: "which",
      blocks: [
        {
          type: "p",
          text: "If your main problem is getting distracted during work or study blocks, and you want that across several devices, Opal is a strong pick. If your problem is that limits and sessions end and you're straight back to scrolling, Drift's earn-first rule is a different approach worth trying. Also see our [comparison with Apple Screen Time](/vs/apple-screen-time), which is free.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Drift a good Opal alternative?",
      answer:
        "If you're on iPhone and want screen time you earn by finishing tasks, yes. If you need blocking on Android or Mac too, Opal covers more devices.",
    },
    {
      question: "Is Drift cheaper than Opal?",
      answer:
        "Yes. Drift is $4.99 a month or $29.99 a year. Opal Pro is listed at $19.99 a month, $99.99 a year, or $399 lifetime, though Opal also has a free plan with up to three rules.",
    },
    {
      question: "Does Drift have a Hard Mode like Opal?",
      answer:
        "Not in the same way. Drift has no button to skip a block; apps unlock only when you've earned time. You can still change your blocked apps or delete Drift, so it's accountability you choose.",
    },
    {
      question: "Do Drift and Opal both use Apple's Screen Time?",
      answer:
        "Yes. Both use Apple's Screen Time framework to block apps at the system level on iPhone.",
    },
  ],
  cta: {
    heading: "Want screen time you earn?",
    text: "Drift locks the apps you overuse until you've done something first.",
  },
  related: [
    { href: "/vs/one-sec", label: "Drift vs one sec" },
    { href: "/vs/apple-screen-time", label: "Drift vs Apple Screen Time" },
  ],
};
