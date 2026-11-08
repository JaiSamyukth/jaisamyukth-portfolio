# jaisamyukth.genrecai.com

Portfolio of **Jai Samyukth B U** — systems builder and co-founder of Genrec AI.

React 19 + TypeScript, plain CSS design tokens, GSAP + Lenis for motion, built with Vite and **prerendered to static HTML** at build time, then deployed on Vercel. The design follows `DESIGN.md` (concept: *Samyukth* means joined).

```bash
npm ci
npm run dev        # local dev server on :3000
npm run build      # client build → SSR build → prerender every route into dist/
npm run preview    # serve dist/
npm run typecheck
```

## How it's put together

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | Identity: name, **name variants / misspellings**, pronunciation, socials, nav |
| `src/data/projects.ts` | Case studies (Lumina IQ, Tabble, CRM) |
| `src/data/content.ts` | Copy for every other section, including the FAQ |
| `src/lib/seo.ts` | Per-route title/description/canonical/OG + the schema.org JSON-LD graph |
| `src/lib/aieo.ts` | Generates `sitemap.xml`, `llms.txt` and `llms-full.txt` from the same data |
| `src/entry-server.tsx` + `scripts/prerender.mjs` | Render each route to `dist/<route>/index.html` |
| `src/engine/` | Motion engine: Lenis on GSAP's ticker, reveals, the seam page transition, React Router adapter |
| `src/styles/` | `tokens.css` (palette, type, spacing), `engine.css`, `site.css` |

Edit the data files and everything — the pages, structured data, sitemap and LLM summaries — stays in sync.

## Search & AI discoverability

- Every route ships real HTML (no "empty div" for crawlers or AI agents that don't run JS).
- `Person` JSON-LD lists `alternateName` for common mishearings (“Jai Samuth”, “Jai Samyuktha”…), linked to Genrec AI and every profile via `sameAs`.
- The same variants appear as **visible** text (hero, About › “How to say it”, footer), so they're honest content rather than hidden keywords.
- FAQ on /about is mirrored as `FAQPage` structured data.
- `/llms.txt` and `/llms-full.txt` give answer engines a clean plain-text profile; `robots.txt` explicitly allows AI crawlers.
- Old hash URLs (`/#/work`) are redirected to real paths on load.

Images in `images/` are originals; optimised WebP versions live in `src/assets/`.
