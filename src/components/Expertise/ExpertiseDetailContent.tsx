'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from '@/store';
import { openImageViewer } from '@/store/slices/imageViewerSlice';
import BackButton from '@/components/UI/BackButton/BackButton';

interface ExpertiseData {
  id?: string;
  title: string;
  subtitle: string;
  showcaseImages: string[];
  defaultActiveIndex?: number;
}

export default function ExpertiseDetailContent({ data }: { data: ExpertiseData }) {
  const [activeIndex, setActiveIndex] = useState(data.defaultActiveIndex || 0);
  const [isInteracted, setIsInteracted] = useState(false);
  const dispatch = useAppDispatch();

  const nextSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev + 1) % data.showcaseImages.length);
  };

  const prevSlide = () => {
    setIsInteracted(true);
    setActiveIndex((prev) => (prev - 1 + data.showcaseImages.length) % data.showcaseImages.length);
  };

  useEffect(() => {
    if (isInteracted) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInteracted, data.showcaseImages.length]);

  // Determine carousel type based on expertise
  const getCarouselType = () => {
    if (data.title === 'Product Design (UIUX)') return 'product-design';
    if (data.title === 'UX Research') return 'ux-research';
    if (data.title === 'Growth & Campaign Design') return 'growth-campaign';
    if (data.title === 'Brand Experience Design') return 'brand-experience';
    if (data.title === 'UX Writing') return 'ux-writing';
    return 'default';
  };

  const carouselType = getCarouselType();

  return (
    <section 
      className="relative w-full md:min-h-[1056px] flex flex-col items-center py-4 md:py-20 overflow-hidden bg-[#030303]"
    >
      {/* Header with Back Button, Title, and Subtitle */}
      <div className="relative z-10 w-full max-w-[1043px] mx-auto px-4 mb-4 md:mb-8">
        <div className="relative flex flex-col items-center gap-[10px]">
          <div className="absolute left-0 top-0">
            <BackButton />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="flex flex-col items-center gap-[10px] w-full"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', damping: 15, stiffness: 120 }}
              className="font-rufina font-normal text-[28px] md:text-[35px] leading-[35px] md:leading-[43px] text-white text-center w-full"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-rufina font-normal text-[20px] md:text-[25px] leading-[26px] md:leading-[31px] text-white text-center w-full"
            >
              {data.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 w-full flex-none md:flex-1 flex items-center justify-center"
      >
        {carouselType === 'ux-writing' ? (
          // UX Writing: Single item
          <motion.div
            className="relative w-[80vw] md:w-[728px] h-[220px] md:h-[479px] rounded-[30px] border-2 border-black overflow-hidden cursor-pointer"
            onClick={() => {
              dispatch(openImageViewer({ src: data.showcaseImages[0], alt: `${data.title} showcase` }));
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat bg-[#1A1A1A]"
              style={{ backgroundImage: `url('${data.showcaseImages[0]}')` }}
            />
          </motion.div>
        ) : carouselType === 'product-design' ? (
          // Product Design: EXACTLY like DashboardsSection
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
              {data.showcaseImages.map((image, index) => {
                const isActive = index === activeIndex;
                // Calculate relative position (-2, -1, 0, 1, 2)
                let relativeIndex = index - activeIndex;
                if (relativeIndex < -2) relativeIndex += data.showcaseImages.length;
                if (relativeIndex > 2) relativeIndex -= data.showcaseImages.length;

                // Only render items close to the active one for performance
                if (Math.abs(relativeIndex) > 2) return null;

                return (
                  <motion.div
                    key={index}
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
                        dispatch(openImageViewer({ src: image, alt: `${data.title} showcase ${index + 1}` }));
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat bg-[#1A1A1A]"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    {!isActive && <div className="absolute inset-0 bg-black/30 pointer-events-none" />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : carouselType === 'ux-research' ? (
          // UX Research: 3 items with specific sizes
          <motion.div 
            className="relative w-full max-w-[1353px] h-[220px] md:h-[648px] flex items-center justify-center gap-[72px] touch-pan-y"
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
              {data.showcaseImages.map((image, index) => {
                const isActive = index === activeIndex;
                let relativeIndex = index - activeIndex;
                if (relativeIndex < -1) relativeIndex += data.showcaseImages.length;
                if (relativeIndex > 1) relativeIndex -= data.showcaseImages.length;

                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: `${relativeIndex * 100}%`,
                      width: relativeIndex === 0 ? '443px' : '383px',
                      height: relativeIndex === 0 ? '648px' : '588px',
                      zIndex: isActive ? 30 : 20,
                      filter: isActive ? 'blur(0px)' : 'blur(5px)'
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                    className="absolute rounded-[30px] border-2 border-black overflow-hidden cursor-pointer"
                    onClick={() => {
                      if (isActive) {
                        dispatch(openImageViewer({ src: image, alt: `${data.title} showcase ${index + 1}` }));
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat bg-[#1A1A1A]"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    {!isActive && <div className="absolute inset-0 bg-black/30 pointer-events-none" />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Default, Growth & Campaign, Brand Experience
          <motion.div 
            className="relative w-full h-[220px] md:h-[479px] flex items-center justify-center touch-pan-y"
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
              {data.showcaseImages.map((image, index) => {
                const isActive = index === activeIndex;
                const relativeIndex = index - activeIndex;
                const isClose = Math.abs(relativeIndex) <= 1;

                const getSize = () => {
                  if (carouselType === 'growth-campaign') {
                    if (isActive) {
                      return { width: '365px', height: '479px' };
                    }
                    return { width: '326px', height: '406px' };
                  } else {
                    if (isActive) {
                      return { width: '553px', height: '479px' };
                    }
                    return { width: '412px', height: '406px' };
                  }
                };

                const size = getSize();

                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isClose ? 1 : 0,
                      x: `${relativeIndex * 100}%`,
                      width: size.width,
                      height: size.height,
                      zIndex: isActive ? 30 : 20 - Math.abs(relativeIndex),
                      filter: isActive ? 'blur(0px)' : 'blur(5px)'
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                    className="absolute rounded-[30px] border-2 border-black overflow-hidden cursor-pointer"
                    onClick={() => {
                      if (isActive) {
                        dispatch(openImageViewer({ src: image, alt: `${data.title} showcase ${index + 1}` }));
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat bg-[#1A1A1A]"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    {!isActive && <div className="absolute inset-0 bg-black/30 pointer-events-none" />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>

      {/* Controls (only show if not UX Writing) */}
      {carouselType !== 'ux-writing' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="relative z-10 mt-4 md:mt-4 flex flex-row items-center gap-[23px]"
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
      )}
    </section>
  );
}
