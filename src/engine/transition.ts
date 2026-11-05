// Page transition: "meet and lock". Two ink halves travel in from the sides, meet on a violet
// seam (the join), then part to reveal the next page. Adapters run leave() while the next route
// renders, so the transition adds little latency.
import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

export type Transition = {
  leave: (curtain: HTMLElement, label?: string) => Promise<unknown> | gsap.core.Animation;
  enter: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
};

const parts = (c: HTMLElement) => ({
  l: c.querySelector<HTMLElement>('.curtain__half--l'),
  r: c.querySelector<HTMLElement>('.curtain__half--r'),
  seam: c.querySelector<HTMLElement>('.curtain__seam'),
  label: c.querySelector<HTMLElement>('.curtain__label'),
});

const seam: Transition = {
  leave: (c, text = '') => {
    const { l, r, seam: s, label } = parts(c);
    if (label) label.textContent = text;
    return gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .set(label, { autoAlpha: 0, yPercent: 60 })
      .fromTo(l, { xPercent: -101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .fromTo(r, { xPercent: 101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .fromTo(s, { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: ease.out }, 0.55)
      .to(label, { autoAlpha: 1, yPercent: 0, duration: 0.45, ease: ease.out }, 0.6);
  },
  enter: (c) => {
    const { l, r, seam: s, label } = parts(c);
    return gsap
      .timeline()
      .to(label, { autoAlpha: 0, yPercent: -60, duration: 0.3, ease: ease.soft }, 0)
      .to(s, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.35, ease: ease.soft }, 0.05)
      .to(l, { xPercent: -101, duration: 0.85, ease: ease.inOut }, 0.15)
      .to(r, { xPercent: 101, duration: 0.85, ease: ease.inOut }, 0.15)
      .set(s, { transformOrigin: '50% 0%' })
      .set(c, { autoAlpha: 0 });
  },
};

const reduced: Transition = {
  leave: (c) => {
    const { l, r } = parts(c);
    return gsap.timeline().set([l, r], { xPercent: 0 }).set(c, { autoAlpha: 1 }).fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  },
  enter: (c) => gsap.to(c, { autoAlpha: 0, duration: 0.2 }),
};

let current = seam;
export const setTransition = (t: Transition) => {
  current = t;
};
const pick = () => (prefersReducedMotion() ? reduced : current);
const curtain = () => document.getElementById('curtain') as HTMLElement;

export const playLeave = (label?: string) => Promise.resolve(pick().leave(curtain(), label));
export const playEnter = () => Promise.resolve(pick().enter(curtain()));
