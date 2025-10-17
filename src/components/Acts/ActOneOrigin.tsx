import { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, CINEMATIC_EASES } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';
import emptyBg1 from '../../assets/images/Empty_Art_BG_1.png';

export function ActOneOrigin() {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { registerSection, unregisterSection, playSound, reducedMotion } = useAppContext();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerSection(section, 1);

    const ctx = gsap.context(() => {
      // Create cinematic particle system
      if (particlesRef.current && !reducedMotion) {
        const particles = [];
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          const size = Math.random() * 3 + 1;
          particle.className = 'absolute bg-white rounded-full';
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.opacity = `${Math.random() * 0.6 + 0.2}`;
          particle.style.filter = 'blur(0.5px)';
          particlesRef.current.appendChild(particle);
          particles.push(particle);
        }

        // Cinematic particle animation
        particles.forEach((particle, i) => {
          const tl = gsap.timeline({ repeat: -1 });

          tl.to(particle, {
            x: `+=${Math.random() * 200 - 100}`,
            y: `+=${Math.random() * 200 - 100}`,
            rotation: Math.random() * 360,
            duration: 8 + Math.random() * 4,
            ease: CINEMATIC_EASES.smooth,
          })
          .to(particle, {
            opacity: Math.random() * 0.8 + 0.2,
            duration: 2 + Math.random() * 2,
            ease: CINEMATIC_EASES.smooth,
          }, 0)
          .to(particle, {
            scale: Math.random() * 0.5 + 0.5,
            duration: 3 + Math.random() * 2,
            ease: CINEMATIC_EASES.smooth,
          }, 0);

          // Stagger the start times
          tl.delay(i * 0.05);
        });
      }

      // Master timeline for this section
      const masterTL = gsap.timeline({ paused: true });

      // Cinematic text reveal
      if (textRef.current) {
        masterTL.fromTo(textRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: -90,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            filter: 'blur(0px)',
            duration: reducedMotion ? 0.3 : 3,
            ease: CINEMATIC_EASES.dramatic
          }
        );
      }

      // ScrollTrigger for this section
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (!reducedMotion) {
            playSound('rumble', true);
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

      // Parallax effect for particles on scroll
      if (particlesRef.current && !reducedMotion) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: self => {
            const progress = self.progress;
            const particles = particlesRef.current!.children;

            Array.from(particles).forEach((particle, i) => {
              const speed = (i % 3 + 1) * 0.5;
              gsap.set(particle, {
                y: `+=${progress * 100 * speed}`,
                opacity: 1 - progress * 0.7,
                scale: 1 - progress * 0.3,
              });
            });
          }
        });
      }
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
        backgroundImage: `url(${emptyBg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        perspective: '1000px'
      }}
    >
      {/* Cinematic overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 z-10" />

      {/* Atmospheric fog effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-transparent opacity-30" />

      {/* Main text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={textRef}
          className="text-center transform-gpu"
          style={{ perspective: '1000px' }}
        >
          <h1 className="text-5xl md:text-8xl font-serif text-white font-light tracking-wider">
            <span className="inline-block transform-gpu" style={{ textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)' }}>
              {COPY.acts.one.text}
            </span>
          </h1>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-200 to-transparent opacity-50"></div>
    </section>
  );
}
