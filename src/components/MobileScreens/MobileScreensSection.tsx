'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MobileScreensSection() {
  const screens = [
    { id: 1, image: '/images/mobile-screens/screen-1.avif' },
    { id: 2, image: '/images/mobile-screens/screen-2.avif' },
    { id: 3, image: '/images/mobile-screens/screen-3.avif' },
    { id: 4, image: '/images/mobile-screens/screen-4.avif' },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#030303] overflow-hidden flex flex-col items-center">
      
      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-[44px] md:text-[100px] leading-[60px] md:leading-[118px] text-white mb-16 text-center px-4 whitespace-nowrap font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Mobile Screens
      </motion.h2>

      {/* Screens Container */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-8 items-center md:items-end">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
              className="relative w-full max-w-[280px] h-[550px] md:max-w-none md:w-[300px] md:h-[600px] shrink-0"
            >
              <Image
                src={screen.image}
                alt={`Mobile Screen ${screen.id}`}
                fill
                className={`object-contain ${screen.id === 2 || screen.id === 3 ? 'scale-[1.16]' : screen.id === 1 ? 'scale-[1.12]' : ''}`}
                sizes="(max-width: 768px) 280px, 300px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
