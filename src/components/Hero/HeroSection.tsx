'use client';

import React, { useRef } from 'react';
import { useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ShowcaseCard from './ShowcaseCard';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col bg-[#030303] select-none overflow-visible"
    >
      {/* 1. Sticky Hero Section for animation */}
      <div className="relative w-full h-[400vh] max-md:h-[200vh] z-10">
        <div className="sticky top-0 w-full h-[100vh] min-h-[900px] max-md:min-h-[600px] overflow-visible flex flex-col items-center justify-start">
          <HeroBackground scrollProgress={scrollYProgress} />
          <HeroContent scrollProgress={scrollYProgress} />
          <ShowcaseCard scrollProgress={scrollYProgress} />
        </div>
      </div>

      {/* 2. After-Hero Section (Copy) */}
      <div className="relative w-full h-[200px] md:h-[600px] bg-[#0E0B0E] overflow-hidden z-0">
        {/* Frame 1618874930 */}
      </div>
    </div>
  );
}
