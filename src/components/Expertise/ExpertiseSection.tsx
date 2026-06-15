'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const expertises = [
  "Product Design (UIUX)",
  "UX Research",
  "UX Writing",
  "Growth & Campaign Design",
  "Brand Experience Design"
];

// Triplicate to ensure enough content for smooth scrolling
const marqueeItems = [...expertises, ...expertises, ...expertises];

export default function ExpertiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationId: number;
    let isPaused = false;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const play = () => {
      if (!isPaused && !isDown) {
        el.scrollLeft += 1;
        // Reset when we've scrolled past the first set of items
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(play);
    };
    animationId = requestAnimationFrame(play);

    const handleDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const handleMove = (e: PointerEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };
    const handleUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };

    const handleEnter = () => isPaused = true;
    const handleLeave = () => {
      isPaused = false;
      isDown = false;
      el.style.cursor = 'grab';
    };

    el.addEventListener('pointerdown', handleDown);
    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerup', handleUp);
    el.addEventListener('pointerleave', handleLeave);
    el.addEventListener('mouseenter', handleEnter);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('pointerdown', handleDown);
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerup', handleUp);
      el.removeEventListener('pointerleave', handleLeave);
      el.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <section className="relative w-full py-20 bg-[#030303] overflow-hidden flex flex-col items-center">
      {/* Header Content */}
      <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-16 gap-3">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-3xl md:text-[35px] leading-tight font-normal"
          style={{ fontFamily: 'var(--font-rufina)' }}
        >
          Areas of Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-white/80 text-xl md:text-[25px] leading-snug md:leading-[31px] font-normal"
          style={{ fontFamily: 'var(--font-rufina)' }}
        >
          A multidisciplinary background spanning product design, product strategy, research, growth, and execution.
        </motion.p>
      </div>

      {/* Expertise Cards Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full relative overflow-hidden"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div 
          ref={scrollRef}
          className="flex flex-row items-center gap-[41px] w-full overflow-x-auto hide-scroll cursor-grab py-4 px-4"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center rounded-[20px] px-8 h-[124px] min-w-[200px] md:min-w-[237px] select-none"
              style={{
                background: 'linear-gradient(117.33deg, #FF7418 13.99%, #FF7112 47.79%, #030303 85.72%)'
              }}
            >
              <span className="text-white text-lg md:text-[25px] leading-tight text-center max-w-[220px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
