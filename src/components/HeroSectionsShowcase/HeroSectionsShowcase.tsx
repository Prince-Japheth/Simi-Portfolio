'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHOWCASE_ITEMS = [
  { id: 1, title: 'Paymyfees', image: '/Paymyfees Landing page.jpg' },
  { id: 2, title: 'Picatip', image: '/Picatip landing page.jpg' },
  { id: 3, title: 'Screenshot', image: '/Screenshot 2026-06-13 at 1.15.53 PM.png' },
  { id: 4, title: 'Amdari', image: '/Amdari landing page.jpg' }, // Assumed extension
  { id: 5, title: 'Popkup', image: '/Popkup landing page.jpg' }, // Assumed extension
];

export default function HeroSectionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to the second item (Picatip)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length);
  };

  return (
    <section 
      className="relative w-full min-h-[1056px] flex flex-col items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #D5543C, #D5543C), url(/DEC_SG_Sunset_001.jpg), linear-gradient(23.49deg, #151515 25.39%, #D5543C 88.6%)',
        backgroundBlendMode: 'color, overlay, normal',
        backgroundSize: 'cover, cover, cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for opacity (since the Figma says opacity 0.88 on the whole section, we can wrap content in a container that's fully opaque but let the bg have 0.88, or just keep it as is. We'll add a dark tint just in case) */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Header Text */}
      <h2 
        className="relative z-10 text-[50px] md:text-[100px] leading-[60px] md:leading-[118px] text-white mb-16 md:mb-24 text-center px-4 whitespace-nowrap font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Hero Sections
      </h2>

      {/* Carousel */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-[100vw] h-[300px] md:h-[648px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {SHOWCASE_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              // Calculate relative position (-2, -1, 0, 1, 2)
              let relativeIndex = index - activeIndex;
              if (relativeIndex < -2) relativeIndex += SHOWCASE_ITEMS.length;
              if (relativeIndex > 2) relativeIndex -= SHOWCASE_ITEMS.length;

              // Only render items close to the active one for performance
              if (Math.abs(relativeIndex) > 2) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isActive ? 1 : 0.85,
                    x: `${relativeIndex * 98}%`, // Space them out with gap
                    zIndex: isActive ? 30 : 20 - Math.abs(relativeIndex),
                    filter: isActive ? 'blur(0px)' : 'blur(5px)'
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className={`absolute w-[80vw] md:w-[851px] lg:w-[1043px] h-[300px] md:h-[532px] lg:h-[648px] rounded-[20px] md:rounded-[30px] border-2 border-black overflow-hidden cursor-pointer ${
                    isActive ? 'border-opacity-100' : 'border-opacity-50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat bg-[#1A1A1A]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* Optional overlay for non-active items to darken them slightly */}
                  {!isActive && <div className="absolute inset-0 bg-black/30 pointer-events-none" />}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 mt-16 md:mt-24 flex flex-row items-center gap-[23px]">
        {/* Prev Button */}
        <button 
          onClick={prevSlide}
          className="w-[60px] h-[60px] md:w-[85px] md:h-[82px] rounded-full bg-[#FE804D]/10 border border-[#FE804D] flex items-center justify-center hover:bg-[#FE804D]/20 transition-colors group"
          aria-label="Previous slide"
        >
          <svg className="w-[55px] h-[55px] transform rotate-180 group-hover:-translate-x-1 transition-transform" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.7261C20.59 13.7261 34.3159 23.8351 34.3159 27.4522C34.3159 31.0694 20.5898 41.1782 20.5898 41.1782" stroke="#FE804D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className="w-[60px] h-[60px] md:w-[85px] md:h-[82px] rounded-full bg-[#FE804D]/10 border border-[#FE804D] flex items-center justify-center hover:bg-[#FE804D]/20 transition-colors group"
          aria-label="Next slide"
        >
          <svg className="w-[55px] h-[55px] group-hover:translate-x-1 transition-transform" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.7261C20.59 13.7261 34.3159 23.8351 34.3159 27.4522C34.3159 31.0694 20.5898 41.1782 20.5898 41.1782" stroke="#FE804D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
