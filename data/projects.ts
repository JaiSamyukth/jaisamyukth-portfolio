import { Project } from '../types';
import genrecAIImg from '../images/GenrecAI.jpg';
import luminaIntro from '../images/LuminaIQ/Intro.png';
import luminaScreenshot from '../images/LuminaIQ/Screenshot 2026-01-28 134255.png';
import tabbleIntro from '../images/Tabble/Intro.png';
import tabbleImage2 from '../images/Tabble/image (2).png';
import tabbleUnnamed from '../images/Tabble/unnamed.png';

export const projects: Project[] = [
    {
        id: 'crm-platform',
        title: 'CRM Platform',
        category: 'Enterprise Software',
        description: 'Excel is an incredible spreadsheet. It\'s also the most common database I\'ve ever been asked to replace.',
        longDescription: 'A company wasn\'t looking for another dashboard. They wanted one place where billing, expenses, investments and permissions actually made sense. Turns out replacing five spreadsheets with one system makes accountants considerably less nervous.',
        challenge: 'Employees should not be able to accidentally delete the company\'s financial history. That requirement eliminated several bad ideas immediately.',
        solution: 'Built with React, TypeScript, and Supabase. Implemented strict role-based access control. The database is heavily secured so no one can "accidentally" drop a table.',
        outcomes: [
            'Client actually uses it every day',
            'I got paid',
            'Database hasn\'t corrupted itself yet',
            'The best software disappears. People stop talking about it because it quietly does its job. That\'s exactly what happened here.',
        ],
        gallery: [
            // Assuming no specific image, we can just use a placeholder or omit
        ],
        techStack: ['TypeScript', 'React', 'Supabase', 'PostgreSQL'],
        status: 'DEPLOYED',
        focus: 'Data Management & RBAC',
        imageUrl: '',
        liveLink: '',
        traction: [
            'Live in production',
            'Handles daily client operations',
        ],
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'Students don\'t hate studying. They hate not knowing whether they\'ve actually learned anything.',
        longDescription: 'I watched people highlight entire PDFs and somehow expect their brain to cooperate. So I built this. You paste your syllabus in, it creates a structured path, and then violently forces you to recall the information.',
        challenge: 'Rereading notes the night before an exam feels like studying, but it\'s just creating a false sense of familiarity. The exam usually disagrees with your confidence level.',
        solution: 'People were already pasting their notes into ChatGPT, but without any structure. I built a proper loop: explanation, prioritization, and active recall. It doesn\'t let you pretend you know the answer.',
        outcomes: [
            'Stopped students from mindless highlighting',
            'Didn\'t crash during the Startup Grind demo',
            'Real students are using it to pass exams',
        ],
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'FastAPI', 'React', 'PostgreSQL', 'Azure'],
        status: 'LIVE',
        focus: 'Forced active recall',
        imageUrl: luminaIntro,
        liveLink: 'https://luminaiq.fun',
        traction: [
            'Handled actual student queries without melting',
            'Showcased to investors who pretended to understand RAG',
            'Getting angry feedback when a question is too hard (which means it\'s working)',
        ],
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Chaos Reduction',
        description: 'Restaurant software usually assumes perfect communication. Restaurants don\'t.',
        longDescription: 'Three interfaces: Customer taps what they want. Chef sees it instantly. Admin watches the chaos. No shouting, no illegible handwritten notes, no forgotten extra-spicy requests. I wired the whole thing together with WebSockets.',
        challenge: 'Waiters shouldn\'t have to memorize 15 different modifications to a burger. Go to a small restaurant and watch how orders happen. It\'s usually a guy trying to write on a tiny pad while balancing plates.',
        solution: 'Turns out a ₹5,000 tablet and a basic cloud setup solves the entire problem. Nobody built it because the small restaurant market isn\'t glamorous enough for VC money. I built it because I hate watching bad workflows.',
        outcomes: [
            'Removed manual order taking',
            'Made the kitchen slightly less chaotic',
            'Three different UIs talking to each other without catching fire',
        ],
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'WAITING FOR HARDWARE',
        focus: 'Real-time synchronization',
        imageUrl: tabbleIntro,
        liveLink: 'https://tabble.in',
        traction: [
            'Backend is stable',
            'UI doesn\'t make users want to cry',
            'Looking for a brave restaurant owner',
        ],
    },
];
