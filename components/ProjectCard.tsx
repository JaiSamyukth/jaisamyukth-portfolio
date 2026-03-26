import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

import { Link } from 'react-router-dom';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/work/${project.id}`} className="block h-full no-underline text-inherit group">
      <div
        className="group relative bg-white border-4 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 flex flex-col h-full"
      >
        {/* Header / Status Bar */}
        <div className="flex justify-between items-center p-3 border-b-4 border-black bg-neo-yellow">
          <span className="font-mono text-sm font-bold uppercase tracking-tight">
            {project.status}
          </span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-transparent border-2 border-black rounded-full" />
          </div>
        </div>

        {/* Image Container (if available) or Pattern */}
        <div className="h-48 w-full border-b-4 border-black overflow-hidden relative bg-gray-100 flex items-center justify-center">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]"></div>
          )}
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-mono">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-3xl font-black mb-4 uppercase leading-none">
            {project.title}
          </h3>

          <p className="text-black font-medium mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="space-y-4">
            {/* Traction bullets */}
            {project.traction && project.traction.length > 0 && (
              <div className="p-3 bg-neo-green border-2 border-black">
                <p className="font-mono text-xs font-bold text-gray-700 mb-2 uppercase">Progress</p>
                <ul className="space-y-1">
                  {project.traction.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs font-medium flex items-start gap-1">
                      <span className="text-black font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-3 bg-neo-white border-2 border-black">
              <p className="font-mono text-xs font-bold text-gray-500 mb-1 uppercase">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map(tech => (
                  <span key={tech} className="bg-neo-purple text-black text-xs font-bold px-1 border border-black">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs font-bold text-gray-500">+{project.techStack.length - 4}</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-end border-t-2 border-dashed border-black pt-4">
              <div className="w-3/4">
                <p className="font-mono text-xs text-gray-600 uppercase">Focus Area</p>
                <p className="font-bold text-sm leading-tight">{project.focus}</p>
              </div>
              <ArrowUpRight size={32} className="text-black group-hover:text-neo-pink transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
