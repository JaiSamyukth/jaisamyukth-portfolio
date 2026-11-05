export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isTouch = () => matchMedia('(hover: none), (pointer: coarse)').matches;
export const isMobile = () => matchMedia('(max-width: 767px)').matches;

// Shared easing vocabulary ("meet and lock"). Use these names everywhere.
export const ease = {
  out: 'expo.out', // entrances
  inOut: 'expo.inOut', // the seam transition
  soft: 'power3.out', // small UI
} as const;
