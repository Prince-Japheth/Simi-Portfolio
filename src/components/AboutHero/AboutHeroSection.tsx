'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import HeroBackground from '../Hero/HeroBackground';
import AboutHeroContent from './AboutHeroContent';

export default function AboutHeroSection() {
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
      <div className="relative w-full h-[250vh] md:h-[400vh] z-10">
        <div className="sticky top-0 w-full h-[100vh] min-h-[1100px] max-md:min-h-[700px] overflow-visible flex flex-col items-center justify-start">
          <HeroBackground scrollProgress={scrollYProgress} />
          <AboutHeroContent scrollProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
