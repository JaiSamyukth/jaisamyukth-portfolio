import { useRef, useLayoutEffect, useState } from 'react';
import { gsap, ScrollTrigger, CINEMATIC_EASES } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';
import { BlueprintSVG } from '../Blueprint/BlueprintSVG';

export function ActFourBlueprint() {
  const sectionRef = useRef<HTMLElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const blueprintContainerRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);


  const [currentPhase, setCurrentPhase] = useState<'question' | 'transition' | 'answer' | 'blueprint'>('question');
  const { registerSection, unregisterSection, playSound, reducedMotion } = useAppContext();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerSection(section, 4);

    const ctx = gsap.context(() => {
      // Create master timeline for this section
      const masterTL = gsap.timeline({ paused: true });

      // Phase 1: Question appears quickly (0-1s)
      masterTL.fromTo(questionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 0.8,
          ease: CINEMATIC_EASES.smooth,
          onStart: () => setCurrentPhase('question')
        }
      );

      // Phase 2: Question fades, answer appears (1-2.5s)
      masterTL.to(questionRef.current, {
        opacity: 0,
        y: -20,
        duration: reducedMotion ? 0.1 : 0.4,
        ease: CINEMATIC_EASES.smooth
      }, "+=0.8");

      masterTL.fromTo(answerRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: reducedMotion ? 0.2 : 0.8,
          ease: CINEMATIC_EASES.dramatic,
          onStart: () => {
            setCurrentPhase('answer');
            if (!reducedMotion) {
              playSound('hum', true);
            }
          }
        },
        "-=0.2"
      );

      // Phase 3: Answer holds briefly (2.5-4s)
      masterTL.to({}, { duration: reducedMotion ? 0.3 : 1.2 });

      // Phase 4: Smooth transition to blueprint (4-5.5s)
      masterTL.to(answerRef.current, {
        opacity: 0,
        y: -30,
        duration: reducedMotion ? 0.2 : 0.6,
        ease: CINEMATIC_EASES.smooth
      });

      masterTL.fromTo(blueprintContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 0.8,
          ease: CINEMATIC_EASES.smooth,
          onStart: () => setCurrentPhase('blueprint')
        },
        "-=0.3"
      );

      // Phase 5: Blueprint diagram appears (5.5-7s)
      masterTL.fromTo(blueprintRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: reducedMotion ? 0.2 : 0.8,
          ease: CINEMATIC_EASES.smooth
        },
        "-=0.4"
      );

      // Phase 6: Description appears (7-8s)
      masterTL.fromTo(descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.2 : 0.6,
          ease: CINEMATIC_EASES.smooth
        },
        "-=0.2"
      );

      // ScrollTrigger to control the master timeline
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
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
      className="relative w-full h-screen bg-parchment-dark overflow-hidden"
    >
      {/* Question Phase */}
      <div
        ref={questionRef}
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{
          opacity: currentPhase === 'question' ? 1 : 0,
          pointerEvents: currentPhase === 'question' ? 'auto' : 'none'
        }}
      >
        <div className="text-center px-8">
          <h2 className="text-4xl md:text-7xl font-serif text-dust-light leading-tight">
            {COPY.acts.four.question}
          </h2>
        </div>
      </div>

      {/* Answer Phase */}
      <div
        ref={answerRef}
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{
          opacity: currentPhase === 'answer' ? 1 : 0,
          pointerEvents: currentPhase === 'answer' ? 'auto' : 'none'
        }}
      >
        <div className="text-center px-8">
          <h1 className="text-5xl md:text-9xl font-serif text-glow-gold leading-tight font-bold">
            I am a Completionist
          </h1>
          <p className="text-xl md:text-2xl text-dust-light mt-6 leading-relaxed max-w-4xl">
            Someone who transforms ideas from conception to completion, ensuring every detail is perfected and every vision becomes reality.
          </p>
        </div>
      </div>

      {/* Blueprint Phase */}
      <div
        ref={blueprintContainerRef}
        className="absolute inset-0 z-10 bg-gradient-to-br from-parchment-light to-parchment-dark"
        style={{
          opacity: currentPhase === 'blueprint' ? 1 : 0,
          pointerEvents: currentPhase === 'blueprint' ? 'auto' : 'none'
        }}
      >
        <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-serif text-amber-900 font-bold mb-4">
              My Process
            </h2>
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed max-w-3xl">
              From initial concept to final delivery, I follow a proven methodology that ensures every project reaches its full potential.
            </p>
          </div>

          {/* Simplified Blueprint diagram */}
          <div ref={blueprintRef} className="w-full max-w-5xl">
            <BlueprintSVG />
          </div>

          {/* Description */}
          <div
            ref={descriptionRef}
            className="max-w-4xl text-center"
          >
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed">
              Each step builds upon the last, creating a seamless journey from idea to implementation. This systematic approach ensures nothing is left to chance and every detail serves the greater vision.
            </p>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment-darker to-transparent opacity-70"></div>
    </section>
  );
}
