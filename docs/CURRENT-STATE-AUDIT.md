# CURRENT-STATE-AUDIT.md

**Project:** Nuclear Alternative Project — static website
**Provisional URL:** https://jengaup.github.io/Nuclear/
**Target domain:** https://www.nuclearalternativeproject.org/ (apex: https://nuclearalternativeproject.org/)
**Audit date:** 2026-10-25
**Audited by:** Claude (technical implementation). **Not legal, regulatory, tax, or nuclear advice.**

> Status: this repository is a redesign. Nothing in this audit has been deployed, pushed, or DNS-changed. All fixes described here are applied to the working tree only and await owner approval.

---

## 1. Repository & hosting

| Item | Finding |
|---|---|
| Git branch (Pages) | `claude/nuclear-project-redesign-8jas1l` (current working branch). Default branch `main` exists. |
| Deploy method | GitHub Actions workflow `.github/workflows/deploy-pages.yml` (Pages "GitHub Actions" source), `enablement: true`, actions pinned to commit SHAs. |
| Live base path | Served under `/Nuclear/` on `jengaup.github.io`. |
| CNAME | **None in repo before this task.** `CNAME` (= `www.nuclearalternativeproject.org`) now created locally, **not pushed**. |
| `.nojekyll` | Present (serves files as-is). |

## 2. File inventory

- **Pages:** `index.html` (home, 10 sections), `about.html` (dedicated About), `404.html` (custom, now bilingual).
- **Styles/scripts:** `styles.css` (self-hosted @font-face + design system), `script.js` (i18n, theme, nav, counters, reveal, email assembly).
- **Assets:** `assets/logo.png`, `assets/logo-light.png`, favicon set (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`), `assets/sites-map.jpg`, team photos `assets/{CEO,COO,CTO,CNO}.jpg`, `assets/fonts/*.woff2` (Space Grotesk, IBM Plex Mono, Inter — latin subset, self-hosted).
- **Config/meta:** `robots.txt`, `sitemap.xml`, `.well-known/security.txt`, `SECURITY.md`, `README.md`, `CNAME` (local).
- **No PDFs, no manifest.json, no analytics, no build tooling** (zero-dependency static site).

## 3. Routes

| Route | Status |
|---|---|
| `/` (index.html) | OK |
| `/about.html` | OK, linked from nav + footer + home "read our story" |
| `/404.html` | OK (GitHub Pages serves for unknown paths) |
| Unlinked pages | None found. |

## 4. Path portability (critical for domain move)

- `index.html`, `about.html`, `styles.css`, `script.js` use **relative** asset paths (`assets/…`, `styles.css`) → work both under `/Nuclear/` and at domain root. ✅
- Cross-page links use relative forms (`about.html`, `index.html#work`). ✅
- **Absolute URLs that referenced the provisional host** (now updated to final domain for the cutover build): `sitemap.xml`, `robots.txt` (Sitemap line), `.well-known/security.txt` (Canonical), and new `<link rel=canonical>`/`og:url` tags.
- `404.html` uses root-absolute paths (`/assets/…`, `/`) — correct at domain root; on the provisional `/Nuclear/` these resolve to the host root (acceptable for an error page; see URL-MIGRATION-MAP.md).

## 5. Internationalization (EN/ES)

- Mechanism: single URL, JS swaps text of `[data-i18n]` nodes from an `I18N` object; preference in `localStorage` key `nap-lang`.
- **Fixes applied:** capture/set now use `textContent` (was `innerHTML`); `<html lang>` updates; `<title>`, `meta description`, `og:title`, `og:description` now swap per language (via `data-title-es` / `data-desc-es`); language button exposes an accessible name per state.
- Coverage: **100%** — every `data-i18n` key has an ES string (index 153 keys, about 58 keys, 0 missing).
- **Open decision:** single-URL JS i18n is weaker for SEO than `/en/` `/es/` routes. Documented as a future option (see §Bilingual strategy in PRE-LAUNCH-CHECKLIST.md). Not changed now.

## 6. Theme (light/dark)

- `data-theme` on `<html>`; respects `prefers-color-scheme`; preference in `localStorage` `nap-theme`; now wrapped in try/catch and exposes `aria-pressed` + per-state label on the toggle.

## 7. Forms / CTAs — honesty fixes

| Element | Before | After (this task) |
|---|---|---|
| Newsletter | Fake: validated, showed "Thanks! We'll keep you posted", cleared field, **stored/sent nothing**. | Replaced with honest CTA "Email us to get updates" (mailto). No input, no simulated success. Integration options documented. |
| Donate (card) | Button "Donate" → mailto. | Relabeled "Contact us about donating" → mailto (honest; no online processor exists). |
| Donate (claim) | "Every contribution to our 501(c)(3) is tax-deductible." | **Unchanged** — flagged for owner validation (ORGANIZATION-CLAIMS-AUDIT.md). |
| Join us / Learn more | mailto / in-page anchor | OK (honest). |
| Nav "Donate" | Anchors to #involved section | OK (navigation, not a false action). |

## 8. Links to the current official (Wix) site

- Footer "nuclearalternativeproject.org ↗" and Resources cards link to `nuclearalternativeproject.org/resources`, `/work`, `/nuclear-puerto-rico`, `/about-1`. These are **live Wix routes today**; after migration they must resolve on the new site (see URL-MIGRATION-MAP.md).

## 9. External assets & third parties

- **static.wixstatic.com** — the About/team *group* photo is still hotlinked (team headshots were uploaded locally). Must be localized before Wix is cancelled (ASSET-LICENSE-AUDIT.md).
- **YouTube (youtube-nocookie.com)** — BONUS reactor film embed.
- **GitHub Pages** (host), **DNS/registrar** (TBD).
- No Google Fonts (now self-hosted), no analytics, no trackers, no ad/marketing pixels. (THIRD-PARTY-SERVICES.md)

## 10. Claims present on the site

- Scientific/technical & regulatory → SCIENTIFIC-CLAIMS-AUDIT.md.
- Institutional/fiscal/leadership → ORGANIZATION-CLAIMS-AUDIT.md.
- Partners/logos → PARTNERS-AUTHORIZATION-AUDIT.md.

## 11. Contact / org data shown

- Email `info@nuclearalternativeproject.org` (now runtime-obfuscated), phone `(301) 401-5167` (tel:), EIN `47-5353289`, 501(c)(3), est. 2015, "Puerto Rico · USA". All require owner confirmation before launch.

## 12. Storage, cookies, trackers

- `localStorage`: `nap-lang`, `nap-theme` only (functional preferences, no PII, no tracking). No cookies set. No sessionStorage. No fingerprinting. (THIRD-PARTY-SERVICES.md)

## 13. Accessibility (summary; full plan in checklist)

- Single `h1` per page ✅, all `<img>` have `alt` ✅, all `target=_blank` have `rel="noopener noreferrer"` ✅, no empty-name buttons ✅, no broken in-page anchors ✅, skip link ✅, `:focus-visible` styles ✅, `prefers-reduced-motion` now respected by CSS **and** JS counters ✅, mobile nav closes on Escape with focus return ✅.
- **Remaining for owner/expert:** color-contrast audit values, BONUS video captions/transcript, formal WCAG 2.2 AA statement.

## 14. SEO

- Added: `<link rel=canonical>`, `og:url`/`og:site_name`/`og:image`, Twitter card, Organization JSON-LD (verified fields only), `meta description` per language.
- `sitemap.xml` + `robots.txt` (search engines allowed; AI/scraper bots disallowed).
- hreflang intentionally **not** added — single-URL JS i18n makes it ambiguous; revisit if `/en/ /es/` is adopted.

## 15. Security (see SECURITY.md + THIRD-PARTY-SERVICES.md)

- Strict CSP (no `unsafe-inline` scripts; inline bootstrap allow-listed by SHA-256), Referrer-Policy, `noopener noreferrer`, JS anti-clickjacking (frame-buster), email obfuscation, HTTPS.
- **Cannot be set on GitHub Pages (header-only):** HSTS, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, COOP/COEP/CORP → require a CDN/proxy; documented.

## 16. Issues fixed in this task

1. Fake newsletter success → honest CTA.
2. Donate CTA label made honest.
3. i18n: `innerHTML`→`textContent`; title/description/lang now sync per language.
4. JS counters now respect `prefers-reduced-motion`.
5. Mobile nav: Escape to close + focus return.
6. Theme toggle: `aria-pressed` + per-state accessible label.
7. Reactor SVG: added `aria-label`.
8. 404: now bilingual, `noindex`, root-absolute paths.
9. SEO meta: canonical, og:url, Twitter, JSON-LD.
10. Domain-facing files (sitemap/robots/security.txt) + canonical point to final domain; `CNAME` prepared (not pushed).

## 17. Decisions requiring owner approval (blockers to launch)

See PRE-LAUNCH-CHECKLIST.md. Key ones: official-status wording, tax-deductibility phrasing, partner/logo authorization, newsletter & donation providers, Wix feature/data export, DNS/email preservation, scientific-claim validation.
