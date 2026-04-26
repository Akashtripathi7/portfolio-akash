# Akash Tripathi — Portfolio

Personal portfolio website for **Akash Tripathi**, Senior Flutter Developer based in Mumbai, India.

🌐 **Live:** [akashtripathi.vercel.app](https://akashtripathi.vercel.app)

---

## Overview

A fully hand-crafted, single-page portfolio built with vanilla React (no bundler, no framework) — just HTML, CSS, and JSX loaded via CDN. Designed to feel premium and fast with zero build overhead.

---

## Features

- **Animated Hero Section** — Split layout with a giant staggered letter reveal, live IST clock, and 3D parallax photo tilt on mouse move
- **Custom Cursor** — Dot + elastic-lag ring cursor with context-aware hover states (expands on links, grows on photo)
- **Floating Info Chips** — Independently oscillating badges around the profile photo
- **Scroll Animations** — Intersection Observer–driven reveal transitions throughout
- **Skills & Projects** — Detailed breakdown of Flutter stack, backend, native, analytics, DevOps, and leadership capabilities
- **Experience Timeline** — Interactive card-based experience section with animated transitions
- **Live Apps Showcase** — Grid of published mobile apps with status indicators
- **Contact Form** — Integrated contact section with email, LinkedIn, and GitHub links
- **Accent Color Tweaks** — Live accent color picker panel (bottom-right corner)
- **Fully Responsive** — Works across desktop, tablet, and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 (CDN, no build step) |
| Templating | Babel Standalone (JSX in browser) |
| Styling | Vanilla CSS with CSS custom properties |
| Fonts | Instrument Serif · Geist · Geist Mono (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
portfolio_akash/
├── index.html          # Entry point
├── portfolio.html      # Source HTML
├── app.jsx             # Root React component, nav, cursor logic
├── components-1.jsx    # Hero, Stats, About, Skills
├── components-2.jsx    # Projects, Experience, Achievements, Apps, Contact
├── tweaks-panel.jsx    # Live accent color panel
├── styles.css          # All styles and animations
└── assets/
    ├── akash.png                  # Profile photo
    └── Akash_Tripathi_Resume.pdf  # Resume
```

---

## Running Locally

No install required — just serve the folder over HTTP:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open [localhost:8080](http://localhost:8080) in your browser.

---

## Deployment

Hosted on **Vercel** (free tier). To redeploy after changes:

```bash
npx vercel --prod
```

---

## Contact

- **Email:** tripathiakash478@gmail.com
- **LinkedIn:** [linkedin.com/in/akash-tripathi](https://linkedin.com/in/akash-tripathi)
- **GitHub:** [github.com/Akashtripathi7](https://github.com/Akashtripathi7)

---

© 2026 Akash Tripathi
