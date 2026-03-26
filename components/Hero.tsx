import React from 'react';
import portfolioFace from '../images/Portfolio-Face.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeoButton } from './NeoButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();

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

                    <h1 className="text-[1.75rem] md:text-[2.35rem] lg:text-[3.2rem] font-black uppercase leading-[1.1] mb-16">
                        Yep, that’s me. A CS student who somehow ended up building full systems and calling himself a  <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1">founder.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-10 max-w-lg leading-relaxed border-l-[3px] border-neo-purple pl-6 pt-1">
                        If you have a software problem, I probably want to solve it. To know me, feel free to reach out.
                    </p>

                    <div className="mb-10 mt-5 text-base font-medium max-w-xl">
                        <div className="flex items-start gap-2">
                            <span className="text-neo-green font-bold">→</span>
                            <div>
                                <div>Currently building:</div>
                                <div>• Lumina IQ — AI learning platform (external testing)</div>
                                <div>• Tabble — full-stack restaurant system (validated locally)</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-9">
                        <NeoButton onClick={() => navigate('/work')}>
                            View the systems <ArrowRight className="inline ml-2" />
                        </NeoButton>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
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
                            className="w-full h-auto object-cover grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100"
                        />
                    </div>

                    {/* Floater decoration */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-12 -left-10 bg-neo-purple border-4 border-black p-4 shadow-neo z-20 hidden md:block"
                    >
                        <p className="font-mono font-bold text-sm">STATUS: ONLINE</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
