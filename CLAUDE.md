# Claude Code Rules — USAF Wingwoman

## Content Architecture
This site uses Sveltia CMS for content management. All editable text content lives in src/content/ as JSON or markdown files. The Astro pages read from these files at build time.

## CRITICAL RULE — Never hardcode content in page files
When making changes to page copy, headings, body text, labels, stats, quotes, or any visible text:
- ALWAYS update the corresponding JSON file in src/content/pages/
- ALWAYS update the Astro page to read from that JSON field if not already wired
- NEVER write text strings directly into src/pages/*.astro files
- NEVER bypass the content layer

## Content file locations
- Home page content: src/content/pages/home.json
- Blog posts: src/content/blog/*.md
- CMS config: public/admin/config.yml

## When adding new content sections
1. Add the new fields to the relevant JSON file in src/content/pages/
2. Wire the Astro page to read those fields
3. Add the new fields to public/admin/config.yml so they appear in Sveltia CMS
4. Never skip step 3 — the CMS and the page must always be in sync

## What IS fine to hardcode in Astro files
- CSS styles
- HTML structure and layout
- SVG graphics
- Class names
- aria attributes

## Deployment
- Hosted on Cloudflare Workers (static assets)
- Auto-deploys on push to main via GitHub integration
- Build command: npm run build
- Deploy command: npx wrangler deploy
- Build output: dist/
- wrangler.toml uses [assets] directory = "./dist" with not_found_handling = "single-page-application"

## CMS
- Sveltia CMS at /admin
- Auth worker: usafwingwoman-cms-auth.sagephoenix11.workers.dev
- GitHub OAuth app callback: https://usafwingwoman-cms-auth.sagephoenix11.workers.dev/callback
- Sveltia CMS JS is self-hosted at public/admin/sveltia-cms.js (do NOT switch to CDN — causes MIME type errors)

## Responsive Design Rules

### Minimum width
Always set min-width: 320px on the body element in global.css. This prevents layout from breaking on the smallest real devices and is a universal best practice.

### Breakpoints
Always use these breakpoints and no others unless there is a specific reason:
- Tablet/compress: @media (max-width: 1024px) — compress wide layouts
- Mobile/collapse: @media (max-width: 768px) — collapse columns, adjust layout
- Small mobile: @media (max-width: 480px) — tighten spacing, reduce font sizes on small phones

### Mobile-first approach
- Write base CSS for mobile first
- Use min-width media queries to add desktop styles, NOT max-width to subtract them
- Exception: this project currently uses max-width queries — maintain consistency with existing code but flag when refactoring

### Units — when to use what
- Containers: max-width in px (1200px default) + width: 100% + padding: 0 1.5rem
- Column widths: % or CSS Grid fr units, never px
- Font sizes: clamp(min, preferred, max) for headings, rem for body text, never px for font sizes
- Spacing/gaps/padding: px for fixed component internals, rem for vertical rhythm between sections
- Borders: always px
- Images: always max-width: 100% and height: auto

### Grid and layout rules
- Two-column layouts collapse to single column at 768px
- Three or four column layouts collapse to two columns at 1024px, single at 768px
- Never use fixed px widths on layout columns
- Always use align-items: start on grids unless centering is intentional

### Images
- Always add max-width: 100% and height: auto
- Always include alt text
- Use loading="lazy" on images below the fold
- Use object-fit: cover when constraining image dimensions

### Testing checklist before pushing
- Verify layout works at 320px, 375px, 480px, 768px, 1024px, and 1280px
- Verify no horizontal scrolling at any breakpoint
- Verify text is readable at all sizes (minimum 14px rendered)
- Verify images scale correctly and do not overflow
