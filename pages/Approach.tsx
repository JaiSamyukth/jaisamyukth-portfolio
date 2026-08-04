import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../src/hooks/useSEO';

export const Approach: React.FC = () => {
  useSEO({
    title: 'Approach | Jai Samyukth B U',
    description: 'My highly technical process: watch people do stupid things, build a tool to stop them, try to keep the servers running.',
    canonical: '#/approach',
  });
  const steps = [
    { title: "Observe", text: "Watch how humans actually use things, which is rarely how the documentation says they should." },
    { title: "Panic", text: "Realize how much time and money is being burned by manual copy-pasting." },
    { title: "Build", text: "Write code that absorbs the chaos instead of just putting a nice UI on top of it." },
    { title: "Break & Fix", text: "Deploy it. Watch users break it in ways you never imagined. Fix it at 2 AM." }
  ];

  return (
    <div className="min-h-screen bg-neo-purple py-12 px-4 border-l-[20px] border-black">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black shadow-neo-lg p-8 md:p-16 relative">
        {/* Decorative Tape */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neo-yellow text-black font-mono text-sm px-4 py-2 border-2 border-black rotate-2 shadow-sm">
            CONFIDENTIAL // APPROACH_DOC_V1
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 text-center decoration-wavy underline decoration-neo-green">
          The Approach
        </h1>

        <div className="mb-12">
            <h2 className="text-3xl font-bold uppercase mb-4 bg-black text-white inline-block px-2">Objective</h2>
            <p className="text-2xl font-medium leading-relaxed border-l-4 border-neo-green pl-6 py-2">
                Stop doing boring things manually.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-4 border-black p-6 bg-neo-white shadow-neo hover:bg-neo-blue hover:text-white transition-colors group"
                >
                    <div className="text-4xl font-black mb-2 opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                    <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                    <p className="font-mono text-sm leading-relaxed">{step.text}</p>
                </motion.div>
            ))}
        </div>

        <div className="bg-black text-white p-8 border-4 border-dashed border-gray-500">
            <h3 className="text-2xl font-bold uppercase mb-4 text-neo-green">// THE RESULT:</h3>
            <p className="text-xl font-mono">
                Software that you forget exists because it actually works. That's the only compliment I care about.
            </p>
            <p className="text-lg font-mono text-gray-400 mt-4">
                This is also why I don't do "3-week discovery phases." The fastest way to test whether an idea works is to write the code and find out.
            </p>
        </div>
      </div>
    </div>
  );
};
