import React, { useEffect, useRef } from 'react';
import { onScroll } from '../engine';

/** Reading progress (ui-ux-pro-max: scroll storytelling needs a progress indicator). */
export function Progress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => onScroll(({ progress }) => ref.current?.style.setProperty('--p', progress.toFixed(4))), []);
  return <div ref={ref} className="progress" aria-hidden="true" />;
}
