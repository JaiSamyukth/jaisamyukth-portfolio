import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { RevealCard } from '../components/RevealCard';
import { NeoButton } from '../components/NeoButton';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollToTop } from '../components/ScrollToTop';
import { useSEO } from '../src/hooks/useSEO';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useSEO({
        title: project ? `${project.title} | Jai Samyukth B U` : 'Project | Jai Samyukth B U',
        description: project
            ? (project.description || `${project.title} — a system built by Jai Samyukth. ${project.category || ''}`).slice(0, 160)
            : 'Project details by Jai Samyukth B U.',
        canonical: project ? `#/work/${project.id}` : '#/work',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neo-white">
                <h1 className="text-4xl font-black mb-4">SYSTEM NOT FOUND</h1>
                <NeoButton onClick={() => navigate('/work')}>Return to Index</NeoButton>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neo-white">
            <ScrollToTop />

            {/* Hero Header */}
            <div className="bg-black text-white pt-24 pb-12 px-4 border-b-8 border-neo-green">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => navigate('/work')}
                        className="flex items-center gap-2 font-mono text-neo-yellow mb-8 hover:underline"
                    >
                        <ArrowLeft size={16} /> BACK TO INDEX
                    </button>

                    <RevealCard>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-2 text-white">
                                    {project.title}
                                </h1>
                                <p className="font-mono text-xl text-neo-green">{project.category}</p>
                            </div>

                            <div className="flex gap-4">
                                {project.liveLink ? (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                        className="bg-neo-blue text-white font-bold uppercase px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                                        <ExternalLink size={18} /> Live System
                                    </a>
                                ) : (
                                    <span className="bg-white text-black font-bold uppercase px-4 py-2 border-2 border-white font-mono text-sm flex items-center">
                                        Demo available on request
                                    </span>
                                )}
                            </div>
                        </div>
                    </RevealCard>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Sidebar Meta */}
                    <div className="lg:col-span-1">
                        <RevealCard delay={0.1} className="bg-white border-4 border-black p-6 shadow-neo sticky top-24">
                            <div className="mb-6">
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Status</h3>
                                <p className="font-mono font-medium">{project.status}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Focus Area</h3>
                                <p className="font-medium leading-tight">{project.focus}</p>
                            </div>

                            <div>
                                <h3 className="font-black uppercase text-lg mb-2 border-b-2 border-black pb-1">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-black text-white text-xs font-bold px-2 py-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <RevealCard delay={0.2}>
                            <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-2">
                                <span className="w-4 h-4 bg-neo-pink border-2 border-black"></span>
                                System Overview
                            </h2>
                            <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                                {project.longDescription || project.description}
                            </p>
                        </RevealCard>

                        {project.challenge && (
                            <RevealCard delay={0.3} className="bg-red-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-red-500 text-white font-black px-4 py-1 border-2 border-black transform -rotate-2">
                                    THE PROBLEM
                                </div>
                                <p className="text-lg font-medium mt-2">{project.challenge}</p>
                            </RevealCard>
                        )}

                        {project.solution && (
                            <RevealCard delay={0.4} className="bg-green-50 border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -right-2 bg-neo-green text-black font-black px-4 py-1 border-2 border-black transform rotate-2">
                                    THE SOLUTION
                                </div>
                                <p className="text-lg font-medium mt-2">{project.solution}</p>
                            </RevealCard>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <RevealCard delay={0.45} className="bg-neo-blue border-4 border-black p-8 relative">
                                <div className="absolute -top-4 -left-2 bg-black text-white font-black px-4 py-1 border-2 border-neo-blue transform -rotate-1">
                                    OUTCOMES
                                </div>
                                <ul className="space-y-3 mt-2">
                                    {project.outcomes.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-medium">
                                            <span className="text-neo-yellow font-black text-xl leading-none">→</span>
                                            <span className="text-white">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </RevealCard>
                        )}

                        {/* Traction / Progress */}
                        {project.traction && project.traction.length > 0 && (
                            <RevealCard delay={0.5} className="bg-neo-yellow border-4 border-black p-8">
                                <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-neo-green border-2 border-black"></span>
                                    Progress / Traction
                                </h2>
                                <ul className="space-y-3">
                                    {project.traction.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-medium">
                                            <span className="text-neo-green font-bold text-xl">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </RevealCard>
                        )}

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="space-y-8 mt-12">
                                <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black inline-block">Visual Artifacts</h2>
                                {project.gallery.map((img, idx) => (
                                    <RevealCard key={idx} delay={0.2 + (idx * 0.1)}>
                                        <div className="border-4 border-black p-2 bg-white shadow-neo">
                                            <img src={img} alt={`Artifact ${idx + 1}`} className="w-full h-auto transition-all duration-500" />
                                        </div>
                                    </RevealCard>
                                ))}
                            </div>
                        )}

                        {/* Built-independently micro-detail */}
                        <p className="font-mono text-xs text-gray-400 border-t border-dashed border-gray-200 pt-4 mt-4">
                            Built and deployed independently, handling real-world usage constraints.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
