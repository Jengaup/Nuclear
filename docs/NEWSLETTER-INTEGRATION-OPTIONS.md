# NEWSLETTER-INTEGRATION-OPTIONS.md

The fake newsletter has been replaced with an honest "Email us to get updates" CTA. Below are real options to add a working, privacy-respecting signup. **No provider will be selected or integrated without owner approval.**

## Key constraint: GitHub Pages is static (no server)
A newsletter API key **must not** live in front-end JS. Options:
- **(1) Provider-hosted form/page** — no secret on site (link or embed). Simplest, compliant.
- **(2) Serverless function** (Cloudflare Worker / Netlify / Vercel function) holding the secret, called by the form. More control, a little infra.
- Never put a private API key in the repo or JS.

## Provider comparison (verify current pricing at decision time)

| Provider | Free tier | Double opt-in | Unsubscribe | Export | Data residency / privacy | GitHub Pages fit |
|---|---|---|---|---|---|---|
| **Buttondown** | small free tier | Yes | Yes (automatic) | Yes (CSV/API) | US; privacy-friendly, minimal | Hosted page/embed or API via Worker |
| **MailerLite** | ~1k subs free | Yes | Yes | Yes | EU/US; GDPR tools | Hosted form or embed |
| **Brevo (Sendinblue)** | generous free | Yes | Yes | Yes | EU (GDPR) | Hosted form or API via Worker |
| **Mailchimp** | limited free | Yes | Yes | Yes | US | Embedded form (no secret) |
| **EmailOctopus** | free tier | Yes | Yes | Yes | US/EU | Hosted form or API |
| **Self-host (Listmonk)** | free (self-run) | Yes | Yes | Yes (full control) | your server | Needs a server; most ops burden |

## Requirements for whichever is chosen (per brief §3–§4)
- Server-side confirmation of real subscription (no simulated success).
- Do **not** clear the field or show success on failure.
- **Double opt-in** where supported.
- Privacy notice + link to Privacy Policy next to the field; clear description of what will be sent; **un-prechecked** consent where applicable.
- **Unsubscribe** link in every email; documented access/correction/deletion process.
- Do **not** auto-add contacts from donations/contact/email who didn't opt into the newsletter.
- Accessible messages (`aria-live`), loading state, double-submit prevention, timeout + error handling, basic anti-abuse (honeypot/rate-limit; avoid invasive CAPTCHA/fingerprinting).
- Test matrix (no real signups): success, invalid email, network error, timeout, already-subscribed.
- No "Join over N people" unless the number is real and current.

## Recommended path
**Buttondown or MailerLite hosted form** (option 1) for the simplest compliant launch (no secret on the static site, built-in double opt-in + unsubscribe + export). Upgrade to a serverless integration (option 2) only if an on-brand inline form is required. Decision + DPA review pending owner.
