import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Observes every [data-reveal] / .split element on the current page and adds
 * `is-in` once it enters the viewport. Content is visible without JS; the
 * hidden state only applies under `html.js` (see index.css).
 */
export function useRevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], .split'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

type RevealProps<T extends React.ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Reveal<T extends React.ElementType = 'div'>({ as, delay = 0, className, children, style, ...rest }: RevealProps<T>) {
  const Tag = (as ?? 'div') as React.ElementType;
  return (
    <Tag data-reveal="" className={className} style={{ ...(style as object), ['--d' as string]: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/** Masked character reveal. Screen readers get the plain text via aria-label. */
export function Split({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  let i = 0;
  return (
    <span className={`split ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((word, wi, arr) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {Array.from(word).map((c) => (
            <span key={i} className="ch" style={{ ['--i' as string]: i++ }}>
              <span>{c}</span>
            </span>
          ))}
          {wi < arr.length - 1 ? ' ' : null}
        </span>
      ))}
    </span>
  );
}

/**
 * Words light up as the block scrolls through the viewport.
 * Words wrapped in *asterisks* are highlighted in acid green.
 */
export function Scrub({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>('.w'));
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < lit));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const tokens = text.split(/\s+/);
  return (
    <p ref={ref} className={`scrub ${className}`}>
      {tokens.map((t, i) => {
        const hl = /^\*.*\*[.,!?]?$/.test(t);
        const word = t.replace(/\*/g, '');
        return (
          <React.Fragment key={i}>
            <span className={`w${hl ? ' hl' : ''}`}>{word}</span>{' '}
          </React.Fragment>
        );
      })}
    </p>
  );
}

export function Marquee({ items, speed = 40, className = '' }: { items: string[]; speed?: number; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6">{t}</span>
          <span aria-hidden="true" className="text-[0.6em]">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee-host overflow-hidden ${className}`}>
      <div className="marquee" style={{ ['--speed' as string]: `${speed}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current?.style.setProperty('--p', String(max > 0 ? window.scrollY / max : 0));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);
  return <div ref={ref} aria-hidden="true" className="scroll-progress fixed inset-x-0 top-0 z-[65] h-[3px] bg-acid" />;
}

/** Blend-mode dot that follows fine pointers and grows over interactive elements. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && !calm);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const el = ref.current!;
    let x = -100, y = -100, cx = -100, cy = -100, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.remove('is-hidden');
      const t = e.target as Element | null;
      el.classList.toggle('is-hover', !!t?.closest('a, button, [data-cursor]'));
    };
    const leave = () => el.classList.add('is-hidden');
    raf = requestAnimationFrame(loop);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [enabled]);
  return enabled ? <div ref={ref} className="cursor is-hidden" aria-hidden="true" /> : null;
}
