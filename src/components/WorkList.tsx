import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Arrow, Shot } from './Bits';
import { Reveal } from './Motion';

/**
 * Index-style project list. On fine pointers a preview follows the cursor;
 * on touch screens the cover is shown inline instead.
 */
export function WorkList({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const H = `h${headingLevel}` as 'h2' | 'h3';

  useEffect(() => {
    const el = preview.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX + 28;
      y = e.clientY - el.offsetHeight / 2;
    };
    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      <ul className="border-b border-ink/20" onPointerLeave={() => setActive(null)}>
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 80} className="border-t border-ink/20">
            <Link
              to={`/work/${p.id}`}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-3 py-7 md:grid-cols-[4rem_1.4fr_1fr_auto_auto] md:gap-x-8 md:py-10"
            >
              <span className="eyebrow opacity-60">{String(i + 1).padStart(2, '0')}</span>
              <H className="text-title font-semibold transition-transform duration-700 ease-expo md:group-hover:translate-x-4">
                {p.title}
                <span className="sr-only"> — {p.category}</span>
              </H>
              <span className="col-span-full row-start-2 text-base opacity-70 md:col-span-1 md:row-auto" aria-hidden="true">
                {p.category}
              </span>
              <span className="chip hidden md:inline-flex">
                <span className={`h-1.5 w-1.5 rounded-full ${/live|deployed/i.test(p.status) ? 'live-dot bg-acid' : 'bg-current opacity-50'}`} />
                {p.status}
              </span>
              <span className="col-start-3 row-start-1 grid h-11 w-11 place-items-center rounded-full border border-ink/25 text-lg transition-colors duration-300 group-hover:border-transparent group-hover:bg-acid group-hover:text-ink md:col-start-auto md:row-start-auto">
                <Arrow diagonal />
              </span>
              {p.cover ? (
                <span className="col-span-full mt-2 block overflow-hidden rounded-md md:hidden">
                  <Shot shot={p.cover} sizes="100vw" className="w-full" />
                </span>
              ) : null}
            </Link>
          </Reveal>
        ))}
      </ul>

      <div ref={preview} aria-hidden="true" className={`preview hidden bg-ink md:block ${active !== null ? 'is-on' : ''}`}>
        {projects.map((p, i) =>
          p.cover ? (
            <img
              key={p.id}
              src={p.cover.small}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : (
            <div
              key={p.id}
              className={`absolute inset-0 flex flex-col justify-between bg-acid p-6 text-ink transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="eyebrow">{p.kind} · {p.status}</span>
              <span className="text-4xl font-semibold leading-none tracking-tight">{p.focus}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
