import React from 'react';
import { motion } from 'framer-motion';

interface RevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealCard: React.FC<RevealCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier (easeOutQuint-ish)
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
