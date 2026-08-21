# Website UI/UX Redesign Concepts

Senior UI/UX design proposals for three Philippine-based firms:

- **[FGDLaw](https://fgdlaw.net/)** — The Law Firm of Frederick G. Dedace (established 2002)
- **[Fortitude Global Dimensions Inc.](https://www.fortitudeglobal.com.ph/)** — HR management & business consultancy firm (FGDi)
- **[United Royale Corporation](https://unitedroyalecorp.net/)** — HR & manpower support services provider (URC)

For each site, two distinct art directions were designed as requested:

1. **Modern Professional** — polished, trust-building, corporate-grade
2. **Gen Z / Alpha** — bold, vibrant, mobile-native, casual-tone

Each concept is a full home-page mockup delivered as high-resolution **JPEG** and **PDF**, plus the underlying **HTML/CSS source** so the layouts can be inspected, edited, or handed to a front-end developer directly.

## Files

| Site | Direction | Source | JPEG | PDF |
|---|---|---|---|---|
| FGDLaw | Modern Professional | [`fgdlaw/professional.html`](fgdlaw/professional.html) | [`exports/fgdlaw-professional.jpg`](exports/fgdlaw-professional.jpg) | [`exports/fgdlaw-professional.pdf`](exports/fgdlaw-professional.pdf) |
| FGDLaw | Gen Z / Alpha | [`fgdlaw/genz.html`](fgdlaw/genz.html) | [`exports/fgdlaw-genz.jpg`](exports/fgdlaw-genz.jpg) | [`exports/fgdlaw-genz.pdf`](exports/fgdlaw-genz.pdf) |
| Fortitude Global | Modern Professional | [`fortitude/professional.html`](fortitude/professional.html) | [`exports/fortitude-professional.jpg`](exports/fortitude-professional.jpg) | [`exports/fortitude-professional.pdf`](exports/fortitude-professional.pdf) |
| Fortitude Global | Gen Z / Alpha | [`fortitude/genz.html`](fortitude/genz.html) | [`exports/fortitude-genz.jpg`](exports/fortitude-genz.jpg) | [`exports/fortitude-genz.pdf`](exports/fortitude-genz.pdf) |
| United Royale | Modern Professional | [`unitedroyale/professional.html`](unitedroyale/professional.html) | [`exports/unitedroyale-professional.jpg`](exports/unitedroyale-professional.jpg) | [`exports/unitedroyale-professional.pdf`](exports/unitedroyale-professional.pdf) |
| United Royale | Gen Z / Alpha | [`unitedroyale/genz.html`](unitedroyale/genz.html) | [`exports/unitedroyale-genz.jpg`](exports/unitedroyale-genz.jpg) | [`exports/unitedroyale-genz.pdf`](exports/unitedroyale-genz.pdf) |

## Site Analysis

### FGDLaw (fgdlaw.net)
- **What it is:** A boutique Manila law firm, established 2002, led by Atty. Frederick G. Dedace, PhD. Practice areas span corporate/labor law, data privacy, family/special proceedings, and litigation.
- **Current site observations:** Single long-scroll page — About, Practice Areas, Meet the Team (5 attorneys/staff with detailed bios), Administrative Support Team, Contact form. Content is credibility-rich (degrees, bar admissions, memberships) but presented as dense text blocks with no visual hierarchy, imagery, stats, or clear calls-to-action. No visible practice-area icons, trust badges, or structured navigation.
- **Opportunity:** Surface the firm's 23+ years of credibility and impressive attorney credentials through scannable visual hierarchy (stat bands, icon-led service cards, structured team grid) while keeping the page easy to navigate via anchor nav.

### Fortitude Global Dimensions Inc. (fortitudeglobal.com.ph)
- **What it is:** An HR management & business consultancy (FGDi), founded 2014, run by the same family/leadership (Atty. Carl Dedace is President). Tagline: *"It's all about finding the right pieces!"* / *"We make things happen!"*
- **Current site observations:** Very minimal single-page site — a hero statement, a short "Who We Are" paragraph, a slogan, and a contact form. No services breakdown, no process, no stats, no visual identity beyond plain text on a blank background.
- **Opportunity:** The strongest asset here is the untapped "right pieces" tagline — a literal puzzle-piece metaphor that was never visualized. There's also a full white-space vacuum: no services grid, process steps, or credibility markers exist yet, giving the most creative freedom of the two sites.

### United Royale Corporation (unitedroyalecorp.net)
- **What it is:** A manpower/HR support services provider (URC) with three offices (Makati head office, Alaminos City in Pangasinan, and Pasig). Offers nine service lines — janitorial & maintenance, messengerial, administrative, HR & billing, secretarial/executive support, encoding & dealer coordination, telemarketing/telesales/money-sorting, credit investigation, and other utility personnel. Built around a "WE CARE" values acronym (Competence, Accountability, Resilience, Excellence).
- **Current site observations:** A short single-page site: hero tagline, a bulleted service list, the CARE values spelled out letter-by-letter as plain text, a "Business Philosophy" paragraph, and three office addresses stacked in a contact block. No icons, no visual separation between the nine services, and the brand name "Royale" (with its obvious crown/premium connotation) is never visually referenced anywhere on the page.
- **Opportunity:** "Royale" is a gift for a design system — a crown/crest, deep purple, and gold immediately read as premium without extra explanation. The CARE acronym is also begging to be a visual four-pillar or sticker moment instead of buried body text, and the three-office footprint is a credibility signal (multi-region coverage) that the current site doesn't surface at all.

## Design 1 — Modern Professional (all sites)

**Goal:** Convey established credibility, trust, and competence to corporate decision-makers and legal clients.

- **FGDLaw:** Deep navy (`#0B1F3A`) + brass/gold (`#C9A227`) palette with a warm cream background — evokes courtroom gravitas and legacy. Serif display type (Playfair Display) paired with Inter for body copy. Hero includes a seal/emblem motif (nodding to a law firm crest) and a floating credibility card. Structured sections: trust bar → hero → practice areas (icon cards) → stats band (2002 founding, credentials) → attorney team grid → testimonial → contact.
- **Fortitude Global:** Corporate teal (`#0E5F53`) + amber accent with a soft mint background, Fraunces serif headings + Manrope body. The hero visual literally renders the "right pieces" tagline as a cluster of rounded puzzle-piece tiles with icons (staffing, growth, compliance, ops) — turning an abstract slogan into a concrete brand asset. Includes a client-logo trust strip, 4-step process band, and stats band.

- **United Royale:** Leans fully into the brand name with a royal purple (`#3B1F6B`) + gold (`#D4AF37`) palette, a Cormorant Garamond serif for headings, and a crest/medallion hero graphic (👑) that gives the firm an identity it currently lacks entirely. The CARE values become four medallion-style pillar cards, the nine services are broken into a clean icon-grid, and the three offices get their own "Locations" band to visually communicate regional reach.

Each follows a conventional, high-trust B2B layout pattern: sticky/simple nav → confident hero with dual CTA → services/practice grid → credibility stats → social proof/locations → contact form with map-style info column. Typography, spacing, and color are deliberately restrained to read as premium and consultative rather than trendy.

## Design 2 — Gen Z / Alpha (all sites)

**Goal:** Reach a younger, mobile-first audience (Gen Z clients/candidates, Gen Alpha soon entering the workforce) without sacrificing the underlying professionalism of the services offered.

- **Shared language:** Dark-mode-first backgrounds, neon gradient accents (violet→cyan for FGDLaw, coral→sunflower for Fortitude), bold geometric type (Space Grotesk / Sora), big rounded corners, glassmorphism-adjacent cards, bento-grid hero panels, swipeable card rows, chat-bubble CTAs ("💬 Chat with us", "Slide into our DMs"), and emoji-accented but still substantive micro-copy (no dumbing down of legal/HR content — just a more conversational tone: *"Know your rights. Win your case."* / *"We find the right pieces for your dream team."*).
- **FGDLaw Gen Z:** Reframes the firm as approachable and fast without losing seriousness — bento grid highlights response time and client rating, service cards are numbered/swipeable, and the team section keeps real credentials in the copy while presenting avatars as bold gradient monograms instead of stiff headshots.
- **Fortitude Global Gen Z:** Leans into the puzzle-piece metaphor as literal colorful "stickers" (rotated rounded squares with emoji), which reads as playful and shareable — appropriate for a firm that also recruits and trains younger talent.
- **United Royale Gen Z:** Swaps the crest for a crown emoji mark and a violet/pink/gold neon palette, turns the CARE acronym into four oversized sticker tiles (one big letter each, candy-colored), and reframes all nine services as a scannable emoji-led card grid — keeping the "royale" premium cue alive through color and iconography while feeling native to a younger, mobile-first candidate/client audience.

## How these were produced

Given no direct Figma/Canva session was authorized for this task, each concept was built as production-quality HTML/CSS (no build step required — open directly in a browser) and rendered to pixel-accurate JPEG/PDF using headless Chrome. This keeps the deliverable:

- **Editable** — open any `.html` file in a browser or code editor to tweak copy, colors, or layout.
- **Portable** — JPEG for quick sharing/review, PDF for printing or client presentations.
- **Import-ready** — HTML/CSS can be dropped into Figma via plugins (e.g. "html.to.design") or handed to a developer as a near-final front-end reference.

To re-render after edits (requires Node.js + a local Chrome/Chromium install):

```bash
cd designs/scripts
npm install
node render.js ../fgdlaw/professional.html ../exports/fgdlaw-professional.jpg ../exports/fgdlaw-professional.pdf
```

If Chrome isn't installed at `/usr/local/bin/google-chrome`, set `CHROME_PATH` to its location first.
