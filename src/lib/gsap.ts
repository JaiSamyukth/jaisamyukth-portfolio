// GSAP registration and helpers
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Configure GSAP defaults for smooth animations
gsap.defaults({
  ease: "power2.out",
  duration: 1.2,
});

// Export configured GSAP
export { gsap, ScrollTrigger };

// Cinematic animation presets
export const CINEMATIC_EASES = {
  smooth: "power2.inOut",
  dramatic: "power3.out",
  elastic: "elastic.out(1, 0.3)",
  bounce: "bounce.out",
  reveal: "expo.out",
  typewriter: "steps(40)",
};

// Helper functions
export const createMasterTimeline = () => {
  return gsap.timeline({
    defaults: {
      ease: CINEMATIC_EASES.smooth,
      duration: 1.5,
    },
  });
};

export const getReducedMotionSettings = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    duration: prefersReducedMotion ? 0.1 : 1.5,
    ease: prefersReducedMotion ? "none" : CINEMATIC_EASES.smooth,
    scale: prefersReducedMotion ? 1 : undefined,
    y: prefersReducedMotion ? 0 : undefined,
  };
};

// Smooth scroll setup
export const initSmoothScroll = () => {
  // Disable default ScrollTrigger scroller-start refresh
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true
  });
};
