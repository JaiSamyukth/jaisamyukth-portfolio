// Global motion, registered once before boot.
import { onScroll } from '../engine';

/** The frame steps aside while scrolling down and comes back solid on the way up,
 *  so it never sits on top of content (awwwards: "fixed UI must never collide"). */
export function setupMotion() {
  let last = 0;
  const h = document.documentElement.classList;
  onScroll(({ y }) => {
    if (h.contains('menu-open')) return;
    if (y < 80) {
      h.remove('frame-away', 'frame-solid');
    } else if (Math.abs(y - last) > 4) {
      const down = y > last;
      h.toggle('frame-away', down);
      h.toggle('frame-solid', !down);
    }
    last = y;
  });
}
