import { useRef, useLayoutEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';

export function ActThreePhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const { registerSection, unregisterSection, playSound, reducedMotion } = useAppContext();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerSection(section, 3);

    const ctx = gsap.context(() => {
      // ScrollTrigger for this section
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: self => {
          if (self.isActive) {
            // Typewriter effect for first line
            if (line1Ref.current) {
              gsap.set(line1Ref.current, { width: 0, overflow: 'hidden' });

              gsap.to(line1Ref.current, {
                width: '100%',
                duration: reducedMotion ? 0.3 : 2,
                ease: 'steps(40)',
                onStart: () => {
                  setCurrentLine(1);
                  if (!reducedMotion) {
                    playSound('pen');
                  }
                },
              });
            }

            // Typewriter effect for second line
            if (line2Ref.current) {
              gsap.set(line2Ref.current, { width: 0, overflow: 'hidden' });

              gsap.to(line2Ref.current, {
                width: '100%',
                duration: reducedMotion ? 0.3 : 2.5,
                ease: 'steps(50)',
                delay: 0.5,
                onStart: () => {
                  setCurrentLine(2);
                  if (!reducedMotion) {
                    playSound('pen');
                  }
                },
              });
            }
          }
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      unregisterSection(section);
    };
  }, [registerSection, unregisterSection, playSound, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-gradient-to-br from-parchment-dark to-parchment-darker overflow-hidden"
    >
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-dust-dark to-transparent" />
      
      {/* Philosophy text */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="max-w-4xl text-center space-y-8">
          <div
            ref={line1Ref}
            className="whitespace-nowrap"
          >
            <p className="text-2xl md:text-4xl font-serif text-dust-light leading-relaxed">
              {COPY.acts.three.lines[0]}
            </p>
          </div>
          
          <div
            ref={line2Ref}
            className="whitespace-nowrap"
          >
            <p className="text-2xl md:text-4xl font-serif text-dust-light leading-relaxed">
              {COPY.acts.three.lines[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Ink pen cursor effect */}
      {currentLine > 0 && !reducedMotion && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-8 bg-dust-light animate-pulse" />
        </div>
      )}

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment-darker to-transparent opacity-70"></div>
    </section>
  );
}
