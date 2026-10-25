# PRE-LAUNCH-CHECKLIST.md

**No deploy, push, DNS change, or Wix cancellation may happen until every REQUIRED item is checked and signed off by the owner.**

## A. Governance & status
- [ ] Official-status decision made (OFFICIAL-STATUS-DECISION.md); footer wording approved.
- [ ] Repo + domain ownership/control confirmed on behalf of NAP.

## B. Claims validation
- [ ] Scientific/regulatory claims reviewed by a NAP expert (SCIENTIFIC-CLAIMS-AUDIT.md); approved wording for #1, #2, #3, #6, #8, #10, #14, #16.
- [ ] Institutional/fiscal claims confirmed (ORGANIZATION-CLAIMS-AUDIT.md): legal name, 501(c)(3) status, EIN display, email, phone, location.
- [ ] Tax-deductibility sentence revised + approved (do not keep the universal promise).
- [ ] Leadership names/titles/spelling confirmed; **photo consent** obtained; advisory board confirmed.
- [ ] No endorsement implied by DOE/NRC/labs/companies.

## C. Partners & assets
- [ ] Partner list finalized; each relationship classified; no implied endorsement (PARTNERS-AUTHORIZATION-AUDIT.md).
- [ ] Logo usage authorized **if** logos are added (none used today).
- [ ] Team **group photo localized** (remove `static.wixstatic.com` hotlink) (ASSET-LICENSE-AUDIT.md).
- [ ] Image licenses confirmed (sites map base imagery, headshots, fonts OFL notice, BONUS film reuse).

## D. Functional honesty
- [x] Newsletter no longer shows fake success (replaced with honest CTA). *(done in working tree)*
- [ ] Newsletter provider chosen (NEWSLETTER-INTEGRATION-OPTIONS.md) **or** keep honest CTA.
- [x] Donate CTA honest ("Contact us about donating"). *(done)*
- [ ] Donation processor URL confirmed (or keep contact-only); fees/receipts/refunds/data documented.
- [ ] No simulated success anywhere (verified).

## E. Wix migration & data
- [ ] Wix feature inventory confirmed in dashboard (WIX-FEATURE-INVENTORY.md).
- [ ] Exports done + verified: subscribers, form submissions, donations, store orders/products, blog, media, URL list.
- [ ] URL migration map finalized; redirects/stubs created for indexed pages (URL-MIGRATION-MAP.md).
- [ ] Wix kept live + paid through grace period.

## F. Domain & email
- [ ] Current DNS zone exported/screenshotted; MX/SPF/DKIM/DMARC recorded.
- [ ] GitHub domain verification TXT ready.
- [ ] Web-only DNS plan reviewed (DOMAIN-MIGRATION-RUNBOOK.md); **email records preserved**.
- [ ] Rollback procedure understood; TTLs lowered beforehand.

## G. Legal pages
- [ ] Privacy Policy (EN/ES) reviewed/approved → published + linked (draft in docs/legal-draft/).
- [ ] Terms of Use (EN/ES) reviewed/approved → published + linked.
- [ ] Accessibility statement (EN/ES) reviewed/approved → published + linked.
- [ ] Footer links to the three pages added (not yet present — pending approval of content).

## H. Accessibility (WCAG 2.2 AA target)
- [x] 1 h1/page, alt text, focus-visible, skip link, keyboard nav, Escape on menu, reduced-motion (CSS+JS), aria-pressed on theme, SVG aria-label, no empty buttons, no broken anchors.
- [ ] Color-contrast values recorded for both themes (teal/orange/blue/secondary text/focus).
- [ ] BONUS video captions/transcript added.
- [ ] Manual AT pass (screen reader) + 200% zoom/reflow + mobile/tablet/desktop.

## I. SEO / tech
- [x] canonical, og:url, Twitter, JSON-LD (verified fields), per-language title/description.
- [x] sitemap.xml + robots.txt (search allowed, AI bots blocked) at final domain.
- [ ] Decide hreflang / `/en//es/` strategy (or accept single-URL JS i18n).
- [ ] After launch (with approval): Google Search Console + Bing Webmaster verification, submit sitemap, Rich Results test.

## J. Security
- [x] Strict CSP, Referrer-Policy, noopener noreferrer, frame-buster, email obfuscation, self-hosted fonts, Actions pinned to SHAs.
- [ ] Enable "Enforce HTTPS" after propagation.
- [ ] (Optional) Cloudflare for HSTS/301s/other headers.
- [x] No secrets in repo; no PII in logs/localStorage; no tracking added.

## K. Final gates
- [ ] Owner's explicit written approval to deploy.
- [ ] Change window + responsible approver named.
- [ ] Backup of Wix + rollback plan confirmed.
