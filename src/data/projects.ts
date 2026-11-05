import luminaIntro960 from '../assets/lumina-intro-960.webp';
import luminaIntro1600 from '../assets/lumina-intro-1600.webp';
import luminaApp960 from '../assets/lumina-app-960.webp';
import luminaApp1600 from '../assets/lumina-app-1600.webp';
import tabbleIntro960 from '../assets/tabble-intro-960.webp';
import tabbleIntro1600 from '../assets/tabble-intro-1600.webp';
import tabbleChef960 from '../assets/tabble-chef-960.webp';
import tabbleChef1600 from '../assets/tabble-chef-1600.webp';
import tabbleAdmin960 from '../assets/tabble-admin-960.webp';
import tabbleAdmin1600 from '../assets/tabble-admin-1600.webp';

export interface Shot {
  small: string;
  large: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  /** Plain-language category for humans and search engines. */
  category: string;
  /** schema.org applicationCategory */
  appCategory: string;
  kind: 'Product' | 'Client build';
  status: string;
  focus: string;
  /** One-sentence, keyword-honest summary used in meta descriptions and llms.txt. */
  summary: string;
  hook: string;
  overview: string;
  problem: string;
  build: string;
  outcomes: string[];
  traction: string[];
  stack: string[];
  liveLink?: string;
  cover?: Shot;
  gallery: Shot[];
  accent: 'acid' | 'blue' | 'ink';
}

const shot = (small: string, large: string, w: number, h: number, alt: string): Shot => ({
  small,
  large,
  width: w,
  height: h,
  alt,
});

const luminaCover = shot(luminaIntro960, luminaIntro1600, 1600, 750, 'Lumina IQ workspace: chat with an uploaded PDF, with Q&A generation, quizzes and notes');
const tabbleCover = shot(tabbleIntro960, tabbleIntro1600, 1600, 900, 'Tabble landing page: restaurant automation system for digital ordering and kitchen management');

export const projects: Project[] = [
  {
    id: 'lumina-iq',
    title: 'Lumina IQ',
    category: 'AI / Education',
    appCategory: 'EducationalApplication',
    kind: 'Product',
    status: 'Live',
    focus: 'Forced active recall',
    summary:
      'Lumina IQ is an AI-powered adaptive learning platform by Genrec AI that turns a syllabus or notes into a structured revision path and active-recall sessions.',
    hook: 'Students don’t hate studying. They hate not knowing whether they’ve actually learned anything.',
    overview:
      'I watched people highlight entire PDFs and somehow expect their brain to cooperate. So I built this. You paste your syllabus in, it creates a structured path, and then relentlessly forces you to recall the information.',
    problem:
      'Rereading notes the night before an exam feels like studying, but it’s just creating a false sense of familiarity. The exam usually disagrees with your confidence level.',
    build:
      'People were already pasting their notes into ChatGPT, but without any structure. I built a proper loop: explanation, prioritisation, and active recall — backed by retrieval over the student’s own material. It doesn’t let you pretend you know the answer.',
    outcomes: [
      'Stopped students from mindless highlighting',
      'Didn’t crash during the Startup Grind demo',
      'Real students are using it to pass exams',
    ],
    traction: [
      'Handled actual student queries without melting',
      'Showcased to investors who pretended to understand RAG',
      'Gets angry feedback when a question is too hard — which means it’s working',
    ],
    stack: ['Python', 'FastAPI', 'TypeScript', 'React', 'PostgreSQL', 'Azure', 'LLMs / RAG'],
    liveLink: 'https://luminaiq.fun',
    cover: luminaCover,
    gallery: [luminaCover, shot(luminaApp960, luminaApp1600, 1600, 756, 'Lumina IQ generating Q&A questions from an uploaded PDF')],
    accent: 'acid',
  },
  {
    id: 'tabble',
    title: 'Tabble',
    category: 'Restaurant operations',
    appCategory: 'BusinessApplication',
    kind: 'Product',
    status: 'Waiting for hardware',
    focus: 'Real-time synchronisation',
    summary:
      'Tabble is a restaurant ordering and operations platform with customer, chef and admin interfaces, built for small restaurants in India that can’t justify a traditional POS.',
    hook: 'Restaurant software usually assumes perfect communication. Restaurants don’t.',
    overview:
      'Three interfaces. The customer taps what they want. The chef sees it instantly. The admin watches the chaos. No shouting, no illegible handwritten notes, no forgotten extra-spicy requests — all wired together over WebSockets.',
    problem:
      'Waiters shouldn’t have to memorise fifteen modifications to a burger. Go to a small restaurant and watch how orders happen: it’s usually someone writing on a tiny pad while balancing plates.',
    build:
      'It turns out a ₹5,000 tablet and a basic cloud setup solve the entire problem. Nobody built it because the small-restaurant market isn’t glamorous enough for VC money. I built it because I hate watching bad workflows.',
    outcomes: [
      'Removed manual order taking',
      'Made the kitchen slightly less chaotic',
      'Three different UIs talking to each other without catching fire',
    ],
    traction: ['Backend is stable', 'UI doesn’t make users want to cry', 'Looking for a brave restaurant owner'],
    stack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
    liveLink: 'https://tabble.in',
    cover: tabbleCover,
    gallery: [
      tabbleCover,
      shot(tabbleChef960, tabbleChef1600, 1600, 900, 'Tabble customer menu screen opened at a restaurant table'),
      shot(tabbleAdmin960, tabbleAdmin1600, 1600, 900, 'Tabble admin dashboard showing today’s orders, billing and revenue'),
    ],
    accent: 'blue',
  },
  {
    id: 'crm-platform',
    title: 'CRM Platform',
    category: 'Internal software',
    appCategory: 'BusinessApplication',
    kind: 'Client build',
    status: 'Deployed',
    focus: 'Data management & RBAC',
    summary:
      'A production CRM and finance system that replaced five spreadsheets with one role-based platform for billing, expenses, investments and permissions.',
    hook: 'Excel is an incredible spreadsheet. It’s also the most common database I’ve ever been asked to replace.',
    overview:
      'A company wasn’t looking for another dashboard. They wanted one place where billing, expenses, investments and permissions actually made sense. Replacing five spreadsheets with one system makes accountants considerably less nervous.',
    problem:
      'Employees should not be able to accidentally delete the company’s financial history. That requirement eliminated several bad ideas immediately.',
    build:
      'Built with React, TypeScript and Supabase, with strict role-based access control. The database is locked down so nobody can “accidentally” drop a table.',
    outcomes: [
      'Client actually uses it every day',
      'I got paid',
      'Database hasn’t corrupted itself yet',
    ],
    traction: ['Live in production', 'Handles daily client operations'],
    stack: ['TypeScript', 'React', 'Supabase', 'PostgreSQL'],
    gallery: [],
    accent: 'ink',
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
