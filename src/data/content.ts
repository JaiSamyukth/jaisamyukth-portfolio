import { org, person } from './site';

export const services = [
  { title: 'MVPs people can actually demo', body: 'From idea to something investors and users can click — usually in weeks, not quarters.' },
  { title: 'Internal software that replaces spreadsheets', body: 'Billing, operations, permissions. One system instead of five tabs and a prayer.' },
  { title: 'AI features that solve boring work', body: 'LLM integrations, retrieval over your own documents, and automation that earns its token bill.' },
  { title: 'Systems that survive real users', body: 'Real-time sync, role-based access, and backends that don’t fall over on a Friday.' },
];

export const obsessions = [
  'Making software disappear into people’s workflow',
  'Replacing spreadsheets',
  'Restaurant operations',
  'Knowledge systems',
  'Cloud architecture',
  'Why humans insist on doing repetitive things manually',
];

export const tickerLines = [
  'Fixing broken productions',
  'Writing code people pay for',
  'Replacing spreadsheets',
  'Shipping before Friday',
  'Ignoring AWS bills',
];

export const stats = [
  { value: '30+', label: 'repositories', note: 'Most are terrible. The rest pay for servers.' },
  { value: '3', label: 'systems in the wild', note: 'Lumina IQ, Tabble and a production CRM.' },
  { value: '1', label: 'studio co-founded', note: 'Genrec AI — client work funds the products.' },
  { value: '<24h', label: 'reply latency', note: 'For actual work. Recruiter bots wait longer.' },
];

export const stack = [
  { group: 'Core', items: ['TypeScript', 'Python', 'Java', 'C#', 'C', 'C++'], aside: 'TypeScript is annoyingly correct.' },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'PostgreSQL', 'MySQL', 'WebSockets'] },
  { group: 'Infra', items: ['Docker', 'Azure', 'AWS', 'Supabase'], aside: 'Docker works on attempt #17.' },
];

export const timeline = [
  { when: 'May 2023', title: 'Started building', body: 'Got college lab access by offering to build tools they’d actually use. If you automate someone’s boring job, they let you use their computers.' },
  { when: '2024', title: 'People paid me', body: 'Shipped three full projects. Learned that clients don’t care about clean architecture — they care whether the button works.' },
  { when: '2024', title: 'The cloud incidents', body: 'AWS charged me for experimenting. Azure showed up carrying $1,000 in startup credits — an unusually good first impression. Git faithfully recorded every terrible decision.' },
  { when: 'Late 2024', title: 'Lumina IQ MVP', body: 'Turned exam-cram frustration into a product. First external testers. Some feedback was angry, which meant it was forcing them to think.' },
  { when: '2025', title: 'Tabble architecture', body: 'A complete restaurant sync system, wired together and tested. Now looking for a restaurant owner brave enough to install it.' },
  { when: 'Now', title: 'The current loop', body: 'Client builds at Genrec AI pay for the servers. Products break and get fixed. Thirty abandoned repos remain politely ignored.' },
];

export const testimonial = {
  quote:
    'He leads by example. Working alongside him, I’ve seen him bring the team together, make honest decisions under pressure, and push us to build things that actually matter. That’s rare.',
  name: 'Shyamnath Sankar',
  role: 'Fellow builder',
  href: 'https://www.linkedin.com/in/shyamnath-sankar',
};

export const approachSteps = [
  { title: 'Observe', body: 'Watch how humans actually use things — which is rarely how the documentation says they should.' },
  { title: 'Panic', body: 'Realise how much time and money is being burned by manual copy-pasting.' },
  { title: 'Build', body: 'Write code that absorbs the chaos instead of putting a nice UI on top of it.' },
  { title: 'Break & fix', body: 'Deploy it. Watch users break it in ways nobody imagined. Fix it at 2 AM.' },
];

export const learnings = [
  'Users don’t read.',
  'Production doesn’t care.',
  'Git remembers everything.',
  'Backups are cheaper than confidence.',
  'Cloud invoices are educational material.',
  'Every “small feature” is lying.',
  'Someone will always press the button twice.',
  'Excel is not a database.',
  'Documentation is written for Future Me.',
  'Future Me rarely reads it.',
  'AWS was my ex.',
  'Azure arrived with startup credits.',
  'We’re in a much healthier relationship now.',
  'Production doesn’t care that it worked locally.',
];

export const experiments = [
  { title: 'Tabble V1 & V2', body: 'Before I realised WebSockets were the actual problem.' },
  { title: 'Revolvo AI', body: 'A knowledge-retrieval bot that hallucinated with extreme confidence.' },
  { title: 'CRM clones', body: 'Because everyone tries to build Jira once before giving up.' },
  { title: 'Feedback forms', body: 'Built for college. Mostly used to submit blank responses.' },
];

export const otherRepos = [
  'This exact portfolio, rewritten five times',
  'Python scripts that automate boring tasks',
  'Abandoned hackathon code',
  'Proofs of concept that proved I was wrong',
];

export const contactReasons = [
  'Your software is growing faster than your processes.',
  'You’re still living inside spreadsheets.',
  'You need an MVP.',
  'Your previous developer disappeared.',
  'You’ve spent six months discussing an idea and zero weeks building it.',
];

/** Visible on /about and mirrored as FAQPage JSON-LD (Google requires the two to match). */
export const faqs = [
  {
    q: 'Who is Jai Samyukth B U?',
    a: `${person.summary}`,
  },
  {
    q: 'How do you pronounce and spell “Jai Samyukth”?',
    a: `It’s said “${person.pronunciation}”. People who have only heard the name often search for it as ${person.misheard.join(', ')} — they all mean the same person: Jai Samyukth B U, co-founder of Genrec AI.`,
  },
  {
    q: 'What is Genrec AI?',
    a: `${org.description} Jai Samyukth B U is a co-founder.`,
  },
  {
    q: 'What is Lumina IQ?',
    a: 'Lumina IQ is an AI-powered adaptive learning platform built by Genrec AI. It converts a syllabus or notes into a structured revision path and runs active-recall sessions so students know what they have actually learned. It is live at luminaiq.fun.',
  },
  {
    q: 'What is Tabble?',
    a: 'Tabble is a restaurant ordering and operations platform with three interfaces — customer, chef and admin — synchronised in real time over WebSockets. It is designed for small restaurants in India that can’t justify a traditional POS system.',
  },
  {
    q: 'Is Jai Samyukth available for freelance or client work?',
    a: `Yes. He takes on client projects through Genrec AI — MVPs, internal tools that replace spreadsheets, AI and LLM integrations, and system rebuilds. Email ${person.email}; replies usually arrive within 24 hours.`,
  },
];
