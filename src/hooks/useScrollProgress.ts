'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/store';
import { setScrollProgress } from '@/store/slices/uiSlice';
import { logger } from '@/lib/logger';

const SCROLL_DISTANCE = 500;

export function useScrollProgress() {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastProgressRef = useRef(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const progress = Math.min(Math.max(scrollTop / SCROLL_DISTANCE, 0), 1);

        container.style.setProperty('--scroll-progress', progress.toString());

        const roundedProgress = Math.round(progress * 100) / 100;
        if (roundedProgress !== lastProgressRef.current) {
          lastProgressRef.current = roundedProgress;
          dispatch(setScrollProgress(roundedProgress));
          logger.debug('ScrollProgress', `Progress updated: ${roundedProgress}`);
        }

        ticking = false;
      });
    };

    handleScroll();
    logger.info('ScrollProgress', 'Scroll listener initialized');

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [dispatch]);

  return containerRef;
}
