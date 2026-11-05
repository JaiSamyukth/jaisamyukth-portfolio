# Getting found for "Jai Samyukth" — and every way people mistype it

The site does the on-page work: prerendered HTML, a `Person` entity with every
name variant as `alternateName`, a dedicated `/name` spelling page, FAQ markup,
`llms.txt`. Rankings for misspellings and for short queries like "Jai" are mostly
decided **off the site**: Google has to be sure that one real person sits behind
all these profiles. These steps do that, roughly in order of impact.

## 1. Tell Google the site exists (do this first, ~15 min)
- [ ] Add `jaisamyukth.genrecai.com` to **Google Search Console** (DNS TXT record on genrecai.com, or an HTML file in `public/`).
- [ ] Submit `https://jaisamyukth.genrecai.com/sitemap.xml`.
- [ ] Use **URL Inspection → Request indexing** for `/`, `/about` and `/name`.
- [ ] Do the same in **Bing Webmaster Tools** (import from Search Console). Bing also powers ChatGPT search and DuckDuckGo.

## 2. Make every profile say the same thing
Use the exact same name, photo and one-line bio everywhere, and link back to the site.

- [ ] **GitHub** bio: `Jai Samyukth B U (often typed "Jai Samuth") · Co-founder, Genrec AI · Lumina IQ, Tabble · CSBS` + website field → site.
- [ ] **GitHub profile README** (`JaiSamyukth/JaiSamyukth` repo): one line "Pronounced jai · sum-YOOKTH — sometimes searched as Jai Samuth or Jai Sampath" + link to `/name`.
- [ ] **LinkedIn** headline: `Co-founder, Genrec AI · Building Lumina IQ & Tabble`. In About, add "Jai Samyukth (sometimes spelled Jai Samuth / Jai Sampath)". Put the site in Contact info.
- [ ] **X / Instagram / dev.to**: display name `Jai Samyukth`, website → site.
- [ ] Use the same headshot everywhere (`public/portrait.webp`).

## 3. Earn links from places that already trust you
Links that read "Jai Samyukth" pointing at the site are the strongest signal there is.

- [ ] **genrecai.com**: team/founders section → "Jai Samyukth B U" linking to the site.
- [ ] **luminaiq.fun** and **tabble.in** footers: "Built by Jai Samyukth" → site.
- [ ] College / department pages, hackathon or Startup Grind listings, event pages → ask them to link your name.
- [ ] Write 2–3 dev.to / Medium / Hashnode posts about building Lumina IQ or Tabble, bylined "Jai Samyukth", linking the case-study pages.

## 4. Become an entity (what makes short queries like "Jai" possible)
- [ ] Once there are a few independent mentions (press, event pages, a podcast), create a **Wikidata** item for yourself and for Genrec AI with the alternate spellings as aliases. Only do this with real third-party sources, or it gets deleted.
- [ ] When a Knowledge Panel appears for "Jai Samyukth", **claim it** through Google.

## Honest expectations
- **"Jai Samyukth"**: should rank #1 within days of indexing.
- **"Jai Samuth", "Jai Sampath", "Jay Samyukth"**: very achievable. The `/name` page plus consistent profiles usually gets there in weeks. Adding a context word ("Jai Samuth Genrec", "Jai Sampath Coimbatore") gets there fastest.
- **"Jai"** on its own: millions of pages compete for that word, so no site can rank for it by itself. What can happen, as the entity grows, is Google suggesting you for "Jai Genrec AI", "Jai Lumina IQ" or "Jai Coimbatore developer". Those queries are realistic targets.
