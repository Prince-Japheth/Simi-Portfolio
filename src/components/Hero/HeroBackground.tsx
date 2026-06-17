'use client';

import React from 'react';
import Image from 'next/image';
import { MotionValue } from 'framer-motion';

export default function HeroBackground({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center scale-[1.05]"
      >
        <source src="/herobg.webm" type="video/quicktime" />
        <source src="/herobg.webm" type="video/mp4" />
      </video>
    </div>
  );
}
