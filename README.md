# ArQPulse — Premium UI Rebuild

A from-scratch, ultra-premium redesign of the ArQPulse landing page, built
with React + Vite + Tailwind CSS + Framer Motion.

## ⚠️ About the content in this build

I could not scrape the real copy from arqpulse.com (the live site renders via
JS, so only meta tags were retrievable) or the logo file. Every headline,
paragraph, feature description, pricing tier, and footer link in this project
is **placeholder text**, written to match the site's own meta description and
general structure — not the real ArQPulse copy.

Every placeholder is marked with a `// TODO(real-content):` or
`// TODO(real-asset):` comment at the top of the relevant file. Search the
project for `TODO(` to find every spot that needs the real text/logo dropped
in.

**Files with placeholder copy:**
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/components/Features.jsx`
- `src/components/HowItWorks.jsx`
- `src/components/Pricing.jsx`
- `src/components/CTA.jsx`
- `src/components/Footer.jsx`
- `src/components/Logo.jsx` (placeholder mark — instructions inside for
  swapping in the real logo file)

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## What makes the UI/UX distinctive

Instead of generic fade-in-on-scroll (the default every AI-generated page
reaches for), the whole page borrows its motion language from what the
product actually does — **continuously scanning a Salesforce org**:

- **`ScanSpine.jsx`** — a fixed vertical "diagnostic spine" on desktop (a
  slim top progress bar on mobile) that fills as you scroll, with a glowing
  node tracking your position and a live mono-font readout of which section
  you're in (`SCAN::02/04 — SIGNALS`). Color shifts between cyan/amber
  depending on section tone, echoing a health/risk signal system.
- **`ScanReveal.jsx`** — the scroll-reveal wrapper used across every section.
  Content unmasks top-to-bottom behind a bright horizontal line, as if it's
  being scanned into place, rather than a generic fade/slide.
- **Hero diagnostic panel** — an ambient, looping scan-line sweeps over a
  live-looking metrics panel (health/security/cost/debt), visualizing the
  product's core mechanic on first load.

## Design tokens (see `tailwind.config.js`)

- **Palette**: near-black `void` (#0A0D12) base, `panel`/`panel-alt` surface
  tones, and a three-way signal system — cyan (#5EEAD4, healthy), amber
  (#F6B673, attention), red (#FB7185, risk) — mapped to the product's own
  health/security/cost/debt categories rather than a decorative accent.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels
  — used for anything that reads like scan output).

## File structure

```
arqpulse-premium/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Logo.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── Pricing.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        ├── ScanSpine.jsx      ← signature scroll component
        └── ScanReveal.jsx     ← reusable scroll-reveal wrapper
```
