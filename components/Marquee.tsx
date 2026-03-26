import React from 'react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = 'bg-black', 
  textColor = 'text-white',
  direction = 'left' 
}) => {
  return (
    <div className={`w-full overflow-hidden border-y-4 border-black py-3 ${bgColor} ${textColor}`}>
      <div className={`whitespace-nowrap animate-marquee flex gap-8 ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Repeat enough times to cover typical screen widths smoothly */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl md:text-4xl font-mono font-bold uppercase tracking-wider">
            {text} •
          </span>
        ))}
      </div>
    </div>
  );
};
