import React from 'react';
import { Marquee } from '../components/Marquee';
import { Hero } from '../components/Hero';
import { NeoButton } from '../components/NeoButton';
import { RevealCard } from '../components/RevealCard';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);
  useSEO({
    title: 'Jai Samyukth B U | Serial Builder',
    description: 'I build software until it works. Mostly client projects to pay for AWS, occasionally my own bad ideas.',
    canonical: 'https://jaisamyukth.genrecai.com/',
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      <div className="mt-8">
        <Marquee text="CURRENTLY TAKING ON: → FIXING BROKEN PRODUCTIONS → WRITING CODE PEOPLE PAY FOR → IGNORING AWS BILLS •" bgColor="bg-neo-yellow" textColor="text-black" />
      </div>

      {/* Positioning Statement */}
      <section className="py-16 px-4 bg-neo-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">
            If you want a 30-page proposal and 3 weeks of meetings,<br />
            <span className="text-neo-yellow">I'm not your guy.</span>
          </p>
          <p className="text-xl md:text-2xl font-bold text-white mt-6">
            If you want something built, broken, fixed, and shipped before Friday,<br />
            <span className="text-neo-green">we'll get along fine.</span>
          </p>
        </div>
      </section>

      {/* Validation / Social Proof Strip */}
      <section className="py-8 px-4 bg-neo-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-lg text-white">
            <span className="text-neo-yellow">// TRACK RECORD</span>
            <span className="mx-4">→</span>
            <span>30+ repos. Most are terrible. The rest are paying for servers.</span>
            <span className="mx-4">•</span>
            <span>Lumina IQ: Actually used by real students right now</span>
            <span className="mx-4">•</span>
            <span>Tabble: Survived local testing, waiting for hardware</span>
            <span className="mx-4">•</span>
            <span>Built entirely without permission or adult supervision</span>
          </p>
        </div>
      </section>


      {/* Selected Work Section */}
      <section className="py-20 px-4 bg-neo-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <RevealCard className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b-8 border-black pb-8">
            <div>
              <h2 className="text-5xl font-black uppercase mb-2">Things That Survived</h2>
              <p className="font-mono text-gray-600">The projects that didn't get abandoned after 48 hours.</p>
            </div>
            <NeoButton variant="secondary" onClick={() => navigate('/work')}>
              View All The Messes <ArrowRight className="inline ml-2" />
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
