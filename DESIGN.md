# DESIGN.md: jaisamyukth.genrecai.com

## v3 (current): loud on purpose

The owner's verdict on v2 ("Samyukth means joined", one grotesk, one muted violet) was that it lost
the fun, the colour and the voice of the original site. v3 brings that personality back on top of
v2's foundations (prerendered SEO, accessibility, performance, the page-transition engine).

- **Palette:** the original neo-brutalist set: paper #fdfbf7, ink #0a0a0a, acid #ccff00, pink #ff0099,
  blue #2b59ff, yellow #fff500, purple #b983ff. Hard 4 px borders, offset shadows, tilted stickers.
- **Type:** Space Grotesk + Space Mono (the original brand fonts), self-hosted. The hero name uses
  Roboto Flex (variable width/weight) subset to the name's letters, for the TextPressure effect.
- **Copy:** the original, uncensored voice is restored (nav: Survivors, The Idiot, My Method, Scars,
  Lab, Complain).
- **React Bits components** (vendored in `src/components/rb/`, TS + CSS variants):
  TextPressure (hero name), RotatingText (what I build), TiltedCard (portraits, case covers),
  DotGrid (hero background), CircularText (badges), ScrollVelocity (marquees), ScrollReveal
  (manifesto), CountUp (stats), ChromaGrid (work grid), SpotlightCard (testimonial), Magnet
  ("Say hi"), ClickSpark (brand-coloured sparks on every click), FuzzyText (404), FallingText
  (Scars page, physics loaded only on demand). Local edit: ChromaGrid opens internal links in place.

---

## v2 (superseded): "Samyukth means joined"


Built with the `/awwwards` method: brief, three concepts, one system, then QA against the
Awwwards rubric with a blind critic.

## Phase 0: Brief

- **Subject:** Jai Samyukth B U. Systems builder, co-founder of Genrec AI, Coimbatore. Builds
  Lumina IQ (active-recall learning), Tabble (restaurant ordering) and client systems such as a
  CRM that replaced five spreadsheets.
- **Audience:** founders and small companies who need something built; recruiters; people who
  heard the name once and are trying to find him.
- **Job of the site:** get hired for client work, and be findable under every spelling of the name.
- **Assets:** one real portrait (night street, violet light), real product screenshots, real copy
  with a dry, self-deprecating voice.
- **Constraints:** existing Vite + React + prerender stack (SEO depends on it). Keep the name
  variants visible as honest content.
- **Assumptions:** the pronunciation respelling and the CSBS degree come from the owner's
  messages; the name meanings (jaya = victory, saṃyukta = joined) are standard Sanskrit
  etymology.

## Phase 1: Concepts

| | A. Joined (name) | B. Incident log (process) | C. Spreadsheet → system (material) |
|---|---|---|---|
| Idea | *Samyukth* means joined. The name itself arrives broken, the way people hear it, and joins into the right spelling; everything on the site is a join | Every project is a production incident: detected, root cause, fix, status | The site starts as a messy spreadsheet and resolves into a designed page |
| Anchor | the name's meaning, plus the real problem that people mishear and misspell it; his work is literally joining things (3 screens → 1 order, 5 sheets → 1 CRM) | his "break and fix at 2 AM" voice | "Excel is not a database" |
| Signature | hero: "Jai Sam_u_th" with the missing letters dropping into place while the type contracts from wide to set | log lines typing in | grid cells snapping into layout |
| O / F / Fe / P | 5 / 5 / 4 / 1 | 3 / 4 / 5 / 4 | 4 / 3 / 3 / 3 |

**Pick A.** It can only belong to this person: it depends on what his name means *and* on the
exact problem the site has to solve (being found when misspelled). Steal from B for the Lessons
page voice.

### Concept card

```
Idea:        His name means "joined". The site joins the pieces people mishear into the right name,
             and shows what his software joins together.
Metaphor:    a joint / seam: separate parts meeting and locking
Signature:   the name assembles: missing letters drop into their slots while the wide type
             tightens to its set width; a violet seam marks each join (hero intro)
Emotion:     a small "oh, that's how it's spelled" click in the first 2 seconds
Motion verb: meet and lock (two sides travel toward a seam and settle)
Screenshot:  the portrait with JAI SAMYUKTH set across it, and "heard as Jai Samuth" struck out
```

## Phase 2: System

### Palette (roles)
| Role | Hex | Source |
|---|---|---|
| ground | `#f2f1ee` | neutral paper, cool not cream |
| ink | `#111110` | |
| muted | `#5c5b57` | AA on ground (6.5:1) |
| line | `rgb(17 17 16 / 0.14)` | |
| seam (accent) | `#7a1a9a` | sampled from the street light in the portrait; used only where things join |
| night (dark sections) | `#111110` with `#f2f1ee` ink and `#a09e98` muted | |

### Type
One family, two personalities: **Archivo** variable (wdth 62 to 125, wght 100 to 900), self-hosted.
- Display: wght 800, wdth 100 (set). The width axis *is* the concept: things arrive wide (apart)
  and tighten to 100 (joined).
- Text and UI: wght 400/500, wdth 100. Small UI 13 to 14 px, sentence case. No mono labels.

### Grid and rhythm
12 columns, fluid gutter. Hang text from columns 1, 5 and 7. Section rhythm varies: hero full
viewport, statement airy, index normal, facts tight on night, footer full.

### Shape
Radius 0 everywhere, except buttons, which are full pills (they are the "joints" you press).

### Motion language
- Ease: expo.out for entrances, expo.inOut for the seam transition, power3.out for UI.
- **Meet and lock:** two halves travel toward a center line and settle. Used by: the page
  transition (two ink panels meet at a violet seam, then part), the primary button hover (fill
  closes in from both sides), nav underline (draws from both ends to the middle).
- **Idle:** the hero name's letters lean very slightly toward the pointer (held together, alive).
  Off under reduced motion and on touch.
- **No loader.** The intro of the name is the first frame, and the LCP stays real text.

### Composition plan (home)
```
1 Hero (split frame + name as image)
  [Jai Samyukth]                                   [Work About Contact]
  intro text cols 1-5          | portrait cols 7-12, full height, bleeds right
  heard-as line                |
  J A I  S A M Y U K T H   (mega, full width, over the photo, blend difference)
  [Coimbatore · local time]                          [See the work]

2 Statement (cols 2-10, large text) + what I build (small list, col 10-12)
3 Index list: Selected work (title | what it joins | status), cursor preview / inline thumbs
4 Facts on night: three joins in tabular figures, a violet seam drawn between the sides
5 Asymmetric pair: testimonial (cols 1-8) / short about + link (cols 9-12)
6 Footer finale: "Say hi" at mega size, email, links, the name's meaning, colophon
```

### Genericness test
- A generic model would put the name in a centered hero over a gradient: replaced by a split
  frame with a real portrait and the name crossing it.
- It would use cream + serif italic accents and acid green: all removed. One grotesk family,
  the only colour is sampled from the photo and reserved for joins.
- It would label every heading with a mono eyebrow and 01/02/03: removed. Numbers appear only
  where they are a real sequence (the approach steps, the lessons tally).
- It would ship four hover effects: two treatments only (meet-and-lock fill, both-ends underline).

## Build decisions (Phase 3)

- **No loader.** The name's entrance is the first frame. It runs in CSS, not JS, so it paints
  immediately and stays the LCP on a throttled phone. On first load every `data-intro` element
  animates in CSS; after an in-site navigation GSAP plays intros behind the seam curtain.
- **Idle state:** the joined letters breathe about a pixel around their seams and lean with the
  pointer, on `gsap.ticker`, paused off screen, off under reduced motion.
- **Frame:** ink on paper, paper over the photo while the hero is on screen; it steps aside when
  scrolling down and returns as a solid bar on the way up, so it never sits on content.
- **Navigation:** three corner links (Work, About, Contact). Everything else lives in the menu
  and the footer.
