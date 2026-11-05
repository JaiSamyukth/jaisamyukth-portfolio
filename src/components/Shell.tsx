import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, org, person, socials } from '../data/site';
import { applyMeta, getMeta } from '../lib/seo';
import { Engine } from '../engine/react';
import { startScroll, stopScroll } from '../engine';
import { setupMotion } from '../motion/setup';
import { LocalTime } from './Bits';

const primary = nav.filter((n) => ['/work', '/about', '/contact'].includes(n.path));
const allPages = [{ label: 'Home', path: '/', hint: 'Start here' }, ...nav, { label: 'The name', path: '/name', hint: 'How to say it' }];

function Frame() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const h = document.documentElement.classList;
    h.toggle('menu-open', open);
    if (open) {
      stopScroll();
      panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    } else {
      startScroll();
    }
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
        <Link to="/" className="frame__name draw" data-label="Home" aria-label={`${person.name}, home`}>
          Jai Samyukth
        </Link>
        <nav className="frame__nav" aria-label="Primary">
          <ul>
            {primary.map((n) => (
              <li key={n.path}>
                <NavLink to={n.path} className="draw" end={n.path !== '/work'}>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button ref={btn} type="button" className="frame__menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <div id="menu" ref={panel} className={`menu night${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open || undefined}>
        <nav aria-label="All pages">
          <ul className="menu__list">
            {allPages.map((n) => (
              <li key={n.path}>
                <NavLink to={n.path} end>
                  <span className="t-xl">{n.label}</span>
                  <span className="label">{n.hint}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="t-xs muted">
          {person.email} · {person.location.city}
        </p>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer night">
      <div className="wrap">
        <p className="label">Have something that needs building?</p>
        <a href={`mailto:${person.email}`} className="footer__say" data-no-transition>
          <span className="t-mega">Say hi.</span>
        </a>
        <div className="footer__cols">
          <div>
            <p className="label">Email</p>
            <ul>
              <li>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label">Elsewhere</p>
            <ul>
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="me noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Pages</p>
            <ul>
              {allPages.slice(1).map((n) => (
                <li key={n.path}>
                  <Link to={n.path}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">
              {person.location.city}, <LocalTime />
            </p>
            <p className="footer__meaning" style={{ marginTop: '0.6rem' }}>
              Jai means victory. Samyukth means joined. Often heard as {person.misheard.slice(0, 2).join(' or ')}.{' '}
              <Link to="/name" className="link">
                How to say it
              </Link>
            </p>
          </div>
        </div>
        <div className="footer__base">
          <p>
            © {new Date().getFullYear()} {person.name}. Co-founder of{' '}
            <a href={org.url} target="_blank" rel="noopener" style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em' }}>
              Genrec AI
            </a>
            .
          </p>
          <p>Set in Archivo. Built with React, GSAP and Lenis. Hosted somewhere between Azure credits and stubborn optimism.</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => applyMeta(getMeta(pathname)), [pathname]);
  return (
    <>
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
    </>
  );
}
