'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MobileScreensSection() {
  const screens = [
    { id: 1, width: 'md:w-[241px]', height: 'md:h-[541px]', image: '' },
    { id: 2, width: 'md:w-[325px]', height: 'md:h-[547px]', image: '' },
    { id: 3, width: 'md:w-[315px]', height: 'md:h-[541px]', image: '' },
    { id: 4, width: 'md:w-[298px]', height: 'md:h-[485px]', image: '' },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#030303] overflow-hidden flex flex-col items-center">
      
      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-[50px] md:text-[100px] leading-[60px] md:leading-[118px] text-white mb-16 text-center px-4 whitespace-nowrap font-rubik-vinyl"
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
              className={`w-full max-w-[300px] h-[500px] ${screen.width} ${screen.height} rounded-[30px] bg-[#1A1A1A] border-2 border-[#1A1A1A]/50 bg-cover bg-center shrink-0 shadow-xl`}
              style={{
                backgroundImage: screen.image ? `url('${screen.image}')` : 'none',
              }}
            >
              {/* Fallback state when no image is present */}
              {!screen.image && (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
                  <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm uppercase tracking-widest">Mobile Screen</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
