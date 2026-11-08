// Page transitions. Every nav destination has its own shape, colour and opacity, so moving
// around the site never plays the same cover twice in a row:
//   /              seam      ink halves meet on an acid seam (solid)
//   /work…         blinds    pink columns drop in, then fall away (90%)
//   /about         iris      yellow circle grows from wherever you clicked (glass, 88%)
//   /approach      slash     a skewed blue panel sweeps across (92%)
//   /learnings     tiles     purple tiles pop in at random, then crumble (90%)
//   /experimental  diamond   a spinning acid diamond swallows the screen (glass, 82%)
//   /contact       shutters  ink shutters close top and bottom on a pink line (95%)
// Adapters run leave() while the next route renders, then enter() reveals it.
import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

export type Point = { x: number; y: number };
export type Transition = {
  leave: (curtain: HTMLElement, label?: string, at?: Point) => Promise<unknown> | gsap.core.Animation;
  enter: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
};

const parts = (c: HTMLElement) => ({
  l: c.querySelector<HTMLElement>('.curtain__half--l'),
  r: c.querySelector<HTMLElement>('.curtain__half--r'),
  seam: c.querySelector<HTMLElement>('.curtain__seam'),
  label: c.querySelector<HTMLElement>('.curtain__label'),
  fx: c.querySelector<HTMLElement>('.curtain__fx')!,
});

/** Fresh pieces for a shaped transition; the seam halves are parked off-screen. */
function pieces(c: HTMLElement, name: string, n: number, css: Partial<CSSStyleDeclaration>) {
  const { l, r, seam: s, fx } = parts(c);
  gsap.set(l, { xPercent: -101 });
  gsap.set(r, { xPercent: 101 });
  gsap.set(s, { scaleY: 0 });
  c.dataset.fx = name;
  fx.replaceChildren();
  return Array.from({ length: n }, () => {
    const d = document.createElement('div');
    d.className = 'curtain__piece';
    Object.assign(d.style, css);
    fx.appendChild(d);
    return d;
  });
}

const labelIn = (tl: gsap.core.Timeline, label: HTMLElement | null, text: string, at: number) => {
  if (label) label.textContent = text;
  return tl.set(label, { autoAlpha: 0, yPercent: 60 }, 0).to(label, { autoAlpha: 1, yPercent: 0, duration: 0.45, ease: ease.out }, at);
};
const labelOut = (tl: gsap.core.Timeline, label: HTMLElement | null) =>
  tl.to(label, { autoAlpha: 0, yPercent: -60, duration: 0.3, ease: ease.soft }, 0);
const done = (tl: gsap.core.Timeline, c: HTMLElement) =>
  tl.set(c, { autoAlpha: 0 }).add(() => {
    parts(c).fx.replaceChildren();
    delete c.dataset.fx;
  });

const seam: Transition = {
  leave: (c, text = '') => {
    const { l, r, seam: s, label, fx } = parts(c);
    fx.replaceChildren();
    c.dataset.fx = 'seam';
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(l, { xPercent: -101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .fromTo(r, { xPercent: 101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
      .fromTo(s, { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: ease.out }, 0.55);
    return labelIn(tl, label, text, 0.6);
  },
  enter: (c) => {
    const { l, r, seam: s, label } = parts(c);
    const tl = labelOut(gsap.timeline(), label)
      .to(s, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.35, ease: ease.soft }, 0.05)
      .to(l, { xPercent: -101, duration: 0.85, ease: ease.inOut }, 0.15)
      .to(r, { xPercent: 101, duration: 0.85, ease: ease.inOut }, 0.15)
      .set(s, { transformOrigin: '50% 0%' });
    return done(tl, c);
  },
};

const BLINDS = 6;
const blinds: Transition = {
  leave: (c, text = '') => {
    const cols = pieces(c, 'blinds', BLINDS, { top: '0', bottom: '0', background: 'var(--pink)', opacity: '0.9' });
    cols.forEach((d, i) => Object.assign(d.style, { left: `${(i * 100) / BLINDS}%`, width: `calc(${100 / BLINDS}% + 1px)` }));
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(cols, { yPercent: -101 }, { yPercent: 0, duration: 0.6, ease: ease.inOut, stagger: 0.06 }, 0);
    return labelIn(tl, parts(c).label, text, 0.55);
  },
  enter: (c) => {
    const cols = parts(c).fx.children;
    const tl = labelOut(gsap.timeline(), parts(c).label).to(cols, { yPercent: 101, duration: 0.65, ease: ease.inOut, stagger: 0.06 }, 0.1);
    return done(tl, c);
  },
};

const radius = (p: Point) => Math.hypot(Math.max(p.x, innerWidth - p.x), Math.max(p.y, innerHeight - p.y)) + 4;
const iris: Transition = {
  leave: (c, text = '', at = { x: innerWidth / 2, y: innerHeight / 2 }) => {
    const [disc] = pieces(c, 'iris', 1, { inset: '0', background: 'var(--yellow)', opacity: '0.88', backdropFilter: 'blur(14px)' });
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(disc, { clipPath: `circle(0px at ${at.x}px ${at.y}px)` }, { clipPath: `circle(${radius(at)}px at ${at.x}px ${at.y}px)`, duration: 0.8, ease: ease.inOut }, 0);
    return labelIn(tl, parts(c).label, text, 0.5);
  },
  enter: (c) => {
    const disc = parts(c).fx.firstElementChild;
    const mid = { x: innerWidth / 2, y: innerHeight / 2 };
    const tl = labelOut(gsap.timeline(), parts(c).label).fromTo(
      disc,
      { clipPath: `circle(${radius(mid)}px at ${mid.x}px ${mid.y}px)` },
      { clipPath: `circle(0px at ${mid.x}px ${mid.y}px)`, duration: 0.75, ease: ease.inOut },
      0.1,
    );
    return done(tl, c);
  },
};

const slash: Transition = {
  leave: (c, text = '') => {
    const [panel] = pieces(c, 'slash', 1, { top: '-10%', bottom: '-10%', left: '-40vw', width: '180vw', background: 'var(--blue)', opacity: '0.92' });
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(panel, { xPercent: -100, skewX: -20 }, { xPercent: 0, duration: 0.8, ease: ease.inOut }, 0);
    return labelIn(tl, parts(c).label, text, 0.55);
  },
  enter: (c) => {
    const panel = parts(c).fx.firstElementChild;
    const tl = labelOut(gsap.timeline(), parts(c).label).to(panel, { xPercent: 100, duration: 0.8, ease: ease.inOut }, 0.1);
    return done(tl, c);
  },
};

const COLS = 5;
const ROWS = 4;
const tiles: Transition = {
  leave: (c, text = '') => {
    const t = pieces(c, 'tiles', COLS * ROWS, { background: 'var(--purple)', opacity: '0.9' });
    t.forEach((d, i) =>
      Object.assign(d.style, {
        left: `${(i % COLS) * (100 / COLS)}%`,
        top: `${Math.floor(i / COLS) * (100 / ROWS)}%`,
        width: `calc(${100 / COLS}% + 1px)`,
        height: `calc(${100 / ROWS}% + 1px)`,
      }),
    );
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(t, { scale: 0, rotate: 45 }, { scale: 1, rotate: 0, duration: 0.45, ease: ease.out, stagger: { each: 0.025, from: 'random' } }, 0);
    return labelIn(tl, parts(c).label, text, 0.55);
  },
  enter: (c) => {
    const t = parts(c).fx.children;
    const tl = labelOut(gsap.timeline(), parts(c).label).to(t, { scale: 0, rotate: -45, duration: 0.4, ease: 'power3.in', stagger: { each: 0.025, from: 'random' } }, 0.1);
    return done(tl, c);
  },
};

const diamond: Transition = {
  leave: (c, text = '') => {
    const side = Math.hypot(innerWidth, innerHeight) * 1.05;
    const [d] = pieces(c, 'diamond', 1, {
      left: '50%',
      top: '50%',
      width: `${side}px`,
      height: `${side}px`,
      marginLeft: `${-side / 2}px`,
      marginTop: `${-side / 2}px`,
      background: 'var(--acid)',
      opacity: '0.82',
      backdropFilter: 'blur(16px)',
    });
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(d, { scale: 0, rotate: -135 }, { scale: 1, rotate: 45, duration: 0.85, ease: ease.inOut }, 0);
    return labelIn(tl, parts(c).label, text, 0.55);
  },
  enter: (c) => {
    const d = parts(c).fx.firstElementChild;
    const tl = labelOut(gsap.timeline(), parts(c).label).to(d, { scale: 0, rotate: 225, duration: 0.8, ease: ease.inOut }, 0.1);
    return done(tl, c);
  },
};

const shutters: Transition = {
  leave: (c, text = '') => {
    const [top, bottom, line] = pieces(c, 'shutters', 3, { left: '0', right: '0', background: 'var(--ink)', opacity: '0.95' });
    Object.assign(top.style, { top: '0', height: 'calc(50% + 1px)' });
    Object.assign(bottom.style, { bottom: '0', height: 'calc(50% + 1px)' });
    Object.assign(line.style, { top: 'calc(50% - 3px)', height: '6px', background: 'var(--pink)', opacity: '1' });
    const tl = gsap
      .timeline()
      .set(c, { autoAlpha: 1 })
      .fromTo(top, { yPercent: -101 }, { yPercent: 0, duration: 0.7, ease: ease.inOut }, 0)
      .fromTo(bottom, { yPercent: 101 }, { yPercent: 0, duration: 0.7, ease: ease.inOut }, 0)
      .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: ease.out }, 0.5);
    return labelIn(tl, parts(c).label, text, 0.55);
  },
  enter: (c) => {
    const [top, bottom, line] = Array.from(parts(c).fx.children);
    const tl = labelOut(gsap.timeline(), parts(c).label)
      .to(line, { scaleX: 0, transformOrigin: '100% 50%', duration: 0.35, ease: ease.soft }, 0.05)
      .to(top, { yPercent: -101, duration: 0.8, ease: ease.inOut }, 0.15)
      .to(bottom, { yPercent: 101, duration: 0.8, ease: ease.inOut }, 0.15);
    return done(tl, c);
  },
};

const reduced: Transition = {
  leave: (c) => {
    const { l, r, fx } = parts(c);
    fx.replaceChildren();
    return gsap.timeline().set([l, r], { xPercent: 0 }).set(c, { autoAlpha: 1 }).fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  },
  enter: (c) => gsap.to(c, { autoAlpha: 0, duration: 0.2 }),
};

const ROUTES: [string, Transition][] = [
  ['/work', blinds],
  ['/about', iris],
  ['/approach', slash],
  ['/learnings', tiles],
  ['/experimental', diamond],
  ['/contact', shutters],
];
const forRoute = (to = '/') => ROUTES.find(([p]) => to === p || to.startsWith(p + '/'))?.[1] ?? seam;

let override: Transition | null = null;
export const setTransition = (t: Transition) => {
  override = t;
};
let active: Transition = seam;
const curtain = () => document.getElementById('curtain') as HTMLElement;

export const playLeave = (label?: string, to?: string, at?: Point) => {
  active = prefersReducedMotion() ? reduced : override ?? forRoute(to);
  return Promise.resolve(active.leave(curtain(), label, at));
};
export const playEnter = () => Promise.resolve(active.enter(curtain()));
