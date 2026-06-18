'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackButton from '@/components/UI/BackButton/BackButton';
import { useAppDispatch } from '@/store';
import { openImageViewer } from '@/store/slices/imageViewerSlice';

export interface CaseStudyDetailData {
  title: string;
  description: string;
  heroImage: string;
  gallery: [string, string];
}

function ClickableImage({
  src,
  alt,
  className,
  containerClassName,
  delay = 0,
  direction = 'up',
}: {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}) {
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState(false);

  const initial =
    direction === 'left'
      ? { opacity: 0, x: -80, rotate: -4 }
      : direction === 'right'
        ? { opacity: 0, x: 80, rotate: 4 }
        : direction === 'scale'
          ? { opacity: 0, scale: 0.7, rotate: -6 }
          : { opacity: 0, y: 60, scale: 0.92 };

  const animate = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };

  return (
    <motion.button
      type="button"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 120,
        delay,
      }}
      whileHover={{ scale: 1.03, rotate: direction === 'left' ? -1 : direction === 'right' ? 1 : 0 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => dispatch(openImageViewer({ src, alt }))}
      className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#191919] cursor-pointer ${containerClassName ?? ''}`}
      aria-label={`View ${alt}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className ?? ''}`}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm px-4 text-center">
          Paste image at {src}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white text-sm font-medium tracking-wide px-4 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm">
          Click to view
        </span>
      </motion.div>

      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="md:hidden absolute bottom-3 right-3 text-[11px] text-white/90 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20"
      >
        Tap to view
      </motion.span>
    </motion.button>
  );
}

function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 max-md:opacity-20">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-[120px] top-[13px] w-[400px] md:w-[756px] h-[230px] md:h-[435px] bg-[#5A189A] max-md:scale-75"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 15, 0], rotate: [180, 183, 180] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-[-80px] md:right-[100px] top-[280px] md:top-[395px] w-[400px] md:w-[756px] h-[230px] md:h-[435px] bg-[#FF9E00] rotate-180 max-md:scale-75"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute left-[40px] md:left-[85px] -top-[60px] md:-top-[85px] w-[300px] md:w-[756px] h-[180px] md:h-[435px] bg-white max-md:scale-75"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, -18, 0], rotate: [180, 177, 180] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute left-[120px] md:left-[564px] bottom-[80px] md:top-[493px] w-[350px] md:w-[756px] h-[200px] md:h-[435px] bg-white rotate-180 max-md:scale-75"
      />
    </div>
  );
}

export default function CaseStudyDetailContent({ data }: { data: CaseStudyDetailData }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const galleryParallax = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen pt-[120px] md:pt-[150px] pb-[80px] md:pb-[100px] bg-[#030303] overflow-hidden"
    >
      <DecorativeShapes />

      <div className="relative z-10 w-full max-w-[1152px] mx-auto px-5 md:px-6">
        {/* Header: back button + centered title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="relative flex items-center justify-center w-full mb-10 md:mb-16"
        >
          <div className="absolute left-0">
            <BackButton />
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', damping: 15, stiffness: 120 }}
            className="text-[28px] md:text-[35px] leading-tight text-white text-center capitalize px-12"
          >
            {data.title}
          </motion.h1>
        </motion.div>

        {/* Main content: hero image + description */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-10 md:mb-16">
          <motion.div style={{ y: heroParallax }} className="w-full lg:w-[534px] shrink-0">
            <ClickableImage
              src={data.heroImage}
              alt={`${data.title} hero`}
              containerClassName="w-full aspect-[534/345] max-md:aspect-[16/10]"
              direction="scale"
              delay={0.1}
            />
          </motion.div>

          <motion.div
            style={{ y: textParallax }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', damping: 22, stiffness: 90, delay: 0.25 }}
            className="flex-1 lg:pt-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05 }}
              className="text-base md:text-[20px] leading-[25px] text-white text-justify"
            >
              {data.description.split('. ').map((sentence, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', damping: 20 }}
                  className="inline"
                >
                  {sentence}
                  {i < data.description.split('. ').length - 1 ? '. ' : ''}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>

        {/* Gallery row */}
        <motion.div style={{ y: galleryParallax }} className="flex flex-col sm:flex-row gap-5 md:gap-[30px] max-w-[530px]">
          <ClickableImage
            src={data.gallery[0]}
            alt={`${data.title} gallery 1`}
            containerClassName="w-full sm:flex-1 aspect-[250/152]"
            direction="left"
            delay={0.35}
          />
          <ClickableImage
            src={data.gallery[1]}
            alt={`${data.title} gallery 2`}
            containerClassName="w-full sm:flex-1 aspect-[250/152]"
            direction="right"
            delay={0.45}
          />
        </motion.div>
      </div>
    </section>
  );
}
