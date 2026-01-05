# Microsoft FP&A / Corporate Finance — Data Visualization Engineering Mini-Portfolio

This repo showcases:
- **Data storytelling** (Actuals vs Forecast with scenarios)
- **Visualization design** (executive KPIs + trend chart)
- **Front-end** (**React**) + charting (**Chart.js**)
- Optional: **Tableau Public embed** (drop in your published dashboard URL)

## What to include in your application
1) **GitHub repo link** (this repo)
2) **Live site link** (GitHub Pages / Netlify / Vercel)
3) **Tableau Public dashboard link** (embedded inside the site)

---

## Quick start (local)
1. Install Node.js (LTS)
2. In terminal:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

---

## Add your Tableau link (1 minute)
Open `src/config.js` and paste your Tableau Public **share** link in `TABLEAU_PUBLIC_URL`.

If you do not want Tableau, set `SHOW_TABLEAU_EMBED = false`.

---

## Deploy (GitHub Pages — easiest)
1. Push this repo to GitHub
2. In GitHub: **Settings → Pages**
3. Build & deploy: Use **GitHub Actions** (included)

Alternative: drag-and-drop deploy on Netlify/Vercel.

---

## Data
- `data/msft_finance_clean.csv` — clean long-form dataset used by the React chart
- `data/kpis.json` — precomputed KPI values for display

---

## Notes
This project is intended for **Data Visualization Engineering** roles where the reviewer expects both:
- a strong visualization narrative
- *and* evidence you can ship a small front-end visualization experience
