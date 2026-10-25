# OFFICIAL-STATUS-DECISION.md

## The issue
The footer currently reads: **"An independent, community-built site celebrating NAP's mission."** (key `foot_disc`; ES: *"Sitio independiente creado por la comunidad, celebrando la misión del NAP."*)

If this repository becomes the **official** site at `www.nuclearalternativeproject.org`, that disclaimer is contradictory and misleading. If it is **not** official, it must **not** silently replace the official Wix site.

## Decision required (owner)
Choose one:

- **[ ] A — Make it official.** NAP formally adopts this repo as its official website.
  - Then: replace `foot_disc` with approved institutional wording (e.g. *"© Nuclear Alternative Project. All rights reserved."* — the copyright line is already present; the "community-built" sentence would be **removed** or replaced with an approved tagline).
  - Confirm who owns/controls the repo and domain on NAP's behalf.
  - Proceed with the domain migration runbook.

- **[ ] B — Keep it unofficial (for now).** Then it must **not** take over the official domain. Keep the disclaimer, keep it on `jengaup.github.io/Nuclear/`, and do not change DNS.

## Current state (safe default)
- **No change made.** The disclaimer is **retained** verbatim pending this decision (per brief §13).
- Launch to the official domain is **blocked** until option A is explicitly chosen and the authorship/ownership of the repo is confirmed by NAP.

## If A is chosen — proposed replacement wording (pending approval)
- EN: *"Official website of the Nuclear Alternative Project."* (as a footer tag) + keep the © line.
- ES: *"Sitio oficial del Nuclear Alternative Project."*
- Remove `foot_disc` "community-built" sentence only after written confirmation.
