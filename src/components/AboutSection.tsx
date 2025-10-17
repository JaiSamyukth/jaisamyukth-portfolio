'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import TextPressure from './TextPressure'
import ChromaGrid from './ChromaGrid'

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const profileItem = {
    image: "/assets/images/profile.jpg",
    title: "Jai Samyukth",
    subtitle: "Software Architect & Founder",
    handle: "@jaisamyukth",
    borderColor: "#007BFF",
    gradient: "linear-gradient(145deg, #007BFF, #212529)",
    url: "https://linkedin.com/in/jaisamyukth"
  }

  const socialLinks = [
    {
      href: "https://linkedin.com/in/jaisamyukth",
      icon: <Linkedin size={24} />,
      label: "LinkedIn"
    },
    {
      href: "https://twitter.com/jaisamyukth", 
      icon: <Twitter size={24} />,
      label: "X (Twitter)"
    },
    {
      href: "https://github.com/jaisamyukth",
      icon: <Github size={24} />,
      label: "GitHub"
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image with ChromaGrid */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ height: '500px', position: 'relative' }}>
              <ChromaGrid 
                items={[profileItem]}
                radius={200}
                columns={1}
                rows={1}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                className="profile-chroma-grid"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="h-16 lg:h-20 mb-6 flex items-center">
                <div className="w-full max-w-md">
                  <TextPressure
                    text="About     Me"
                    fontFamily="Inter"
                    width={true}
                    weight={true}
                    italic={false}
                    alpha={false}
                    flex={true}
                    stroke={false}
                    scale={true}
                    textColor="#212529"
                    minFontSize={42}
                    className="font-bold tracking-wide"
                  />
                </div>
              </div>
              
              <p className="text-lg text-tech-light/80 leading-relaxed">
                I am the founder and product architect with a passion for building intelligent software 
                that solves real-world problems. My work focuses on the intersection of AI, sophisticated 
                system design, and minimalist user experiences. As the co-founder of Genrec AI, I lead 
                our technical vision and product strategy, turning complex challenges into scalable, 
                privacy-first solutions. My goal is to build technology that is not only powerful but 
                also elegant and intuitive.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 tech-card rounded-xl hover:shadow-lg hover:shadow-tech-blue/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-tech-light group-hover:text-tech-blue transition-colors duration-300">
                    {link.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-tech-charcoal text-tech-light text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-tech-gray/30">
                    {link.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-tech-blue/3 rounded-full blur-3xl" />
    </section>
  )
}

export default AboutSection