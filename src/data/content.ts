import { org, person } from './site';

export const services = [
  { title: 'MVPs you can actually demo', body: 'Without the “it works on my machine” disclaimer.' },
  { title: 'Internal software that kills spreadsheets', body: 'RIP FINAL_final_v7_USE_THIS.xlsx. You won’t be missed.' },
  { title: 'AI that does the boring work', body: 'Not another chatbot nobody asked for. Something that saves real hours.' },
  { title: 'Systems that survive real users', body: 'Including the guy who presses every button twice.' },
];

export const obsessions = [
  'Making software disappear into people’s workflow. Best compliment: nobody notices it.',
  'Killing spreadsheets that cosplay as databases.',
  'Restaurant operations, because waiters deserve better than a notepad and a prayer.',
  'Knowledge systems that don’t hallucinate with confidence.',
  'Cloud architecture that doesn’t bankrupt me by Tuesday.',
  'Why humans still do repetitive things by hand. Seriously. Why.',
];

export const tickerLines = ['Fixing broken productions', 'Writing code people pay for', 'Ignoring AWS bills'];

export const trackRecord = [
  '30+ repos. Most are terrible. The rest are paying for servers.',
  'Lumina IQ: actually used by real students right now',
  'Tabble: survived local testing, waiting for hardware',
  'Built entirely without permission or adult supervision',
];

export const stats = [
  { to: 30, suffix: '+', label: 'repositories', note: 'Most are terrible. The rest pay for servers.', color: 'acid' },
  { to: 3, suffix: '', label: 'things that survived', note: 'Lumina IQ, Tabble and a CRM that accountants trust.', color: 'pink' },
  { to: 1, suffix: '', label: 'studio co-founded', note: 'Genrec AI. Client work funds the bad ideas.', color: 'blue' },
  { to: 0, suffix: '', label: 'adults supervising', note: 'Built entirely without permission.', color: 'yellow' },
];

export const stack = [
  { group: 'Core', items: ['TypeScript (annoyingly correct)', 'Python', 'Java', 'C#', 'C', 'C++'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'PostgreSQL', 'MySQL'] },
  { group: 'Infra', items: ['Docker (works on attempt #17)', 'AWS', 'Azure (the rebound carrying startup credits)', 'Supabase'] },
];

export const timeline = [
  { when: 'May 2023', title: 'Started building', body: 'Got college lab access by offering to build tools they’d actually use. Turns out if you automate someone’s boring job, they let you use their computers.' },
  { when: '2024', title: 'People paid me', body: 'Shipped 3 full projects. Learned that clients don’t care about your clean architecture, they care if the button works.' },
  { when: '2024', title: 'The cloud incidents', body: 'AWS charged me for experimenting. Azure showed up carrying $1000 in startup credits. That’s an unusually good first impression. Git has faithfully recorded all my terrible decisions.' },
  { when: 'Late 2024', title: 'Lumina IQ MVP', body: 'Turned exam-cram frustration into a product. Got first external testers. Some feedback was angry, which meant it was actually forcing them to think.' },
  { when: '2025', title: 'Tabble architecture', body: 'Complete restaurant sync system. Wired it all together. Tested locally. Now I just need to find a restaurant owner brave enough to let me install it.' },
  { when: 'Now', title: 'The current loop', body: 'Client builds pay for the servers. Products break and get fixed. I still have 30 abandoned repos I pretend don’t exist.' },
];

export const testimonial = {
  quote:
    'He leads by example. Working alongside him, I’ve seen him bring the team together, make honest decisions under pressure, and push us to build things that actually matter. That’s rare.',
  name: 'Shyamnath Sankar',
  role: 'Fellow builder',
  href: 'https://www.linkedin.com/in/shyamnath-sankar',
};

export const approachSteps = [
  { title: 'Observe', body: 'Watch how humans actually use things, which is rarely how the documentation says they should.' },
  { title: 'Panic', body: 'Realize how much time and money is being burned by manual copy-pasting.' },
  { title: 'Build', body: 'Write code that absorbs the chaos instead of just putting a nice UI on top of it.' },
  { title: 'Break & fix', body: 'Deploy it. Watch users break it in ways you never imagined. Fix it at 2 AM.' },
];

export const learnings = [
  'Users don’t read. They click.',
  'Production doesn’t care that it worked locally.',
  'Git remembers everything. Especially the 3 AM commits.',
  'Backups are cheaper than confidence.',
  'Cloud invoices are educational material. Expensive, unskippable material.',
  'Every “small feature” is lying about its size.',
  'Someone will always press the button twice.',
  'Excel is not a database. Tell that to every company ever.',
  'Documentation is written for Future Me. Future Me never reads it.',
  '“Quick fix” is how weekends die.',
  'AWS was my ex. Azure showed up with startup credits and no trust issues.',
  'If it works on the first try, something else is broken.',
  'Naming things is harder than building them.',
  'Deploying on a Friday is a personality trait. Mine, unfortunately.',
];

export const howItGoes = [
  { title: 'You send me the mess', body: 'Screenshots, a voice note, a spreadsheet called FINAL_v7. I’ve seen worse. Probably.' },
  { title: 'I ship something real in days', body: 'Not a deck. Not a Figma file. A thing you can click, break and show your investors.' },
  { title: 'It breaks, I fix it', body: 'Users will find bugs I didn’t know were physically possible. I fix them, usually before you notice. Occasionally at 2 AM.' },
];

export const emailBrief = [
  'What you’re building (or what’s currently on fire)',
  'When you need it. Be honest, I won’t judge. Much.',
  'What exists right now: code, a spreadsheet, a napkin sketch, pure vibes',
];

export const experiments = [
  { title: 'Tabble V1 & V2', body: 'Before I realized WebSockets were the actual problem.' },
  { title: 'Revolvo AI', body: 'A knowledge retrieval bot that hallucinated with extreme confidence.' },
  { title: 'CRM clones', body: 'Everyone builds Jira once. Then they understand why Jira is like that.' },
  { title: 'Feedback forms', body: 'Built for college. Mostly used to submit blank responses.' },
];

export const otherRepos = [
  'This exact portfolio, rewritten 5 times',
  'Random Python scripts to automate boring tasks',
  'Abandoned hackathon code',
  'Proofs of concept that proved I was wrong',
];

export const contactReasons = [
  'Your software is growing faster than your processes.',
  'You’re still living inside spreadsheets.',
  'You need an MVP.',
  'Your previous developer disappeared.',
  'Or you’ve spent six months discussing an idea and zero weeks building it.',
];

/** Visible on /about and mirrored as FAQPage JSON-LD (Google requires the two to match). */
export const faqs = [
  {
    q: 'Who is Jai Samyukth B U?',
    a: `${person.summary}`,
  },
  {
    q: 'How do you pronounce “Jai Samyukth”?',
    a: `It’s said “${person.pronunciation}”. Jai rhymes with high, and the stress falls on the last syllable.`,
  },
  {
    q: 'What is Genrec AI?',
    a: `${org.description} Jai Samyukth B U is a co-founder.`,
  },
  {
    q: 'What is Lumina IQ?',
    a: 'Lumina IQ is an AI-powered adaptive learning platform built by Genrec AI. It converts a syllabus or notes into a structured revision path and runs active-recall sessions so students know what they have learned. It is live at luminaiq.fun.',
  },
  {
    q: 'What is Tabble?',
    a: 'Tabble is a restaurant ordering and operations platform with three interfaces (customer, chef and admin) synchronised in real time over WebSockets. It is designed for small restaurants in India that can’t justify a traditional POS system.',
  },
  {
    q: 'Is Jai Samyukth available for freelance or client work?',
    a: `Yes. He takes on client projects through Genrec AI: MVPs, internal tools that replace spreadsheets, AI and LLM integrations, and system rebuilds. Email ${person.email}; replies arrive within a day.`,
  },
];
