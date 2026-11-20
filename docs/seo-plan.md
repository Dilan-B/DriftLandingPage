# Drift SEO plan

Honest framing: no one can guarantee a top-5 ranking, and anything sold as a
guarantee (link schemes, AI-spun pages, fake reviews) is exactly what gets a
domain penalized. What *does* work is below, ordered by impact.

## Keyword map: one primary intent per URL

| Query cluster | Example queries | Target URL | Realistic outlook |
| --- | --- | --- | --- |
| **Branded** | drift app, drift productivity, drift screen time app, drift app blocker | `/` | Top 1–3 within weeks of indexing. The technical fixes in this change are what make this happen. |
| **Earn screen time (Drift's niche)** | earn screen time app, app blocker that requires tasks, unlock apps by completing tasks, task-based app blocker | `/` now; dedicated guide later | Very winnable. Low competition, and it's exactly what Drift does. |
| **Reduce screen time / doomscrolling** | how to stop doomscrolling, reduce screen time iPhone, app blocker for iPhone | New guide pages (below) | Competitive (Opal, One Sec, Apple). Needs helpful content plus links over months. |
| **Family / parental** | screen time chores app, kids earn screen time, parental screen time app iPhone | New `/family` page | Moderately competitive. Strong fit with the Family plan. |
| **Comparison (high intent)** | opal alternative, one sec alternative, apple screen time vs app blocker | New comparison pages | Winnable if honest and specific. |
| **Audience** | app blocker for students, focus app for studying | New guide pages | Medium. |

## Done in this change (technical and on-page)

- Unique, keyword-led `<title>` and meta description on every page.
- Self-referencing canonical on every page; one canonical host (apex, https).
- `robots.txt` and `sitemap.xml` (both previously 404).
- JSON-LD: Organization, WebSite, MobileApplication (with real prices),
  FAQPage, all matching visible content. No fake ratings.
- FAQ answers are now in the HTML (previously only rendered on click, so
  Google could not see them). Added three truthful, high-intent questions:
  vs Apple Screen Time, parents/kids, Android.
- Hero copy names the category ("an app blocker for iPhone").
- Branded 1200×630 social share image on every page.
- Proper `noindex` on 404s; `noindex` on `*.pages.dev` previews.
- Removed the placeholder Google Analytics script (wasted requests).
- Security and immutable-cache headers for Cloudflare (`public/_headers`).
- `itunes` app meta tag (Smart App Banner in Safari on iPhone).

## Next: content (needs your input and voice)

Each is a real page with real substance. No thin "SEO pages".

1. `/family`: how the Family plan works (assign tasks → approve → unlock),
   pricing, FAQs. Targets parental and kids-earn-screen-time queries.
2. `/vs/opal`, `/vs/one-sec`, `/vs/apple-screen-time`: honest comparisons
   (where Drift is different, where the other app is better).
3. `/guides/how-to-stop-doomscrolling` and `/guides/reduce-screen-time-iphone`:
   genuinely useful guides that mention Drift as one tool, not a sales page.
4. `/research`: the Johns Hopkins study, as far as the research team allows.
   A link *from* their study page to driftproductivity.com would be the single
   most valuable backlink available.

## Next: off-site authority (where top-5 for competitive terms comes from)

- **App Store listing**: use the same phrases (app blocker, earn screen time,
  stop doomscrolling) in the subtitle and keyword field. App Store pages
  rank in Google too.
- **Backlinks, earned only**: Johns Hopkins study page; Product Hunt launch;
  "best app blockers" roundup authors (pitch them); student and productivity
  newsletters; genuine participation on Reddit (r/nosurf, r/productivity).
  **Never buy links.**
- **Instagram and TikTok bios** should link to `https://driftproductivity.com/`.
- **Reviews**: ask happy users for App Store reviews in-app. Once there are
  real ratings, they can be added to the structured data for star snippets.

## AI search (ChatGPT, Perplexity, Google AI Overviews)

- `/llms.txt` summarizes Drift for AI tools: what it is, how it works,
  pricing, key links. It's a proposed convention, and no major AI company has
  confirmed it uses the file, so treat it as a cheap bonus, not the main lever.
  Keep it in sync with pricing and features (`public/llms.txt`).
- What actually gets Drift into ChatGPT answers: **Bing indexing** (ChatGPT
  search uses Bing, so submit to Bing Webmaster Tools), **not blocking
  `OAI-SearchBot` / `GPTBot`** in Cloudflare's AI crawler settings, and being
  mentioned on sites the models trust (roundups, Reddit, press).

## Monitoring

- Google Search Console: weekly look at queries, impressions, and position.
- Cloudflare Web Analytics: traffic and Core Web Vitals.
- Re-submit the sitemap whenever new pages are added (`src/app/sitemap.ts`).
