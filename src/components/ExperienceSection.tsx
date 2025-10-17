'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import TextPressure from './TextPressure'

interface ExperienceItem {
  company: string
  role: string
  duration: string
  description: string
}

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Genrec AI",
      role: "Co-founder & Chief Architect",
      duration: "2023 - Present",
      description: "Lead the architectural vision for all company projects, including AI learning systems and bespoke CRMs. Secured the company's first revenue-generating client and direct our product strategy."
    },
    {
      company: "Tabble",
      role: "Founder & Product Visionary", 
      duration: "2024 - Present",
      description: "Founded and currently lead Tabble, an ultra-luxury dining and hotel management platform. Responsible for the entire product vision, system architecture, and UI/UX design."
    }
  ]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-16 lg:h-20 mb-4 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <TextPressure
                text="Experience"
                fontFamily="Inter"
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                flex={false}
                stroke={false}
                scale={true}
                textColor="#212529"
                minFontSize={42}
                className="font-bold tracking-wide"
              />
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-blue/50 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative timeline-line pl-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-0 w-4 h-4 bg-tech-blue rounded-full border-4 border-tech-dark shadow-lg shadow-tech-blue/30" />
                
                {/* Content card */}
                <div className="tech-card rounded-2xl p-8 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-tech-light mb-2">
                        {experience.company}
                      </h3>
                      <p className="text-tech-blue font-semibold text-lg">
                        {experience.role}
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block bg-tech-blue/20 text-tech-blue px-4 py-2 rounded-full text-sm font-medium">
                        {experience.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-tech-light/80 leading-relaxed text-base lg:text-lg">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
    </section>
  )
}

export default ExperienceSection