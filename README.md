# Andrew Cummins — Portfolio

Personal portfolio site built with **React 18 + Vite 5**. Single-page application with scroll-reveal animations, CSS Modules, and a custom design system.

## Tech stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS Modules | Scoped component styling |
| Intersection Observer API | Scroll-reveal animations (zero dependencies) |

## Getting started

\`\`\`bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build → /dist
npm run preview  # preview production build
\`\`\`

## Personalising

Everything is driven from **\`src/data/content.js\`** — edit your name, email, GitHub, LinkedIn, stats, skills, and projects all in one place.

## Deployment

### Vercel (recommended)
Push to GitHub → import at vercel.com → zero config, auto-detects Vite. Add custom domain in the Vercel dashboard.

### GitHub Pages
Run \`npm run build\` then push \`/dist\` to your \`gh-pages\` branch.

### Custom domain
Buy \`andrewcummins.dev\` on Namecheap or Cloudflare, point a CNAME at Vercel or GitHub Pages.
