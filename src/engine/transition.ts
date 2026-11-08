// Page transitions: a deck of 22 covers. Every navigation deals a random one that wasn't used in
// the last few, with a random colour pair, opacity and label colours, so two page changes in a
// row never look the same. Adapters run leave() while the next route renders, then enter()
// reveals it. Each variant builds its own pieces inside .curtain__fx and returns a cover
// timeline plus a reveal() factory.
import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

export type Point = { x: number; y: number };
export type Transition = {
  leave: (curtain: HTMLElement, label?: string, at?: Point) => Promise<unknown> | gsap.core.Animation;
  enter: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
};

type Ctx = { fx: HTMLElement; a: string; b: string; alpha: number; glass: string; at: Point; w: number; h: number; label: string };
type Built = { cover: gsap.core.Timeline; reveal: () => gsap.core.Timeline };
type Variant = { name: string; glassy?: boolean; build: (x: Ctx) => Built };

const COLORS = ['ink', 'pink', 'blue', 'yellow', 'acid', 'purple'] as const;
const DARK = new Set(['ink', 'blue']);
const v = (name: string) => `var(--${name})`;
const rand = <T,>(list: readonly T[]) => list[Math.floor(Math.random() * list.length)];
const tl = () => gsap.timeline();

/** An absolutely positioned piece, coloured `a` at the dealt opacity unless css overrides it. */
function el(x: Ctx, css: Partial<CSSStyleDeclaration> = {}, parent: HTMLElement = x.fx) {
  const d = document.createElement('div');
  d.className = 'curtain__piece';
  Object.assign(d.style, { background: x.a, opacity: String(x.alpha) }, css);
  parent.appendChild(d);
  return d;
}
const many = (x: Ctx, n: number, css: (i: number) => Partial<CSSStyleDeclaration>, parent?: HTMLElement) =>
  Array.from({ length: n }, (_, i) => el(x, css(i), parent));
const full = (x: Ctx, css: Partial<CSSStyleDeclaration> = {}) => el(x, { inset: '0', backdropFilter: x.glass, ...css });
const reach = (p: Point, w: number, h: number) => Math.hypot(Math.max(p.x, w - p.x), Math.max(p.y, h - p.y)) + 4;
const pct = (n: number) => `${n}%`;

/** A pie wedge of the screen from angle a0 to a1 (radians, 0 = 12 o'clock), as a clip-path. */
function wedge(x: Ctx, a0: number, a1: number) {
  const cx = x.w / 2;
  const cy = x.h / 2;
  const r = Math.hypot(cx, cy) + 8;
  const steps = Math.max(2, Math.ceil(((a1 - a0) / (Math.PI * 2)) * 48));
  const pts = [`${cx}px ${cy}px`];
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps;
    pts.push(`${cx + r * Math.sin(a)}px ${cy - r * Math.cos(a)}px`);
  }
  return `polygon(${pts.join(',')})`;
}

const VARIANTS: Variant[] = [
  {
    name: 'seam',
    build: (x) => {
      const l = el(x, { left: '0', top: '0', bottom: '0', width: 'calc(50% + 1px)' });
      const r = el(x, { right: '0', top: '0', bottom: '0', width: 'calc(50% + 1px)' });
      const s = el(x, { left: 'calc(50% - 3px)', width: '6px', top: '0', bottom: '0', background: x.b, opacity: '1', transformOrigin: '50% 0%' });
      return {
        cover: tl()
          .fromTo(l, { xPercent: -101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
          .fromTo(r, { xPercent: 101 }, { xPercent: 0, duration: 0.75, ease: ease.inOut }, 0)
          .fromTo(s, { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: ease.out }, 0.55),
        reveal: () =>
          tl()
            .to(s, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.35, ease: ease.soft }, 0)
            .to(l, { xPercent: -101, duration: 0.85, ease: ease.inOut }, 0.1)
            .to(r, { xPercent: 101, duration: 0.85, ease: ease.inOut }, 0.1),
      };
    },
  },
  {
    name: 'shutters',
    build: (x) => {
      const t = el(x, { left: '0', right: '0', top: '0', height: 'calc(50% + 1px)' });
      const b = el(x, { left: '0', right: '0', bottom: '0', height: 'calc(50% + 1px)' });
      const s = el(x, { left: '0', right: '0', top: 'calc(50% - 3px)', height: '6px', background: x.b, opacity: '1', transformOrigin: '0% 50%' });
      return {
        cover: tl()
          .fromTo(t, { yPercent: -101 }, { yPercent: 0, duration: 0.7, ease: ease.inOut }, 0)
          .fromTo(b, { yPercent: 101 }, { yPercent: 0, duration: 0.7, ease: ease.inOut }, 0)
          .fromTo(s, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: ease.out }, 0.5),
        reveal: () =>
          tl()
            .to(s, { scaleX: 0, transformOrigin: '100% 50%', duration: 0.35, ease: ease.soft }, 0)
            .to(t, { yPercent: -101, duration: 0.8, ease: ease.inOut }, 0.1)
            .to(b, { yPercent: 101, duration: 0.8, ease: ease.inOut }, 0.1),
      };
    },
  },
  {
    name: 'blinds',
    build: (x) => {
      const n = 6;
      const cols = many(x, n, (i) => ({ top: '0', bottom: '0', left: pct((i * 100) / n), width: `calc(${100 / n}% + 1px)`, background: i % 2 ? x.b : x.a }));
      return {
        cover: tl().fromTo(cols, { yPercent: -101 }, { yPercent: 0, duration: 0.6, ease: ease.inOut, stagger: 0.06 }),
        reveal: () => tl().to(cols, { yPercent: 101, duration: 0.65, ease: ease.inOut, stagger: 0.06 }),
      };
    },
  },
  {
    name: 'zipper',
    build: (x) => {
      const n = 7;
      const rows = many(x, n, (i) => ({ left: '0', right: '0', top: pct((i * 100) / n), height: `calc(${100 / n}% + 1px)` }));
      const side = (i: number) => (i % 2 ? 101 : -101);
      return {
        cover: tl().fromTo(rows, { xPercent: (i) => side(i) }, { xPercent: 0, duration: 0.6, ease: ease.inOut, stagger: 0.05 }),
        reveal: () => tl().to(rows, { xPercent: (i) => -side(i), duration: 0.6, ease: ease.inOut, stagger: 0.05 }),
      };
    },
  },
  {
    name: 'iris',
    glassy: true,
    build: (x) => {
      const d = full(x);
      const R = reach(x.at, x.w, x.h);
      const c = `${x.w / 2}px ${x.h / 2}px`;
      return {
        cover: tl().fromTo(d, { clipPath: `circle(0px at ${x.at.x}px ${x.at.y}px)` }, { clipPath: `circle(${R}px at ${x.at.x}px ${x.at.y}px)`, duration: 0.8, ease: ease.inOut }),
        reveal: () => tl().fromTo(d, { clipPath: `circle(${Math.hypot(x.w, x.h) / 2 + 4}px at ${c})` }, { clipPath: `circle(0px at ${c})`, duration: 0.75, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'slash',
    glassy: true,
    build: (x) => {
      const p = el(x, { top: '-10%', bottom: '-10%', left: '-40vw', width: '180vw', backdropFilter: x.glass });
      return {
        cover: tl().fromTo(p, { xPercent: -100, skewX: -20 }, { xPercent: 0, duration: 0.8, ease: ease.inOut }),
        reveal: () => tl().to(p, { xPercent: 100, duration: 0.8, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'tiles',
    build: (x) => {
      const C = 5;
      const R = 4;
      const t = many(x, C * R, (i) => ({
        left: pct((i % C) * (100 / C)),
        top: pct(Math.floor(i / C) * (100 / R)),
        width: `calc(${100 / C}% + 1px)`,
        height: `calc(${100 / R}% + 1px)`,
      }));
      return {
        cover: tl().fromTo(t, { scale: 0, rotate: 45 }, { scale: 1, rotate: 0, duration: 0.45, ease: ease.out, stagger: { each: 0.025, from: 'random' } }),
        reveal: () => tl().to(t, { scale: 0, rotate: -45, duration: 0.4, ease: 'power3.in', stagger: { each: 0.025, from: 'random' } }),
      };
    },
  },
  {
    name: 'diamond',
    glassy: true,
    build: (x) => {
      const s = Math.hypot(x.w, x.h) * 1.05;
      const d = el(x, { left: '50%', top: '50%', width: `${s}px`, height: `${s}px`, marginLeft: `${-s / 2}px`, marginTop: `${-s / 2}px`, backdropFilter: x.glass });
      return {
        cover: tl().fromTo(d, { scale: 0, rotate: -135 }, { scale: 1, rotate: 45, duration: 0.85, ease: ease.inOut }),
        reveal: () => tl().to(d, { scale: 0, rotate: 225, duration: 0.8, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'double-wipe',
    build: (x) => {
      const under = el(x, { inset: '0', background: x.b, opacity: '1' });
      const over = el(x, { inset: '0' });
      return {
        cover: tl()
          .fromTo(under, { yPercent: 101 }, { yPercent: 0, duration: 0.6, ease: ease.inOut }, 0)
          .fromTo(over, { yPercent: 101 }, { yPercent: 0, duration: 0.6, ease: ease.inOut }, 0.14),
        reveal: () =>
          tl()
            .to(over, { yPercent: -101, duration: 0.6, ease: ease.inOut }, 0)
            .to(under, { yPercent: -101, duration: 0.6, ease: ease.inOut }, 0.14),
      };
    },
  },
  {
    name: 'corner',
    glassy: true,
    build: (x) => {
      const d = full(x);
      return {
        cover: tl().fromTo(d, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%)' }, { clipPath: 'polygon(0% 0%, 210% 0%, 0% 210%)', duration: 0.75, ease: ease.inOut }),
        reveal: () =>
          tl().fromTo(d, { clipPath: 'polygon(100% -110%, 100% 100%, -110% 100%)' }, { clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%)', duration: 0.75, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'stripes',
    build: (x) => {
      const S = Math.hypot(x.w, x.h) * 1.15;
      const wrap = el(x, { left: '50%', top: '50%', width: `${S}px`, height: `${S}px`, marginLeft: `${-S / 2}px`, marginTop: `${-S / 2}px`, background: 'none', opacity: '1', transform: 'rotate(-28deg)' });
      const n = 8;
      const bars = many(x, n, (i) => ({ left: '0', right: '0', top: pct((i * 100) / n), height: `calc(${100 / n}% + 2px)`, background: i % 2 ? x.b : x.a }), wrap);
      return {
        cover: tl().fromTo(bars, { xPercent: (i) => (i % 2 ? 101 : -101) }, { xPercent: 0, duration: 0.6, ease: ease.inOut, stagger: 0.045 }),
        reveal: () => tl().to(bars, { xPercent: (i) => (i % 2 ? -101 : 101), duration: 0.6, ease: ease.inOut, stagger: 0.045 }),
      };
    },
  },
  {
    name: 'quadrants',
    build: (x) => {
      const q = many(x, 4, (i) => ({ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)', left: i % 2 ? '50%' : '0', top: i > 1 ? '50%' : '0', background: i === 1 || i === 2 ? x.b : x.a }));
      const from = (i: number) => ({ xPercent: i % 2 ? 101 : -101, yPercent: i > 1 ? 101 : -101 });
      return {
        cover: tl().fromTo(q, { xPercent: (i) => from(i).xPercent, yPercent: (i) => from(i).yPercent }, { xPercent: 0, yPercent: 0, duration: 0.7, ease: ease.inOut, stagger: 0.06 }),
        reveal: () => tl().to(q, { xPercent: (i) => from(i).xPercent, yPercent: (i) => from(i).yPercent, duration: 0.7, ease: ease.inOut, stagger: 0.06 }),
      };
    },
  },
  {
    name: 'rings',
    build: (x) => {
      const D = reach(x.at, x.w, x.h) * 2;
      const rings = many(x, 4, (i) => ({
        left: `${x.at.x - D / 2}px`,
        top: `${x.at.y - D / 2}px`,
        width: `${D}px`,
        height: `${D}px`,
        borderRadius: '50%',
        background: i % 2 ? x.b : x.a,
      }));
      return {
        cover: tl().fromTo(rings, { scale: 0 }, { scale: 1, duration: 0.7, ease: ease.inOut, stagger: 0.08 }),
        reveal: () => tl().to(rings, { scale: 0, duration: 0.6, ease: ease.inOut, stagger: { each: 0.08, from: 'end' } }),
      };
    },
  },
  {
    name: 'tunnel',
    build: (x) => {
      const s = Math.hypot(x.w, x.h) * 1.05;
      const sq = many(x, 4, (i) => ({ left: '50%', top: '50%', width: `${s}px`, height: `${s}px`, marginLeft: `${-s / 2}px`, marginTop: `${-s / 2}px`, background: i % 2 ? x.b : x.a }));
      return {
        cover: tl().fromTo(sq, { scale: 0, rotate: 90 }, { scale: 1, rotate: 0, duration: 0.7, ease: ease.inOut, stagger: 0.09 }),
        reveal: () => tl().to(sq, { scale: 0, rotate: -90, duration: 0.6, ease: ease.inOut, stagger: { each: 0.09, from: 'end' } }),
      };
    },
  },
  {
    name: 'starburst',
    glassy: true,
    build: (x) => {
      const spikes = 14;
      const pts = Array.from({ length: spikes * 2 }, (_, i) => {
        const a = (Math.PI * i) / spikes;
        const r = i % 2 ? 39 : 50;
        return `${50 + r * Math.sin(a)}% ${50 - r * Math.cos(a)}%`;
      }).join(',');
      const S = (reach(x.at, x.w, x.h) * 2) / 0.76;
      const d = el(x, { left: `${x.at.x - S / 2}px`, top: `${x.at.y - S / 2}px`, width: `${S}px`, height: `${S}px`, clipPath: `polygon(${pts})`, backdropFilter: x.glass });
      return {
        cover: tl().fromTo(d, { scale: 0, rotate: -40 }, { scale: 1, rotate: 0, duration: 0.75, ease: ease.inOut }),
        reveal: () => tl().to(d, { scale: 0, rotate: 40, duration: 0.65, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'pixels',
    build: (x) => {
      const C = 10;
      const R = 6;
      const px = many(x, C * R, (i) => ({
        left: pct((i % C) * (100 / C)),
        top: pct(Math.floor(i / C) * (100 / R)),
        width: `calc(${100 / C}% + 1px)`,
        height: `calc(${100 / R}% + 1px)`,
        opacity: '0',
        background: Math.random() < 0.18 ? x.b : x.a,
      }));
      return {
        cover: tl().to(px, { opacity: x.alpha, duration: 0.18, ease: 'none', stagger: { each: 0.011, from: 'random' } }),
        reveal: () => tl().to(px, { opacity: 0, duration: 0.18, ease: 'none', stagger: { each: 0.011, from: 'random' } }),
      };
    },
  },
  {
    name: 'drop',
    glassy: true,
    build: (x) => {
      const p = full(x);
      return {
        cover: tl().fromTo(p, { yPercent: -101 }, { yPercent: 0, duration: 0.9, ease: 'bounce.out' }),
        reveal: () => tl().to(p, { yPercent: -101, duration: 0.7, ease: ease.inOut }),
      };
    },
  },
  {
    name: 'bars',
    build: (x) => {
      const n = 8;
      const bars = many(x, n, (i) => ({ left: '0', right: '0', top: pct((i * 100) / n), height: `calc(${100 / n}% + 1px)`, background: i % 3 === 1 ? x.b : x.a }));
      return {
        cover: tl().fromTo(bars, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: ease.inOut, stagger: { each: 0.05, from: 'center' } }),
        reveal: () =>
          tl().to(bars, { scaleX: 0, transformOrigin: (i) => (i % 2 ? '0% 50%' : '100% 50%'), duration: 0.5, ease: ease.inOut, stagger: { each: 0.05, from: 'edges' } }),
      };
    },
  },
  {
    name: 'clock',
    glassy: true,
    build: (x) => {
      const d = full(x, { clipPath: wedge(x, 0, 0.001) });
      const T = Math.PI * 2;
      const p = { v: 0 };
      return {
        cover: tl().to(p, { v: 1, duration: 0.75, ease: ease.inOut, onUpdate: () => void (d.style.clipPath = wedge(x, 0, Math.max(0.001, p.v * T))) }),
        reveal: () => tl().to(p, { v: 0, duration: 0.7, ease: ease.inOut, onUpdate: () => void (d.style.clipPath = wedge(x, (1 - p.v) * T, T)) }),
      };
    },
  },
  {
    name: 'glitch',
    build: (x) => {
      const n = 12;
      const sl = many(x, n, (i) => ({ left: '0', right: '0', top: pct((i * 100) / n), height: `calc(${100 / n}% + 1px)`, background: i % 2 ? x.b : x.a }));
      return {
        cover: tl().fromTo(sl, { xPercent: () => (Math.random() < 0.5 ? -101 : 101) }, { xPercent: 0, duration: 0.35, ease: 'power4.out', stagger: { each: 0.03, from: 'random' } }),
        reveal: () => tl().to(sl, { xPercent: () => (Math.random() < 0.5 ? -101 : 101), duration: 0.35, ease: 'power4.in', stagger: { each: 0.03, from: 'random' } }),
      };
    },
  },
  {
    name: 'marquee',
    build: (x) => {
      const bg = full(x, { opacity: '0' });
      const word = (x.label || 'Jai Samyukth').toUpperCase();
      const rows = many(x, 5, (i) => ({
        left: '-50%',
        width: '200%',
        top: pct(i * 20),
        height: '20%',
        background: 'none',
        opacity: '1',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'var(--f-display)',
        fontWeight: '700',
        fontSize: `${x.h * 0.17}px`,
        lineHeight: '1',
        color: i % 2 ? x.b : 'transparent',
        webkitTextStroke: `3px ${x.b}`,
      }));
      rows.forEach((r) => (r.textContent = Array(6).fill(word).join('  ✦  ')));
      return {
        cover: tl()
          .to(bg, { opacity: x.alpha, duration: 0.35, ease: ease.soft }, 0)
          .fromTo(rows, { xPercent: (i) => (i % 2 ? -12 : 12), autoAlpha: 0 }, { xPercent: (i) => (i % 2 ? 0 : -6), autoAlpha: 1, duration: 0.9, ease: ease.out, stagger: 0.05 }, 0),
        reveal: () =>
          tl()
            .to(rows, { xPercent: (i) => (i % 2 ? 10 : -16), autoAlpha: 0, duration: 0.5, ease: ease.soft, stagger: 0.04 }, 0)
            .to(bg, { opacity: 0, duration: 0.45, ease: ease.soft }, 0.15),
      };
    },
  },
  {
    name: 'dots',
    build: (x) => {
      const C = 8;
      const R = 5;
      const cw = x.w / C;
      const ch = x.h / R;
      const D = Math.hypot(cw, ch) * 1.05;
      const dots = many(x, C * R, (i) => ({
        left: `${(i % C) * cw + cw / 2 - D / 2}px`,
        top: `${Math.floor(i / C) * ch + ch / 2 - D / 2}px`,
        width: `${D}px`,
        height: `${D}px`,
        borderRadius: '50%',
      }));
      return {
        cover: tl().fromTo(dots, { scale: 0 }, { scale: 1, duration: 0.45, ease: ease.out, stagger: { each: 0.018, grid: [R, C], from: 'center' } }),
        reveal: () => tl().to(dots, { scale: 0, duration: 0.4, ease: 'power3.in', stagger: { each: 0.018, grid: [R, C], from: 'edges' } }),
      };
    },
  },
];

const parts = (c: HTMLElement) => ({
  l: c.querySelector<HTMLElement>('.curtain__half--l'),
  r: c.querySelector<HTMLElement>('.curtain__half--r'),
  seam: c.querySelector<HTMLElement>('.curtain__seam'),
  label: c.querySelector<HTMLElement>('.curtain__label'),
  fx: c.querySelector<HTMLElement>('.curtain__fx')!,
});

const recent: string[] = [];
function deal(): Variant {
  const pool = VARIANTS.filter((x) => !recent.includes(x.name));
  const pick = rand(pool);
  recent.push(pick.name);
  if (recent.length > 4) recent.shift();
  return pick;
}

let reveal: (() => gsap.core.Timeline) | null = null;

const deck: Transition = {
  leave: (c, text = '', at) => {
    const { l, r, seam, label, fx } = parts(c);
    gsap.set(l, { xPercent: -101 });
    gsap.set(r, { xPercent: 101 });
    gsap.set(seam, { scaleY: 0 });
    fx.replaceChildren();
    const variant = deal();
    const a = rand(COLORS);
    const b = rand(COLORS.filter((k) => k !== a));
    const lbg = rand(COLORS.filter((k) => k !== a && k !== b));
    const alpha = rand([1, 0.95, 0.9, 0.85]);
    c.dataset.fx = variant.name;
    c.style.setProperty('--fx-lbg', v(lbg));
    c.style.setProperty('--fx-lfg', DARK.has(lbg) ? v('paper') : v('ink'));
    c.style.setProperty('--fx-lsh', lbg === 'ink' ? v(a === 'ink' ? 'acid' : a) : v('ink'));
    const w = innerWidth;
    const h = innerHeight;
    const built = variant.build({
      fx,
      a: v(a),
      b: v(b),
      alpha,
      glass: variant.glassy && alpha < 1 ? 'blur(14px)' : 'none',
      at: at ?? { x: w / 2, y: h / 2 },
      w,
      h,
      label: text,
    });
    reveal = built.reveal;
    if (label) label.textContent = text;
    const show = Math.max(0.3, built.cover.duration() - 0.3);
    return tl()
      .set(c, { autoAlpha: 1 })
      .set(label, { autoAlpha: 0, yPercent: 60 }, 0)
      .add(built.cover, 0)
      .to(label, { autoAlpha: 1, yPercent: 0, duration: 0.4, ease: ease.out }, show);
  },
  enter: (c) => {
    const { label, fx } = parts(c);
    const t = tl().to(label, { autoAlpha: 0, yPercent: -60, duration: 0.3, ease: ease.soft }, 0);
    if (reveal) t.add(reveal(), 0.1);
    reveal = null;
    return t.set(c, { autoAlpha: 0 }).add(() => {
      fx.replaceChildren();
      delete c.dataset.fx;
    });
  },
};

const reduced: Transition = {
  leave: (c) => {
    const { l, r, fx } = parts(c);
    fx.replaceChildren();
    return tl().set([l, r], { xPercent: 0 }).set(c, { autoAlpha: 1 }).fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  },
  enter: (c) => gsap.to(c, { autoAlpha: 0, duration: 0.2 }),
};

let override: Transition | null = null;
export const setTransition = (t: Transition) => {
  override = t;
};
let active: Transition = deck;
const curtain = () => document.getElementById('curtain') as HTMLElement;

export const playLeave = (label?: string, _to?: string, at?: Point) => {
  active = prefersReducedMotion() ? reduced : override ?? deck;
  return Promise.resolve(active.leave(curtain(), label, at));
};
export const playEnter = () => Promise.resolve(active.enter(curtain()));
/** For QA: the names of every transition in the deck. */
export const transitionNames = VARIANTS.map((x) => x.name);
