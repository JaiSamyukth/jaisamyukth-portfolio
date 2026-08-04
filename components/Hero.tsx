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
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-neo-white overflow-hidden">
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

                    <h1 className="text-[1.75rem] md:text-[2.35rem] lg:text-[3.2rem] font-black uppercase leading-[1.1] mb-8">
                        Co-founder of <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1">Genrec AI.</span><br />
                        I build things.<br />
                        Sometimes they survive.
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-4 max-w-lg leading-relaxed">
                        Most of my client work happens there. Most of my product ideas escape from there. I notice problems, I get annoyed, and I write code until they go away.
                    </p>

                    <p className="text-base md:text-lg font-bold font-mono mb-8 text-gray-700">
                        The first AWS invoice politely informed me that curiosity isn't free.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                        <NeoButton onClick={() => navigate('/work')}>
                            See What Survived <ArrowRight className="inline ml-2" />
                        </NeoButton>
                        <NeoButton variant="secondary" onClick={() => navigate('/contact')}>
                            Reach Out
                        </NeoButton>
                    </div>

                    <div className="mb-6 text-base font-medium max-w-xl">
                        <div className="flex items-start gap-2">
                            <span className="text-neo-green font-bold">→</span>
                            <div>
                                <div className="font-bold uppercase text-sm text-gray-500 mb-1">Current Focus:</div>
                                <div>• Shipping real software</div>
                                <div>• Building systems that solve actual problems</div>
                                <div>• Arguing with cloud infrastructure on your behalf</div>
                            </div>
                        </div>
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
    );
};
