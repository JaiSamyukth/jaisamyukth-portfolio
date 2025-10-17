import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';

interface ToolbarItem {
  label: string;
  tooltip: string;
  href?: string;
  onClick?: () => void;
}

export function Toolbar() {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { currentAct, reducedMotion } = useAppContext();

  const toolbarItems: ToolbarItem[] = [
    {
      label: 'Ventures',
      tooltip: COPY.toolbar.tooltips[0], // Connect
      onClick: () => {
        // Scroll to blueprint section or show ventures modal
        const blueprintSection = document.querySelector('[data-act="4"]');
        blueprintSection?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Manifesto',
      tooltip: COPY.toolbar.tooltips[1], // Build
      onClick: () => {
        // Scroll to Act IV
        const manifestoSection = document.querySelector('[data-act="4"]');
        manifestoSection?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Blueprint',
      tooltip: COPY.toolbar.tooltips[2], // Speak
      href: '/assets/Profile.pdf', // TODO: Replace with actual CV path
    },
    {
      label: 'Socials',
      tooltip: COPY.toolbar.tooltips[3], // Glimpse
      onClick: () => {
        // Open social links modal or dropdown
        // For now, just open LinkedIn
        window.open('https://linkedin.com/in/jaisamyukth', '_blank');
      },
    },
  ];

  useLayoutEffect(() => {
    // Show toolbar when Act V enters viewport
    if (currentAct >= 5 && !isVisible) {
      setIsVisible(true);
      
      if (toolbarRef.current && !reducedMotion) {
        gsap.fromTo(toolbarRef.current, 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
      }
    }
  }, [currentAct, isVisible, reducedMotion]);

  if (!isVisible) return null;

  return (
    <div
      ref={toolbarRef}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="bg-parchment-darker/90 backdrop-blur-md border border-dust-dark rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {toolbarItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dust-light hover:text-glow-gold transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className="text-dust-light hover:text-glow-gold transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-parchment-dark text-dust-light text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.tooltip}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-parchment-dark"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
