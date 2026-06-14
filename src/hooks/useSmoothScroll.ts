'use client';

import { useEffect } from 'react';

/**
 * Custom hook that implements a pure, lightweight, zero-dependency momentum smooth scrolling system.
 * It intercepts mouse wheel events and smoothly interpolates the scroll position using requestAnimationFrame
 * to create a soft, buffered scrolling feel with physics-like inertia.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Check if we are running in the browser and if touch devices are supported (avoid forcing it on mobile)
    if (typeof window === 'undefined') return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    let animationFrameId: number | null = null;
    let touchLastY = 0;

    // Inertia configuration
    const damping = 0.14; 
    const stepMultiplier = 0.95; 

    let snapLocked = false;
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
    const snapThreshold = 450; 

    const handleScrollDelta = (deltaY: number) => {
      if (wheelTimeout) clearTimeout(wheelTimeout);

      const isMobile = window.innerWidth < 768;
      const snapThreshold2 = (isMobile ? 0.7 : 1.0) * window.innerHeight + 600;

      if (!snapLocked) {
        let nextTargetY = targetY + deltaY * stepMultiplier;

        if (currentY < 10 && deltaY > 0) {
          snapLocked = true;
          targetY = snapThreshold;
        } else if (deltaY > 0 && currentY < snapThreshold2 - 5 && nextTargetY >= snapThreshold2) {
          snapLocked = true;
          targetY = snapThreshold2;
        } else {
          targetY = nextTargetY;
        }
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      wheelTimeout = setTimeout(() => {
        snapLocked = false;
      }, 250);

      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScrollDelta(e.deltaY);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchLastY = e.touches[0].clientY;
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const currentTouchY = e.touches[0].clientY;
      const rawDeltaY = touchLastY - currentTouchY;
      touchLastY = currentTouchY;
      
      // Touch deltas are naturally smaller than wheel deltas, multiply to get a comparable momentum feel
      handleScrollDelta(rawDeltaY * 2.0);
    };

    const animate = () => {
      const diff = targetY - currentY;
      const absDiff = Math.abs(diff);

      if (absDiff > 1.0) {
        const step = diff * damping;
        const absStep = Math.abs(step);
        const minStep = 0.5;

        if (absStep < minStep) {
          currentY += Math.sign(diff) * minStep;
        } else {
          currentY += step;
        }

        window.scrollTo(0, currentY);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isMoving = false;
        currentY = targetY;
        window.scrollTo(0, currentY);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    const onScroll = () => {
      if (!isMoving) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      if (wheelTimeout) clearTimeout(wheelTimeout);
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);
}
