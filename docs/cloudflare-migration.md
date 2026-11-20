# Moving driftproductivity.com to Cloudflare

Goal: serve the site from **Cloudflare** (Workers static assets: fast global CDN, automatic HTTPS),
keep the **domain registration at Bluehost**, and do it without any downtime or
damage to the domain's search or email reputation.

**Email:** driftproductivity.com has **no mailbox**. Drift's customer email
goes to `hello@ridilabs.com` (Titan, on the ridilabs.com domain, which this
migration does not touch). The site's contact links all use that address
(`CONTACT_INBOX` in `src/lib/links.ts`), and no mailbox records are carried
over, this guide only cleans up dead records.

It **does send** email, though: **Resend** (on Amazon SES) is set up on the
`send` subdomain and `resend._domainkey`, most likely for the app's
transactional mail (password resets, verification). Those records must be kept
exactly as they are. The guide removes only the dead cPanel leftovers and adds
an SPF record for the bare domain.

Order matters. Do the steps top to bottom and don't skip the checks.

---

## What we found in the current DNS (checked 2026-11-19)

| Record | Current value | Problem |
| --- | --- | --- |
| Nameservers | `ns1.bluehost.com`, `ns2.bluehost.com` | — |
| `A` @ | `50.6.2.202` (Bluehost shared server) | Will move to Cloudflare |
| `CNAME` www | `driftproductivity.com` | Will move to Cloudflare |
| `A` webmail | `50.6.2.202` | Leftover cPanel default. No mailbox uses it. |
| `MX` @ | `0 driftproductivity.com` | Leftover default pointing at the web server. There's no mailbox behind it. |
| `TXT` @ (SPF) | `"DRIFTPRODUCTIVITY.COM."` | **Broken — no SPF.** Anyone can send mail claiming to be @driftproductivity.com. |
| `TXT` default._domainkey (DKIM) | `"DEFAULT._DOMAINKEY.DRIFTPRODUCTIVITY.COM."` | Broken placeholder. |
| `MX` send | `10 feedback-smtp.us-east-1.amazonses.com` | **Resend: keep.** |
| `TXT` send | `v=spf1 include:amazonses.com ~all` | **Resend: keep.** |
| `TXT` resend._domainkey | `p=MIGf…` (DKIM key) | **Resend: keep.** |
| `TXT` _dmarc | `v=DMARC1; p=none;` | Monitor-only. Keep for now; tighten later (Step 9). |
| `A` autodiscover, cpanel, ftp, ssh, webdisk, localhost | cPanel defaults | Unused once hosting moves. |
| http:// and www | Both serve the site with `200` | **Duplicate content.** Google sees 4 copies of every page. Fixed by the redirects below. |

---

## Step 1 — Back up the current DNS (2 min)

1. Bluehost → **Domains** → driftproductivity.com → **DNS**. Take a screenshot
   of the full zone. This is your backup and rollback reference.
2. Confirm there's no mailbox for driftproductivity.com (Bluehost →
   Email). If there turns out to be one, **stop** and update the email part of
   Step 3 before continuing.

## Step 2 — Deploy the site to Cloudflare (10 min)

Cloudflare's default flow is now **Workers** with static assets. It's the same
free CDN hosting as Pages. The repo's `wrangler.jsonc` tells it to upload the
static export in `out/`.

1. Create a free Cloudflare account at dash.cloudflare.com.
2. **Workers & Pages → Create → Import a repository** → pick
   `Dilan-B/DriftLandingPage` (branch `main`).
3. Settings (these are the defaults Cloudflare fills in):
   - Project name: `driftlandingpage` (must match `name` in `wrangler.jsonc`)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Preview command: `npx wrangler preview`
   - Enable Preview builds: on is fine
   - Protect with Cloudflare Access: **off** (on would hide the site behind a login)
4. **Deploy**. Then open the `driftlandingpage.<account>.workers.dev` URL and
   click around. It should match the live site. (`*.workers.dev` and preview
   URLs send `X-Robots-Tag: noindex` via `public/_headers`, so they never
   compete with the real domain in Google.)

## Step 3 — Add the domain to Cloudflare (10 min)

1. Cloudflare → **Add a domain** → `driftproductivity.com` → **Free** plan.
2. Cloudflare scans the existing records. **Keep these exactly as imported:**

   | Type | Name | Content | Why |
   | --- | --- | --- | --- |
   | A | `@` | `50.6.2.202` (Proxied) | Keeps the site up until Step 5 |
   | CNAME | `www` | `driftproductivity.com` (Proxied) | Same |
   | MX | `send` | `feedback-smtp.us-east-1.amazonses.com` (10) | Resend bounces |
   | TXT | `send` | `v=spf1 include:amazonses.com ~all` | Resend SPF |
   | TXT | `resend._domainkey` | `p=MIGf…` | Resend DKIM |
   | TXT | `_dmarc` | `v=DMARC1; p=none;` | DMARC (monitor) |

3. **Delete** the cPanel leftovers:
   - A: `autodiscover`, `cpanel`, `ftp`, `ssh`, `webdisk`, `webmail`, `localhost`
   - MX: `@` → `driftproductivity.com` (priority 0). No mailbox behind it.
   - TXT: `@` → `"DRIFTPRODUCTIVITY.COM."` (broken)
   - TXT: `default._domainkey` → `"DEFAULT._DOMAINKEY…"` (broken)
4. **Add** one record:

   | Type | Name | Content | Why |
   | --- | --- | --- | --- |
   | TXT | `@` | `v=spf1 -all` | Nothing sends with the bare domain as its envelope sender, so nobody can spoof it. Resend is unaffected: it checks SPF on `send.driftproductivity.com`. |

   Do **not** add a null MX, a wildcard `*._domainkey`, or DMARC
   `p=reject`. Those are for domains that send no email, and they could hurt
   Resend delivery.
5. Cloudflare then shows you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).

## Step 4 — Switch nameservers at Bluehost (2 min, then wait)

1. Bluehost → **Domains** → driftproductivity.com → **DNS / Nameservers** →
   **Custom** → paste Cloudflare's two nameservers → Save.
2. Wait for Cloudflare to email "driftproductivity.com is now active". That
   usually takes under an hour, and can take up to 24.

Until Step 5, the site keeps being served from Bluehost through Cloudflare
(the `A @ 50.6.2.202` record you kept), so there's no downtime.

## Step 5 — Attach the domain to the Worker (5 min)

A Worker custom domain can't be added while another DNS record uses the same
name, so do this in one sitting (the site is down for about a minute):

1. **DNS → Records** → delete `A @ 50.6.2.202` and `CNAME www`.
2. Right away: Workers & Pages → `driftlandingpage` → **Settings → Domains &
   Routes → Add → Custom domain** → `driftproductivity.com` → Add.
3. Repeat for `www.driftproductivity.com`.
4. Both should show **Active** with a certificate within a few minutes, and
   Cloudflare creates the DNS records itself.

## Step 6 — HTTPS and one canonical URL (5 min). This is the big SEO fix.

The site's canonical URL is **`https://driftproductivity.com/`** (no www,
trailing slash on pages). Everything else must 301 there.

1. **SSL/TLS → Edge Certificates**:
   - Always Use HTTPS: **On**
   - Automatic HTTPS Rewrites: **On**
   - Minimum TLS Version: **1.2**
2. **Rules → Redirect Rules → Create from template → "Redirect from WWW to
   root"** → status **301** → preserve query string → Deploy.
3. Check from a terminal (each should end on `https://driftproductivity.com/`
   with a single 301 hop):

   ```bash
   curl -sIL http://www.driftproductivity.com/ | grep -iE "^(HTTP|location)"
   ```

## Step 7 — Analytics and crawl settings (5 min)

1. **Analytics & Logs → Web Analytics → Add a site** → `driftproductivity.com`
   → choose **automatic setup** (works because the domain is proxied through
   Cloudflare). It's cookie-free, so no consent banner is needed. The old Google Analytics placeholder has been
   removed from the code.
2. **Caching → Configuration → Crawler Hints: On**. This pings Bing/Yandex via
   IndexNow when content changes.
3. **Speed → Optimization**: leave **Rocket Loader OFF**. It rewrites scripts
   and breaks Next.js hydration.
4. **Security → Bots**: Bot Fight Mode is fine (verified crawlers like
   Googlebot are allowed). **Never** turn on "I'm Under Attack" mode long-term.
   It shows a challenge page to crawlers.
5. **AI Crawl Control / "Block AI bots"**: your call. Leaving AI crawlers
   *allowed* lets ChatGPT, Perplexity, and Google AI Overviews cite Drift.
   Blocking them protects content but costs that visibility. If Cloudflare
   offers a **managed robots.txt**, keep it **off**. The site ships its own
   `/robots.txt`.

## Step 8 — Tell search engines (10 min)

1. **Google Search Console** → Add property → **Domain** →
   `driftproductivity.com` → it offers to add the verification TXT via
   Cloudflare automatically → accept.
2. Search Console → **Sitemaps** → submit `https://driftproductivity.com/sitemap.xml`.
3. Search Console → **URL Inspection** → `https://driftproductivity.com/` →
   **Request indexing**.
4. **Bing Webmaster Tools** → "Import from Google Search Console" (one click).
   This also covers DuckDuckGo and Yahoo, and Bing powers ChatGPT search.
5. Validate the structured data: search.google.com/test/rich-results with the
   homepage URL. It should detect **FAQ**, **Organization**, and
   **Software App**. (The Software App rich result itself needs real ratings,
   which we deliberately did not fake.)

## Step 9 — Verify email after Step 4 goes active

1. Check the records from a terminal:

   ```bash
   nslookup -type=TXT driftproductivity.com 1.1.1.1
   ```

   ```bash
   nslookup -type=TXT resend._domainkey.driftproductivity.com 1.1.1.1
   ```

   You should see `v=spf1 -all` and the Resend DKIM key (`p=MIGf…`).
2. Trigger a real app email (e.g. a password reset to your own Gmail) → open it
   → ⋮ → **Show original**. You want `DKIM: PASS` and `DMARC: PASS`.
   Resend's dashboard (Domains) should still show the domain as **Verified**.
3. Send a test message through the site's contact form. It opens an email to
   `hello@ridilabs.com`; make sure it arrives in the Titan inbox.
   (ridilabs.com's email is separate and isn't changed by any of this.)
4. Later (optional): after a few weeks of passing results, tighten DMARC to
   `v=DMARC1; p=quarantine;` to block spoofed mail. Not before you've
   confirmed Resend passes.

## Step 10 — Bluehost hosting

- Stop uploading `drift-site.zip` to Bluehost. Every push to `main` now deploys
  automatically to Cloudflare.
- Leave the Bluehost hosting in place for about 2 weeks as a fallback.
- **Before cancelling any Bluehost plan, check what else is on it.** If
  ridilabs.com's website, or its Titan email, is billed under the same
  hosting plan, cancelling it would take those down too. Cancel only what
  serves driftproductivity.com alone.
- Keep the **domain registration** for driftproductivity.com active with
  auto-renew on. Bluehost sometimes bundles a "free domain" with hosting, so
  check that the registration doesn't lapse with the plan. (You can transfer
  the registration to Cloudflare Registrar later for at-cost renewals. That's
  optional.)

## Rollback

If anything goes wrong at any point: Bluehost → Nameservers → back to
`ns1.bluehost.com` / `ns2.bluehost.com`. The old zone and site are untouched
on Bluehost, so this fully restores the previous setup.
