# Your Life in Data

<p align="center">
  <strong>Make abstract time tangible</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg" alt="License: GPL-3.0">
  <a href="https://github.com/dev-mauli/your-life-in-data"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg" alt="Contributions welcome"></a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#contributing">Contributing</a>
</p>

A personal life statistics calculator that turns your birth date into a beautiful, shareable **life receipt**. Enter when you were born and discover your heartbeats, breaths, sunrises witnessed, and 50+ other meaningful stats—all visualized as a printable receipt.

---

## Features

- **Birth date + optional details** — Enter when you were born, plus optional name and location for the receipt header
- **12 emotional categories** — Click a category to select/deselect all stats:
  - ❤️ Your Heart & Body
  - ⏳ The Gift of Time
  - 🌅 The Sky You've Seen
  - ☕ Small Daily Blessings
  - 🍽️ What Fed You
  - 👣 How You Moved Through Life
  - 📖 Stories That Shaped You
  - 💕 Love & Connection
  - 🌱 The Marks of Life
  - 🌊 What You've Survived
  - ✨ What You've Given
  - 🌟 Moments of Wonder
- **50+ stats** — Heartbeats, breaths, sunrises, hugs, tears, wishes made, and more
- **Receipt-style layout** — Stats grouped by category with a clean, printable design
- **Download as image** — One-click PNG export for sharing on social media
- **No build required** — Pure HTML, CSS, and JavaScript; runs in any browser

---

## Getting Started

### Prerequisites

None. This project runs entirely in the browser with no dependencies to install.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-mauli/your-life-in-data.git
   cd your-life-in-data
   ```

2. **Run locally**

   **Option A:** Open `index.html` directly in your browser.

   **Option B:** Use a local server (recommended for best behavior):
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   # or
   php -S localhost:8000
   ```

3. **Enter your birth date** and generate your life receipt.

---

## Project Structure

```
your-life-in-data/
├── index.html              # Main page
├── css/
│   └── styles.css          # Styling
├── js/
│   └── app.js              # Logic, categories, and calculations
├── .github/
│   └── ISSUE_TEMPLATE/      # Bug report & feature request templates
├── LICENSE                  # GPL-3.0
├── README.md
├── CONTRIBUTING.md          # Contribution guidelines
├── CODE_OF_CONDUCT.md       # Community guidelines
└── SECURITY.md              # Security policy
```

---

## How It Works

Stats are estimated using population averages. All calculations are approximations meant to inspire reflection, not precision.

| Stat | Formula |
|------|---------|
| Heartbeats | ~72/min |
| Breaths | ~14/min |
| Blinks | ~17/min (while awake) |
| Steps | ~6,000/day |
| Meals | ~3/day |
| Books | ~12/year |
| Words spoken | ~16,000/day |
| Sleep | ~7.5 hrs/day |

The app computes `days`, `hours`, `minutes`, and `years` from your birth date to today, then applies these rates to each stat.

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, flexbox, grid, responsive design
- **Vanilla JavaScript** — No frameworks
- **html2canvas** — Client-side image export (CDN)

---

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- How to report bugs
- How to suggest features
- How to submit pull requests
- Code style and conventions

We also ask that you follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

This project is licensed under the **GNU General Public License v3.0** — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Inspired by the idea of visualizing life as data
- Fonts: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- Image export: [html2canvas](https://html2canvas.hertzen.com/)

---

<p align="center">
  <a href="https://github.com/dev-mauli/your-life-in-data">View on GitHub</a> •
  <a href="https://github.com/dev-mauli/your-life-in-data/issues">Report a bug</a> •
  <a href="https://github.com/dev-mauli/your-life-in-data/issues/new">Request a feature</a>
</p>
