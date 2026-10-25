# URL-MIGRATION-MAP.md

**Goal:** preserve every indexed/linked URL of the current Wix site so backlinks and search rankings survive the move to GitHub Pages at the apex/www domain.

**GitHub Pages redirect limitation (important):** GitHub Pages serves static files only. It does **not** support server-side 301 redirects or per-path redirect rules. Options to preserve an old path:
- **(A) Real file at the same path** — e.g. create `/about/index.html` so `/about` keeps working. *Preferred for important pages.*
- **(B) HTML meta-refresh + canonical** stub page at the old path (`<meta http-equiv="refresh" content="0;url=…">` + `<link rel=canonical>`). Works without JS failing silently; not a true 301 (weaker SEO) but acceptable.
- **(C) Front a CDN (Cloudflare) that issues real 301s** — best for SEO; requires the CDN step in the runbook.

> Recommendation: use (A) for the top pages, (C) if SEO preservation is a priority. Avoid pure-JS redirects for critical pages.

## Map (fill "New destination" + "Decision" with owner)

| Old Wix URL | Likely content | New destination | Method | Status |
|---|---|---|---|---|
| `/` | Home | `/` (new home) | Same path | Ready |
| `/about-1` | About/team | `/about.html` | A (stub `/about-1/index.html`) or C (301) | **Needs stub** |
| `/work` | Work | `/#work` or `/work/` page | A or C | DECIDE |
| `/resources` | Library/PDFs | `/resources/` (host the PDFs) or `/#resources` | A + host files | **Needs files** |
| `/nuclear-puerto-rico` | Explainer | `/#sites` or dedicated page | A or C | DECIDE |
| `/nuclearforpuertorico` | Explainer (alt) | same as above | A or C | DECIDE |
| `/nuclear-alternative` | Explainer | `/#technology` or page | A or C | DECIDE |
| `/alternative-energy` | Explainer | `/#technology` or page | A or C | DECIDE |
| `/contact` (if exists) | Contact | `/#contact` | A or C | DECIDE |
| `/donate` (if exists) | Donate | `/#involved` or processor URL | A or C | DECIDE |
| `/shop` + product URLs (if exists) | Store | DECIDE (keep Wix store? external?) | — | **DECIDE** |
| Blog post URLs (if exist) | Articles | per-post pages | A or C | **DECIDE** |

## Rules
- Pull the **authoritative** URL list from Wix (SEO → URL redirect manager / sitemap) before finalizing — the table above is reconstructed and may be incomplete.
- Do not delete any page that has backlinks or search presence without an equivalent destination.
- The new `sitemap.xml` currently lists `/` and `/about.html`; **add every preserved route** here once decided.
- After cutover, re-crawl old URLs and confirm each returns 200 or a proper redirect (not 404). Record results in the "Status" column.
- Keep a short list of **high-value backlinks** (DOE, INL, ANS, NEI, news articles) and verify the exact URLs they point to are preserved.
