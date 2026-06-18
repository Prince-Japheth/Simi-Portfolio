'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import ErrorState from '@/components/ErrorState/ErrorState';
import { logger } from '@/lib/logger';
import { useAppDispatch } from '@/store';
import { openImageViewer } from '@/store/slices/imageViewerSlice';

export default function ShowcaseCard({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const dispatch = useAppDispatch();
  const [imageError, setImageError] = useState(false);
  const springConfig = { damping: 26, stiffness: 100, mass: 0.9 };

  const [scrollRange, setScrollRange] = React.useState([0.35, 0.65]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollRange([0.18, 0.42]);
      } else {
        setScrollRange([0.35, 0.65]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Glass card enters from bottom
  const rawCardOpacity = useTransform(scrollProgress, scrollRange, [0, 1]);
  const cardOpacity = useSpring(rawCardOpacity, springConfig);
  const rawCardY = useTransform(scrollProgress, scrollRange, [150, 0]);
  const cardY = useSpring(rawCardY, springConfig);
  
  if (imageError) {
    logger.error('ShowcaseCard', 'Failed to load simihero.avif');
    return null;
  }

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center pointer-events-none">
      <div className="relative w-full max-w-[1512px] h-full mx-auto">
        <motion.div 
          style={{ opacity: cardOpacity, y: cardY }}
          className="absolute left-1/2 -translate-x-1/2 top-[800px] max-md:top-[480px] w-[1192px] max-w-[95vw] h-[612px] max-md:h-[400px] bg-[rgba(255,255,255,0.16)] rounded-[16px] overflow-hidden pointer-events-auto box-border"
        >
          <div className="relative w-full h-full">
            <Image
              src="/simihero.JPG"
              alt="Simi Portfolio Showcase"
              fill
              priority
              sizes="(max-width: 1192px) 95vw, 1192px"
              className="object-cover object-top cursor-pointer"
              // onClick={() => dispatch(openImageViewer({ src: '/simihero.avif', alt: 'Simi Portfolio Showcase' }))}
              onError={() => setImageError(true)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
