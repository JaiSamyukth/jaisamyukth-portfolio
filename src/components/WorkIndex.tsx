import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { projects } from '../data/projects';
import { usePage } from '../engine/react';
import { isTouch, onScroll } from '../engine';
import { Shot } from './Bits';

/** Index list. Desktop: a preview follows the pointer. Touch: the cover sits inline. */
export function WorkIndex({ level = 3 }: { level?: 2 | 3 }) {
  const box = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const H = `h${level}` as 'h2' | 'h3';

  usePage(() => {
    const b = box.current;
    const ul = list.current;
    if (!b || !ul || isTouch()) return;
    const x = gsap.quickTo(b, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(b, 'y', { duration: 0.6, ease: 'power3.out' });
    const rot = gsap.quickTo(b, 'rotate', { duration: 0.8, ease: 'power3.out' });
    let lastX = 0, px = 0, py = 0;
    const move = (e: PointerEvent) => {
      px = e.clientX; py = e.clientY;
      x(px); y(py);
      rot(gsap.utils.clamp(-8, 8, (px - lastX) * 0.4));
      lastX = px;
    };
    const show = (i: number) => {
      b.querySelectorAll('[data-slide]').forEach((s, j) => s.classList.toggle('is-on', i === j));
      gsap.to(b, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'expo.out' });
    };
    const hide = () => gsap.to(b, { autoAlpha: 0, scale: 0.88, duration: 0.4, ease: 'expo.out' });
    const links = [...ul.querySelectorAll<HTMLAnchorElement>('a')];
    const enters = links.map((a, i) => () => show(i));
    links.forEach((a, i) => a.addEventListener('pointerenter', enters[i]));
    ul.addEventListener('pointerleave', hide);
    addEventListener('pointermove', move, { passive: true });
    const offScroll = onScroll(() => {
      if (!ul.contains(document.elementFromPoint(px, py))) hide();
    });
    gsap.set(b, { scale: 0.88 });
    return () => {
      links.forEach((a, i) => a.removeEventListener('pointerenter', enters[i]));
      ul.removeEventListener('pointerleave', hide);
      removeEventListener('pointermove', move);
      offScroll();
    };
  });

  return (
    <>
      <ul className="index__list" ref={list}>
        {projects.map((p, i) => (
          <li key={p.id} className="index__row" data-reveal="up" data-delay={String(i * 0.06)}>
            <Link to={`/work/${p.id}`} className="index__link" data-label={p.title}>
              <H className="index__title">{p.title}</H>
              <span className="index__joins">
                {p.joins.from} into {p.joins.to.toLowerCase()}. {p.category}.
              </span>
              <span className="index__status">
                <i className={/live|deployed/i.test(p.status) ? 'is-live' : ''} aria-hidden="true" />
                {p.status} · {p.year}
              </span>
              <span className="index__go" aria-hidden="true">
                <span className="arrow">→</span>
              </span>
              {p.cover ? (
                <span className="index__thumb">
                  <Shot shot={p.cover} sizes="100vw" />
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
      <div className="preview" ref={box} aria-hidden="true">
        {projects.map((p) =>
          p.cover ? (
            <img key={p.id} data-slide src={p.cover.small} width={960} height={Math.round((960 * p.cover.height) / p.cover.width)} alt="" loading="lazy" decoding="async" />
          ) : (
            <div key={p.id} data-slide className="preview__fact">
              <span className="t-l">
                {p.joins.from}
                <br />
                into {p.joins.to.toLowerCase()}
              </span>
            </div>
          ),
        )}
      </div>
    </>
  );
}
