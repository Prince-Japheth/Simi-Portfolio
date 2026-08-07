'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOTION_VIDEOS, MotionVideoItem } from '@/data/motionDesignData';
import MotionVideoModal from './MotionVideoModal';

export default function MotionDesignSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<MotionVideoItem | null>(null);

  const nextSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev + 1) % MOTION_VIDEOS.length);
  };

  const prevSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev - 1 + MOTION_VIDEOS.length) % MOTION_VIDEOS.length);
  };

  useEffect(() => {
    if (isInteracted) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MOTION_VIDEOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isInteracted]);

  return (
    <section
      className="relative w-full md:min-h-[972px] flex flex-col items-center py-20 overflow-hidden bg-[#030303]"
      style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(213, 84, 60, 0.16) 0%, rgba(3, 3, 3, 1) 75%)',
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative z-10 text-[36px] sm:text-[48px] md:text-[58px] lg:text-[80px] xl:text-[96px] 2xl:text-[100px] leading-tight md:leading-[1.15] text-white mb-8 md:mb-16 text-center px-4 font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Motion Design
      </motion.h2>

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="relative z-10 w-full flex-none md:flex-1 flex flex-col items-center justify-center"
      >
        <motion.div
          className="relative w-full max-w-[100vw] h-[350px] md:h-[500px] flex items-center justify-center mb-4 md:mb-8 touch-pan-y"
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
            {MOTION_VIDEOS.map((item, index) => {
              const isActive = index === activeIndex;
              let relativeIndex = index - activeIndex;
              if (relativeIndex < -1) relativeIndex += MOTION_VIDEOS.length;
              if (relativeIndex > 1) relativeIndex -= MOTION_VIDEOS.length;

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
                    filter: isActive ? 'blur(0px)' : 'blur(5px)',
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className={`absolute w-[75vw] md:w-[667px] h-[300px] md:h-[452px] rounded-[30px] border-2 overflow-hidden cursor-pointer bg-[#0E0B0E] ${
                    isActive ? 'border-[#FF7418]/60 shadow-[0_20px_60px_rgba(255,116,24,0.3)]' : 'border-white/10'
                  }`}
                  onClick={() => {
                    if (isActive) {
                      setSelectedVideo(item);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {/* Video Presentation */}
                  <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
                    {/* If mobile video, provide ambient background and centered vertical video */}
                    {item.isMobile ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-[#070707] p-2 md:p-3">
                        <video
                          src={item.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                        />
                        <video
                          src={item.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="relative z-10 h-full max-h-[280px] md:max-h-[420px] w-auto aspect-[9/16] object-cover rounded-[20px] shadow-2xl border border-white/20"
                        />
                      </div>
                    ) : (
                      /* Landscape Video */
                      <video
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {!isActive && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Slide Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        className="relative z-10 mt-6 md:mt-16 flex flex-row items-center gap-[23px]"
      >
        <button
          onClick={prevSlide}
          className="w-[60px] h-[60px] md:w-[85px] md:h-[82px] rounded-full bg-[#FE804D]/10 border border-[#FE804D] flex items-center justify-center hover:bg-[#FE804D]/20 transition-colors group cursor-pointer"
          aria-label="Previous video"
        >
          <svg className="w-[55px] h-[55px] transform rotate-180 group-hover:-translate-x-1 transition-transform" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.7261C20.59 13.7261 34.3159 23.8351 34.3159 27.4522C34.3159 31.0694 20.5898 41.1782 20.5898 41.1782" stroke="#FE804D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-[60px] h-[60px] md:w-[85px] md:h-[82px] rounded-full bg-[#FE804D]/10 border border-[#FE804D] flex items-center justify-center hover:bg-[#FE804D]/20 transition-colors group cursor-pointer"
          aria-label="Next video"
        >
          <svg className="w-[55px] h-[55px] group-hover:translate-x-1 transition-transform" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.7261C20.59 13.7261 34.3159 23.8351 34.3159 27.4522C34.3159 31.0694 20.5898 41.1782 20.5898 41.1782" stroke="#FE804D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>

      {/* Video Modal Player */}
      <MotionVideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
