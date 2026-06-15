'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ConceptToProductSection() {
  return (
    <section 
      className="relative w-full min-h-[1099px] flex flex-col items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, rgba(213,84,60,0.88), rgba(213,84,60,0.88)), linear-gradient(15.78deg, #151515 30.2%, #D5543C 93.54%)',
        backgroundBlendMode: 'color, overlay, normal',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full text-center text-[#FFFFFF] text-[50px] md:text-[100px] leading-[60px] md:leading-[118px] whitespace-nowrap font-rubik-vinyl z-10 mt-10 md:mt-[60px] mb-16 md:mb-[100px]"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Concept to Product
      </motion.h2>

      {/* Main Image Content */}
      <div className="relative z-10 w-full max-w-[1012px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[1012/870]"
        >
          <Image
            src="/images/concept-to-product/Group%201000005866.avif"
            alt="Concept to Product Flow"
            fill
            className="object-contain"
            sizes="(max-width: 1012px) 100vw, 1012px"
          />
        </motion.div>
      </div>
    </section>
  );
}
