import type { Article } from "./types";

// one sec facts checked against one-sec.app and one-sec.app/faq on
// 2026-11-20. Its prices are listed in euros and differ by region, so this
// page deliberately doesn't quote a dollar price.

export const vsOneSec: Article = {
  path: "/vs/one-sec",
  section: "Compare",
  title: "One Sec Alternative: Drift vs one sec Compared",
  description:
    "Looking for a one sec alternative? An honest comparison of Drift and one sec: a pause before you open an app versus screen time you earn by finishing tasks.",
  kicker: "Compare",
  h1: "Drift vs one sec",
  intro:
    "one sec and Drift both help you open distracting apps less, but in very different ways. one sec adds a short pause, like a deep breath, before an app opens. Drift keeps apps locked until you've earned the time by finishing something.",
  published: "2026-11-20",
  updated: "2026-11-20",
  sections: [
    {
      heading: "The short answer",
      id: "short-answer",
      blocks: [
        {
          type: "p",
          text: "Choose **one sec** if you mostly open apps on autopilot and a moment to stop and think is enough to break the habit. It's free for one app and works on phones and computers. Choose **Drift** if a pause isn't enough and you want your screen time to come from getting things done.",
        },
      ],
    },
    {
      heading: "Side by side",
      id: "side-by-side",
      blocks: [
        {
          type: "table",
          caption: "one sec compared with Drift",
          columns: ["", "one sec", "Drift"],
          rows: [
            [
              "Core idea",
              "A short pause before an app opens",
              "Earn screen time by finishing tasks",
            ],
            [
              "When you open a blocked app",
              "You do a breathing exercise or small task, then choose whether to continue",
              "It opens only if you have earned time left",
            ],
            ["Free plan", "Yes, for one app", "No"],
            [
              "Paid plans",
              "Monthly, yearly or lifetime (prices vary by region)",
              "$4.99/month or $29.99/year",
            ],
            ["Platforms", "iPhone, Android and browser extensions", "iPhone"],
            ["Family plan", "Not listed on its site", "Yes, for up to 5 kids"],
          ],
        },
        {
          type: "note",
          text: "one sec details are from its website and FAQ as of November 2026. Check their site for current plans and prices in your region.",
        },
      ],
    },
    {
      heading: "How one sec works",
      id: "how-one-sec-works",
      blocks: [
        {
          type: "p",
          text: "When you open an app you've chosen, one sec shows a short **interruption** first. The default is a breathing exercise, and there are others, like rotating your phone or following a dot. After the pause you decide whether to continue. It can also **re-interrupt** you after a while, and it offers scheduled **block sessions** where chosen apps can't be opened at all.",
        },
        {
          type: "p",
          text: "one sec cites peer-reviewed research, including a 2023 study in PNAS run with researchers at the Max Planck Institute and Heidelberg University. The free version covers one app; Pro unlocks unlimited apps and more customization.",
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
              title: "No way to wave it through",
              text: "There's no continue button. The way back in is to earn more time.",
            },
          ],
        },
      ],
    },
    {
      heading: "Where one sec is better",
      id: "where-one-sec-wins",
      blocks: [
        {
          type: "list",
          items: [
            "**It's gentle.** A pause leaves the choice with you, which suits people who just need a moment of awareness.",
            "**It's free to start.** You can use one sec on one app without paying. Drift has no free tier.",
            "**It works on more devices,** including Android and browser extensions for computers. Drift is iPhone only.",
            "**It's backed by published research** on how pauses reduce app openings.",
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
            "**A pause can become a habit too.** If you've learned to breathe through the prompt and carry on scrolling, Drift's rule is firmer: no earned time, no app.",
            "**It rewards what you did.** Drift turns finishing tasks into screen time, so your phone pushes you toward the things you meant to do.",
            "**It has a Family plan.** Parents can assign tasks and approve them before their kids' screen time unlocks. See [how it works](/family).",
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
          text: "Try the gentlest thing that works. If a pause is enough to stop autopilot opens, one sec is a good, low-cost choice. If you find yourself pushing past it every time, an earn-first approach like Drift changes the rule instead of the speed bump. For a free starting point, see [how to reduce screen time on iPhone](/guides/reduce-screen-time-iphone) with Apple's built-in tools.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Drift a good one sec alternative?",
      answer:
        "If one sec's pause has stopped working for you and you're on iPhone, yes. Drift keeps apps locked until you've earned time, instead of letting you continue after a pause.",
    },
    {
      question: "What's the main difference between Drift and one sec?",
      answer:
        "one sec slows you down before an app opens and then lets you choose. Drift blocks the app until you've finished a task and earned screen time.",
    },
    {
      question: "Is one sec free?",
      answer:
        "one sec is free for one app. Pro, with unlimited apps, is a paid subscription or a one-time lifetime purchase; prices vary by region.",
    },
    {
      question: "Can I use Drift and one sec together?",
      answer:
        "We haven't tested them together. If you try it, set them up on different apps so they don't overlap.",
    },
  ],
  cta: {
    heading: "Pause not enough?",
    text: "With Drift, the apps you overuse unlock only after you've done something first.",
  },
  related: [
    { href: "/vs/opal", label: "Drift vs Opal" },
    { href: "/guides/how-to-stop-doomscrolling", label: "How to stop doomscrolling" },
  ],
};
