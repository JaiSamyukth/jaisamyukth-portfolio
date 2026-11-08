import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, org, person, socials } from '../data/site';
import { applyMeta, getMeta } from '../lib/seo';
import { Engine } from '../engine/react';
import { startScroll, stopScroll } from '../engine';
import { setupMotion } from '../motion/setup';
import { LocalTime } from './Bits';
import ClickSpark from './rb/ClickSpark';
import Magnet from './rb/Magnet';
import CircularText from './rb/CircularText';

const BRAND = ['#ccff00', '#ff0099', '#2b59ff', '#fff500', '#b983ff'];

function Frame() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      stopScroll();
      panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    } else startScroll();
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
      if (e.key === 'Tab' && panel.current) {
        const items = [btn.current!, ...panel.current.querySelectorAll<HTMLElement>('a')];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
        else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
      }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="frame">
        <div className="frame__in wrap">
          <Link to="/" className="frame__name" data-label="Home" aria-label={`${person.name}, home`}>
            Jai Samyukth
          </Link>
          <nav className="frame__nav" aria-label="Primary">
            <ul>
              {nav.map((n) => (
                <li key={n.path}>
                  <NavLink to={n.path} end={n.path !== '/work'} title={n.hint}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button ref={btn} type="button" className="frame__menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
      <div id="menu" ref={panel} className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open || undefined}>
        <nav aria-label="All pages">
          <ul className="menu__list">
            {[{ label: 'Home', path: '/', hint: 'start here' }, ...nav].map((n) => (
              <li key={n.path}>
                <NavLink to={n.path} end>
                  <span>{n.label}</span>
                  <span className="label muted">{n.hint}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div>
          <p className="label c-acid">Have something that needs building?</p>
          <Magnet magnetStrength={4} padding={80}>
            <a href={`mailto:${person.email}`} className="footer__say" data-no-transition>
              Say hi.
            </a>
          </Magnet>
          <p className="mono muted" style={{ marginTop: '1rem' }}>
            {person.email} · replies in under 24h · <LocalTime /> in {person.location.city}
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1.75rem', justifyItems: 'start' }}>
          <div aria-hidden="true">
            <CircularText text="AVAILABLE FOR CONTRACTS ✦ FIXING BROKEN CODE ✦ " spinDuration={18} size={150} fontSize={13} color="#ccff00" onHover="speedUp" />
          </div>
          <nav aria-label="Elsewhere" className="footer__links">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="me noopener noreferrer">
                {s.label}
              </a>
            ))}
            <a href={`mailto:${person.email}`} data-no-transition>
              Email
            </a>
          </nav>
        </div>
      </div>
      <div className="wrap footer__base">
        <p>
          © {new Date().getFullYear()} {person.name} · Co-founder,{' '}
          <a href={org.url} target="_blank" rel="noopener">
            Genrec AI
          </a>{' '}
          · <Link to="/name">Pronunciation</Link>
        </p>
        <p>Hosted somewhere between Azure credits and stubborn optimism.</p>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => applyMeta(getMeta(pathname)), [pathname]);
  return (
    <ClickSpark sparkColor={BRAND} sparkCount={10} sparkSize={12} sparkRadius={26} shape="line" duration={480}>
      <a className="skip-link" href="#main" data-no-transition>
        Skip to content
      </a>
      <div id="curtain" aria-hidden="true">
        <div className="curtain__half curtain__half--l" />
        <div className="curtain__half curtain__half--r" />
        <div className="curtain__seam" />
        <div className="curtain__label" />
      </div>
      <Frame />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Engine setup={setupMotion} />
    </ClickSpark>
  );
}
