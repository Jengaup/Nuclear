# Nuclear Alternative Project — Modern Website

A modern, responsive, bilingual (English / Spanish) redesign of the
[Nuclear Alternative Project](https://www.nuclearalternativeproject.org/) website,
built as a static site for **GitHub Pages**.

The Nuclear Alternative Project (NAP) is a 501(c)(3) nonprofit of Puerto Rican
engineers from the U.S. nuclear industry, dedicated to studying and educating
about advanced nuclear reactors — small modular reactors (SMRs) and
microreactors — as a clean, reliable, and resilient energy alternative for
Puerto Rico.

## What's included

- **Single-page, section-based design** — Hero, About/Mission, The Challenge,
  Our Work (timeline), Technology, Candidate Sites, FAQ, Get Involved,
  Newsletter, and Contact.
- **Everything from the original site and more**: mission, DOE-funded study
  findings (SMRs could replace up to 74% of Puerto Rico's power plants),
  Phase 2 siting study, and the two candidate sites (Manatí & Roosevelt Roads).

### Improvements over the original

- 🌐 **Bilingual EN / ES toggle** (persisted in `localStorage`)
- 🌙 **Light / dark mode** (respects system preference)
- 📊 **Animated statistics counters**
- 🕑 **Interactive timeline** of NAP milestones
- ❓ **Myth-busting FAQ** section (accordion)
- 🗺️ **Stylized map** of the two candidate sites
- 📱 **Fully responsive** with an accessible mobile nav
- ♿ **Accessibility**: skip link, ARIA labels, keyboard-friendly, reduced-motion support
- ⚡ **Zero dependencies / no build step** — pure HTML, CSS, and vanilla JS

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | All styling, theming, and responsive rules |
| `script.js` | Language toggle, theme, counters, nav, animations |
| `.nojekyll` | Serves files as-is on GitHub Pages |
| `404.html` | Friendly fallback page |

## Deploy to GitHub Pages

1. Push these files to your repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the branch and the `/ (root)` folder, then **Save**.
5. Your site publishes at `https://<user>.github.io/<repo>/`.

## Notes

This is an independent, community-built redesign celebrating NAP's mission.
Content was reconstructed from public sources (U.S. Department of Energy, Idaho
National Laboratory, ANS, World Nuclear News, NEI, and Charity Navigator).
Replace placeholder contact details, social links, and the donation link with
the organization's official ones before going live.
