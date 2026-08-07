import React, { useRef, useState, useEffect } from 'react';
import portfolioFace from '../images/Portfolio-Face.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeoButton } from './NeoButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    const imgRef = useRef<HTMLDivElement>(null);
    const [isColored, setIsColored] = useState(false);

    useEffect(() => {
        // Only hook up IntersectionObserver for touch devices —
        // desktop gets the CSS hover effect via group-hover.
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (!isTouchDevice) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Reveal color once the image is at least 50% in the viewport
                if (entry.isIntersecting) {
                    setIsColored(true);
                } else {
                    setIsColored(false);
                }
            },
            { threshold: 0.75 }
        );

        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col w-full bg-neo-white px-4">
            <section className="min-h-[90vh] flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start z-10"
                    >
                        <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-2 w-fit">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-black"></div>
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full border-2 border-black"></div>
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-black"></div>
                        </div>

                        <h1 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4.2rem] font-black uppercase leading-[1.1] mb-8 tracking-tight">
                            I Notice<br />
                            What People<br />
                            Have Learned<br />
                            <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1 mt-2">To Tolerate.</span>
                        </h1>

                        <div className="text-base md:text-lg font-medium font-mono mb-10 max-w-lg leading-relaxed space-y-3">
                            <p>Hi, I'm Jai Samyukth.</p>
                            <p>Most of my products started there.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                            <NeoButton onClick={() => navigate('/work')}>
                                See My Work <ArrowRight className="inline ml-2" />
                            </NeoButton>
                            <NeoButton variant="secondary" onClick={() => navigate('/contact')}>
                                Tell Me What You're Building
                            </NeoButton>
                        </div>

                        <div className="text-sm font-mono text-gray-600">
                            STATUS: <span className="text-neo-blue font-bold">ONLINE</span> · <span className="text-neo-blue font-bold">AVOIDING TERMINAL WARNINGS</span>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                        ref={imgRef}
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Decorative Elements behind image */}
                        <div className="absolute -top-2.5 right-0 w-full h-full bg-neo-green border-4 border-black box-shadow-neo z-0" />

                        <div className="relative z-10 bg-white overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:rotate-0">
                            <img
                                src={portfolioFace}
                                alt="Jai Samyukth B U"
                                className={[
                                    "w-full h-auto object-cover transition-all duration-700",
                                    // Touch devices: state-driven color reveal on scroll
                                    isColored
                                        ? "grayscale-0 contrast-100"
                                    : "grayscale contrast-125",
                                    // Desktop: CSS hover via parent group (overrides state)
                                    "group-hover:grayscale-0 group-hover:contrast-100",
                                ].join(" ")}
                            />
                        </div>

                        {/* Floater decoration */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-12 -left-10 bg-neo-purple border-4 border-black p-4 shadow-neo z-20 hidden md:block"
                        >
                            <p className="font-mono font-bold text-sm">STATUS: DEBUGGING</p>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

            {/* Things I Usually Help Build Block */}
            <div className="max-w-7xl mx-auto w-full mt-24 border-t-4 border-black pt-12 mb-12">
                <div className="bg-neo-black text-white p-8 md:p-12 border-4 border-black shadow-neo">
                    <h2 className="text-3xl font-black uppercase mb-6 text-neo-yellow">Things I Usually Help Build</h2>
                    <ul className="font-mono text-lg space-y-4 mb-8">
                        <li>• MVPs people can actually demo</li>
                        <li>• Internal software that replaces spreadsheets</li>
                        <li>• AI features that solve boring work</li>
                        <li>• Systems that survive real users</li>
                    </ul>
                    <p className="text-xl font-bold italic text-neo-green">If that sounds familiar... Keep scrolling.</p>
                </div>
            </div>

            {/* Things I've Built / Stats Block */}
            <div className="max-w-7xl mx-auto w-full pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-neo-yellow border-4 border-black p-8 md:p-12 shadow-neo">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2 inline-block">Currently Escaped From My GitHub</h2>
                        <div className="font-mono text-xl font-bold space-y-3">
                            <p className="hover:translate-x-2 transition-transform cursor-pointer" onClick={() => navigate('/work')}>→ Lumina IQ</p>
                            <p className="hover:translate-x-2 transition-transform cursor-pointer" onClick={() => navigate('/work')}>→ Tabble</p>
                            <p className="hover:translate-x-2 transition-transform cursor-pointer" onClick={() => navigate('/work')}>→ CRM Platform</p>
                        </div>
                    </div>
                    <div className="font-mono text-lg font-medium space-y-4 md:border-l-4 md:border-black md:pl-8 flex flex-col justify-center">
                        <p>Dozens of repositories.</p>
                        <p>A handful became products.</p>
                        <p>A few became client software.</p>
                        <p className="text-gray-800 font-bold italic mt-2">The rest taught me something expensive.</p>
                    </div>
                </div>
            </div>

            {/* Current Obsessions Block */}
            <div className="max-w-7xl mx-auto w-full pb-20">
                <div className="bg-neo-blue text-white border-4 border-black p-8 md:p-12 shadow-neo">
                    <h2 className="text-3xl font-black uppercase mb-6 text-neo-yellow">Current Obsessions</h2>
                    <ul className="font-mono text-lg md:text-xl space-y-4">
                        <li>→ Making software disappear into people's workflow.</li>
                        <li>→ Replacing spreadsheets.</li>
                        <li>→ Restaurant operations.</li>
                        <li>→ Knowledge systems.</li>
                        <li>→ Cloud architecture.</li>
                        <li>→ Finding out why humans insist on doing repetitive things manually.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
