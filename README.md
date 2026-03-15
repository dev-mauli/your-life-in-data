# Your Life in Data

A personal life statistics calculator that turns your birth date into a beautiful, shareable "life receipt."

## Project Structure

```
your-life-in-data/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Run It

Open `index.html` in a browser—no build step or server required.

Or use a local server:
```bash
npx serve .
# or
python -m http.server 8000
```

## Features

- **Birth date + optional location** — Enter when you were born (and where, for the receipt header)
- **12 emotional categories** — Click a category to select/deselect all stats in it:
  - Your Heart & Body • The Gift of Time • The Sky You've Seen • Small Daily Blessings
  - What Fed You • How You Moved Through Life • Stories That Shaped You • Love & Connection
  - The Marks of Life • What You've Survived • What You've Given • Moments of Wonder
- **50+ stats** — Heartbeats, breaths, sunrises, "I love you" said, hugs, tears, wishes made, and more
- **Receipt grouped by category** — Stats appear under their category headers on the receipt
- **Download as image** — One-click PNG export for sharing

## How It Works

Stats are estimated using population averages:
- Heartbeats: ~72/min
- Breaths: ~14/min
- Blinks: ~17/min (while awake)
- Steps: ~6,000/day
- Meals: ~3/day
- Books: ~12/year
- Words: ~16,000/day
- Sleep: ~7.5 hrs/day
