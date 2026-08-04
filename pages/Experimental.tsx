import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Archive } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Experimental: React.FC = () => {
  useSEO({
    title: 'Unfinished Business | Jai Samyukth B U',
    description: 'Half-finished ideas, things that almost worked, and repos I pretend don\'t exist.',
    canonical: '#/experimental',
  });
  const experiments = [
    { title: "Tabble V1 & V2", desc: "Before I realized WebSockets were the actual problem." },
    { title: "Revolvo AI", desc: "A knowledge retrieval bot that hallucinated with extreme confidence." },
    { title: "CRM Clones", desc: "Because everyone tries to build Jira once before giving up." },
    { title: "Feedback Forms", desc: "Built for college. Mostly used to submit blank responses." },
  ];

  return (
    <div className="min-h-screen bg-neo-green py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
            <div>
                <h1 className="text-5xl md:text-8xl font-black uppercase mb-2">Unfinished Business</h1>
                <p className="font-mono text-lg font-bold">The 90% that didn't make it</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white border-2 border-black px-4 py-2 font-mono text-sm">
                STATUS: MOSTLY BROKEN
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Content Area */}
            <div className="bg-white border-4 border-black shadow-neo-lg p-8">
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <Archive className="w-8 h-8" />
                    Failed Experiments
                </h2>
                <p className="mb-8 text-lg">
                    If you build enough things, most of them will be terrible. 
                    These are the projects that taught me what not to do.
                </p>

                <ul className="space-y-4">
                    {experiments.map((exp, i) => (
                        <motion.li 
                            key={i}
                            whileHover={{ x: 10 }}
                            className="border-2 border-black p-4 flex justify-between items-center bg-neo-white hover:bg-neo-yellow transition-colors cursor-default"
                        >
                            <div>
                                <span className="font-bold uppercase block">{exp.title}</span>
                                <span className="text-sm font-mono text-gray-700">{exp.desc}</span>
                            </div>
                            <Layers size={20} />
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
                <div className="bg-black text-white border-4 border-white p-8 shadow-neo-lg">
                    <h3 className="text-2xl font-bold uppercase mb-4 text-neo-pink">Other Repos</h3>
                    <ul className="list-disc pl-5 font-mono space-y-2 mb-6">
                        <li>This exact portfolio, rewritten 4 times</li>
                        <li>Random python scripts to automate boring tasks</li>
                        <li>Abandoned hackathon code</li>
                        <li>Proof of concepts that proved I was wrong</li>
                    </ul>
                    <a href="https://github.com/JaiSamyukth" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 font-bold border-2 border-gray-400 hover:bg-neo-green hover:border-black transition-colors">
                        <Github size={18} /> Enter at your own risk
                    </a>
                </div>

                <div className="bg-neo-purple border-4 border-black p-8 shadow-neo text-center flex flex-col items-center justify-center min-h-[200px]">
                    <h3 className="text-4xl font-black uppercase mb-2">?</h3>
                    <p className="font-bold">I will undoubtedly break more things soon.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
