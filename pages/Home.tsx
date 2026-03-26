import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '../components/Marquee';
import { Hero } from '../components/Hero';
import { NeoButton } from '../components/NeoButton';
import { RevealCard } from '../components/RevealCard';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Network } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      <div className="mt-8">
        <Marquee text="SMALL TEAM • REAL BUILDS • CONSTANT ITERATION •" bgColor="bg-neo-yellow" textColor="text-black" />
      </div>

      {/* Core Principles Grid */}
      <section className="py-20 px-4 bg-neo-black text-white">
        <div className="max-w-7xl mx-auto">
          <RevealCard className="mb-12 border-l-8 border-neo-green pl-6">
            <h2 className="text-5xl font-black uppercase">What I Build</h2>
            <p className="font-mono text-neo-white mt-2">STUDENT FOUNDER SHIPPING REAL SYSTEMS. NOT WAITING FOR PERMISSION.</p>
          </RevealCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Network, title: "Genrec AI", desc: "Client builds funding product development. Revenue engine for student founders." },
              { icon: Terminal, title: "Lumina IQ", desc: "AI-assisted personalized and adaptive learning platform for students." },
              { icon: Cpu, title: "Tabble", desc: "Restaurant ordering platform." }
            ].map((item, i) => (
              <RevealCard
                key={i}
                delay={i * 0.2}
                className="bg-neo-purple text-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_#fff] h-full"
              >
                <item.icon size={48} className="mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                <p className="font-medium border-t-2 border-black pt-2">{item.desc}</p>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 px-4 bg-neo-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <RevealCard className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b-8 border-black pb-8">
            <div>
              <h2 className="text-5xl font-black uppercase mb-2">Selected Systems</h2>
              <p className="font-mono text-gray-600">Featured engineering artifacts and deployments.</p>
            </div>
            <NeoButton variant="secondary" onClick={() => navigate('/work')}>
              View All Systems <ArrowRight className="inline ml-2" />
            </NeoButton>
          </RevealCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <RevealCard key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} index={index} />
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
