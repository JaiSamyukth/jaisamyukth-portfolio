import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Archive } from 'lucide-react';

export const Experimental: React.FC = () => {
  const experiments = [
    { title: "Tabble Versions", desc: "Interface-driven ordering and coordination environments." },
    { title: "Revolvo AI", desc: "Librarian systems focused on retrieval and knowledge access." },
    { title: "CRM Experiments", desc: "Organizational data management platforms." },
    { title: "Feedback Tools", desc: "Supporting institutional workflows." },
  ];

  return (
    <div className="min-h-screen bg-neo-green py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
            <div>
                <h1 className="text-5xl md:text-8xl font-black uppercase mb-2">Playground</h1>
                <p className="font-mono text-lg font-bold">Experimental & Supporting Work</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white border-2 border-black px-4 py-2 font-mono text-sm">
                STATUS: ITERATIVE
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Content Area */}
            <div className="bg-white border-4 border-black shadow-neo-lg p-8">
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                    <Archive className="w-8 h-8" />
                    Broader Ecosystem
                </h2>
                <p className="mb-8 text-lg">
                    These projects serve as technical studies that inform larger systems. 
                    They are attempts to solve shared problem spaces rather than isolated releases.
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
                    <h3 className="text-2xl font-bold uppercase mb-4 text-neo-pink">Additional Repos</h3>
                    <ul className="list-disc pl-5 font-mono space-y-2 mb-6">
                        <li>Portfolio implementations</li>
                        <li>Data collection systems</li>
                        <li>Learning experiments</li>
                        <li>File-handling utilities</li>
                    </ul>
                    <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 font-bold border-2 border-gray-400 hover:bg-neo-green hover:border-black transition-colors">
                        <Github size={18} /> View on GitHub
                    </a>
                </div>

                <div className="bg-neo-purple border-4 border-black p-8 shadow-neo text-center flex flex-col items-center justify-center min-h-[200px]">
                    <h3 className="text-4xl font-black uppercase mb-2">?</h3>
                    <p className="font-bold">More experiments incoming.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
