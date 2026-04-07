# USAF Wingwoman — Personal Brand Site
**USAFWingwoman.com** · Sage J Phoenix

One-page personal brand website. Built with Astro, deployed to Cloudflare Pages.

---

## Stack
- **Framework**: Astro (static output)
- **Hosting**: Cloudflare Pages
- **Adapter**: @astrojs/cloudflare

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`

---

## Build

```bash
npm run build
```

Output goes to `./dist/`

---

## Deploy to Cloudflare Pages

### First time (via Cloudflare Dashboard)
1. Push repo to GitHub
2. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages**
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Add custom domain: `usafwingwoman.com`

### Subsequent deploys
Push to `main` — Cloudflare auto-deploys.

### Via Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=usafwingwoman
```

---

## Project Structure

```
src/
  layouts/
    Base.astro          # HTML shell, fonts, scroll reveal script
  pages/
    index.astro         # Page assembly
  components/
    Hero.astro          # Full-screen hero with fire atmosphere
    Origin.astro        # Military background / EC-130H
    Stats.astro         # 6-stat credential grid
    Deployment.astro    # OIF 2005 / Chief of Security
    TheTurn.astro       # The early departure + reframing
    Phoenix.astro       # Sage J Phoenix rebirth
    Footer.astro        # Brand footer + Aeryon Global link
  styles/
    global.css          # Design tokens, typography, utilities
public/
  favicon.svg           # Flame mark favicon
```

---

## When You're Ready to Add a Blog
Astro supports content collections natively. Add `src/content/blog/` and create a `[slug].astro` route in `src/pages/blog/`. Claude Code can scaffold this in minutes when you're ready.
