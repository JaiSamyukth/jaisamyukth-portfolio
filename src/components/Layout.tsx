import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, person, socials } from '../data/site';
import { applyMeta, getMeta } from '../lib/seo';
import { Cursor, ScrollProgress, useRevealObserver } from './Motion';
import { Arrow, LocalTime } from './Bits';

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* mix-blend-difference keeps the bar legible over both paper and ink sections */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="wrap flex items-center justify-between gap-6 py-5">
          <Link to="/" className="group flex items-baseline gap-2 font-semibold tracking-tight" aria-label={`${person.name} — home`}>
            <span className="text-lg">Jai Samyukth</span>
            <span className="eyebrow hidden opacity-60 sm:inline">B U ©{new Date().getFullYear()}</span>
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item, i) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `eyebrow link py-1 ${isActive || (item.path === '/work' && pathname.startsWith('/work')) ? 'opacity-100 [background-size:100%_1px]' : 'opacity-70 hover:opacity-100'}`
                    }
                  >
                    <span className="opacity-50">0{i + 1}</span> {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <span className="eyebrow opacity-70">
              <LocalTime />
            </span>
          </div>
          <button
            type="button"
            className="eyebrow flex items-center gap-3 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-expo ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-expo ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`on-ink fixed inset-0 z-40 flex flex-col bg-ink text-paper transition-[clip-path] duration-700 ease-expo lg:hidden ${
          open ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <nav aria-label="Mobile" className="wrap mt-24 flex-1">
          <ul>
            {[{ label: 'Home', path: '/', hint: 'start here' }, ...nav].map((item, i) => (
              <li key={item.path} className="rule">
                <NavLink to={item.path} className="flex items-baseline justify-between py-4">
                  <span className="text-5xl font-semibold tracking-tight">{item.label}</span>
                  <span className="eyebrow text-muted-dark">
                    {String(i).padStart(2, '0')} · {item.hint}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap flex flex-wrap gap-x-5 gap-y-2 pb-10">
          {socials.slice(0, 4).map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="me noopener noreferrer" className="eyebrow link">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-ink relative overflow-hidden bg-ink text-paper">
      <div className="wrap pt-24 md:pt-32">
        <p className="eyebrow text-muted-dark">Have something that needs building?</p>
        <a
          href={`mailto:${person.email}?subject=Let%E2%80%99s%20build%20something`}
          className="group mt-6 block text-display font-semibold"
        >
          <span className="block">Tell me what</span>
          <span className="flex items-center gap-[0.2em]">
            <span>you’re</span>
            <span className="font-serif font-normal italic text-acid">building</span>
            <Arrow className="shrink-0 text-[0.7em] transition-transform duration-500 ease-expo group-hover:translate-x-4" />
          </span>
        </a>

        <div className="mt-20 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-muted-dark">Email</p>
            <a href={`mailto:${person.email}`} className="link mt-3 inline-block text-lg">
              {person.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted-dark">Elsewhere</p>
            <ul className="mt-3 space-y-1.5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="me noopener noreferrer" className="link">
                    {s.label} <span className="text-muted-dark">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-dark">Based in</p>
            <p className="mt-3">
              {person.location.city}, {person.location.country}
              <br />
              <LocalTime className="text-muted-dark" />
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-dark">Studio</p>
            <p className="mt-3">
              Co-founder,{' '}
              <a href="https://www.genrecai.com" target="_blank" rel="noopener" className="link">
                Genrec AI
              </a>
            </p>
          </div>
        </div>

        {/* Visible, honest name-variant line: helps people (and search engines) who only heard the name. */}
        <p className="mt-16 max-w-3xl text-sm text-muted-dark">
          Searched for {person.misheard.join(', ')}? You found
          him — it’s <Link to="/name" className="link text-paper">{person.name}</Link>, pronounced “{person.pronunciation}”.
        </p>
      </div>

      <div className="wrap mt-10 flex flex-col gap-2 border-t border-paper/15 py-6 text-xs text-muted-dark sm:flex-row sm:justify-between">
        <p>© {year} {person.name}. Hosted somewhere between Azure credits and stubborn optimism.</p>
        <p>
          <Link to="/name" className="link">How to say my name</Link> · <a href="/llms.txt" className="link">llms.txt</a> · <a href="/sitemap.xml" className="link">sitemap</a>
        </p>
      </div>

      <p aria-hidden="true" className="pointer-events-none select-none whitespace-nowrap text-center text-[19vw] font-semibold leading-[0.75] tracking-[-0.06em] text-paper/[0.06]">
        SAMYUKTH
      </p>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname, hash } = useLocation();
  useRevealObserver();

  useEffect(() => {
    applyMeta(getMeta(pathname));
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="grain flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded focus:bg-acid focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <ScrollProgress />
      <Cursor />
      <Header />
      <main id="main" key={pathname} className="page-enter flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
