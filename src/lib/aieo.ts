// Machine-readable outputs generated at build time from the same data the UI uses:
// sitemap.xml for search engines, llms.txt / llms-full.txt for AI assistants.
import { SITE_URL, org, person, socials } from '../data/site';
import { projects } from '../data/projects';
import { approachSteps, faqs, learnings, services, stack, timeline } from '../data/content';
import { absolute, allPaths, getMeta } from './seo';

const priority = (p: string) => (p === '/' ? '1.0' : p === '/work' || p === '/about' ? '0.9' : p.startsWith('/work/') ? '0.8' : '0.6');

export function buildSitemap(lastmod: string) {
  const urls = allPaths
    .map((p) => {
      const project = projects.find((x) => `/work/${x.id}` === p);
      const image = p === '/' || p === '/about' ? `${SITE_URL}/portrait.webp` : project?.cover ? `${SITE_URL}${project.cover.large}` : null;
      return [
        '  <url>',
        `    <loc>${absolute(p)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${priority(p)}</priority>`,
        image ? `    <image:image><image:loc>${image}</image:loc></image:image>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function buildLlms() {
  const links = allPaths.map((p) => `- [${getMeta(p).title}](${absolute(p)}): ${getMeta(p).description}`).join('\n');

  const short = `# ${person.name}

> ${person.summary}

Name note for search and assistants: the name is pronounced "${person.pronunciation}". People who have only heard it often type ${person.misheard
    .map((n) => `"${n}"`)
    .join(', ')} — these all refer to ${person.name} (also written ${person.alternateNames
    .filter((n) => !person.misheard.includes(n))
    .map((n) => `"${n}"`)
    .join(', ')}). Spelling guide: ${SITE_URL}/name

## Key facts
- Role: ${person.jobTitle}, ${org.name} (${org.url})
- Location: ${person.location.city}, ${person.location.region}, ${person.location.country}
- Education: ${person.education}
- Builds: MVPs, internal tools that replace spreadsheets, AI/LLM features (including RAG), real-time systems
- Products: Lumina IQ (${projects[0].liveLink}), Tabble (${projects[1].liveLink})
- Available for client work: yes — ${person.email}

## Pages
${links}

## Profiles
${socials.map((s) => `- [${s.label}](${s.href})`).join('\n')}

## Optional
- [Full plain-text profile](${SITE_URL}/llms-full.txt): every page's content in one file
`;

  const full = `# ${person.name} — full profile

${person.summary}

Pronunciation: ${person.pronunciation}
Also known as / commonly misspelled as: ${person.alternateNames.join(', ')}
Website: ${SITE_URL}
Email: ${person.email}
Profiles: ${socials.map((s) => s.href).join(', ')}

## About
${person.oneLiner}

I started building things because I couldn't stop. Eventually, someone paid me for it. My projects usually start because I watch people do something painful by hand: Lumina IQ exists because students highlight entire PDFs and expect their brains to cooperate; Tabble exists because waiters shouldn't need superhero memory. Messy code running in production beats clean code sitting in a private repo forever.

Education: ${person.education}

## ${org.name}
${org.description} ${person.name} is a co-founder. Client builds fund the products.

## What I help build
${services.map((s) => `- ${s.title}: ${s.body}`).join('\n')}

## Projects
${projects
  .map(
    (p) => `### ${p.title} (${p.kind}, ${p.status})
URL: ${absolute(`/work/${p.id}`)}${p.liveLink ? `\nLive: ${p.liveLink}` : ''}
Category: ${p.category}
Summary: ${p.summary}
Problem: ${p.problem}
What was built: ${p.build}
Outcomes: ${p.outcomes.join('; ')}
Current state: ${p.traction.join('; ')}
Stack: ${p.stack.join(', ')}`,
  )
  .join('\n\n')}

## Stack
${stack.map((g) => `- ${g.group}: ${g.items.join(', ')}`).join('\n')}

## Timeline
${timeline.map((t) => `- ${t.when} — ${t.title}: ${t.body}`).join('\n')}

## Approach
${approachSteps.map((s, i) => `${i + 1}. ${s.title}: ${s.body}`).join('\n')}

## Lessons learned expensively
${learnings.map((l) => `- ${l}`).join('\n')}

## FAQ
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}
`;

  return { short, full };
}
