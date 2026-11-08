// Vite + React Router adapter. Render <Engine setup={…} /> once, as the LAST child of the app
// shell (child effects run first, so page components register before the engine boots).
// Internal links get leave → navigate → enter. Back/forward re-inits without the curtain.
// Opt a link out with data-no-transition.
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { boot, cleanup, enter, leave, onPage, type PageFn } from './index';

export function Engine({ setup }: { setup?: () => void }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const mode = useRef<'idle' | 'push' | 'pop'>('idle');
  const first = useRef(true);

  useEffect(() => {
    void boot(setup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download') || a.hasAttribute('data-no-transition')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (/\.(txt|xml|png|webp|svg)$/.test(url.pathname)) return; // static files, not routes
      e.preventDefault(); // React Router's <Link> sees defaultPrevented and stands down
      if (mode.current !== 'idle') return;
      mode.current = 'push';
      const label = a.dataset.label || a.getAttribute('aria-label') || a.textContent?.trim() || '';
      const at = e.detail > 0 ? { x: e.clientX, y: e.clientY } : undefined; // keyboard clicks report 0,0
      await leave(label.length > 40 ? '' : label, url.pathname, at);
      cleanup();
      navigate(url.pathname + url.search + url.hash);
    };
    const onPop = () => {
      mode.current = 'pop';
      cleanup();
    };
    document.addEventListener('click', onClick, true);
    addEventListener('popstate', onPop);
    return () => {
      document.removeEventListener('click', onClick, true);
      removeEventListener('popstate', onPop);
    };
  }, [navigate]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const pop = mode.current === 'pop';
    mode.current = 'idle';
    void enter({ transition: !pop, scrollTop: !pop });
  }, [pathname]);

  return null;
}

/** Component-level page code: runs when the page is ready, reverted on leave. */
export function usePage(fn: PageFn) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onPage(fn), []);
}
