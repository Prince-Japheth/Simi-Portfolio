'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from '@/store';
import { openImageViewer } from '@/store/slices/imageViewerSlice';

const SHOWCASE_ITEMS = [
  { id: 1, title: 'Dashboard 1', image: '/images/dashboards/f09a94a79d3326567953f52c06428ef5d2087dc6.png' },
  { id: 2, title: 'Dashboard 2', image: '/images/dashboards/105a71f43833b98d54c3b2d762fa175de06f972b.avif' },
  { id: 3, title: 'Dashboard 3', image: '/images/dashboards/6b613f7979cf688f75a93afe86ab6ede7fc12beb.avif' },
  { id: 4, title: 'Dashboard 4', image: '/images/dashboards/7eb6cd4816fe1a5293fc711c145e32ba94ffce2a.avif' },
  { id: 5, title: 'Dashboard 5', image: '/images/dashboards/978e7226be9ba9fc7475b4b3dfb625e6d6d025db.avif' },
];

export default function DashboardsSection() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isInteracted, setIsInteracted] = useState(false);
  const dispatch = useAppDispatch();

  const nextSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
  };

  const prevSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length);
  };

  useEffect(() => {
    if (isInteracted) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInteracted]);

  return (
    <section 
      className="relative w-full md:min-h-[1056px] flex flex-col items-center py-20 overflow-hidden bg-[#030303]"
    >
      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-[50px] md:text-[100px] leading-[60px] md:leading-[118px] text-white mb-8 md:mb-24 text-center px-4 whitespace-nowrap font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Dash Boards
      </motion.h2>

      {/* Carousel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 w-full flex-none md:flex-1 flex items-center justify-center"
      >
        <motion.div 
          className="relative w-full max-w-[100vw] h-[220px] md:h-[648px] flex items-center justify-center touch-pan-y"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsInteracted(true)}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
        >
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
                  className={`absolute w-[80vw] md:w-[851px] lg:w-[1043px] h-[220px] md:h-[532px] lg:h-[648px] rounded-[20px] md:rounded-[30px] border-2 border-black overflow-hidden cursor-pointer ${
                    isActive ? 'border-opacity-100' : 'border-opacity-50'
                  }`}
                  onClick={() => {
                    if (isActive) {
                      dispatch(openImageViewer({ src: item.image, alt: item.title }));
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div 
                    className="w-full h-full bg-[length:100%_auto] bg-top bg-no-repeat bg-[#1A1A1A]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* Optional overlay for non-active items to darken them slightly */}
                  {!isActive && <div className="absolute inset-0 bg-black/30 pointer-events-none" />}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="relative z-10 mt-8 md:mt-24 flex flex-row items-center gap-[23px]"
      >
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
      </motion.div>
    </section>
  );
}
