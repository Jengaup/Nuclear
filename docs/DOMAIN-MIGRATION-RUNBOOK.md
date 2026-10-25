# DOMAIN-MIGRATION-RUNBOOK.md

**Move `www.nuclearalternativeproject.org` (and apex) from Wix → this GitHub Pages site, without losing email or data.**
**Nothing in this runbook is executed until the owner approves. No DNS/registrar change has been made.**

> This is a technical plan, not legal/tax/registrar advice. Exact dashboard labels vary by registrar; adapt as needed.

## 0. Pre-conditions (must ALL be true before touching DNS)
- PRE-LAUNCH-CHECKLIST.md fully signed off.
- Wix exports complete and verified (WIX-FEATURE-INVENTORY.md).
- Current DNS zone **fully recorded** (screenshot + export). In particular, note every **MX, TXT (SPF), DKIM (CNAME/TXT), DMARC (TXT), and any CNAME/verification** record. **These must be preserved.**
- Site validated locally and on a GitHub Pages preview.

## 1. Record current DNS (read-only)
Capture, for both `nuclearalternativeproject.org` and `www`:
- A / AAAA, CNAME, MX, TXT (SPF `v=spf1…`), DKIM selectors, DMARC `_dmarc`, any `TXT` verification (Google/Wix), CAA.
- Current TTLs. Lower TTLs to 300s **a day before** cutover to speed rollback (optional, low-risk).

> ⚠️ Email lives in DNS. **Do not remove or replace MX/SPF/DKIM/DMARC.** Migrating the website changes only the web records (A/AAAA/ALIAS for apex, CNAME for www). Leave all mail/verification records exactly as they are.

## 2. Prepare GitHub (repo side) — no DNS yet

### 2.0 Cutover swap list (the repo currently targets the PROVISIONAL URL)
The site is deliberately configured for **`https://jengaup.github.io/Nuclear/`** so the provisional
deployment is correct and does not emit misleading SEO signals. At cutover, change exactly these:

| File | Current (provisional) | Change to (final) |
|---|---|---|
| `CNAME` | **absent** (intentionally removed) | create with `www.nuclearalternativeproject.org` |
| `index.html` | `canonical`, `og:url`, `og:image`, `twitter:image` → `https://jengaup.github.io/Nuclear/…` | `https://www.nuclearalternativeproject.org/…` |
| `index.html` JSON-LD | `"url"`, `"logo"` → provisional | final domain |
| `about.html` | `canonical`, `og:url`, `og:image` → provisional | final domain (`/about.html`) |
| `sitemap.xml` | both `<loc>` → provisional | final domain |
| `robots.txt` | `Sitemap:` → provisional | final domain |
| `.well-known/security.txt` | `Canonical:` → provisional | final domain |
| `404.html` | `/Nuclear/assets/…`, `href="/Nuclear/"` | `/assets/…`, `href="/"` |

> ⚠️ Do **not** add `CNAME` back before the cutover window: pushing it triggers the deploy workflow,
> which would move the Pages site to the custom domain and break `jengaup.github.io/Nuclear/`
> while DNS still points to Wix.

1. Decide the serving branch for Pages (recommend `main` once merged; today the work is on `claude/nuclear-project-redesign-8jas1l`).
2. `CNAME` file in repo root = `www.nuclearalternativeproject.org` (already prepared locally, **not pushed**).
   - Note: with the **GitHub Actions** Pages source, the custom domain is primarily set in **Settings → Pages → Custom domain**; GitHub then manages the record and the CNAME file. Keep the repo `CNAME` consistent with the Settings value.
3. **Verify the domain in GitHub** (Settings → Pages → "Verify domain"): GitHub gives a `TXT` record like `_github-pages-challenge-<user>.nuclearalternativeproject.org` → value. This is an **additive** TXT record (does not affect email).

## 3. DNS changes at cutover (additive / web-only)
Add/point **only web records**:
- **www** → `CNAME` to `jengaup.github.io.` (the Pages host). (If www currently CNAMEs to Wix, this value is replaced — www web only, not email.)
- **apex** `nuclearalternativeproject.org` → the four GitHub Pages **A records** and four **AAAA records**, OR an ALIAS/ANAME to `jengaup.github.io` if the registrar supports it. (Use GitHub's then-current documented Pages IPs — confirm in GitHub Docs at cutover; do not hard-code stale IPs.)
- Add the GitHub **domain-verification TXT**.
- **Leave untouched:** MX, SPF TXT, DKIM, DMARC, CAA, and any non-web verification TXT.

## 4. Enable HTTPS
- After DNS propagates and GitHub shows the domain as configured, wait for the certificate to issue, then enable **Settings → Pages → Enforce HTTPS**.
- Confirm no mixed content (all site resources are already HTTPS/relative → expected clean).

## 5. Post-cutover verification
- `https://www.…org/` and `https://nuclearalternativeproject.org/` both load the new site over valid TLS.
- Apex redirects to www (or vice-versa) consistently; canonical matches the chosen host. (Site canonical currently = `https://www.nuclearalternativeproject.org/` → make www the canonical host.)
- Spot-check preserved URLs from URL-MIGRATION-MAP.md (200 / redirect, not 404).
- **Email still works:** send/receive a test to an `@nuclearalternativeproject.org` mailbox; confirm MX/SPF/DKIM/DMARC unchanged (use an MX/SPF checker).
- Re-run Lighthouse/axe; confirm no console/CSP errors; JSON-LD valid (Rich Results Test — after launch, with approval).
- `robots.txt`, `sitemap.xml`, `security.txt`, favicon resolve at the domain root.

## 6. Rollback (if the new site fails)
Because the Wix site is **kept live and paid** throughout:
1. In DNS, **restore the previous web records** (www CNAME → Wix target; apex → previous Wix A/ALIAS) from the Step 1 capture.
2. Remove the GitHub Pages custom domain (Settings → Pages) to avoid conflict.
3. With low TTLs, propagation is minutes. Email was never touched, so it is unaffected either way.
4. Keep the GitHub site on `jengaup.github.io/Nuclear/` as the staging copy while issues are fixed.

## 7. Decommission Wix (only after success + grace period)
- Wait a **grace period** (e.g. 2–4 weeks) with the new site stable and old URLs preserved.
- Confirm all `static.wixstatic.com` assets have been localized (ASSET-LICENSE-AUDIT.md) — **the team group photo is still hotlinked today.**
- Confirm all exports retained. Only then consider downgrading/cancelling Wix. **Cancelling Wix deletes its media and data.**

## Notes on limits
- GitHub Pages cannot send custom HTTP headers (HSTS, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, COOP/COEP). If these are required, put **Cloudflare (free)** in front: it also enables real **301 redirects** for URL preservation and HSTS. Documented as an optional enhancement, not required for launch.
