# WIX-FEATURE-INVENTORY.md

**Purpose:** inventory every feature/page/data store on the current official Wix site so nothing (content, forms, SEO, subscribers, donations, email) is lost at cutover.

**Audit limitation:** this environment's network allowlist blocks `nuclearalternativeproject.org`, so the live Wix site could **not** be crawled directly. The rows below are reconstructed from public search results and must be **verified by the owner inside the Wix dashboard** before any DNS change. Do not treat "unknown" as "absent."

Legend — Decision: **MIGRATE** (rebuild on new site) · **REPLACE** (new honest equivalent) · **REDIRECT** (preserve URL → new target) · **RETIRE** (intentionally drop) · **DECIDE** (owner).

| # | Feature / Page | Known URL (verify) | Purpose | Data it collects | Wix dependency | Must export | Decision | Data-loss / link risk |
|---|---|---|---|---|---|---|---|---|
| 1 | Home | `/` | Landing | none | Wix pages | content | REPLACE (new home) | Low |
| 2 | About | `/about-1` | Org + team | none | Wix pages | content, team photos | MIGRATE → `/about.html` (+ REDIRECT `/about-1`) | Medium (backlinks) |
| 3 | Work | `/work` | Projects/phases | none | Wix pages | content | MIGRATE/REDIRECT | Medium |
| 4 | Resources | `/resources` | Library/reports | possibly file downloads | Wix pages + media | PDFs, docs | DECIDE → MIGRATE/REDIRECT | **High** (indexed docs) |
| 5 | Nuclear for PR | `/nuclear-puerto-rico`, `/nuclearforpuertorico` | Explainer | none | Wix pages | content | MIGRATE/REDIRECT | Medium |
| 6 | Nuclear Alternative | `/nuclear-alternative` | Explainer | none | Wix pages | content | DECIDE | Medium |
| 7 | Alternative Energy | `/alternative-energy` | Explainer | none | Wix pages | content | DECIDE | Medium |
| 8 | Newsletter signup | site-wide (Wix Forms / Ascend) | Email capture | **email, name** | **High** (Wix contacts) | **subscriber list (CSV)** | DECIDE (provider) | **High** (loss of subscribers) |
| 9 | Contact form | likely `/contact` | Inquiries | name, email, message | **High** | past submissions | REPLACE (mailto now) / DECIDE | Medium |
| 10 | DONATE | nav / button | Donations | depends on processor | **High** if Wix Payments | **donation records, donor contacts** | **DECIDE** (processor) | **High** (financial/tax records) |
| 11 | SHOP / store | nav (if present) | Merchandise | orders, addresses, payment | **High** (Wix Stores) | **orders, products, customers** | **DECIDE** | **High** |
| 12 | Blog / News | if present | Articles | none | Wix Blog | posts + URLs | DECIDE | High (indexed) |
| 13 | Media library | n/a | Images/logos/video | n/a | **High** (static.wixstatic.com) | **all referenced assets** | MIGRATE (download) | **High** (assets vanish when Wix is cancelled) |
| 14 | SEO settings | Wix SEO | titles, redirects, verification | n/a | High | redirect rules, meta | MIGRATE | High |
| 15 | Site members (if any) | Wix Members | logins | account data | High | member export | DECIDE | High |

## Required owner actions before cutover
1. Log into Wix → **confirm which of the above actually exist** and add any missing.
2. Export: **contacts/subscribers, form submissions, donation records, store orders/products, blog posts, media library**, and the **full page/URL list** (Wix SEO → URL redirect manager also lists current redirects).
3. For each row, record the **final Decision** and, if MIGRATE/REDIRECT, the new destination in `URL-MIGRATION-MAP.md`.
4. Keep the Wix site **live and paid** until the new site is validated on the domain and the rollback window has passed (see DOMAIN-MIGRATION-RUNBOOK.md). **Do not cancel Wix before exports are verified** — `static.wixstatic.com` assets and all Wix data disappear on cancellation.

> No store, donation, newsletter, contact, resource, or indexed page may be silently dropped. Every row needs an explicit Decision signed off by the owner.
