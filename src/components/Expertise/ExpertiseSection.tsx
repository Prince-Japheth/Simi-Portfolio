'use client';

import React from 'react';
import { motion } from 'framer-motion';

const expertises = [
  "Product Design (UIUX)",
  "UX Research",
  "UX Writing",
  "Growth & Campaign Design",
  "Brand Experience Design"
];

// Duplicate for seamless infinite scrolling
const marqueeItems = [...expertises, ...expertises];

export default function ExpertiseSection() {
  return (
    <section className="relative w-full py-20 bg-[#030303] overflow-hidden flex flex-col items-center">
      {/* Header Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-16 gap-3"
      >
        <h2 
          className="text-white text-3xl md:text-[35px] leading-tight font-normal"
          style={{ fontFamily: 'var(--font-rufina)' }}
        >
          Areas of Expertise
        </h2>
        <p 
          className="text-white/80 text-xl md:text-[25px] leading-snug md:leading-[31px] font-normal"
          style={{ fontFamily: 'var(--font-rufina)' }}
        >
          A multidisciplinary background spanning product design, product strategy, research, growth, and execution.
        </p>
      </motion.div>

      {/* Expertise Cards Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full relative overflow-hidden"
      >
        <motion.div 
          className="flex flex-row items-center gap-[41px] w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center rounded-[20px] px-8 h-[124px] min-w-[200px] md:min-w-[237px]"
              style={{
                background: 'linear-gradient(117.33deg, #FF7418 13.99%, #FF7112 47.79%, #030303 85.72%)'
              }}
            >
              <span className="text-white text-lg md:text-[25px] leading-tight text-center max-w-[220px]">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
