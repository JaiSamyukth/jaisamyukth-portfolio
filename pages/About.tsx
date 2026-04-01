import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Marquee } from '../components/Marquee';
import { useSEO } from '../src/hooks/useSEO';

export const About: React.FC = () => {
    useSEO({
        title: 'About | Jai Samyukth B U',
        description: 'Learn about Jai Samyukth — CS student, founder, and builder of full-stack systems, AI tools, and operational software. Background, philosophy, and technical stack.',
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
                            <span className="font-mono text-neo-yellow uppercase">Founder_V1.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                            Jai <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-green" style={{ WebkitTextStroke: '2px white' }}>Samyukth.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium font-mono text-gray-300 max-w-2xl">
                            3rd-year B.Tech student in India, building and shipping AI-native tools and operational systems.
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
                                    I started by building whatever seemed useful — side projects, then paid client work. The client money funded real infrastructure learning (AWS bills teach fast).
                                </p>
                                <p>
                                    That loop led to Genrec AI (services engine), then Lumina IQ (from seeing how students actually study), then Tabble (from watching restaurant chaos firsthand).
                                </p>
                                <p>
                                    I build complete systems with my team: frontend, backend, deployment, initial users. No waiting for permission or perfect conditions.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Philosophy */}
                        <RevealCard delay={0.2} className="bg-neo-yellow border-4 border-black p-8 shadow-neo">
                            <h2 className="text-2xl font-black uppercase mb-4">Why I Build</h2>
                            <p className="font-medium text-lg leading-relaxed">
                                What keeps me here is the gap between how people actually work and the software that pretends they do. I'd rather ship something messy that gets used than something beautiful that sits in a repo.
                            </p>
                        </RevealCard>

                        {/* Skills Grid */}
                        <RevealCard delay={0.3}>
                            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-neo-blue rounded-full"></div>
                                Technical Arsenal
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "Core", items: ["TypeScript", "Python", "Rust", "Go"] },
                                    { cat: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
                                    { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis"] },
                                    { cat: "Infra", items: ["Docker", "AWS", "Terraform", "CI/CD"] }
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
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Timeline</h2>
                        <div className="border-l-4 border-black ml-4 space-y-12 pl-8 relative">
                            {[
                                {
                                    period: "May 2023",
                                    title: "Started Taking Dev Work Seriously",
                                    desc: "Formed small build group, got college lab access in exchange for building tools they could use."
                                },
                                {
                                    period: "2024",
                                    title: "First Paid Client Builds",
                                    desc: "Delivered 3 full projects through network while still in college."
                                },
                                {
                                    period: "2024",
                                    title: "Learned Infra The Painful Way",
                                    desc: "Deployed systems on AWS, burned money on mistakes, now know what actually survives production."
                                },
                                {
                                    period: "Late 2024",
                                    title: "Built & Shipped Lumina IQ MVP",
                                    desc: "Turned exam cram pain into testable revision system; got first external testers."
                                },
                                {
                                    period: "2025",
                                    title: "Built Tabble End-to-End",
                                    desc: "Complete restaurant sync system (customer → chef → admin); tested locally, ready for hardware."
                                },
                                {
                                    period: "Now",
                                    title: "Parallel Iteration",
                                    desc: "Refining both products from real feedback while taking next client builds."
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
                    </div>
                </div>
            </div>
            <Marquee text="AVAILABLE FOR CONTRACTS • SYSTEMS DESIGN • TECHNICAL AUDITS •" bgColor="bg-neo-blue" textColor="text-white" />
        </div>
    );
};
