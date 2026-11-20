import type { Article } from "./types";

export const vsAppleScreenTime: Article = {
  path: "/vs/apple-screen-time",
  section: "Compare",
  title: "Drift vs Apple Screen Time: Which Should You Use?",
  description:
    "An honest comparison of Apple Screen Time and Drift. Where Apple's free limits are enough, where they're easy to tap past, and how earning screen time differs.",
  kicker: "Compare",
  h1: "Drift vs Apple Screen Time",
  intro:
    "Apple Screen Time is free, built into every iPhone, and genuinely good. Drift is built on the same system. The difference is what happens when your time runs out: Screen Time asks you to stop, Drift asks you to earn more first.",
  published: "2026-11-19",
  updated: "2026-11-19",
  sections: [
    {
      heading: "The short answer",
      id: "short-answer",
      blocks: [
        {
          type: "p",
          text: "If you set an App Limit and actually stop when it appears, Apple Screen Time is all you need, and it costs nothing. If you keep tapping **Ignore Limit** without thinking, a limit you can wave away isn't doing much. That's the gap Drift is built for.",
        },
      ],
    },
    {
      heading: "Side by side",
      id: "side-by-side",
      blocks: [
        {
          type: "table",
          caption: "Apple Screen Time compared with Drift",
          columns: ["", "Apple Screen Time", "Drift"],
          rows: [
            ["Price", "Free, built in", "$4.99/month or $29.99/year"],
            [
              "How it limits apps",
              "A daily time budget per app or category",
              "A balance of minutes you earn by finishing tasks",
            ],
            [
              "When time runs out",
              "A limit screen with an Ignore Limit option (unless a passcode is set)",
              "Apps stay locked until you earn more time",
            ],
            [
              "Getting more time",
              "Tap for one more minute, 15 minutes, or the rest of the day",
              "Finish a task or a focus session",
            ],
            [
              "Schedules",
              "Downtime",
              "Blocked hours",
            ],
            [
              "Content and web filtering",
              "Yes",
              "No. Drift only handles the apps you choose",
            ],
            ["Platforms", "iPhone, iPad, Mac", "iPhone"],
          ],
        },
      ],
    },
    {
      heading: "How Apple Screen Time limits work",
      id: "apple-screen-time",
      blocks: [
        {
          type: "p",
          text: "Screen Time lives in **Settings → Screen Time**. The parts most people use:",
        },
        {
          type: "list",
          items: [
            "**App Limits:** a daily time budget for an app or a whole category, like Social.",
            "**Downtime:** a schedule when only the apps you allow are available.",
            "**Always Allowed:** apps that work even during Downtime, like Phone and Messages.",
            "**Content & Privacy Restrictions:** filters for websites, purchases and explicit content.",
            "**Screen Time passcode:** a code needed to change settings or ignore a limit.",
          ],
        },
        {
          type: "p",
          text: "When an App Limit is reached on your own phone without a passcode, you'll see a screen with **Ignore Limit**, which offers one more minute, a reminder in 15 minutes, or ignoring the limit for the rest of the day. It's a gentle nudge by design. If you set a passcode yourself, you already know it, so it's still easy to get past.",
        },
      ],
    },
    {
      heading: "How Drift works differently",
      id: "how-drift-works",
      blocks: [
        {
          type: "p",
          text: "Drift uses Apple's Screen Time framework to block the apps you pick, so the lock is the same system-level shield. What changes is the rule for unlocking them:",
        },
        {
          type: "steps",
          items: [
            {
              title: "Your time is a balance",
              text: "You start the day with what you've earned. The balance only goes down while you're using the apps you chose to block.",
            },
            {
              title: "You earn it by doing things",
              text: "A task pays about half its length in screen time, up to 60 minutes per task. A 30-minute workout earns 15 minutes. A Drift In focus session earns time too.",
            },
            {
              title: "Tasks can need proof",
              text: "When a task needs proof, you add a short note, photo or video, and it's checked before the time is added.",
            },
            {
              title: "At zero, apps lock",
              text: "There's no Ignore Limit button. The way back in is to earn more time.",
            },
          ],
        },
        {
          type: "p",
          text: "You can also set **blocked hours**, like 10 PM to 7 AM, when blocked apps stay locked no matter what your balance is. Unused time doesn't carry over to the next day.",
        },
      ],
    },
    {
      heading: "Where Apple Screen Time is better",
      id: "where-apple-wins",
      blocks: [
        {
          type: "list",
          items: [
            "**It's free** and already on your phone. Nothing to install or pay for.",
            "**It does more than app limits:** content filtering, communication limits, and purchase restrictions are Apple's, not Drift's.",
            "**It works across devices,** including iPad and Mac. Drift is iPhone only.",
            "**Its timing is more exact.** iOS reports blocked-app use to apps like Drift in roughly 15-minute windows, so Drift's countdown is approximate.",
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
            "**Limits you can't just dismiss.** There's no one-tap way to unlock blocked apps. Your minutes come from finishing things.",
            "**It rewards what you did instead of only cutting time.** Your to-do list and your screen time become the same system.",
            "**It suits people who've already tried limits.** If App Limits turned into a reflex tap, a different rule tends to work better than a stricter version of the same one.",
          ],
        },
        {
          type: "note",
          text: "Drift is accountability, not a cage. You can still change which apps are blocked, or delete the app. It works best when you choose it on purpose.",
        },
      ],
    },
    {
      heading: "Can you use both?",
      id: "use-both",
      blocks: [
        {
          type: "p",
          text: "Drift isn't a replacement for the whole of Screen Time. It needs Screen Time permission to work, and things like content filtering and communication limits remain Apple's job. A common setup is Apple's tools for the broad rules and Drift for the few apps you keep opening on autopilot.",
        },
        {
          type: "p",
          text: "New to Screen Time? Our step-by-step guide covers [how to reduce screen time on iPhone](/guides/reduce-screen-time-iphone) using Apple's built-in settings first.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Drift a replacement for Apple Screen Time?",
      answer:
        "No. Drift is built on Apple's Screen Time framework and needs Screen Time permission. It replaces the way limits are unlocked for the apps you choose, while Apple's content filters and other settings stay as they are.",
    },
    {
      question: "Is Apple Screen Time enough on its own?",
      answer:
        "For many people, yes. If you stop when a limit appears, Screen Time is free and works well. Drift is for people who find themselves tapping Ignore Limit out of habit.",
    },
    {
      question: "Can I get past Drift's blocks?",
      answer:
        "There's no button to ignore a block. You can still change your blocked apps or delete Drift, so it's a commitment you choose rather than a lock you can't open.",
    },
    {
      question: "How much does Drift cost compared with Screen Time?",
      answer:
        "Apple Screen Time is free. Drift Personal is $4.99 a month or $29.99 a year, and there's no free tier.",
    },
  ],
  cta: {
    heading: "Tried limits already?",
    text: "Make the apps you overuse something you earn, not something you dismiss.",
  },
  related: [
    { href: "/guides/reduce-screen-time-iphone", label: "How to reduce screen time on iPhone" },
    { href: "/guides/how-to-stop-doomscrolling", label: "How to stop doomscrolling" },
  ],
};
