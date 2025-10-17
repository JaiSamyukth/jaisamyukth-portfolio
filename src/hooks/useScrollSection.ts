import { useState, useEffect, useRef } from 'react';

type ActNumber = 1 | 2 | 3 | 4 | 5;

export function useScrollSection() {
  const [currentAct, setCurrentAct] = useState<ActNumber>(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const actNumber = parseInt(entry.target.getAttribute('data-act') || '1') as ActNumber;
            setCurrentAct(actNumber);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const registerSection = (element: HTMLElement | null, actNumber: ActNumber) => {
    if (!element || !observerRef.current) return;
    
    element.setAttribute('data-act', actNumber.toString());
    observerRef.current.observe(element);
  };

  const unregisterSection = (element: HTMLElement | null) => {
    if (!element || !observerRef.current) return;
    observerRef.current.unobserve(element);
  };

  return {
    currentAct,
    registerSection,
    unregisterSection,
  };
}
