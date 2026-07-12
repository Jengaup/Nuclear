# Security Policy

## Reporting a vulnerability

If you discover a security issue in this website, please report it privately:

- **Email:** info@nuclearalternativeproject.org
- Please include steps to reproduce and any relevant URLs.
- Please do **not** open a public issue for security reports.

We aim to acknowledge reports within a few business days.

## Scope

This repository is a **static website** (HTML/CSS/JS) served via GitHub Pages.
There is no backend, database, authentication, or user data collected or stored.
The newsletter form is a front-end demo only and does not transmit data.

## Hardening in place

- **Content-Security-Policy** (via `<meta>`): `default-src 'self'`, no
  `unsafe-inline` scripts (the single inline bootstrap script is allow-listed by
  SHA-256 hash), `object-src 'none'`, framing restricted to YouTube, and
  `upgrade-insecure-requests`.
- **Referrer-Policy:** `strict-origin-when-cross-origin`.
- **External links:** all `target="_blank"` links use `rel="noopener noreferrer"`
  to prevent reverse tabnabbing and referrer leakage.
- **Third-party embeds:** the YouTube player uses the privacy-enhanced
  `youtube-nocookie.com` domain with a scoped `allow` attribute.
- **HTTPS:** served over TLS by GitHub Pages.

## Note on HTTP response headers

GitHub Pages does not allow setting custom HTTP response headers, so
header-only protections (`Strict-Transport-Security`, `X-Content-Type-Options`,
`X-Frame-Options`, `Permissions-Policy`) cannot be applied here. If this site is
ever fronted by a CDN or custom host (e.g. Cloudflare, Netlify), add those
headers there. Enable **Settings → Pages → Enforce HTTPS** in the repository.
