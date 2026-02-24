import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NeoButton } from './NeoButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-neo-white overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

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

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] mb-8">
                        Yeah this guy is me, yeah he's amazing, yup he's a student, and definitely yes he's a <span className="text-neo-blue bg-neo-yellow px-2 inline-block transform -rotate-1">founder.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium font-mono mb-6 max-w-lg leading-relaxed border-l-4 border-neo-purple pl-6">
                        3rd-year CS student shipping complete systems end-to-end. One funds the others through paid client builds.
                    </p>

                    <ul className="mb-8 space-y-2 text-base font-medium max-w-xl">

                        <li className="flex items-start gap-2">
                            <span className="text-neo-green font-bold">→</span>
                            Lumina IQ in external user testing; Tabble end-to-end system built and locally validated
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
                    <div className="absolute -top-4 -right-4 w-full h-full bg-neo-green border-4 border-black box-shadow-neo z-0" />

                    <div className="relative z-10 border-4 border-black shadow-neo-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:rotate-0">
                        <img
                            src="https://www.genrecai.com/images/1771422131845-205aj.png"
                            alt="Jai Samyukth B U"
                            className="w-full h-auto object-cover grayscale-0 filter-none"
                        />
                    </div>

                    {/* Floater decoration */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-8 -left-8 bg-neo-purple border-4 border-black p-4 shadow-neo z-20 hidden md:block"
                    >
                        <p className="font-mono font-bold text-sm">STATUS: ONLINE</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
