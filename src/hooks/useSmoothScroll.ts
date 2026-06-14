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

    // Skip on touch-only devices since they already have built-in smooth touch-momentum scroll
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    let animationFrameId: number | null = null;

    // Inertia configuration
    const damping = 0.14; // Higher values make the scroll react faster and catch up quicker
    const stepMultiplier = 0.95; // Slightly softens the scroll wheel step size

    let snapLocked = false;
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
    const snapThreshold = 450; // Perfect snap point where SIMI is fully enlarged

    const onWheel = (e: WheelEvent) => {
      // Prevent the browser's rigid default step scroll
      e.preventDefault();

      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }

      // If we are scrolling down from near the very top, activate the snap lock to the hero showcase
      if (currentY < 10 && e.deltaY > 0) {
        snapLocked = true;
      }

      if (snapLocked) {
        targetY = snapThreshold;
      } else {
        // Accumulate scroll direction normally
        targetY += e.deltaY * stepMultiplier;
      }

      // Bound the target to screen dimensions
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      // After 250ms of no wheel events, consider the scroll gesture finished and release the lock
      wheelTimeout = setTimeout(() => {
        snapLocked = false;
      }, 250);

      // Start interpolation loop if not already running
      if (!isMoving) {
        isMoving = true;
        animate();
      }
    };

    const animate = () => {
      const diff = targetY - currentY;
      const absDiff = Math.abs(diff);

      // Continue animating until we are extremely close to the target (1.0px threshold)
      if (absDiff > 1.0) {
        const step = diff * damping;
        const absStep = Math.abs(step);
        const minStep = 0.5; // Enforce a minimum step of 0.5px per frame to avoid sluggishness

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

    // Passive: false is crucial to allow e.preventDefault()
    window.addEventListener('wheel', onWheel, { passive: false });

    // Sync state if scroll was triggered by other means (scrollbar, keyboard keys)
    const onScroll = () => {
      if (!isMoving) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Cleanup listeners and animation frame on unmount
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
