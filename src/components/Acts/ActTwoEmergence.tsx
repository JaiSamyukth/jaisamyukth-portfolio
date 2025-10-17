import { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, CINEMATIC_EASES } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';

export function ActTwoEmergence() {
  const sectionRef = useRef<HTMLElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const windowsRef = useRef<HTMLDivElement[]>([]);
  const { registerSection, unregisterSection, playSound, reducedMotion } = useAppContext();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerSection(section, 2);

    const ctx = gsap.context(() => {
      // Master timeline for cinematic sequence
      const masterTL = gsap.timeline({ paused: true });

      // Phase 1: Skyline emerges dramatically (0-3s)
      if (skylineRef.current) {
        masterTL.fromTo(skylineRef.current,
          {
            scaleY: 0,
            transformOrigin: 'bottom',
            filter: 'blur(5px)',
            opacity: 0
          },
          {
            scaleY: 1,
            filter: 'blur(0px)',
            opacity: 1,
            duration: reducedMotion ? 0.3 : 3,
            ease: CINEMATIC_EASES.dramatic
          }
        );
      }

      // Phase 2: Windows light up in sequence (1-4s)
      if (!reducedMotion) {
        windowsRef.current.forEach((window, i) => {
          if (window) {
            masterTL.fromTo(window,
              { opacity: 0, scale: 0 },
              {
                opacity: Math.random() * 0.8 + 0.2,
                scale: 1,
                duration: 0.3,
                ease: CINEMATIC_EASES.bounce,
              },
              1 + i * 0.1
            );
          }
        });
      }

      // Phase 3: Text reveals with impact (3-5s)
      if (textRef.current) {
        masterTL.fromTo(textRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.5,
            rotationY: 180,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: reducedMotion ? 0.3 : 2,
            ease: CINEMATIC_EASES.reveal
          },
          3
        );
      }

      // Phase 4: Continuous window flickering
      masterTL.add(() => {
        if (!reducedMotion) {
          windowsRef.current.forEach((window, i) => {
            if (window) {
              gsap.to(window, {
                opacity: `random(0.2, 1)`,
                duration: `random(1, 3)`,
                repeat: -1,
                yoyo: true,
                ease: CINEMATIC_EASES.smooth,
                delay: i * 0.1,
              });
            }
          });
        }
      }, 5);

      // ScrollTrigger to control the master timeline
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (!reducedMotion) {
            playSound('city', true);
          }
          masterTL.play();
        },
        onLeave: () => {
          masterTL.pause();
        },
        onEnterBack: () => {
          masterTL.play();
        },
        onLeaveBack: () => {
          masterTL.reverse();
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
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg,
            #87CEEB 0%,     /* Sky blue */
            #98D8E8 25%,    /* Light blue */
            #B8E6F0 50%,    /* Pale blue */
            #D4E8F0 75%,    /* Very pale blue */
            #E8F4F8 100%    /* Almost white */
          )
        `
      }}
    >
      {/* City skyline */}
      <div
        ref={skylineRef}
        className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-gray-900"
        style={{
          clipPath: 'polygon(0% 100%, 0% 60%, 10% 50%, 15% 55%, 25% 40%, 35% 45%, 45% 30%, 55% 35%, 65% 25%, 75% 30%, 85% 20%, 95% 25%, 100% 15%, 100% 100%)',
        }}
      >
        {/* Windows */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) windowsRef.current[i] = el;
              }}
              className="absolute w-2 h-3 bg-glow-gold"
              style={{
                left: `${10 + (i % 10) * 8}%`,
                bottom: `${30 + Math.floor(i / 10) * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Realistic clouds and atmosphere */}
      <div className="absolute inset-0 opacity-40">
        {/* Large fluffy clouds */}
        <div className="absolute top-8 left-16 w-48 h-24 bg-white/25 rounded-full blur-2xl"></div>
        <div className="absolute top-12 left-20 w-32 h-16 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute top-16 left-24 w-24 h-12 bg-white/20 rounded-full blur-lg"></div>

        {/* Medium clouds */}
        <div className="absolute top-24 right-24 w-36 h-18 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-28 w-20 h-10 bg-white/25 rounded-full blur-lg"></div>

        {/* Small wispy clouds */}
        <div className="absolute top-40 left-1/3 w-56 h-28 bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/3 w-32 h-16 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute top-60 left-1/4 w-28 h-14 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute top-50 right-1/4 w-40 h-20 bg-white/18 rounded-full blur-2xl"></div>
      </div>

      {/* Gentle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

      {/* Main text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={textRef}
          className="text-center transform-gpu"
          style={{ perspective: '1000px' }}
        >
          <h1 className="text-5xl md:text-8xl font-serif text-gray-800 font-light tracking-wider">
            <span className="inline-block transform-gpu" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(255,255,255,0.8)' }}>
              {COPY.acts.two.text}
            </span>
          </h1>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment-dark to-transparent opacity-70"></div>
    </section>
  );
}
