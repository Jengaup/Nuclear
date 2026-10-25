# ASSET-LICENSE-AUDIT.md

Every asset referenced by the site, with origin, owner, license/authorization, and migration status. **The team group photo is still hotlinked from Wix and must be localized before Wix is cancelled.**

| Asset | Path / source | Origin | Owner | License / authorization | Status |
|---|---|---|---|---|---|
| Primary logo | `assets/logo.png` | Owner-provided (uploaded) | NAP | Owner-supplied for this site | ✅ local |
| Logo (light) | `assets/logo-light.png` | Derived from logo (recolored) | NAP | Derivative of owner asset | ✅ local |
| Favicon set | `assets/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Generated from logo mosaic | NAP | Derivative of owner asset | ✅ local |
| Sites map | `assets/sites-map.jpg` | Owner-provided (uploaded) | NAP (or its source) | **CONFIRM** the map's own source/license (satellite base imagery) | ⚠️ confirm license |
| Team headshots | `assets/CEO.jpg`, `COO.jpg`, `CTO.jpg`, `CNO.jpg` | Owner-provided (uploaded via GitHub) | Individuals / NAP | **CONFIRM** photographer license + each person's consent | ⚠️ confirm consent/credit |
| Team group photo | **`static.wixstatic.com/...mv2.jpg` (HOTLINKED)** | Wix media (current site) | NAP | Owner's own media | ❌ **MIGRATE: download locally before cancelling Wix** |
| Fonts | `assets/fonts/*.woff2` (Space Grotesk, IBM Plex Mono, Inter) | Google Fonts via `@fontsource` (npm) | Respective foundries | **SIL Open Font License (OFL)** — self-hosting permitted | ✅ local (verify OFL notice retained) |
| BONUS film | YouTube embed `yRYfUsY5W8o` (youtube-nocookie) | YouTube (third-party upload) | Film uploader / public-domain 1967 US gov film | **CONFIRM** reuse basis; it's embedded, not rehosted | ⚠️ confirm + add caption/transcript |

## Actions
1. **Localize the team group photo** now (download from the Wix URL → `assets/team-group.jpg`, keep dimensions, add accessible `alt` + credit) so the About section doesn't break when Wix is cancelled. *Not done yet — the Wix domain is blocked from this environment; do on a machine with access, or the owner provides the file.*
2. Confirm **license of the satellite base image** in `sites-map.jpg` (if it uses Google/Esri imagery, confirm terms or replace).
3. Confirm **photographer license** and **written consent** for the four headshots and the group photo; add credit line if required.
4. Keep the **OFL license text** for the fonts in the repo (add `assets/fonts/LICENSE-OFL.txt`) to satisfy the font license's attribution requirement.
5. Confirm the **BONUS film** reuse basis; add captions/transcript or a link to the source (accessibility + rights).
6. No third-party copyrighted material may be copied without permission.
