# THIRD-PARTY-SERVICES.md

All external services, resources, and data stores touched by the site, for the Privacy Policy and a cookie-banner decision.

| Service | Purpose | When it loads | Data it may receive | Cookies/storage | Essential? |
|---|---|---|---|---|---|
| **GitHub Pages** | Static hosting | Every request | Visitor IP, User-Agent (standard server logs, controlled by GitHub) | none set by us | Yes |
| **DNS / registrar** (TBD) | Domain resolution | Every request | DNS query metadata | none | Yes |
| **YouTube** (`youtube-nocookie.com`) | BONUS film embed | Only on §Film (iframe) | On play: IP, device, YouTube cookies **within the iframe** (privacy-enhanced mode defers cookies until interaction) | YouTube's own, inside iframe only | Feature (video) |
| **static.wixstatic.com** | Team group photo (hotlinked) — **transitional** | On About/home image load | Visitor IP → Wix CDN | none | **Remove** (localize) |
| **Google Fonts** | — | **Not used** (self-hosted) | — | — | n/a |
| Analytics / Pixels / Ads | — | **None present** | — | — | n/a |
| **localStorage** (first-party) | `nap-lang`, `nap-theme` — remember language & theme | On load/toggle | none (values are "en"/"es", "light"/"dark") | first-party only | Functional |

## Cookie-banner decision
- The site sets **no cookies** and uses `localStorage` **only** for two functional preferences (language, theme). These are **strictly necessary / functional**, store no personal data, and are not used for tracking or sharing.
- **Conclusion:** no consent banner is required for current functionality. **Do not add** a cookie banner, Google Analytics, Meta Pixel, or any tracker without explicit owner approval.
- **If** analytics is later approved, prefer a privacy-respecting, cookieless option and **then** add a proper consent mechanism + update the Privacy Policy and this file.
- The **YouTube** embed can set cookies **once the user plays the video** (inside its iframe). Mitigations in place: `youtube-nocookie.com` + no autoplay. Mention this in the Privacy Policy. Optionally add a "click to load video" façade if stricter consent is desired (owner decision).

## Security/headers note
GitHub Pages cannot set HSTS, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, COOP/COEP/CORP. CSP + Referrer-Policy are delivered via `<meta>`; framing is mitigated by a JS frame-buster. Full header control needs a CDN (Cloudflare) in front. (See SECURITY.md.)
