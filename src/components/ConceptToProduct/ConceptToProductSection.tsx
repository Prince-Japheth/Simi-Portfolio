'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
import { useAppDispatch } from '@/store';
import { openImageViewer } from '@/store/slices/imageViewerSlice';

const russoOne = localFont({ src: '../../../public/fonts/Russo_One/RussoOne-Regular.ttf' });

export default function ConceptToProductSection() {
  const dispatch = useAppDispatch();
  return (
    <section 
      className="relative w-full md:min-h-[1099px] flex flex-col items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, rgb(255, 40, 0), rgb(255, 91, 60)), linear-gradient(23.49deg, rgb(76, 41, 41) 25.39%, rgb(184, 82, 63) 88.6%)',
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
        className={`w-full text-center text-[#FFFFFF] text-[30px] sm:text-[44px] md:text-[54px] lg:text-[76px] xl:text-[96px] 2xl:text-[100px] leading-tight md:leading-[1.15] px-4 z-10 mt-10 md:mt-[60px] mb-12 md:mb-[80px] ${russoOne.className}`}
        style={{ fontFamily: russoOne.style.fontFamily }}
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
          className="relative w-full aspect-[1012/870] cursor-pointer"
          onClick={() => dispatch(openImageViewer({ src: "/images/concept-to-product/Group%201000005866.avif", alt: "Concept to Product Flow" }))}
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
