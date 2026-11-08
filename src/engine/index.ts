// Engine core: framework-agnostic page lifecycle. No DOM access at import time (SSR-safe).
//   boot(setup)        once, on first load: setup → page init → intro
//   leave() → cleanup() before the route swaps
//   enter()            after the new page is in the DOM: init → enter animation → intro
// Project code hooks in with onPage(fn): it runs inside a gsap.context, so its tweens and
// ScrollTriggers are reverted on navigation. Return a cleanup for anything else.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScroll, resetScroll, startScroll, stopScroll } from './scroll';
import { initReveals } from './reveal';
import { playEnter, playLeave, type Point } from './transition';
import { prefersReducedMotion } from './env';

export { onScroll, scrollState, scrollToTarget, stopScroll, startScroll } from './scroll';
export { setTransition } from './transition';
export { ease, isTouch, isMobile, prefersReducedMotion } from './env';

export type PageFn = (page: { intro: gsap.core.Timeline; path: string }) => void | (() => void);
const pageFns = new Set<PageFn>();
const cleanups: (() => void)[] = [];
let ctx: gsap.Context | null = null;
let intro: gsap.core.Timeline | null = null;
let ready = false;
let booted = false;

export function onPage(fn: PageFn) {
  pageFns.add(fn);
  if (ready) runPageFn(fn);
  return () => {
    pageFns.delete(fn);
  };
}

function runPageFn(fn: PageFn) {
  ctx?.add(() => {
    const c = fn({ intro: intro!, path: location.pathname });
    if (typeof c === 'function') cleanups.push(c);
  });
}

export function syncFlags() {
  const h = document.documentElement.classList;
  h.add('js', 'is-booted');
  h.toggle('motion', !prefersReducedMotion());
}

function initPage(first = false) {
  syncFlags();
  ctx = gsap.context(() => {
    intro = initReveals(document, { skipIntro: first });
  });
  ready = true;
  pageFns.forEach(runPageFn);
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export async function boot(setup?: () => void) {
  if (booted) return;
  booted = true;
  syncFlags();
  initScroll();
  setup?.();
  initPage(true);
  document.documentElement.classList.add('is-loaded');
  startScroll();
  intro?.play();
}

export async function leave(label?: string, to?: string, at?: Point) {
  stopScroll();
  await playLeave(label, to, at);
}

export function cleanup() {
  if (!ready) return;
  ready = false;
  cleanups.splice(0).forEach((c) => c());
  ctx?.revert();
  ctx = null;
}

export async function enter({ transition = true, scrollTop = true } = {}) {
  if (!booted) return;
  cleanup();
  document.documentElement.classList.add('is-navigated');
  if (scrollTop) resetScroll();
  initPage();
  // A custom router must move focus for keyboard and screen-reader users.
  document.getElementById('main')?.focus({ preventScroll: true });
  if (transition) await playEnter();
  startScroll();
  intro?.play();
}
