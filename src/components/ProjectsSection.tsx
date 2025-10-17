'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import TextPressure from './TextPressure'

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  images?: string[]
  links: {
    demo?: string
    github?: string
  }
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Tabble",
      description: "An end-to-end management platform for high-end hotel dining, featuring a sophisticated UI/UX designed to create a seamless, non-transactional experience.",
      techStack: ["React", "FastAPI", "AWS EC2", "UI/UX Design"],
      image: "/assets/images/tabble.png",
      images: [], // Using actual project image
      links: {
        demo: "#"
      }
    },
    {
      title: "Lumina IQ",
      description: "An intelligent analytics platform that leverages AI to provide deep insights and predictive analysis for business intelligence and data-driven decision making.",
      techStack: ["Python", "AI/ML", "React", "Data Analytics"],
      image: "/placeholder-lumina.jpg",
      images: [], // Using default gradient images
      links: {
        demo: "https://luminaiq.genrecai.com/",
        github: "#"
      }
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
            <div className="w-full max-w-2xl">
              <TextPressure
                text="Featured        Projects"
                fontFamily="Inter"
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                flex={true}
                stroke={false}
                scale={true}
                textColor="#212529"
                minFontSize={38}
                className="font-bold tracking-wide"
              />
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-blue/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group tech-card rounded-2xl overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-tech-blue/20 to-tech-charcoal overflow-hidden">
                {project.image.includes('/assets/images/') ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <>
                    {/* Fallback content for projects without images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-tech-blue/10 to-transparent">
                      <div className="text-center opacity-60">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-tech-blue/30 flex items-center justify-center border border-tech-blue/40">
                          <span className="text-2xl">🚀</span>
                        </div>
                        <p className="text-tech-light/80 text-sm font-medium">{project.title}</p>
                        <p className="text-tech-light/60 text-xs">Project Demo</p>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-tech-light group-hover:text-tech-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex space-x-2 ml-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="p-2 text-tech-light hover:text-tech-blue transition-colors duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="p-2 text-tech-light hover:text-tech-blue transition-colors duration-300"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-tech-light/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-tech-blue/20 text-tech-blue text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-tech-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-tech-blue/3 rounded-full blur-3xl" />
    </section>
  )
}

export default ProjectsSection