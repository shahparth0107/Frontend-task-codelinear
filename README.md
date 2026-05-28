# N7 Banking — Frontend Assignment

A pixel-perfect, fully responsive frontend implementation of the [N7 Figma design](https://www.figma.com/design/ktuyhOppLLgLFCZwzQCOBk/N7?node-id=24-3468&t=Mp4mk0xfRmvPO2dB-0), built as part of the **Software Development Engineer (SDE) – Full Stack** role assignment.

---

## 🔗 Links

- **Figma Design:** [View on Figma](https://www.figma.com/design/ktuyhOppLLgLFCZwzQCOBk/N7?node-id=24-3468&t=Mp4mk0xfRmvPO2dB-0)

---

## 🛠 Tech Stack

- **React.js** (Create React App)
- **Vanilla CSS** — modular per-component stylesheets
- **Google Fonts** — Archivo, Chivo Mono
- No external UI libraries

---

## ✨ Features

- ✅ Pixel-perfect implementation matching the Figma design
- ✅ Fully responsive across desktop, tablet, and mobile (320px+)
- ✅ Smooth hover interactions, transitions, and micro-animations
- ✅ Clean component-based architecture — one JS + CSS file per section
- ✅ Hamburger navigation menu for mobile
- ✅ Animated marquee ticker strip
- ✅ Case studies carousel with dot navigation
- ✅ Optimized images with `drop-shadow` and `object-fit`
- ✅ `overflow-x: hidden` and fluid layouts — zero horizontal scroll on any device

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   ├── Hero.js / Hero.css
│   ├── Marquee.js / Marquee.css
│   ├── Solutions.js / Solutions.css
│   ├── CoreBanking.js / CoreBanking.css
│   ├── DigitalBanking.js / DigitalBanking.css
│   ├── CaseStudies.js / CaseStudies.css
│   ├── Insights.js / Insights.css
│   ├── CTABanner.js / CTABanner.css
│   └── Footer.js / Footer.css
├── assets/
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## 🚀 Setup & Run Locally

**Prerequisites:** Node.js ≥ 16

```bash
# 1. Clone the repository
git clone https://github.com/shahparth0107/Frontend-task-codelinear.git
cd n7-banking

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at `http://localhost:3000`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `> 1100px` | Desktop (default layout) |
| `≤ 1100px` | Large tablet — sections start stacking |
| `≤ 900px` | Tablet — full column layouts |
| `≤ 768px` | Mobile — hamburger nav active |
| `≤ 540px` | Small mobile — font/padding scale down |
| `≤ 375px` | Very small phones (iPhone SE etc.) |

---

## 🎯 What Was Evaluated

- **Frontend Accuracy** — matched spacing, typography, colors from Figma
- **Responsiveness** — fluid layouts across all device widths
- **Component Structure** — isolated, reusable, maintainable components
- **Code Quality** — consistent naming, no inline styles, clean CSS variables
- **Performance** — no heavy dependencies, optimized assets
- **Developer Practices** — semantic HTML, `.gitignore`, modular architecture

---

*Submitted by **Parth Shah** · Deadline: 28th May 2026*
