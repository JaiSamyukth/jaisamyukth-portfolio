'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import PrismaticBurst from './PrismaticBurst'
import TextPressure from './TextPressure'
import TextType from './TextType'

const HeroSection = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.5
      
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* PrismaticBurst background */}
      <div className="absolute inset-0 z-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.5}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="multiply"
          colors={['#E3F2FD', '#F0F8FF', '#FFFFFF']}
        />
      </div>
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-1" />
      
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-tech-blue/5 z-2" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-tech-blue rounded-full opacity-60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-20">
        {/* Main Name with TextPressure */}
        <motion.div
          className="h-32 md:h-40 lg:h-48 mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-5xl">
            <TextPressure
              text="Jai    Samyukth"
              fontFamily="Inter"
              width={true}
              weight={true}
              italic={false}
              alpha={false}
              flex={true}
              stroke={false}
              scale={true}
              textColor="#212529"
              minFontSize={60}
              className="font-bold tracking-wide"
            />
          </div>
        </motion.div>
        
        {/* Animated Subtitle with TextType */}
        <motion.div 
          className="h-16 md:h-20 mb-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-center">
            <TextType
              text={[
                "Software Architect & Founder",
                "Building Intelligent Systems",
                "Privacy-First AI Solutions",
                "Minimalist Digital Experiences"
              ]}
              typingSpeed={75}
              pauseDuration={2000}
              deletingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-tech-blue"
              loop={true}
              className="inline-block"
              textColors={["#212529", "#212529", "#212529", "#212529"]}
              startOnVisible={false}
              initialDelay={1000}
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          ref={scrollIndicatorRef}
          className="mt-8 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center space-y-3 text-tech-blue hover:text-tech-light transition-colors duration-300">
            <span className="text-sm font-medium tracking-wider uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={28} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection