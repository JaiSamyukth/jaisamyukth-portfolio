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
  year: string;
  /** What this system joins together: the concept, stated as plain fact. */
  joins: { from: string; to: string; note: string };
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
      'Lumina IQ, by Genrec AI, turns a syllabus or notes into a structured revision path and AI active-recall sessions, so students know what they have learned.',
    hook: 'A student can reread a chapter three times and still not know what stuck.',
    overview:
      'I watched people highlight entire PDFs and somehow expect their brain to cooperate. So I built this. You paste your syllabus in, it creates a structured path, and then makes you recall it, question by question.',
    problem:
      'Rereading notes the night before an exam feels like studying, but it builds a false sense of familiarity. The exam disagrees with your confidence level.',
    build:
      'People were already pasting their notes into ChatGPT, but without any structure. I built a proper loop: explanation, prioritisation, and active recall, backed by retrieval over the student’s own material. It doesn’t let you pretend you know the answer.',
    outcomes: [
      'Stopped students from mindless highlighting',
      'Didn’t crash during the Startup Grind demo',
      'Real students are using it to pass exams',
    ],
    traction: [
      'Handled actual student queries without melting',
      'Showcased to investors who pretended to understand RAG',
      'Gets angry feedback when a question is too hard, which means it’s working',
    ],
    stack: ['Python', 'FastAPI', 'TypeScript', 'React', 'PostgreSQL', 'Azure', 'LLMs / RAG'],
    liveLink: 'https://luminaiq.fun',
    cover: luminaCover,
    gallery: [luminaCover, shot(luminaApp960, luminaApp1600, 1600, 756, 'Lumina IQ generating Q&A questions from an uploaded PDF')],
    accent: 'acid',
    year: '2024',
    joins: { from: 'A highlighted PDF', to: 'A recall loop', note: 'Notes, explanations and questions in one study path' },
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
      'Tabble is restaurant ordering with customer, chef and admin screens synced live, built for small restaurants in India that can’t justify a POS.',
    hook: 'Restaurant software assumes perfect communication. Restaurants have a waiter with a notepad.',
    overview:
      'Three interfaces. The customer taps what they want. The chef sees it in under a second. The admin watches the chaos. No shouting, no illegible handwritten notes, no forgotten extra-spicy requests. All wired together over WebSockets.',
    problem:
      'Waiters shouldn’t have to memorise fifteen modifications to a burger. Go to a small restaurant and watch how orders happen: it is someone writing on a tiny pad while balancing plates.',
    build:
      'A ₹5,000 tablet and a basic cloud setup solve the entire problem. Nobody built it because the small-restaurant market isn’t glamorous enough for VC money. I built it because I hate watching bad workflows.',
    outcomes: [
      'Removed manual order taking',
      'Made the kitchen less chaotic',
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
    year: '2025',
    joins: { from: '3 screens', to: '1 order', note: 'Customer, chef and admin, synced live' },
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
      'A production CRM that replaced five spreadsheets with one role-based system for billing, expenses, investments and permissions.',
    hook: 'Excel is a great spreadsheet. It’s also the most common database I’ve ever been asked to replace.',
    overview:
      'A company wasn’t looking for another dashboard. They wanted one place where billing, expenses, investments and permissions made sense. Replacing five spreadsheets with one system makes accountants less nervous.',
    problem:
      'Employees should not be able to accidentally delete the company’s financial history. That one requirement killed several bad ideas.',
    build:
      'Built with React, TypeScript and Supabase, with strict role-based access control. The database is locked down so nobody can “accidentally” drop a table.',
    outcomes: [
      'The client uses it every day',
      'I got paid',
      'Database hasn’t corrupted itself yet',
    ],
    traction: ['Live in production', 'Handles daily client operations'],
    stack: ['TypeScript', 'React', 'Supabase', 'PostgreSQL'],
    gallery: [],
    accent: 'ink',
    year: '2024',
    joins: { from: '5 spreadsheets', to: '1 system', note: 'Billing, expenses, investments and permissions' },
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
