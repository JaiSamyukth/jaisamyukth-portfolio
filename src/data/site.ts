// Single source of truth for identity data. Used by the UI, the JSON-LD graph,
// the sitemap, and the llms.txt files generated at build time.

export const SITE_URL = 'https://jaisamyukth.genrecai.com';

export const person = {
  name: 'Jai Samyukth B U',
  shortName: 'Jai Samyukth',
  givenName: 'Jai Samyukth',
  familyName: 'B U',
  // How the name sounds, written as a respelling a human can read aloud.
  pronunciation: 'jai · sum-yu-kth',
  // Spoken text for the "hear it" button (speech engines handle the respelling better).
  spoken: 'Jai, Sum-yu-kth',
  /**
   * Spellings people actually type when they've only heard the name.
   * These are rendered as visible text (About page + footer) and listed as
   * schema.org `alternateName`, so search engines and AI assistants can
   * connect a misheard query to the right person.
   */
  alternateNames: [
    'Jai Samyukth',
    'JaiSamyukth',
    'Jai Samyukth BU',
    'Jai Samyukth B.U.',
    'Jay Samyukth',
    'Jai Samuth',
    'Jai Sampath',
    'Jai Samyuth',
    'Jai Samyukt',
    'Jai Samyuk',
    'Jai Samyuktha',
    'Jai Samyukta',
  ],
  /** The subset of alternateNames that are mishearings rather than formatting variants. */
  misheard: ['Jai Samuth', 'Jai Sampath', 'Jay Samyukth', 'Jai Samyuktha', 'Jai Samyuth'],
  /**
   * Spelling guide shown on /name. Each entry is something people really type
   * after hearing the name, plus why it happens. Honest, visible content is what
   * lets a search engine connect these queries to this page.
   */
  typos: [
    { typed: 'Jai Samuth', why: 'The “y” and “k” get swallowed when the name is said quickly.' },
    { typed: 'Jai Sampath', why: 'Sampath is a far more common name, so ears and autocorrect reach for it.' },
    { typed: 'Jay Samyukth', why: 'Jay is the spelling English keyboards reach for, but it’s J-A-I and rhymes with “eye”, not “day”.' },
    { typed: 'Jai Samyuktha / Samyukta', why: 'Samyuktha is a related name, more often feminine. Mine has no final “a”.' },
    { typed: 'Jai Samyuth', why: 'The “k” is soft, so it often disappears in writing.' },
    { typed: 'Jai Samyukt / Samyuk', why: 'The final “th” gets dropped.' },
    { typed: 'JaiSamyukth17', why: 'That’s my handle on X and Instagram. Same person.' },
  ],
  /** Syllables for the spelling breakdown on /name. */
  syllables: [
    { part: 'Jai', say: 'jai', note: 'rhymes with “eye”, “high” and “why”' },
    { part: 'Sam', say: 'sum', note: 'as in “some”' },
    { part: 'yukth', say: 'yu-kth', note: '“yu” as in “you”, then a quick “k” and a soft “th”' },
  ],
  meaning:
    'Jai comes from the Sanskrit “jaya”, meaning victory. Samyukth comes from “saṃyukta”, meaning united or joined together.',
  role: 'Co-founder of Genrec AI · Systems builder',
  jobTitle: 'Co-founder & Systems Engineer',
  location: { city: 'Trichy', officialCity: 'Tiruchirappalli', region: 'Tamil Nadu', country: 'India', countryCode: 'IN' },
  timeZone: 'Asia/Kolkata',
  education: 'B.Tech, Computer Science and Business Systems (CSBS)',
  email: 'jaisamyukth@gmail.com',
  phone: '+91 96555 32378',
  phoneHref: 'tel:+919655532378',
  oneLiner:
    'I notice what people have learned to tolerate, then write software until they don’t have to.',
  summary:
    'Jai Samyukth B U is a systems builder and the co-founder of Genrec AI, based in Trichy (Tiruchirappalli), Tamil Nadu, India. He builds MVPs, internal tools that replace spreadsheets, AI and LLM features, and real-time systems, including Lumina IQ (AI-powered active-recall learning) and Tabble (restaurant ordering for small restaurants).',
  knowsAbout: [
    'Full-stack development',
    'AI and LLM integration',
    'Retrieval-augmented generation (RAG)',
    'Real-time systems and WebSockets',
    'Role-based access control',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'FastAPI',
    'Node.js',
    'PostgreSQL',
    'Supabase',
    'Azure',
    'AWS',
    'Docker',
  ],
};

export const org = {
  name: 'Genrec AI',
  url: 'https://www.genrecai.com',
  description:
    'Genrec AI is a software services and product studio. Client builds fund development of its own products, Lumina IQ and Tabble.',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/JaiSamyukth', handle: '@JaiSamyukth', note: 'my graveyard of repos' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaisamyukth', handle: 'in/jaisamyukth', note: 'for the recruiter bots' },
  { label: 'X (Twitter)', href: 'https://x.com/JaiSamyukth17', handle: '@JaiSamyukth17', note: 'occasional noise' },
  { label: 'Instagram', href: 'https://www.instagram.com/jaisamyukth17/', handle: '@jaisamyukth17', note: 'proof I go outside' },
  { label: 'Dev.to', href: 'https://dev.to/jaisamyukth', handle: 'dev.to/jaisamyukth', note: 'rants about broken workflows' },
];

export const nav = [
  { label: 'Survivors', path: '/work', hint: 'the work' },
  { label: 'The Idiot', path: '/about', hint: 'about me' },
  { label: 'My Method', path: '/approach', hint: 'how I work' },
  { label: 'Scars', path: '/learnings', hint: 'lessons' },
  { label: 'Lab', path: '/experimental', hint: 'unfinished business' },
  { label: 'Complain', path: '/contact', hint: 'say hi' },
];
