# Moving driftproductivity.com to Cloudflare

Goal: serve the site from **Cloudflare Pages** (fast global CDN, automatic HTTPS),
keep the **domain registration at Bluehost**, and do it without any downtime or
damage to the domain's search or email reputation.

**Email:** driftproductivity.com has **no mailbox**. Drift's customer email
goes to `hello@ridilabs.com` (Titan, on the ridilabs.com domain, which this
migration does not touch). The site's contact links all use that address
(`CONTACT_INBOX` in `src/lib/links.ts`). So instead of carrying email records
over, this guide marks driftproductivity.com as a **domain that sends no
email**. That stops anyone from spoofing it, which protects its reputation.

Order matters. Do the steps top to bottom and don't skip the checks.

---

## What we found in the current DNS (checked 2026-11-19)

| Record | Current value | Problem |
| --- | --- | --- |
| Nameservers | `ns1.bluehost.com`, `ns2.bluehost.com` | — |
| `A` @ | `50.6.2.202` (Bluehost shared server) | Will move to Cloudflare Pages |
| `CNAME` www | `driftproductivity.com` | Will move to Cloudflare Pages |
| `A` webmail | `50.6.2.202` | Leftover cPanel default. No mailbox uses it. |
| `MX` @ | `0 driftproductivity.com` | Leftover default pointing at the web server. There's no mailbox behind it. |
| `TXT` @ (SPF) | `"DRIFTPRODUCTIVITY.COM."` | **Broken — no SPF.** Anyone can send mail claiming to be @driftproductivity.com. |
| `TXT` default._domainkey (DKIM) | `"DEFAULT._DOMAINKEY.DRIFTPRODUCTIVITY.COM."` | Broken placeholder. |
| `TXT` _dmarc | `v=DMARC1; p=none;` | Monitor-only. It doesn't block spoofing. |
| http:// and www | Both serve the site with `200` | **Duplicate content.** Google sees 4 copies of every page. Fixed by the redirects below. |

---

## Step 1 — Back up the current DNS (2 min)

1. Bluehost → **Domains** → driftproductivity.com → **DNS**. Take a screenshot
   of the full zone. This is your backup and rollback reference.
2. Confirm there's no email product for driftproductivity.com (Bluehost →
   Email). If there turns out to be one, **stop** and update the email part of
   Step 3 before continuing.

## Step 2 — Deploy the site to Cloudflare Pages (10 min)

1. Create a free Cloudflare account at dash.cloudflare.com.
2. **Workers & Pages → Create → Pages → Connect to Git** → pick
   `Dilan-B/DriftLandingPage` → branch `main`.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `20`
4. Deploy, then open the `*.pages.dev` URL and click around. It should match the
   live site. (Preview URLs send `X-Robots-Tag: noindex` via `public/_headers`,
   so they will never compete with the real domain in Google.)

## Step 3 — Add the domain to Cloudflare (10 min)

1. Cloudflare → **Add a domain** → `driftproductivity.com` → **Free** plan.
2. Cloudflare scans the existing records. **Delete** all of these:
   - `MX @ driftproductivity.com`
   - the broken `TXT @ "DRIFTPRODUCTIVITY.COM."`
   - the broken `TXT default._domainkey`
   - the old `TXT _dmarc` (it gets replaced below)
   - `A webmail`, and any scanned `mail`, `ftp`, `cpanel`, `autodiscover`, or
     `autoconfig` records. They only served Bluehost's cPanel and mail.
   - Keep `A @ 50.6.2.202` (orange cloud) and `CNAME www` for now, so the site
     stays up until Step 5 replaces them.
3. **Add** these "this domain sends no email" records (RFC 7505 / M3AAWG best
   practice):

   | Type | Name | Content | Notes |
   | --- | --- | --- | --- |
   | MX | `@` | `.` with priority `0` | "Null MX": tells senders not to deliver here. If Cloudflare won't accept `.`, just have no MX record. |
   | TXT | `@` | `v=spf1 -all` | No server may send as @driftproductivity.com |
   | TXT | `_dmarc` | `v=DMARC1; p=reject; adkim=s; aspf=s;` | Receivers reject anything spoofing the domain |
   | TXT | `*._domainkey` | `v=DKIM1; p=` | Revokes any DKIM key |

   Cloudflare may offer to add these for you (DNS → Email security, or
   "prevent email spoofing"). Either way works.

   > If you ever want `@driftproductivity.com` email later, use Cloudflare
   > Email Routing (free forwarding) or a mailbox provider. Replace these
   > four records with that provider's MX/SPF/DKIM, and loosen DMARC to
   > `p=none` while testing.
3. Cloudflare then shows you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).

## Step 4 — Switch nameservers at Bluehost (2 min, then wait)

1. Bluehost → **Domains** → driftproductivity.com → **DNS / Nameservers** →
   **Custom** → paste Cloudflare's two nameservers → Save.
2. Wait for Cloudflare to email "driftproductivity.com is now active". That
   usually takes under an hour, and can take up to 24.

Until Step 5, the site keeps being served from Bluehost through Cloudflare
(the `A @ 50.6.2.202` record you kept), so there's no downtime.

## Step 5 — Attach the domain to Pages (5 min)

1. Workers & Pages → your project → **Custom domains** →
   **Set up a custom domain** → `driftproductivity.com` → Activate. When it
   asks to replace the existing `A @ 50.6.2.202` record, confirm.
2. Repeat for `www.driftproductivity.com`.
3. Both should show **Active** with an SSL certificate within a few minutes.

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

1. Pages project → **Metrics → Web Analytics → Enable**. It's cookie-free, so no
   consent banner is needed. The old Google Analytics placeholder has been
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

## Step 9 — Verify the anti-spoofing records (after Step 4 goes active)

```bash
nslookup -type=TXT driftproductivity.com 1.1.1.1
```

```bash
nslookup -type=TXT _dmarc.driftproductivity.com 1.1.1.1
```

You should see `v=spf1 -all` and `v=DMARC1; p=reject; ...`. A free checker
like MXToolbox's "Domain Health" should show SPF and DMARC passing, with no
mail server expected.

Also send a test message through the site's contact form. It opens an email to
`hello@ridilabs.com`; make sure it arrives in the Titan inbox. (ridilabs.com's
email is separate and isn't changed by any of this.)

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
