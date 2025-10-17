'use client'

import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'
import TextPressure from './TextPressure'

const ContactSection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-16 lg:h-20 mb-8 flex items-center justify-center">
              <div className="w-full max-w-lg">
                <TextPressure
                  text="Get   In   Touch"
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
            
            <p className="text-xl text-tech-light/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of an ambitious vision.
            </p>

            <motion.a
              href="mailto:jaisamyukth@gmail.com"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-tech-blue text-white font-semibold text-lg rounded-xl hover:bg-tech-blue-dark transition-all duration-300 hover:shadow-lg hover:shadow-tech-blue/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail size={24} className="group-hover:animate-pulse" />
              jaisamyukth@gmail.com
              <ExternalLink size={20} className="opacity-60" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-tech-light/40 font-medium text-sm">
          © 2024 Jai Samyukth. Built with precision and purpose.
        </p>
      </motion.div>

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
    </section>
  )
}

export default ContactSection