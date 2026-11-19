# Partners Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/partners` page where companies, creators and teams can ask for Drift access, on a free (co-marketing) track or a paid (team) track.

**Architecture:** A new static App Router page made from existing UI components, plus a client-side `PartnerForm` that validates with zod and opens a pre-filled `mailto:` (same pattern as `ContactForm`). Links go in the footer and under the pricing cards.

**Tech Stack:** Next.js 15 (static export, `trailingSlash: true`), React 19, TypeScript, Tailwind, zod.

**Spec:** `docs/superpowers/specs/2026-11-19-partners-page-design.md`

## Global Constraints

- No server code or API routes: `next.config.ts` has `output: "export"`.
- No new dependencies.
- The page is named "Partners" at URL `/partners`. Never call it "affiliate".
- No prices or free-access lengths on the page. The paid track says "Custom — tell us your size."
- Tone stays modest. No inflated claims.
- Inquiries go to the same inbox as `ContactForm`: `driftappcontact@gmail.com`.
- Use theme tokens only (`paper-*`, `ink-*`, `earn-*`, `line`, `cta-text`) so dark mode works.
- No test runner exists in this repo. Verification means `npm run lint`, `npm run build` and a browser check. Do not add Jest or Vitest (YAGNI).

## Review Focus

1. **Long message → mailto URL too long.** Some mail clients drop URLs over about 2,000 chars. Cap `message` at 1,500 chars in the schema and show a live counter.
2. **No email app configured.** The `mailto:` silently does nothing. The success message must also show the inbox address as a plain copyable link.
3. **Special characters** (`&`, `?`, newlines, emoji) in any field must reach the email intact. Use `encodeURIComponent` on subject and body, and check it in the browser task.
4. **Phone width (375px).** The track cards stack, the form fits, and there is no horizontal scroll.
5. **Dark mode.** The page stays readable with the theme toggle in dark mode.

---

### Task 1: Partner inquiry schema, inbox constant and `PartnerForm`

**Files:**
- Modify: `src/lib/validation.ts` (append)
- Modify: `src/lib/links.ts` (append)
- Create: `src/components/ui/PartnerForm.tsx`

**Interfaces:**
- Produces: `partnerFormSchema`, `type PartnerFormData`, `PARTNER_TRACKS`, `CONTACT_INBOX`, and the default export `PartnerForm` (no props).

- [ ] **Step 1: Add the constant to `src/lib/links.ts`:** `export const CONTACT_INBOX = "driftappcontact@gmail.com";`
- [ ] **Step 2: Add to `src/lib/validation.ts`:**
  - `export const PARTNER_TRACKS = ["Marketing partner (free)", "Paid team / organization", "Not sure yet"] as const;`
  - `partnerFormSchema` = z.object with:
    - `name`: min 2, max 100
    - `email`: `.email()`
    - `organization`: min 2, max 120, message "Tell us your organization or handle"
    - `track`: `z.enum(PARTNER_TRACKS)`
    - `size`: `z.string().max(40)`, optional free text such as "about 200"
    - `message`: min 10, max 1500
  - `export type PartnerFormData = z.infer<typeof partnerFormSchema>`
- [ ] **Step 3: Create `PartnerForm.tsx`.** Copy the state, validation and error pattern and `inputClasses` from `ContactForm.tsx`.
  - Fields in order: Name, Email, Organization or handle, Track (a `<select>` over `PARTNER_TRACKS`, default the first), Approx. number of people (optional), "How would you share Drift, or what do you need?" (textarea with an `n/1500` counter).
  - On a valid submit, set `window.location.href` to `mailto:${CONTACT_INBOX}`:
    - subject: `[Drift Partners] ${track} — ${organization}`
    - body: one line each for Name, Email, Organization, Track and Size, then a blank line, then the message
    - both encoded with `encodeURIComponent`
  - The success text reads "Your email app should open with your message ready to send. If it doesn't, email us at" followed by a `mailto:` link to `CONTACT_INBOX`. Keep this text visible; do not auto-hide it.
  - Every input has a `<label htmlFor>`, and errors use `aria-describedby`.
- [ ] **Step 4: Verify.** Run `npm run lint`. Expected: no errors in the new or changed files.
- [ ] **Step 5: Commit**
```bash
git add src/lib/validation.ts src/lib/links.ts src/components/ui/PartnerForm.tsx
git commit -m "feat: add partner inquiry form with mailto submission"
```

### Task 2: `/partners` page and site links

**Files:**
- Create: `src/app/partners/page.tsx`
- Modify: `src/components/shared/Footer.tsx` (Help column)
- Modify: `src/components/home/PricingSection.tsx` (after the card grid)

**Interfaces:**
- Consumes: `PartnerForm` (Task 1); `Kicker`, `Reveal`, `TiltCard` from `src/components/ui`.

- [ ] **Step 1: Create the page.** Follow the layout of `src/app/contact/page.tsx`: a cream header band, then the content.
  - `metadata`:
    - title `"Partners"`
    - description `"Bring Drift to your team, community or audience — free for marketing partners, custom plans for organizations."`
  - Sections, with copy taken from the spec:
    1. Header: Kicker "Partners", h1 "Bring Drift to your people.", one subline covering both tracks.
    2. Two track cards (`md:grid-cols-2`, stacked on mobile):
       - "Marketing partner" with a "Free" badge. Examples: creators, newsletters, communities.
       - "Teams & organizations" with "Custom — tell us your size". Examples: companies, schools, clinics, clubs.
       - Each card's CTA links to `#inquire`.
    3. How it works, 3 steps: Tell us about your group → We reply within a few days with a plan → Your people redeem access codes in the App Store.
    4. `<section id="inquire" className="scroll-mt-20">` with a card holding `<PartnerForm />`.
    5. FAQ with 3 items, plain `<details>` or the existing `FAQItem`:
       - How do people redeem? An App Store code, on iPhone only.
       - How long does free access last? Agreed with each partner.
       - Is there a minimum size? No.
- [ ] **Step 2: Footer.** Add `{ href: "/partners", label: "Partners" }` to the Help column, after Contact.
- [ ] **Step 3: Pricing link.** Under the card grid, add one centered line: "Bringing Drift to a team, school or audience?" followed by a `Link` to `/partners` labelled "See partner options →". Use `text-ink-mid`, with the link in `text-earn-deep`.
- [ ] **Step 4: Verify the build.** Run `npm run lint`, then `npm run build`. Expected: both succeed, and `out/partners/index.html` exists.
- [ ] **Step 5: Commit**
```bash
git add src/app/partners/page.tsx src/components/shared/Footer.tsx src/components/home/PricingSection.tsx
git commit -m "feat: add partners page with free and paid tracks"
```

### Task 3: Browser verification

- [ ] **Step 1:** Start the dev server through `.claude/launch.json`, using `npm run dev` on port 3000, and open `/partners/`.
- [ ] **Step 2:** Submit the form empty. Expected: inline errors on name, email, organization and message, and no navigation.
- [ ] **Step 3:** Fill the form with an organization of `Tom & Jerry's Club?` and a message containing a newline and an emoji. Intercept navigation with `javascript_tool` by overriding the `href` setter, or read the attempted URL. Expected: the decoded subject and body match the input exactly.
- [ ] **Step 4:** Type 1,501 chars into the message. Expected: the counter shows over the limit and validation blocks the submit.
- [ ] **Step 5:** Resize to mobile (375px). Expected: the cards stack, and `document.documentElement.scrollWidth <= 375`. Switch the theme toggle to dark. Expected: the text stays readable. Take a screenshot.
- [ ] **Step 6:** On `/`, the pricing line links to `/partners/`. In the footer, Help → Partners links to `/partners/`.
