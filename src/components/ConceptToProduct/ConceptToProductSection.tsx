'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ConceptToProductSection() {
  return (
    <section 
      className="relative w-full min-h-[1099px] flex flex-col items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #D5543C, #D5543C), linear-gradient(15.78deg, #151515 30.2%, #D5543C 93.54%)',
        backgroundBlendMode: 'color, normal',
      }}
    >
      {/* Dark overlay for blending */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>

      {/* Header Text */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-[36px] md:text-[50px] leading-[48px] text-white mt-10 md:mt-20 text-center px-4 font-bold tracking-wide"
      >
        Concept to Product
      </motion.h2>

      <div className="relative z-10 w-full max-w-[1200px] mt-16 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 px-4">
        
        {/* The Assets Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <h3 className="text-white text-[20px] font-normal tracking-wide">The assets</h3>
          <div className="relative w-[300px] md:w-[337px] h-[340px] md:h-[388px]">
            <div 
              className="w-full h-full bg-cover bg-center drop-shadow-2xl rounded-md"
              style={{ backgroundImage: `url('https://placehold.co/400x500/1A1A1A/FFFFFF/webp?text=merchh.png')` }}
            />
          </div>
        </motion.div>

        {/* Desktop Arrow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex flex-col items-center justify-center w-[200px]"
        >
          <div className="w-full h-[6px] border-t-4 border-dashed border-white opacity-50 relative">
            <div className="absolute -right-2 -top-[10px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white opacity-50"></div>
          </div>
        </motion.div>

        {/* Mobile Arrow */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden flex h-[80px] w-[4px] border-l-4 border-dashed border-white opacity-50 relative"
        >
            <div className="absolute -bottom-2 -left-[6px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-white opacity-50"></div>
        </motion.div>

        {/* The Result Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <h3 className="text-white text-[20px] font-normal tracking-wide">The Result</h3>
          <div className="relative w-[280px] md:w-[311px] h-[380px] md:h-[427px]">
            <div 
              className="w-full h-full bg-cover bg-center rounded-[10px] shadow-2xl"
              style={{ backgroundImage: `url('https://placehold.co/400x600/1A1A1A/FFFFFF/webp?text=IMG_3902+2.jpg')` }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
