'use client';

import React from 'react';
import { MotionValue } from 'framer-motion';
import HeroVideo from './HeroVideo';

export default function HeroBackground({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      <HeroVideo />
    </div>
  );
}
