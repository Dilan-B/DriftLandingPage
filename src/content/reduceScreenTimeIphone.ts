import type { Article } from "./types";

export const reduceScreenTimeIphone: Article = {
  path: "/guides/reduce-screen-time-iphone",
  section: "Guides",
  title: "How to Reduce Screen Time on iPhone (Step by Step)",
  description:
    "A step-by-step guide to reducing screen time on iPhone with built-in settings: Screen Time reports, Downtime, App Limits, a passcode, notifications, Focus and grayscale.",
  kicker: "Guide",
  h1: "How to reduce screen time on iPhone",
  intro:
    "Your iPhone already has most of what you need to cut back, and it's all free. Work through these steps in order. Each one takes a few minutes, and together they make your phone a lot less sticky.",
  published: "2026-11-19",
  updated: "2026-11-19",
  sections: [
    {
      heading: "1. See where your time actually goes",
      id: "report",
      blocks: [
        {
          type: "p",
          text: "Open **Settings → Screen Time → See All App & Website Activity**. Look at three things: your top apps, how many times a day you pick up your phone, and which app you open first after picking it up. Those are the apps worth limiting.",
        },
        {
          type: "note",
          text: "Menu names can shift a little between iOS versions. These steps match recent releases.",
        },
      ],
    },
    {
      heading: "2. Schedule Downtime",
      id: "downtime",
      blocks: [
        {
          type: "p",
          text: "Go to **Settings → Screen Time → Downtime** and set a schedule, like 10 PM to 7 AM. During Downtime only calls and the apps you've allowed will work. Add the essentials, like Phone, Messages and Maps, under **Always Allowed**.",
        },
      ],
    },
    {
      heading: "3. Set App Limits",
      id: "app-limits",
      blocks: [
        {
          type: "p",
          text: "Go to **Settings → Screen Time → App Limits → Add Limit**. You can limit a whole category, like Social or Games, or pick individual apps. Start a little below what your report shows. Cutting from three hours to thirty minutes overnight rarely sticks.",
        },
      ],
    },
    {
      heading: "4. Lock your settings with a passcode",
      id: "passcode",
      blocks: [
        {
          type: "p",
          text: "Without a passcode, a limit screen lets you tap **Ignore Limit** for one more minute, 15 minutes or the rest of the day. Setting a Screen Time passcode (**Lock Screen Time Settings**, or **Use Screen Time Passcode** on older versions) means you need the code to get past.",
        },
        {
          type: "p",
          text: "The catch: if you choose the code, you know it. Some people ask a partner or friend to set it for them.",
        },
      ],
    },
    {
      heading: "5. Cut the notifications",
      id: "notifications",
      blocks: [
        {
          type: "list",
          items: [
            "In **Settings → Notifications**, turn off notifications for feed and game apps entirely.",
            "Use **Scheduled Summary** to bundle the rest into one or two deliveries a day.",
            "Keep notifications on for people and things that genuinely need you, like messages and calendar alerts.",
          ],
        },
      ],
    },
    {
      heading: "6. Use Focus modes",
      id: "focus",
      blocks: [
        {
          type: "p",
          text: "In **Settings → Focus**, create a Work or Study Focus that only allows certain people and apps to reach you. You can schedule it to turn on automatically at set times or places.",
        },
      ],
    },
    {
      heading: "7. Tidy your home screen",
      id: "home-screen",
      blocks: [
        {
          type: "p",
          text: "Long-press a feed app, choose **Remove App**, then **Remove from Home Screen**. It stays installed in the App Library, but you won't see it every time you unlock your phone. Put tools you use on purpose on the first page.",
        },
      ],
    },
    {
      heading: "8. Try grayscale",
      id: "grayscale",
      blocks: [
        {
          type: "p",
          text: "Go to **Settings → Accessibility → Display & Text Size → Color Filters**, turn it on and choose Grayscale. To switch it on and off quickly, set **Settings → Accessibility → Accessibility Shortcut** to Color Filters, then triple-click the side button.",
        },
      ],
    },
    {
      heading: "9. If you keep tapping past your limits",
      id: "earn",
      blocks: [
        {
          type: "p",
          text: "Built-in limits work well if you respect them. If Ignore Limit has become a reflex, a stricter limit usually turns into a stricter reflex. A different rule can work better: make screen time something you earn.",
        },
        {
          type: "p",
          text: "[Drift](/) locks the apps you choose using Apple's Screen Time system, and you unlock minutes by finishing real tasks. There's no ignore button. Here's an [honest comparison of Drift and Apple Screen Time](/vs/apple-screen-time), including where Apple's free tools are the better choice.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I check my screen time on iPhone?",
      answer:
        "Open Settings, tap Screen Time, then See All App & Website Activity. You can switch between a daily and weekly view, and see your top apps, pickups and notifications.",
    },
    {
      question: "How do I stop myself from ignoring Screen Time limits?",
      answer:
        "Set a Screen Time passcode, ideally one someone else chooses for you, so Ignore Limit needs the code. Or use an app like Drift, where blocked apps unlock only after you finish a task.",
    },
    {
      question: "What's a realistic screen time goal?",
      answer:
        "Start from your own numbers instead of a universal target. Cutting your top app's daily time by a third and holding it for a few weeks is more useful than a dramatic goal that lasts two days.",
    },
    {
      question: "Do I need an app to reduce screen time?",
      answer:
        "No. Apple's built-in Screen Time tools are free and cover a lot. Apps like Drift help when built-in limits are too easy to tap past.",
    },
  ],
  cta: {
    heading: "Limits too easy to ignore?",
    text: "With Drift, the apps you overuse unlock only after you've done something first.",
  },
  related: [
    { href: "/guides/how-to-stop-doomscrolling", label: "How to stop doomscrolling" },
    { href: "/vs/apple-screen-time", label: "Drift vs Apple Screen Time" },
  ],
};
