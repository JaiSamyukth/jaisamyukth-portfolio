import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Marquee } from '../components/Marquee';
import { useSEO } from '../src/hooks/useSEO';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
    useSEO({
        title: 'About | Jai Samyukth B U',
        description: 'The guy with 30+ repositories, a grudge against AWS, and a compulsion to build.',
        canonical: '#/about',
    });
    return (
        <div className="min-h-screen bg-neo-white">
            {/* Hero */}
            <div className="bg-neo-black text-white py-20 px-4 border-b-8 border-neo-yellow">
                <div className="max-w-4xl mx-auto">
                    <RevealCard>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-2 bg-neo-yellow"></div>
                            <span className="font-mono text-neo-yellow uppercase">SERIAL_BUILDER_V1.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                            Jai <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-green" style={{ WebkitTextStroke: '2px white' }}>Samyukth</span> B U.
                        </h1>
                        <p className="text-xl md:text-2xl font-medium font-mono text-gray-300 max-w-2xl">
                            3rd year B.Tech. I write code until it works. Sometimes it survives production. Sometimes I spend all night fixing it.
                        </p>
                    </RevealCard>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Biography */}
                    <div className="space-y-8">
                        <RevealCard className="bg-white border-4 border-black p-8 shadow-neo-lg">
                            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Background</h2>
                            <div className="space-y-4 font-medium text-lg leading-relaxed">
                                <p>
                                    I started building things because I couldn't stop. Eventually, someone paid me for it.
                                    Then the first AWS invoice arrived, politely informing me that curiosity isn't free. I learned infrastructure the only way that works: by breaking it at 1 AM and frantically trying to fix it before anyone noticed.
                                </p>
                                <p>
                                    My projects usually start because I watch people do something stupid. Lumina IQ exists because I watched students highlight entire PDFs and somehow expect their brains to cooperate. Tabble exists because every waiter eventually develops superhero-level memory because the software doesn't.
                                </p>
                                <p>
                                    I write code until it solves the problem. Sometimes it's messy, but messy code running in production beats clean code sitting in a private repo forever.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Philosophy */}
                        <RevealCard delay={0.2} className="bg-neo-yellow border-4 border-black p-8 shadow-neo">
                            <h2 className="text-2xl font-black uppercase mb-4">Why I Build</h2>
                            <p className="font-medium text-lg leading-relaxed">
                                I don't like software that needs training manuals. There's always a gap between how people actually do things and how the software assumes they do them. I just try to close that gap before the user gives up.
                            </p>
                        </RevealCard>

                        {/* Skills Grid */}
                        <RevealCard delay={0.3}>
                            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-neo-blue rounded-full"></div>
                                Things I Argue With
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "Core", items: ["TypeScript (Annoyingly correct)", "Python", "Java", "C#", "C", "C++"] },
                                    { cat: "Frontend", items: ["React", "Next.js", "Tailwind"] },
                                    { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "MySQL"] },
                                    { cat: "Infra", items: ["Docker (Works on attempt #17)", "AWS", "Azure", "Supabase"] }
                                ].map((skill, i) => (
                                    <div key={i} className="border-2 border-black bg-neo-white p-4">
                                        <h4 className="font-mono font-bold uppercase mb-2 bg-black text-white px-2 inline-block text-sm">{skill.cat}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map(item => (
                                                <span key={item} className="text-sm font-bold border border-black px-2 py-1 bg-white hover:bg-neo-yellow transition-colors cursor-default">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealCard>

                        {/* Testimonial */}
                        <RevealCard delay={0.4} className="bg-black border-4 border-black p-8 text-white">
                            <h2 className="text-2xl font-black uppercase mb-4 text-neo-green">// WHAT OTHERS SAY</h2>
                            <div className="border-l-4 border-neo-yellow pl-6">
                                <p className="text-lg font-medium italic text-gray-300 mb-4">
                                    "He leads by example. Working alongside him, I've seen him bring the team together, make honest decisions under pressure, and push us to build things that actually matter. That's rare."
                                </p>
                                <p className="font-mono text-sm text-gray-500">— <a href="https://linkedin.com/in/shyamnath-sankar" target="_blank" rel="noopener noreferrer" className="hover:text-neo-yellow transition-colors">Shyamnath Sankar</a>, Fellow Builder</p>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Timeline of Mistakes & Fixes</h2>
                        <div className="border-l-4 border-black ml-4 space-y-12 pl-8 relative">
                            {[
                                {
                                    period: "May 2023",
                                    title: "STARTED BUILDING",
                                    desc: "Got college lab access by offering to build tools they'd actually use. Turns out if you automate someone's boring job, they let you use their computers."
                                },
                                {
                                    period: "2024",
                                    title: "PEOPLE PAID ME",
                                    desc: "Shipped 3 full projects. Learned that clients don't care about your clean architecture, they care if the button works."
                                },
                                {
                                    period: "2024",
                                    title: "THE CLOUD INCIDENTS",
                                    desc: "AWS charged me for experimenting. Azure later handed me startup credits like an apology from the cloud industry. Git has faithfully recorded all my terrible decisions."
                                },
                                {
                                    period: "Late 2024",
                                    title: "LUMINA IQ MVP",
                                    desc: "Turned exam-cram frustration into a product. Got first external testers. Some feedback was angry, which meant it was actually forcing them to think."
                                },
                                {
                                    period: "2025",
                                    title: "TABBLE ARCHITECTURE",
                                    desc: "Complete restaurant sync system. Wired it all together. Tested locally. Now I just need to find a restaurant owner brave enough to let me install it."
                                },
                                {
                                    period: "Now",
                                    title: "THE CURRENT LOOP",
                                    desc: "Client builds pay for the servers. Products break and get fixed. I still have 30 abandoned repos I pretend don't exist."
                                }
                            ].map((job, idx) => (
                                <RevealCard key={idx} delay={idx * 0.1} className="relative">
                                    <div className="absolute -left-[42px] top-0 w-6 h-6 bg-neo-pink border-4 border-black rounded-full z-10"></div>
                                    <div className="bg-neo-white border-4 border-black p-6 shadow-neo hover:shadow-neo-hover transition-all">
                                        <span className="font-mono text-sm font-bold bg-black text-white px-2 py-1 mb-2 inline-block">
                                            {job.period}
                                        </span>
                                        <h3 className="text-xl font-black uppercase leading-none mb-2">{job.title}</h3>
                                        <p className="font-medium text-sm">{job.desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>

                        {/* Writing Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">// NOTES TO SELF</h2>
                            <div className="space-y-4">
                                <p className="font-mono text-gray-600 mb-4">Occasional rants about broken workflows and things I built.</p>
                                <a href="https://dev.to/jaisamyukth" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 border-4 border-black bg-neo-white hover:bg-neo-yellow transition-colors group">
                                    <span className="font-bold">READ ON DEV.TO</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee text="AVAILABLE FOR CONTRACTS • FIXING BROKEN CODE • IGNORING BEST PRACTICES TO GET THINGS DONE •" bgColor="bg-neo-blue" textColor="text-white" />
        </div>
    );
};
