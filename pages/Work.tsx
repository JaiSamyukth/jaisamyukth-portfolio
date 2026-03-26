import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { RevealCard } from '../components/RevealCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-neo-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealCard>
          <div className="mb-16 border-b-8 border-black pb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Selected <span className="text-neo-pink stroke-black" style={{ WebkitTextStroke: '3px black', color: '#ff0099' }}>Systems</span>
            </h1>
            <p className="text-xl font-mono max-w-2xl bg-neo-yellow inline-block px-2 border-2 border-black">
              Projects treated as working systems first, technical artifacts second.
            </p>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <RevealCard key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </RevealCard>
          ))}
        </div>
      </div>
    </div>
  );
};
