// Single source of truth for identity data. Used by the UI, the JSON-LD graph,
// the sitemap, and the llms.txt files generated at build time.

export const SITE_URL = 'https://jaisamyukth.genrecai.com';

export const person = {
  name: 'Jai Samyukth B U',
  shortName: 'Jai Samyukth',
  givenName: 'Jai Samyukth',
  familyName: 'B U',
  // How the name sounds, written as a respelling a human can read aloud.
  pronunciation: 'jai · sum-YOOKTH',
  // Spoken text for the "hear it" button (speech engines handle the respelling better).
  spoken: 'Jai, Sum-yookth',
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
    'Jai Samuth',
    'Jai Samyuth',
    'Jai Samyukt',
    'Jai Samyuktha',
    'Jai Samyuktha BU',
  ],
  /** The subset of alternateNames that are mishearings rather than formatting variants. */
  misheard: ['Jai Samuth', 'Jai Samyuth', 'Jai Samyukt', 'Jai Samyuktha'],
  role: 'Co-founder of Genrec AI · Systems builder',
  jobTitle: 'Co-founder & Systems Engineer',
  location: { city: 'Coimbatore', region: 'Tamil Nadu', country: 'India', countryCode: 'IN' },
  timeZone: 'Asia/Kolkata',
  education: 'B.Tech, Computer Science and Business Systems (CSBS)',
  email: 'jaisamyukth@gmail.com',
  oneLiner:
    'I notice what people have learned to tolerate — then write software until they don’t have to.',
  summary:
    'Jai Samyukth B U is a systems builder and the co-founder of Genrec AI, based in Coimbatore, India. He builds MVPs, internal tools that replace spreadsheets, AI and LLM features, and real-time systems — including Lumina IQ (AI-powered active-recall learning) and Tabble (restaurant ordering for small restaurants).',
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
  { label: 'X', href: 'https://x.com/JaiSamyukth17', handle: '@JaiSamyukth17', note: 'occasional noise' },
  { label: 'Instagram', href: 'https://www.instagram.com/jaisamyukth17/', handle: '@jaisamyukth17', note: 'proof I go outside' },
  { label: 'Dev.to', href: 'https://dev.to/jaisamyukth', handle: 'dev.to/jaisamyukth', note: 'rants about broken workflows' },
];

export const nav = [
  { label: 'Work', path: '/work', hint: 'things that survived' },
  { label: 'About', path: '/about', hint: 'the person' },
  { label: 'Approach', path: '/approach', hint: 'the method' },
  { label: 'Lessons', path: '/learnings', hint: 'the scars' },
  { label: 'Lab', path: '/experimental', hint: 'unfinished business' },
  { label: 'Contact', path: '/contact', hint: 'say hi' },
];
