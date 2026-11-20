import type { Article } from "./types";

export const stopDoomscrolling: Article = {
  path: "/guides/how-to-stop-doomscrolling",
  section: "Guides",
  title: "How to Stop Doomscrolling: 7 Habits That Actually Work",
  description:
    "Practical ways to stop doomscrolling on your phone: spot your triggers, remove the cues, add friction, set a hard stop at night, and make scrolling something you earn.",
  kicker: "Guide",
  h1: "How to stop doomscrolling",
  intro:
    "Doomscrolling is the scroll that keeps going after it stopped being fun. Feeds are built so there's always one more post, which means willpower alone is a weak plan. These habits work by changing the setup around you instead.",
  published: "2026-11-19",
  updated: "2026-11-19",
  sections: [
    {
      heading: "1. Notice when it happens",
      id: "notice",
      blocks: [
        {
          type: "p",
          text: "Most scrolling starts at predictable moments: in bed, right after waking up, waiting in line, or avoiding a task. Spend a couple of days just noticing when you open the feed and what you were doing just before.",
        },
        {
          type: "p",
          text: "Your iPhone can help. **Settings → Screen Time → See All App & Website Activity** shows which apps you use most, how often you pick up your phone, and which app you open first.",
        },
      ],
    },
    {
      heading: "2. Remove the cues",
      id: "remove-cues",
      blocks: [
        {
          type: "list",
          items: [
            "**Turn off notifications** for feed apps in **Settings → Notifications**. A badge is an invitation to open the app.",
            "**Move feed apps off your home screen.** Long-press the icon, choose **Remove App**, then **Remove from Home Screen**. It stays in the App Library, one search away, but out of sight.",
            "**Keep your first screen boring:** tools you use on purpose, like Calendar, Notes and Maps.",
          ],
        },
      ],
    },
    {
      heading: "3. Add a little friction",
      id: "friction",
      blocks: [
        {
          type: "p",
          text: "Small hurdles break the autopilot. Each one gives you a second to decide whether you actually want to scroll.",
        },
        {
          type: "list",
          items: [
            "Sign out of the app after each use, so getting back in takes a password.",
            "Use the website instead of the app, which is usually clunkier.",
            "Try grayscale: **Settings → Accessibility → Display & Text Size → Color Filters**, then choose Grayscale. Many people find feeds less appealing without color, and it's easy to switch back.",
          ],
        },
      ],
    },
    {
      heading: "4. Give your night a hard stop",
      id: "night",
      blocks: [
        {
          type: "p",
          text: "Late-night scrolling is the hardest to stop because you're tired and there's no next thing. Decide the stop in advance:",
        },
        {
          type: "list",
          items: [
            "Charge your phone outside the bedroom and use a cheap alarm clock.",
            "Set **Downtime** in **Settings → Screen Time** so only the apps you allow work after a set hour.",
            "Use a **Sleep Focus** so notifications stay quiet overnight.",
          ],
        },
      ],
    },
    {
      heading: "5. Decide what you'll do instead",
      id: "replace",
      blocks: [
        {
          type: "p",
          text: "\"Scroll less\" leaves a gap, and the feed fills gaps well. Pick a specific replacement for your most common moment: a book on the nightstand, a podcast for the commute, a short walk after lunch. The more specific, the easier it is to start.",
        },
      ],
    },
    {
      heading: "6. Make scrolling something you earn",
      id: "earn",
      blocks: [
        {
          type: "p",
          text: "Time limits tell you when to stop, but they're easy to dismiss in the moment. Flipping the order changes the habit: do something first, then scroll.",
        },
        {
          type: "p",
          text: "That's how [Drift](/) works. It locks the apps you choose, and you unlock time by finishing real tasks, like a workout, chores or studying. A task earns about half its length in screen time, so scrolling stops being the default and becomes a reward. See [how it compares with Apple Screen Time](/vs/apple-screen-time).",
        },
      ],
    },
    {
      heading: "7. Expect bad days",
      id: "bad-days",
      blocks: [
        {
          type: "p",
          text: "Everyone slips, especially on stressful days. One long scroll doesn't undo a week of better habits. Notice what set it off, adjust the setup if you need to, and pick back up tomorrow.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why is doomscrolling so hard to stop?",
      answer:
        "Feeds have no natural end. There's always another post, and you never know when the next interesting one will appear, so stopping always feels a little early. That's why changing your setup tends to work better than relying on willpower.",
    },
    {
      question: "Should I just delete social media apps?",
      answer:
        "It can work, especially for a reset. The catch is that reinstalling takes seconds. Many people do better keeping the apps but adding friction, like removing them from the home screen or making them something you earn.",
    },
    {
      question: "Does grayscale really help?",
      answer:
        "Some people find that color-free feeds lose a lot of their pull. It costs nothing to try and you can turn it off in seconds, so it's worth a week's experiment.",
    },
    {
      question: "What's the best app to stop doomscrolling?",
      answer:
        "Start with what's free: Apple Screen Time's App Limits and Downtime. If you find yourself tapping past limits, an app that makes you earn your screen time, like Drift, changes the rule instead of only adding a stricter limit.",
    },
  ],
  cta: {
    heading: "Do something first, then scroll.",
    text: "Drift locks the apps you overuse until you've earned the time back.",
  },
  related: [
    { href: "/guides/reduce-screen-time-iphone", label: "How to reduce screen time on iPhone" },
    { href: "/vs/apple-screen-time", label: "Drift vs Apple Screen Time" },
  ],
};
