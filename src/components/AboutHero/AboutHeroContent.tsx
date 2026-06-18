'use client';

import React from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';

const sora = localFont({ src: '../../../public/fonts/Sora/Sora-VariableFont_wght.ttf' });

export default function AboutHeroContent({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const springConfig = { damping: 28, stiffness: 110, mass: 0.8 };

  const [maxScale, setMaxScale] = React.useState(6.5);
  const [maxOffsetY, setMaxOffsetY] = React.useState(120);
  const [scrollEnd, setScrollEnd] = React.useState(0.4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMaxScale(1.8);
        setMaxOffsetY(0);
        setScrollEnd(0.4);
      } else {
        setMaxScale(3.2);
        setMaxOffsetY(120);
        setScrollEnd(0.4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rawSimiScale = useTransform(scrollProgress, [0.0, scrollEnd], [1, maxScale]);
  const simiScale = useSpring(rawSimiScale, springConfig);
  const rawSimiY = useTransform(scrollProgress, [0.0, scrollEnd], [0, maxOffsetY]);
  const simiY = useSpring(rawSimiY, springConfig);

  const rawTextOpacity = useTransform(scrollProgress, [scrollEnd * 0.8, scrollEnd], [0, 1]);
  const textOpacity = useSpring(rawTextOpacity, springConfig);

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center pointer-events-none select-none">
      <div className="relative w-full max-w-[1512px] h-full mx-auto max-md:flex max-md:flex-col max-md:justify-between max-md:items-center max-md:pt-[120px] max-md:pb-[80px] max-md:px-6">
        
        {/* Text Top Left */}
        <motion.div
          style={{ opacity: textOpacity }}
          className={`relative max-md:w-full md:absolute z-30 md:left-[180px] md:top-[160px] md:w-[478px] order-1 ${sora.className}`}
        >
          <p className="text-white text-[23px] max-md:text-[18px] leading-[29px] max-md:leading-[24px] font-normal">
            Over the years, I evolved from visual design into designing products, shaping systems, and helping teams bring ideas to life.
          </p>
        </motion.div>

        {/* Image replacing SIMI text */}
        <motion.div
          style={{ scale: simiScale, y: simiY }}
          className="relative max-md:my-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[325px] origin-center z-20 flex items-center justify-center order-2"
        >
          <img src="/abouthero.avif" alt="Simi" className="h-[160px] max-md:h-[120px] w-auto rounded-[12px] object-contain" />
        </motion.div>

        {/* Text Bottom Right */}
        <motion.div
          style={{ opacity: textOpacity }}
          className={`relative max-md:w-full md:absolute z-30 md:left-[889px] md:top-[802px] max-lg:md:left-auto max-lg:md:right-[24px] md:w-[448px] order-3 ${sora.className}`}
        >
          <p className="text-white text-[23px] max-md:text-[18px] leading-[29px] max-md:leading-[24px] font-normal">
            Today, my work sits at the intersection of product design, product thinking, and execution. I enjoy solving complex problems, simplifying workflows, and building experiences that feel intuitive to the people who use them.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
