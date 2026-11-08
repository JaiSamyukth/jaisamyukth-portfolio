import { SITE_URL, person, org, socials } from '../data/site';
import { projects, getProject } from '../data/projects';
import { faqs } from '../data/content';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  ogType: 'website' | 'profile' | 'article';
  noindex?: boolean;
  /** Above-the-fold image to fetch before scripts (LCP). */
  preloadImage?: string;
  jsonLd: Record<string, unknown>;
}

const DEFAULT_OG = `${SITE_URL}/og-image.png`;
const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#genrec-ai`;
const SITE_ID = `${SITE_URL}/#website`;

export const absolute = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: person.name,
  givenName: person.givenName,
  familyName: person.familyName,
  alternateName: person.alternateNames,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/portrait.webp`,
  email: `mailto:${person.email}`,
  telephone: person.phone,
  jobTitle: person.jobTitle,
  description: person.summary,
  worksFor: { '@id': ORG_ID },
  homeLocation: {
    '@type': 'Place',
    name: `${person.location.city}, ${person.location.region}, ${person.location.country}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.location.officialCity,
      addressRegion: person.location.region,
      addressCountry: person.location.countryCode,
    },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Software engineer',
    occupationLocation: { '@type': 'Country', name: person.location.country },
    skills: person.knowsAbout.join(', '),
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: person.education,
  },
  knowsAbout: person.knowsAbout,
  knowsLanguage: ['English'],
  sameAs: [...socials.map((s) => s.href), org.url],
};

const orgNode = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: org.name,
  url: org.url,
  description: org.description,
  founder: { '@id': PERSON_ID },
  address: { '@type': 'PostalAddress', addressLocality: person.location.officialCity, addressRegion: person.location.region, addressCountry: person.location.countryCode },
};

const websiteNode = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: person.name,
  alternateName: ['Jai Samyukth portfolio', 'Jai Samyukth B U portfolio'],
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
};

const crumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absolute(c.path),
  })),
});

const softwareNode = (id: string) => {
  const p = getProject(id)!;
  return {
    '@type': p.kind === 'Product' ? 'SoftwareApplication' : 'CreativeWork',
    '@id': `${absolute(`/work/${p.id}`)}#software`,
    name: p.title,
    description: p.summary,
    url: p.liveLink ?? absolute(`/work/${p.id}`),
    ...(p.kind === 'Product'
      ? { applicationCategory: p.appCategory, operatingSystem: 'Web', publisher: { '@id': ORG_ID } }
      : {}),
    creator: { '@id': PERSON_ID },
    keywords: p.stack.join(', '),
    ...(p.cover ? { image: `${SITE_URL}${p.cover.large}` } : {}),
  };
};

const graph = (page: Record<string, unknown>, extra: Record<string, unknown>[] = []) => ({
  '@context': 'https://schema.org',
  '@graph': [websiteNode, personNode, orgNode, page, ...extra],
});

const pageNode = (
  type: string,
  path: string,
  title: string,
  description: string,
  extra: Record<string, unknown> = {},
) => ({
  '@type': type,
  '@id': `${absolute(path)}#webpage`,
  url: absolute(path),
  name: title,
  description,
  isPartOf: { '@id': SITE_ID },
  inLanguage: 'en',
  ...extra,
});

type StaticDef = { title: string; description: string; type: string; crumb?: string; ogType?: PageMeta['ogType'] };

const staticPages: Record<string, StaticDef> = {
  '/': {
    title: 'Jai Samyukth B U · Systems builder, co-founder of Genrec AI',
    description:
      'Jai Samyukth B U, co-founder of Genrec AI from Trichy, Tamil Nadu. I turn messy client problems into MVPs, AI tools and software that kills spreadsheets, and make sure they ship.',
    type: 'ProfilePage',
    ogType: 'profile',
  },
  '/work': {
    title: 'Work: Lumina IQ, Tabble and a production CRM | Jai Samyukth B U',
    description:
      'Things that survived: Lumina IQ (AI study tool), Tabble (restaurant ordering) and a CRM that replaced five spreadsheets. By Jai Samyukth B U.',
    type: 'CollectionPage',
    crumb: 'Work',
  },
  '/about': {
    title: 'About Jai Samyukth B U: pronunciation, background and FAQ',
    description:
      'Jai Samyukth B U: co-founder of Genrec AI, CSBS student, serial builder from Trichy, Tamil Nadu with 30+ repos and a grudge against inefficient systems.',
    type: 'AboutPage',
    crumb: 'About',
    ogType: 'profile',
  },
  '/approach': {
    title: 'Approach: observe, panic, build, fix | Jai Samyukth B U',
    description:
      'My method: watch people suffer, panic, build the fix, break it in production, fix it at 2 AM. No 3-week discovery phases. By Jai Samyukth B U.',
    type: 'WebPage',
    crumb: 'Approach',
  },
  '/learnings': {
    title: 'Things I learned expensively | Jai Samyukth B U',
    description:
      'Lessons Jai Samyukth B U learned expensively: production doesn’t care, Excel is not a database, and cloud invoices are educational material.',
    type: 'WebPage',
    crumb: 'Lessons',
  },
  '/experimental': {
    title: 'Lab: unfinished business and failed experiments | Jai Samyukth B U',
    description:
      'The 90% that didn’t make it: hallucinating RAG bots, Jira clones and early Tabble versions. Jai Samyukth B U’s graveyard of repos.',
    type: 'WebPage',
    crumb: 'Lab',
  },
  '/name': {
    title: 'How to say & spell Jai Samyukth (not Jai Samuth or Jai Sampath)',
    description:
      'Jai Samyukth is said “jai · sum-YOOKTH”. Often typed as Jai Samuth, Jai Sampath or Jay Samyukth: all the same person, the co-founder of Genrec AI.',
    type: 'WebPage',
    crumb: 'The name',
  },
  '/contact': {
    title: 'Contact Jai Samyukth B U: hire for MVPs, AI and internal tools',
    description:
      'Need an MVP, an AI feature or software that kills your spreadsheets? Email or call Jai Samyukth B U (Genrec AI). Replies in under 24 hours.',
    type: 'ContactPage',
    crumb: 'Contact',
  },
};

export const staticPaths = Object.keys(staticPages);
export const projectPaths = projects.map((p) => `/work/${p.id}`);
export const allPaths = [...staticPaths, ...projectPaths];

export function getMeta(rawPath: string): PageMeta {
  const path = rawPath.replace(/\/+$/, '') || '/';
  const def = staticPages[path];

  if (def) {
    const extra: Record<string, unknown>[] = [];
    if (def.crumb) extra.push(crumbs([{ name: def.crumb, path }]));
    let pageExtra: Record<string, unknown> = {};
    if (path === '/' || path === '/about' || path === '/name') pageExtra = { mainEntity: { '@id': PERSON_ID }, about: { '@id': PERSON_ID } };
    if (path === '/work') {
      pageExtra = {
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absolute(`/work/${p.id}`),
            name: p.title,
          })),
        },
      };
      extra.push(...projects.map((p) => softwareNode(p.id)));
    }
    if (path === '/name') {
      extra.push({
        '@type': 'FAQPage',
        '@id': `${absolute(path)}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do you pronounce Jai Samyukth?',
            acceptedAnswer: { '@type': 'Answer', text: `It is pronounced “${person.pronunciation}”: Jai (rhymes with high), Sam (as in some), yukth (stressed, soft k then th).` },
          },
          {
            '@type': 'Question',
            name: 'How do you spell Jai Samyukth?',
            acceptedAnswer: { '@type': 'Answer', text: 'J-A-I S-A-M-Y-U-K-T-H. Full name: Jai Samyukth B U.' },
          },
          ...person.typos.map((t) => ({
            '@type': 'Question',
            name: `Is “${t.typed}” the same person as Jai Samyukth?`,
            acceptedAnswer: { '@type': 'Answer', text: `Yes. ${t.why} The correct spelling is Jai Samyukth (Jai Samyukth B U, co-founder of Genrec AI).` },
          })),
        ],
      });
    }
    if (path === '/about') {
      extra.push({
        '@type': 'FAQPage',
        '@id': `${absolute(path)}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }
    return {
      path,
      title: def.title,
      description: def.description,
      ogImage: DEFAULT_OG,
      ogType: def.ogType ?? 'website',
      jsonLd: graph(pageNode(def.type, path, def.title, def.description, pageExtra), extra),
    };
  }

  const m = path.match(/^\/work\/([^/]+)$/);
  const project = m ? getProject(m[1]) : undefined;
  if (project) {
    const title = `${project.title}: ${project.category} case study | Jai Samyukth B U`;
    const description = project.summary.length > 135 ? project.summary : `${project.summary} By Jai Samyukth B U.`;
    return {
      path,
      title,
      description,
      ogImage: project.cover ? `${SITE_URL}${project.cover.large}` : DEFAULT_OG,
      ogType: 'article',
      jsonLd: graph(
        pageNode('WebPage', path, title, description, {
          about: { '@id': `${absolute(path)}#software` },
          author: { '@id': PERSON_ID },
        }),
        [softwareNode(project.id), crumbs([{ name: 'Work', path: '/work' }, { name: project.title, path }])],
      ),
    };
  }

  return {
    path,
    title: 'Page not found | Jai Samyukth B U',
    description: 'This page doesn’t exist. Probably one of the thirty abandoned repos.',
    ogImage: DEFAULT_OG,
    ogType: 'website',
    noindex: true,
    jsonLd: graph(pageNode('WebPage', path, 'Not found', 'Not found')),
  };
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** JSON for a <script> tag: escape `<` so content can never close the tag. */
export const jsonForScript = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

/** Head tags for prerendered HTML. Mirrors what applyMeta() does on the client. */
export function renderHead(meta: PageMeta): string {
  const url = absolute(meta.path);
  const t = esc(meta.title);
  const d = esc(meta.description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.ogType}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${esc(meta.ogImage)}" />`,
    `<meta property="og:image:alt" content="${esc(person.name)}, ${esc(person.role)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${esc(meta.ogImage)}" />`,
    meta.preloadImage ? `<link rel="preload" as="image" href="${meta.preloadImage}" fetchpriority="high" />` : '',
    `<script type="application/ld+json" id="ld-graph">${jsonForScript(meta.jsonLd)}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
}

/** Client-side counterpart used after in-app navigation. */
export function applyMeta(meta: PageMeta) {
  if (typeof document === 'undefined') return;
  document.title = meta.title;
  const url = absolute(meta.path);
  const set = (sel: string, attr: string, value: string) => {
    const el = document.head.querySelector(sel);
    if (el) el.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', meta.description);
  set('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');
  set('link[rel="canonical"]', 'href', url);
  set('meta[property="og:type"]', 'content', meta.ogType);
  set('meta[property="og:url"]', 'content', url);
  set('meta[property="og:title"]', 'content', meta.title);
  set('meta[property="og:description"]', 'content', meta.description);
  set('meta[property="og:image"]', 'content', meta.ogImage);
  set('meta[name="twitter:title"]', 'content', meta.title);
  set('meta[name="twitter:description"]', 'content', meta.description);
  set('meta[name="twitter:image"]', 'content', meta.ogImage);
  const ld = document.getElementById('ld-graph');
  if (ld) ld.textContent = JSON.stringify(meta.jsonLd);
}
