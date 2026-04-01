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
        longDescription: 'I take client projects end-to-end — full-stack websites and software systems. Revenue feeds directly back into Lumina IQ and Tabble. No marketing budget — all work comes through direct network and referrals.',
        challenge: 'Most student founders wait for funding or roles before shipping anything real. That delays learning how products actually behave with users, bugs, and bills.',
        solution: 'Cheap cloud + AI tools let one person ship production systems fast. Students who build real client software learn deployment, money, and iteration years ahead of peers who only do college projects.',
        outcomes: [
            'Multiple client products delivered and currently live in production',
            'Each project handled end-to-end: no handoffs, no delays from miscommunication',
            'Clients acquired through referrals — not ads. Work speaks first.',
            'Typical delivery cycle: 2–4 weeks from brief to deployed build',
        ],
        gallery: [
            genrecAIImg,
        ],
        techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        status: 'Revenue Active',
        focus: 'Software development and product building',
        imageUrl: genrecAIImg,
        liveLink: 'https://genrecai.com',
        traction: [
            'Multiple products delivered to clients and currently live',
            'Self-funded model — revenue directly funds Lumina IQ & Tabble',
            'Full-stack delivery: idea → design → build → deployment',
        ],
    },
    {
        id: 'lumina-iq',
        title: 'Lumina IQ',
        category: 'AI / Education',
        description: 'AI-assisted path-building, revision, and self-testing for students.',
        longDescription: 'Working system that takes study content → structured explanations → revision outline → active recall questions. Students note key points and re-test weak areas. Currently running with external testers.',
        challenge: "Students cram 10 books in 2 days and reread notes, but rarely test recall under time pressure. They don't know what to study or how to revise. Passive review creates the illusion of understanding — real exams expose the gaps.",
        solution: 'Purpose-built path-building + revision + testing loops that enforce active recall. Rare and early — especially for dense board and college syllabi in India.',
        outcomes: [
            'Used by external testers for real exam prep — not a sandbox',
            'Full pipeline operational: upload content → AI path → revision → quiz',
            'Runs on actual student content (dense syllabi, board exams)',
            'Handles edge cases in content quality that generic AI tools break on',
        ],
        gallery: [
            luminaIntro,
            luminaScreenshot,
        ],
        techStack: ['Python', 'TypeScript', 'LLM Integration', 'React', 'PostgreSQL'],
        status: 'External Testing',
        focus: 'AI-personalised learning and revision',
        imageUrl: luminaIntro,
        liveLink: 'https://luminaiq.fun',
        traction: [
            'Functional product deployed and live at luminaiq.fun',
            'External testers actively using the system',
            'Full AI pipeline operational: study → path → recall → test',
        ],
    },
    {
        id: 'tabble',
        title: 'Tabble',
        category: 'Restaurant / Operations',
        description: 'Table-to-kitchen ordering and service sync for small restaurants.',
        longDescription: 'Three interfaces: customer (order + service requests from table), chef (incoming orders), admin (real-time overview). No manual typing. Full system implemented and tested locally end-to-end.',
        challenge: 'Small restaurants rely on waiters shouting orders or one person typing into Excel. That creates delays, mistakes, and high staffing cost even for 20–40 seat places.',
        solution: 'Cheap Android tablets + cloud sync make this viable for restaurants that previously could never afford a POS system. India has millions of small eateries stuck in manual coordination.',
        outcomes: [
            'Used in a real local restaurant environment — not a demo build',
            'Eliminates manual order relay between table, kitchen, and admin',
            'Three interfaces operational simultaneously with real-time sync',
            'Handles concurrent orders, edge cases, and mid-service changes',
            'Runs on cheap Android tablets — no expensive POS hardware needed',
        ],
        gallery: [
            tabbleIntro,
            tabbleImage2,
            tabbleUnnamed,
        ],
        techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'PWA'],
        status: 'Ready for Hardware',
        focus: 'Order from where you are',
        imageUrl: tabbleIntro,
        liveLink: 'https://tabble.in',
        traction: [
            'Full system built and locally validated end-to-end',
            'All 3 interfaces working: customer → chef → admin',
            'Real-time order sync via WebSockets with zero manual relay',
        ],
    },
];
