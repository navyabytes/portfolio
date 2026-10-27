# Navya Sachdeva — Portfolio

A modern, high-performance, modular personal portfolio website for **Navya Sachdeva** (Mathematics & Computing student specializing in Machine Learning, NLP, and Healthcare AI).

Refactored from a single monolithic file into a clean, scalable vanilla web architecture featuring **light mode exclusively**, **solid-color button styling**, and **ES Module-driven interactions**.

---

## 🌟 Key Highlights

- **Light Mode Exclusively:** Designed and tuned for clarity, contrast, and visual harmony without dark mode toggles or unnecessary overrides.
- **Solid-Color Button Design:** All button styles (primary CTAs, secondary triggers, social icons) utilize clean, solid brand colors with zero gradients.
- **Modular CSS Architecture:** Segregated into design tokens, reset, layout, component stylesheets, and responsive utilities using standard CSS `@import`.
- **Modern ES Modules:** Vanilla JavaScript organized into configuration, utility helpers, UI components, and feature modules (`type="module"`).
- **GSAP & ScrollTrigger Animations:** Smooth page entrance reveals, kinetic letter splitting, continuous ambient floating badges/blobs, and scroll-activated counter stats.
- **Interactive Profile Photo:** Client-side photo upload preview with instant `localStorage` persistence and fallback states.
- **Fully Responsive & Accessible:** Fluid clamp-based typography, accessible ARIA attributes, keyboard navigation support, and reduced-motion respect (`prefers-reduced-motion`).

---

## 📁 Directory Structure

```text
NavyaPortfolio/
├── index.html                  # Main semantic HTML5 entry point
├── README.md                   # Project documentation & local setup guide
├── assets/
│   ├── icons/
│   │   ├── favicon.svg         # Monogram SVG browser favicon
│   │   └── icons.svg           # Scalable SVG vector icon sprite
│   ├── images/
│   │   └── avatar-placeholder.svg
│   └── documents/              # Directory for downloadable resumes & CVs
├── css/
│   ├── main.css                # Master CSS file importing all sub-stylesheets
│   ├── variables.css           # Design tokens, light theme palette, and fonts
│   ├── reset.css               # Box-sizing, reset rules, and base styles
│   ├── layout.css              # Container wrapping, grid systems, and typography
│   ├── components/
│   │   ├── navbar.css          # Navigation bar, logo, and mobile drawer
│   │   ├── buttons.css         # Solid button styles, social rail, and icon buttons
│   │   ├── hero.css            # Hero grid, split headings, photo uploader & badges
│   │   ├── about.css           # About cards, stat counters, and category tags
│   │   ├── skills.css          # Skill chips and toolkit cards
│   │   ├── experience.css      # Experience timeline and bullet indicators
│   │   ├── projects.css        # Project showcases, metrics pills, and tags
│   │   ├── contact.css         # Contact card and action links
│   │   └── footer.css          # Footer branding and copyright
│   └── utilities/
│       ├── animations.css      # Motion classes and prefers-reduced-motion overrides
│       └── responsive.css      # Tablet & mobile media queries
└── js/
    ├── main.js                 # Application bootstrap & lifecycle orchestrator
    ├── config.js               # Selectors, storage keys, and animation timings
    ├── utils/
    │   └── helpers.js          # DOM query helpers, storage wrappers, accessibility
    ├── components/
    │   ├── navigation.js       # Mobile drawer toggle, keyboard escape & outside click
    │   └── scroll.js           # Scrollspy active navigation indicator
    └── features/
        ├── animations.js       # Text splitting, GSAP entrance and ambient motion
        ├── photo-upload.js     # FileReader upload handling & localStorage caching
        └── counters.js         # Animated numerical stats on scroll
```

---

## 🚀 Running Locally

Because the project utilizes native JavaScript ES Modules (`import`/`export`), it is recommended to run the project using a local HTTP server.

### Option 1: Python (Built-in)
Run the following in the project root directory:

```bash
# Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: Node.js (npx serve or http-server)
```bash
npx serve .
# or
npx http-server -p 8000
```

### Option 3: VS Code / IDE Live Server Extension
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🎨 Design System & Color Tokens

All design tokens are defined in [`css/variables.css`](css/variables.css):

| Variable | Value | Purpose |
| :--- | :--- | :--- |
| `--bg` | `#faf7fc` | Page background |
| `--card` | `#ffffff` | Elevated card surfaces |
| `--soft` | `#f4eefb` | Subtle lavender surface / hover background |
| `--line` | `#e6dcf3` | Card borders and divider rules |
| `--lil2` | `#8f74c9` | Primary brand accent / button fill / links |
| `--lil2-hover` | `#7b5eb9` | Primary button hover state |
| `--bl` | `#f3cddf` | Soft blush pink accent |
| `--bl2` | `#e2a6c3` | Deeper blush pink indicator |
| `--ink` | `#4a3f5c` | High-contrast body text |
| `--mute` | `#7f7396` | Subtitles and secondary metadata |

---

## 🧪 Verification & Browser Compatibility

- **Evergreen Browsers:** Compatible with Chrome, Edge, Firefox, Safari (iOS/macOS).
- **Zero Framework Overhead:** 100% Vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Safe Area Insets:** Handled via `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` for notch displays and edge-to-edge mobile viewing.
