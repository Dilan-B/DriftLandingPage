# Moving driftproductivity.com to Cloudflare

Goal: serve the site from **Cloudflare Pages** (fast global CDN, automatic HTTPS),
keep the **domain registration and email at Bluehost**, and do it without any
downtime or damage to the domain's search or email reputation.

Order matters. Do the steps top to bottom and don't skip the checks.

---

## What we found in the current DNS (checked 2026-11-19)

| Record | Current value | Problem |
| --- | --- | --- |
| Nameservers | `ns1.bluehost.com`, `ns2.bluehost.com` | — |
| `A` @ | `50.6.2.202` (Bluehost shared server) | Will move to Cloudflare Pages |
| `CNAME` www | `driftproductivity.com` | Will move to Cloudflare Pages |
| `A` webmail | `50.6.2.202` | Keep, DNS-only |
| `MX` @ | `0 driftproductivity.com` | **Must change.** Mail points at the website's hostname. Once the website moves to Cloudflare, mail would break. |
| `TXT` @ (SPF) | `"DRIFTPRODUCTIVITY.COM."` | **Broken — no SPF.** Outgoing mail is unauthenticated. |
| `TXT` default._domainkey (DKIM) | `"DEFAULT._DOMAINKEY.DRIFTPRODUCTIVITY.COM."` | **Broken — no DKIM key.** |
| `TXT` _dmarc | `v=DMARC1; p=none;` | OK as a starting point |
| http:// and www | Both serve the site with `200` | **Duplicate content.** Google sees 4 copies of every page. Fixed by the redirects below. |

---

## Step 1 — Get the real email records from Bluehost (5 min)

1. Bluehost → **Advanced** (cPanel) → **Email Deliverability**.
2. For `driftproductivity.com`, it shows the *correct* SPF and DKIM values and
   likely flags them as "Problems Exist". Copy both values somewhere safe:
   - SPF looks like `v=spf1 +a +mx +ip4:50.6.2.202 include:bluehost.com ~all`
     (**use Bluehost's exact value, not this example**).
   - DKIM is a long `v=DKIM1; k=rsa; p=MIIB...` string for `default._domainkey`.
3. Bluehost → **Domains → DNS** → take a screenshot of the full zone
   (your backup and rollback reference).

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
2. Cloudflare scans the existing records. Edit the list until it looks
   **exactly** like this:

   | Type | Name | Content | Proxy |
   | --- | --- | --- | --- |
   | A | `mail` | `50.6.2.202` | **DNS only (grey)** |
   | A | `webmail` | `50.6.2.202` | **DNS only (grey)** |
   | A | `ftp` / `cpanel` (if scanned) | `50.6.2.202` | DNS only (grey) |
   | MX | `@` | `mail.driftproductivity.com`, priority `0` | — |
   | TXT | `@` | *SPF value from Step 1* | — |
   | TXT | `default._domainkey` | *DKIM value from Step 1* | — |
   | TXT | `_dmarc` | `v=DMARC1; p=none;` | — |

   - **Delete** the broken TXT records that just say `DRIFTPRODUCTIVITY.COM.` /
     `DEFAULT._DOMAINKEY...` (replace them with the real values above).
   - **Delete** the `A @ 50.6.2.202` and `CNAME www` records. Pages recreates
     them in Step 5.
   - Anything mail-related must be **grey cloud**. Cloudflare's proxy only
     handles web traffic, and proxying mail hosts breaks email.
3. Cloudflare then shows you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).

## Step 4 — Switch nameservers at Bluehost (2 min, then wait)

1. Bluehost → **Domains** → driftproductivity.com → **DNS / Nameservers** →
   **Custom** → paste Cloudflare's two nameservers → Save.
2. Wait for Cloudflare to email "driftproductivity.com is now active". That
   usually takes under an hour, and can take up to 24.

> Between Step 4 and Step 5 the website briefly has no `A` record. To avoid
> even a short gap, you can temporarily keep `A @ 50.6.2.202` (proxied) in
> Step 3 and delete it only when Pages asks to replace it in Step 5.

## Step 5 — Attach the domain to Pages (5 min)

1. Workers & Pages → your project → **Custom domains** →
   **Set up a custom domain** → `driftproductivity.com` → Activate.
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

## Step 9 — Verify email still works (do it right after Step 4 goes active)

1. Send an email **to** your @driftproductivity.com address from Gmail → it
   should arrive in Bluehost webmail.
2. Send one **from** it to a Gmail address → open it → ⋮ → **Show original** →
   `SPF: PASS` and `DKIM: PASS`. If SPF and DKIM pass, the email side of the
   domain's reputation is now *better* than before.
3. After about 2 weeks of clean reports, consider tightening DMARC to
   `v=DMARC1; p=quarantine; rua=mailto:<your address>`. Not before.

## Step 10 — Bluehost hosting

- Stop uploading `drift-site.zip` to Bluehost. Every push to `main` now deploys
  automatically to Cloudflare.
- **Do not cancel the Bluehost hosting plan** while email lives there. Bluehost
  email runs on the hosting plan, so cancelling it deletes the mailboxes. If
  you later want to drop Bluehost entirely, move email first (e.g. Google
  Workspace or Zoho) and update the MX/SPF/DKIM records.

## Rollback

If anything goes wrong at any point: Bluehost → Nameservers → back to
`ns1.bluehost.com` / `ns2.bluehost.com`. The old zone and site are untouched
on Bluehost, so this fully restores the previous setup.
