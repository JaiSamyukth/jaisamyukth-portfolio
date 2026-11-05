import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import portrait960 from '../assets/portrait-960.webp';
import portrait1600 from '../assets/portrait-1600.webp';
import { person } from '../data/site';
import { usePage } from '../engine/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile, isTouch, onScroll, prefersReducedMotion } from '../engine';
import { Arrow, LocalTime } from './Bits';

const WORDS = ['Jai', 'Samyukth'];
const LATE = new Set(['1:3', '1:5']); // the y and the k: the letters people drop when they hear it
const CENTER = 5; // 11 letters, indices 0..10 (shared by both copies)

function Letters({ copy }: { copy?: boolean }) {
  let i = 0;
  return (
    <span className="name__row">
      {WORDS.map((w, wi) => (
        <React.Fragment key={w}>
          <span className="name__w">
            {Array.from(w).map((c, ci) => (
              <span
                key={ci}
                className="nl"
                data-i={i}
                data-late={LATE.has(`${wi}:${ci}`) || undefined}
                style={{ ['--o' as string]: ((i++ - CENTER) * 0.11).toFixed(2), ['--late' as string]: ci === 5 ? 1 : 0 }}
              >
                <span>{c}</span>
              </span>
            ))}
          </span>
          {wi === 0 ? (copy ? <span className="nl--space" /> : <> <span className="nl--space" /></>) : null}
        </React.Fragment>
      ))}
    </span>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  usePage(() => {
    const el = root.current;
    if (!el) return;
    const name = el.querySelector<HTMLElement>('.name')!;
    const photo = el.querySelector<HTMLElement>('.hero__photo')!;
    const h = document.documentElement.classList;

    // The paper-coloured copy of the name is cut exactly where the photo starts.
    const cut = () => {
      const n = name.getBoundingClientRect();
      const p = photo.getBoundingClientRect();
      name.style.setProperty('--cut', `${Math.max(0, ((p.left - n.left) / n.width) * 100)}%`);
    };
    cut();
    addEventListener('resize', cut);

    // The header reads ink on paper and paper on the photo while the hero is on screen.
    const heroEdge = () => (isMobile() ? photo.offsetHeight - 70 : innerHeight * 0.6);
    const offHero = onScroll(({ y }) => h.toggle('on-hero', y < heroEdge()));
    h.toggle('on-hero', scrollY < heroEdge());

    if (prefersReducedMotion()) {
      return () => {
        removeEventListener('resize', cut);
        offHero();
        h.remove('on-hero');
      };
    }

    // Idle: once joined, the letters breathe a pixel or two around their seams and lean with
    // the pointer. One clock (gsap.ticker), paused while the hero is off screen.
    const letters = gsap.utils.toArray<HTMLElement>('.nl', name).map((l) => ({
      k: Number(l.dataset.i) - CENTER,
      set: gsap.quickSetter(l, 'x', 'px') as (v: number) => void,
    }));
    let aim = 0;
    let lean = 0;
    const onMove = (e: PointerEvent) => {
      aim = e.clientX / innerWidth - 0.5;
    };
    if (!isTouch()) addEventListener('pointermove', onMove, { passive: true });
    const start = gsap.ticker.time + 1.7; // after the CSS intro has locked the name
    const tick = (t: number) => {
      if (t < start) return;
      lean += (aim - lean) * 0.06;
      const breathe = Math.sin((t - start) * 0.9) * 0.45;
      letters.forEach((l) => l.set(l.k * (breathe + lean * 2.2)));
    };
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (self.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick)),
    });
    if (st.isActive) gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      removeEventListener('pointermove', onMove);
      removeEventListener('resize', cut);
      offHero();
      h.remove('on-hero');
    };
  });

  return (
    <section className="hero" ref={root} aria-labelledby="hero-name">
      <div className="hero__grid grid wrap">
        <div className="hero__copy">
          <p className="hero__lede" data-split="lines" data-intro data-delay="0.35">
            Co-founder of Genrec AI. I build MVPs, internal tools and AI features for teams who are tired of doing things by hand.
          </p>
          <div className="hero__actions" data-reveal="up" data-intro data-delay="0.55">
            <Link to="/work" className="btn btn--solid" data-label="Work">
              <span>See the work</span>
              <Arrow />
            </Link>
            <Link to="/contact" className="btn btn--ghost" data-label="Contact">
              <span>Start a project</span>
            </Link>
          </div>
        </div>
        <figure className="hero__photo">
          <img
            src={portrait960}
            srcSet={`${portrait960} 960w, ${portrait1600} 1600w`}
            sizes="(max-width: 767px) 100vw, 50vw"
            width={960}
            height={1309}
            alt={`${person.name} at night under a violet street light, Coimbatore`}
            fetchPriority="high"
            decoding="async"
            data-parallax="0.05"
          />
        </figure>
      </div>

      <div className="name">
        <h1 id="hero-name" className="name__ink">
          <Letters />
          <span className="sr-only"> B U, systems builder and co-founder of Genrec AI</span>
        </h1>
        <div className="name__copy" aria-hidden="true">
          <Letters copy />
        </div>
      </div>

      <p className="hero__corner hero__corner--l">
        {person.location.city}, India · <LocalTime />
      </p>
      <p className="hero__corner hero__corner--r">Available for client work</p>
    </section>
  );
}
