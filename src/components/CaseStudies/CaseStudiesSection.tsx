'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CASE_STUDIES = [
  { id: 1, title: 'Homify Project', image: '/images/case-studies/homifyproject.avif' },
  { id: 2, title: 'Scheweppes Project', image: '/images/case-studies/ScheweppesProject.avif' },
  { id: 3, title: 'Cardly Project', image: '/images/case-studies/cardly.avif' },
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Scheweppes

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative w-full md:min-h-[972px] flex flex-col items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #D5543C, #D5543C), linear-gradient(171.06deg, #151515 11.07%, #D5543C 113.91%)',
        backgroundBlendMode: 'color, overlay, normal',
        backgroundSize: 'cover, cover, cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-[50px] md:text-[100px] leading-[60px] md:leading-[118px] text-white mb-8 md:mb-24 text-center px-4 whitespace-nowrap font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Case Studies
      </motion.h2>

      {/* Carousel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 w-full flex-none md:flex-1 flex flex-col items-center justify-center"
      >
        <motion.div 
          className="relative w-full max-w-[100vw] h-[350px] md:h-[500px] flex items-center justify-center mb-4 md:mb-8"
          onPanEnd={(e, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
        >
          <AnimatePresence mode="popLayout">
            {CASE_STUDIES.map((item, index) => {
              const isActive = index === activeIndex;
              let relativeIndex = index - activeIndex;
              if (relativeIndex < -1) relativeIndex += CASE_STUDIES.length;
              if (relativeIndex > 1) relativeIndex -= CASE_STUDIES.length;

              if (Math.abs(relativeIndex) > 1) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isActive ? 1 : 0.85,
                    x: `${relativeIndex * 98}%`,
                    zIndex: isActive ? 30 : 20 - Math.abs(relativeIndex),
                    filter: isActive ? 'blur(0px)' : 'blur(5px)'
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className={`absolute w-[75vw] md:w-[667px] h-[300px] md:h-[452px] rounded-[30px] border-2 border-transparent overflow-hidden cursor-pointer ${
                    isActive ? 'border-opacity-100 shadow-2xl' : 'border-opacity-50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center bg-[#191919] flex items-center justify-center"
                    style={{ backgroundImage: item.image ? `url('${item.image}')` : 'none' }}
                  >
                    {!item.image && (
                      <span className="text-white/30 font-semibold text-2xl uppercase tracking-widest text-center px-4">
                        {item.title}
                      </span>
                    )}
                  </div>
                  {!isActive && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Title for the active project */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-center"
        >
          <h3 className="text-white font-semibold text-[20px] leading-[25px]">
            {CASE_STUDIES[activeIndex].title}
          </h3>
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
        <button 
          onClick={prevSlide}
          className="w-[60px] h-[60px] md:w-[85px] md:h-[82px] rounded-full bg-[#FE804D]/10 border border-[#FE804D] flex items-center justify-center hover:bg-[#FE804D]/20 transition-colors group"
          aria-label="Previous slide"
        >
          <svg className="w-[55px] h-[55px] transform rotate-180 group-hover:-translate-x-1 transition-transform" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.7261C20.59 13.7261 34.3159 23.8351 34.3159 27.4522C34.3159 31.0694 20.5898 41.1782 20.5898 41.1782" stroke="#FE804D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

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
