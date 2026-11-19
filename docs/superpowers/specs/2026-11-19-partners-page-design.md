# Partners Page — Design

**Date:** 2026-11-19 · **Size:** small change (one new page + footer link)

## Intent
Companies, creators and teams who want to give their people Drift should have a clear place to reach out. Two tracks:
- **Marketing partner (free):** they promote Drift to their audience/customers/staff; we give their people free access.
- **Team / organization (paid):** they pay for access for their people, no marketing required.

Success = qualified inquiries landing in the Drift inbox with enough info to reply without a back-and-forth.

## Goals / non-goals / anti-goals
- **Goals:** explain both tracks, show who it's for, collect a structured inquiry.
- **Non-goals:** self-serve signup, automatic code delivery, published prices, commission tracking (this is not an affiliate program), any app changes.
- **Anti-goals:** promising terms we can't honour (fixed seat prices, instant access); overselling — tone stays as modest as the Johns Hopkins mention.

## Constraints
- Site is a static export (`output: "export"`), no server or API routes.
- Subscriptions are App Store in-app purchases; free access is fulfilled with Apple **subscription offer codes** (≤1M/quarter, expire ≤6 months after creation).
- Selling offer codes is unconfirmed with Apple; org-level paid access under guideline 3.1.3(c) needs app + backend work.

## Approaches
- **A. Offer codes for both tracks** — no app changes, but selling codes is a grey area and annual deals need re-issuing.
- **B. Org access built into Drift (3.1.3(c))** — compliant and seat-trackable, but a real app/backend project.
- **C. Start with A, build B once paid demand exists** — **chosen.** Launch the page now; free partners get offer codes; first paid deals run as manual pilots while confirming with Apple; build B when paid demand is proven.

## The page (`/partners`)
1. **Hero:** "Bring Drift to your people." One line on both tracks.
2. **Two track cards side by side** (stacked on mobile), styled like the pricing cards:
   - *Marketing partner — Free:* "Share Drift with your audience and your people get it free." Examples: creators, newsletters, communities.
   - *Teams & organizations — Paid:* "Give your staff, students or members Drift." Examples: companies, schools, clinics, clubs. Price shown as "Custom — tell us your size."
3. **How it works:** 3 steps — tell us about your group → we reply within a few days with a plan → your people get access codes to redeem in the App Store.
4. **Inquiry form:** name, email, organization/handle, track (Marketing partner / Paid team / Not sure), approx. number of people, how you'd share Drift or what you need (message).
5. **Short FAQ:** How do people redeem? (App Store code, iPhone only.) How long does free access last? (Agreed per partner.) Is there a minimum size? (No.)

## Decisions made by me (correct any)
- Named **Partners**, URL `/partners`.
- Form submits the same way the contact form does today: opens the visitor's email client pre-filled to the Drift inbox (no backend). Can switch to Formspree/Tally later for in-page submission.
- Linked from the **footer** (Help column) and a small "For teams & partners" line near the pricing section; **not** added to the top navbar to keep it uncluttered.
- No prices or code durations published; those are set per deal.
- Reuses existing components (Kicker, BlurText, TiltCard, Card, Reveal) and the zod validation pattern in `src/lib/validation.ts`.

## Left to the builder
Exact copy wording, component split, page metadata/OG tags.

## Out of scope / later
Org access in the app (approach B), a partner tracking sheet, Formspree/Tally integration.
