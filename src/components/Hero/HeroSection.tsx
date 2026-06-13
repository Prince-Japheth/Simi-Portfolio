'use client';

import React, { useRef } from 'react';
import { useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ShowcaseCard from './ShowcaseCard';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const projectScrollY = useMotionValue(0);
  const lastScrollY = useRef(0);

  // Initialize the momentum scroll
  useSmoothScroll();

  // Custom directional scroll behavior for snappier retreat
  useMotionValueEvent(scrollY, "change", (latest) => {
    const last = lastScrollY.current;
    if (latest < last) {
      const delta = last - latest;
      const acceleratedValue = Math.max(0, projectScrollY.get() - delta * 1.8);
      projectScrollY.set(acceleratedValue);
    } else {
      projectScrollY.set(latest);
    }
    lastScrollY.current = latest;
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col bg-[#030303] select-none overflow-visible"
    >
      {/* 1. Sticky Hero Section for animation */}
      <div className="relative w-full h-[200vh] z-10">
        <div className="sticky top-0 w-full h-[100vh] min-h-[900px] overflow-visible flex flex-col items-center justify-start">
          <HeroBackground scrollY={projectScrollY} />
          <HeroContent scrollY={projectScrollY} />
          <ShowcaseCard scrollY={projectScrollY} />
        </div>
      </div>

      {/* 2. After-Hero Section (Copy) */}
      <div className="relative w-full h-[600px] bg-[#0E0B0E] overflow-hidden z-0">
        {/* Frame 1618874930 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[0px] w-[1152px] h-[469px] bg-[url('/IMG_9606.jpg')] bg-cover bg-center rounded-b-[19px] z-10" />
      </div>
    </div>
  );
}
