import { Project } from '../types';
import genrecAIImg from '../images/GenrecAI.jpg';
import luminaIntro from '../images/LuminaIQ/Intro.png';
import luminaScreenshot from '../images/LuminaIQ/Screenshot 2026-01-28 134255.png';
import tabbleIntro from '../images/Tabble/Intro.png';
import tabbleImage2 from '../images/Tabble/image (2).png';
import tabbleUnnamed from '../images/Tabble/unnamed.png';

export const projects: Project[] = [
    {
        id: 'genrec-ai',
        title: 'Genrec AI',
        category: 'Services / Cloud Bills Funder',
        description: 'Building software for people who pay me, so I can afford to build software for myself.',
        longDescription: 'This is the engine. Clients need software, they pay me, and I use that money to keep Lumina IQ and Tabble running. I don\'t have investors or a rich uncle. If I build something terrible, I don\'t get a referral, which is a far better motivator than any agile sprint planning meeting.',
        challenge: 'Most students wait until they feel "ready" to build for clients. Waiting usually just means reading tutorials until you give up. I decided to learn on the job.',
        solution: 'I just started saying yes to things I didn\'t fully know how to build yet, and then stayed up until 4 AM figuring out how to build them. Turns out, real client pressure teaches you full-stack development much faster than a YouTube playlist.',
        outcomes: [
            'Actually shipped things people use instead of just making GitHub repos',
            'Made enough money to ignore AWS invoices for a while',
            'Learned how to tell clients "no" politely',
        ],
        gallery: [
            genrecAIImg,
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS (The ex. We don\'t talk about the invoices.)'],
        status: 'PAYING FOR SERVERS',
        focus: 'Writing code that people pay for',
        imageUrl: genrecAIImg,
        liveLink: 'https://genrecai.com',
        traction: [
            'Built real things for real people',
            'Zero marketing budget',
            'Surviving entirely on referrals',
        ],
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'Forcing students to actually remember things instead of just highlighting PDFs.',
        longDescription: 'I watched people highlight entire PDFs and somehow expect their brain to cooperate. So I built this. You paste your syllabus in, it creates a structured path, and then violently forces you to recall the information. It\'s currently being tested by real students right before their exams, which is terrifying but useful.',
        challenge: 'Rereading notes the night before an exam feels like studying, but it\'s just creating a false sense of familiarity. The exam usually disagrees with your confidence level.',
        solution: 'People were already pasting their notes into ChatGPT, but without any structure. I built a proper loop: explanation, prioritization, and active recall. It doesn\'t let you pretend you know the answer.',
        outcomes: [
            'Deployed and somewhat stable',
            'Real students are using it to pass exams (I hope)',
            'Constantly fixing edge cases because students paste weird things',
        ],
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'LLMs', 'React', 'PostgreSQL (Has survived every terrible schema I\'ve invented.)'],
        status: 'BREAKING IN PRODUCTION',
        focus: 'Forced active recall',
        imageUrl: luminaIntro,
        liveLink: 'https://luminaiq.fun',
        traction: [
            'Actual humans are logging in',
            'Getting angry feedback when a question is too hard (which means it\'s working)',
            'Iterating based on reality, not assumptions',
        ],
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Chaos Reduction',
        description: 'Stopping waiters from having to memorize 14 things at once.',
        longDescription: 'Three interfaces: Customer taps what they want. Chef sees it instantly. Admin watches the chaos. No shouting, no illegible handwritten notes, no forgotten extra-spicy requests. I wired the whole thing together with WebSockets and tested the entire flow. Now I just need to convince a restaurant to let me put cheap Android tablets on their tables.',
        challenge: 'Go to a small restaurant and watch how orders happen. It\'s usually a guy trying to write on a tiny pad while balancing plates, or shouting across the room. Small places can\'t drop ₹2 lakh on a fancy POS system.',
        solution: 'Turns out a ₹5,000 tablet and a basic cloud setup solves the entire problem. Nobody built it because the small restaurant market isn\'t glamorous enough for VC money. I built it because I hate watching bad workflows.',
        outcomes: [
            'The WebSockets actually stay connected most of the time',
            'Three different UIs talking to each other without catching fire',
            'Ready for a real restaurant to break it',
        ],
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'WAITING FOR HARDWARE',
        focus: 'Making restaurants slightly less loud',
        imageUrl: tabbleIntro,
        liveLink: 'https://tabble.in',
        traction: [
            'Works perfectly on my machine',
            'Architecture is solid',
            'Looking for a brave restaurant owner',
        ],
    },
];
