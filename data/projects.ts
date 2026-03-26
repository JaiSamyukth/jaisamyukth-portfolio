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
        category: 'Services / Revenue Engine',
        description: 'Custom software builds that fund internal product work.',
        longDescription: 'I take client projects end-to-end (full-stack websites + software). Revenue goes straight back into Lumina IQ and Tabble. No marketing budget — all work comes through direct network.',
        challenge: 'Most student founders wait for funding or roles before shipping anything real. That delays learning how products actually behave with users, bugs, and bills. Waiting also kills momentum.',
        solution: 'Cheap cloud + AI tools let one person ship production systems fast. Students who build real client software learn deployment, money, and iteration years ahead of peers who only do college projects.',
        gallery: [
            genrecAIImg,
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        status: 'Revenue Active',
        focus: 'software development and product building',
        imageUrl: genrecAIImg,
        liveLink: '#',
        repoLink: '#',
        traction: [
            'Completed several products for clients and ongoing development',

        ]
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'AI-assisted path-building + revision + self-testing ',
        longDescription: 'Working system that takes study content → structured explanations → revision outline → active recall questions. Students can note key points and re-test weak areas. Currently running with external testers.',
        challenge: "Students cram 10 books in 2 days, reread notes, but rarely test recall under time pressure, they don't understand what to study or how to revise. Passive review creates illusion of understanding; real exams expose gaps.",
        solution: 'Students already paste syllabus into ChatGPT informally. Purpose-built Path-building + revision + testing loops that enforce active recall are still rare and early — especially for dense board/college syllabi.',
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'LLM Integration', 'React', 'PostgreSQL'],
        status: 'External Testing',
        focus: 'AI personalized learning and revision',
        imageUrl: luminaIntro,
        liveLink: '#',
        repoLink: '#',
        traction: [
            'Functional product deployed',
        ]
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Operations',
        description: 'Table-to-kitchen ordering + service sync for small restaurants.',
        longDescription: 'Three interfaces: customer (order + service requests from table), chef (incoming orders), admin (real-time overview). No manual typing. Full system implemented and tested locally end-to-end.',
        challenge: 'Small restaurants rely on waiters shouting orders or one computer guy typing into Excel. That creates delays, mistakes, and high staffing cost even for 20–40 seat places.',
        solution: 'Cheap Android tablets + cloud sync make this viable for restaurants that previously could never afford POS systems. India has millions of small eateries stuck in manual coordination.',
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'Ready for Hardware',
        focus: 'Order from where you are',
        imageUrl: tabbleIntro,
        repoLink: '#',
        traction: [
            'Complete multi-interface system built',

        ]
    }
];
