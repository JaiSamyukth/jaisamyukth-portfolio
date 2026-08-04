import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { useSEO } from '../src/hooks/useSEO';

export const Learnings: React.FC = () => {
    useSEO({
        title: 'Things I\'ve Learned Expensively | Jai Samyukth B U',
        description: 'Lessons learned from breaking production, debugging at 2 AM, and trusting cloud providers.',
        canonical: '#/learnings',
    });

    const learnings = [
        "Users don't read.",
        "Production doesn't care.",
        "Git remembers everything.",
        "Backups are cheaper than confidence.",
        "Cloud invoices are educational material.",
        "Every \"small feature\" is lying.",
        "Someone will always press the button twice.",
        "Excel is not a database.",
        "Documentation is written for Future Me.",
        "Future Me rarely reads it.",
        "AWS was my ex.",
        "Azure arrived with startup credits.",
        "We're in a much healthier relationship now."
    ];

    return (
        <div className="min-h-screen bg-neo-black py-12 px-4 flex items-center justify-center relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-3xl w-full relative z-10">
                <RevealCard className="bg-neo-white border-8 border-white p-8 md:p-16 shadow-[16px_16px_0px_0px_#ff0099]">
                    <div className="mb-12 border-b-8 border-black pb-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                            Things I've Learned <br /> <span className="text-neo-pink">Expensively</span>
                        </h1>
                        <div className="inline-block bg-neo-yellow text-black font-mono font-bold px-4 py-2 border-4 border-black transform rotate-2">
                            A RUNNING TALLY
                        </div>
                    </div>

                    <div className="space-y-6">
                        {learnings.map((lesson, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group cursor-default">
                                <span className="font-mono text-neo-blue font-bold group-hover:text-neo-green">{(idx + 1).toString().padStart(2, '0')}</span>
                                <p className="font-medium text-lg md:text-xl font-mono leading-tight">{lesson}</p>
                            </div>
                        ))}
                    </div>
                </RevealCard>
            </div>
        </div>
    );
};
