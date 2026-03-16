# Contributing to Your Life in Data

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Pull Request Process](#pull-request-process)
- [Development Setup](#development-setup)
- [Adding New Stats or Categories](#adding-new-stats-or-categories)
- [Code Style](#code-style)

---

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## How Can I Contribute?

- **Report bugs** — Found something broken? Open an issue.
- **Suggest features** — Have an idea? We'd love to hear it.
- **Fix bugs** — Check the [Issues](https://github.com/dev-mauli/your-life-in-data/issues) for `good first issue` labels.
- **Add stats or categories** — See [Adding New Stats or Categories](#adding-new-stats-or-categories).
- **Improve docs** — Typos, clarity, or new sections are always welcome.

---

## Reporting Bugs

Before opening a bug report, please check [existing issues](https://github.com/dev-mauli/your-life-in-data/issues) to avoid duplicates.

When reporting a bug, include:

- **Description** — What happened vs. what you expected
- **Steps to reproduce** — Numbered list
- **Environment** — Browser, OS, device (e.g., Chrome 120, Windows 11)
- **Screenshots** — If relevant

Use the [Bug Report template](https://github.com/dev-mauli/your-life-in-data/issues/new?labels=bug&template=bug_report.md) when opening an issue.

---

## Suggesting Features

Feature ideas are welcome! Please:

- Check [existing issues](https://github.com/dev-mauli/your-life-in-data/issues) first
- Describe the feature and why it would be useful
- Optionally: describe how it might work or look

---

## Pull Request Process

1. **Fork** the repository and create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** — Keep commits focused and messages clear.

3. **Test** — Open `index.html` in a browser and verify everything works.

4. **Submit a PR** — Fill out the PR template and link any related issues.

5. **Review** — Address feedback from maintainers.

6. **Merge** — Once approved, a maintainer will merge your PR.

---

## Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your-life-in-data.git
   cd your-life-in-data
   ```

2. Run locally:
   ```bash
   npx serve .
   ```

3. Open `http://localhost:3000` (or the port shown) in your browser.

---

## Adding New Stats or Categories

Stats and categories are defined in `js/app.js` in the `CATEGORIES` array.

### Adding a stat to an existing category

```javascript
{
  id: 'yourStatId',
  label: 'Your Stat Label',
  calc: (d) => Math.round(d.days * RATE)  // d has: days, hours, minutes, years, awakeMinutes
}
```

### Adding a new category

```javascript
{
  id: 'yourCategory',
  name: 'Your Category Name',
  emoji: '🔮',
  stats: [
    { id: 'stat1', label: 'Stat 1', calc: (d) => Math.round(d.days) },
    // ...
  ]
}
```

Use reasonable population averages for rates. Document any new formulas in the README if they differ significantly from existing ones.

---

## Code Style

- **HTML** — Semantic HTML5, lowercase tags, meaningful alt text
- **CSS** — Use existing variables in `:root` when possible; keep selectors specific
- **JavaScript** — Clear variable names, comments for non-obvious logic
- **Formatting** — Keep indentation consistent (2 spaces)

---

## Questions?

Open a [Discussion](https://github.com/dev-mauli/your-life-in-data/discussions) or an [Issue](https://github.com/dev-mauli/your-life-in-data/issues) and we'll help.

---

Thank you for contributing!
