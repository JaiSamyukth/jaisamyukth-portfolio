import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  children: React.ReactNode;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = "px-6 py-3 font-bold border-4 border-black text-lg transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[4px_4px_0px_0px_#000]";

  const variants = {
    primary: "bg-neo-green text-black hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:-translate-x-1",
    black: "bg-black text-white shadow-neo-sm border-white hover:bg-neo-purple hover:text-black hover:border-black",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
