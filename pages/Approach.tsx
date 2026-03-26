import React from 'react';
import { motion } from 'framer-motion';

export const Approach: React.FC = () => {
  const steps = [
    { title: "Observe", text: "How people actually interact with processes in the wild." },
    { title: "Identify", text: "Friction created by repetition, fragmentation, or bad tools." },
    { title: "Structure", text: "Software that absorbs complexity rather than exposing it to the user." },
    { title: "Refine", text: "Improvement through deployment feedback, not presentation cycles." }
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
                Design systems that handle reality without requiring constant supervision.
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
            <h3 className="text-2xl font-bold uppercase mb-4 text-neo-green">Result</h3>
            <p className="text-xl font-mono">
                "The result is software that behaves as infrastructure rather than interface."
            </p>
        </div>
      </div>
    </div>
  );
};
