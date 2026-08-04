import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useSEO } from '../src/hooks/useSEO';

export const Contact: React.FC = () => {
    useSEO({
        title: 'Contact | Jai Samyukth B U',
        description: 'Send me broken code, angry AWS bills, or something you need built before Friday.',
        canonical: '#/contact',
    });
    return (
        <div className="min-h-screen bg-neo-yellow flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
            </div>

            <RevealCard className="max-w-3xl w-full bg-white border-8 border-black p-8 md:p-16 shadow-[16px_16px_0px_0px_#000] relative z-10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 md:text-xl font-mono font-bold rotate-2 border-2 border-white">
                    OPEN FREQUENCY
                </div>

                <h1 className="text-6xl md:text-8xl font-black uppercase text-center mb-8 leading-[0.9]">
                    Say <br /> <span className="text-neo-blue">Hi.</span>
                </h1>

                <div className="text-xl font-medium text-center mb-6 max-w-2xl mx-auto">
                    Most people who email me fall into one of these categories.
                </div>

                <div className="text-lg font-mono text-center mb-8 max-w-xl mx-auto text-gray-800 space-y-4">
                    <p>Your software is growing faster than your processes.</p>
                    <p>You're still living inside spreadsheets.</p>
                    <p>You need an MVP.</p>
                    <p>Your previous developer disappeared.</p>
                    <p>Or you've spent six months discussing an idea and zero weeks building it.</p>
                </div>

                <div className="text-2xl font-black uppercase text-center mb-12 max-w-xl mx-auto text-neo-blue">
                    If any of that sounds familiar...<br/>Let's fix it.
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="mailto:jaisamyukth@gmail.com" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-black hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Mail size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[EMAIL]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">for actual work</span>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/jaisamyukth" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-blue hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Linkedin size={32} className="mb-2 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase text-sm">[LINKEDIN]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">for the recruiter bots</span>
                        </div>
                    </a>

                    <a href="https://x.com/JaiSamyukth17" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-pink hover:text-white transition-colors cursor-pointer w-full h-full">
                            <Twitter size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[X/TWITTER]</span>
                        </div>
                    </a>

                    <a href="https://github.com/JaiSamyukth" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-green transition-colors cursor-pointer w-full h-full">
                            <Github size={32} className="mb-2 group-hover:animate-pulse" />
                            <span className="font-mono font-bold uppercase text-sm">[GITHUB]</span>
                            <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-800">my graveyard of repos</span>
                        </div>
                    </a>

                    <a href="https://instagram.com/jaisamyukth17" target="_blank" rel="noopener noreferrer" className="group flex-1 min-w-[140px] max-w-[200px]">
                        <div className="bg-neo-white border-4 border-black p-4 flex flex-col items-center hover:bg-neo-yellow transition-colors cursor-pointer w-full h-full">
                            <Instagram size={32} className="mb-2 group-hover:animate-bounce" />
                            <span className="font-mono font-bold uppercase text-sm">[INSTAGRAM]</span>
                        </div>
                    </a>
                </div>

                <div className="text-center">
                    <p className="font-mono font-bold text-sm text-gray-500 uppercase">
                        RESPONSE LATENCY: {'<'} 24H
                    </p>
                </div>
            </RevealCard>

            <div className="mt-12 font-mono font-bold text-center opacity-40">
                // END OF TRANSMISSION
            </div>
        </div>
    );
};
