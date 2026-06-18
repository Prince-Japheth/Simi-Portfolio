'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const expertises = [
  {
    id: 'product-design-uiux',
    title: 'Product Design (UIUX)',
    subtitle: 'Designing intuitive digital experiences, scalable systems, and products (across mobile & web) that align user needs with business goals.',
    showcaseImages: [
      '/images/designing-products/040cc821f200d938c272d3c645b0e7dd3a8a421f.avif',
      '/images/designing-products/079aa6ed1b5bcaf491d65ff13537adfbafad8031.avif',
      '/images/designing-products/0b029ae812a877d20de0610c80c190bcc604f40b.avif',
      '/images/designing-products/1b72bf469d66c85f44bcff2ee2cd1017f31c4e34.avif',
      '/images/designing-products/2443c73db9736b3cf93458d0dae3.avif'
    ]
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    subtitle: 'Uncovering user insights through interviews, usability testing, and surveys to inform design decisions and drive product success.',
    showcaseImages: [
      '/images/concept-to-product/Group 1000005866.avif',
      '/images/designing-products/5a3d4f59659812f602a2e038f70e0c386940d833.avif',
      '/images/designing-products/700b0ea7354fd23589f39106df853935b1e7e485.avif',
      '/images/designing-products/78b0d9bb670acc476daddebde374e20a5df610c0.avif',
      '/images/designing-products/796f4d60fba0bc918dc33c1bbe9d0415e53bb839.avif'
    ]
  },
  {
    id: 'ux-writing',
    title: 'UX Writing',
    subtitle: 'Crafting clear, concise, and user-centric copy that guides users through products and enhances the overall experience.',
    showcaseImages: [
      '/images/designing-products/2de102a6893d665856dc48013b9a3649ce02d2b9.avif',
      '/images/designing-products/baff65d4c2c0845ed0769a80a97cc380f2e9df29.avif',
      '/images/designing-products/040cc821f200d938c272d3c645b0e7dd3a8a421f.avif',
      '/images/designing-products/079aa6ed1b5bcaf491d65ff13537adfbafad8031.avif',
      '/images/designing-products/0b029ae812a877d20de0610c80c190bcc604f40b.avif'
    ]
  },
  {
    id: 'growth-campaign-design',
    title: 'Growth & Campaign Design',
    subtitle: 'Creating high-converting campaign assets, landing pages, and marketing materials that drive user acquisition and engagement.',
    showcaseImages: [
      '/images/showcase/1f5891bc17c7fde57be5030a5380dce3dc730c41.avif',
      '/images/showcase/20c134e16c3bccf20ae2cbda96f21df43f36fff5.avif',
      '/images/showcase/252272175efd029df8daa49ee56ef50773d346f2.avif',
      '/images/showcase/4324dc3078b363b6d15f4c9fb8740659f9899e75.avif',
      '/images/showcase/7bb6e2a46a621d7e05ec2bf5d36fe6e346ff64ab.avif'
    ]
  },
  {
    id: 'brand-experience-design',
    title: 'Brand Experience Design',
    subtitle: 'Building cohesive brand identities and experiences that resonate with audiences and create lasting impressions.',
    showcaseImages: [
      '/images/case-studies/homifyproject.avif',
      '/images/case-studies/cardly.avif',
      '/images/case-studies/ScheweppesProject.avif',
      '/images/experiences/popkup.avif',
      '/images/experiences/picatip.avif'
    ]
  }
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
    <section className="relative w-full py-20 bg-[#030303] overflow-hidden flex flex-col items-center" id='services'>
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
            <Link
              key={`${item.id}-${index}`}
              href={`/expertise/${item.id}`}
              className="flex-none flex items-center justify-center rounded-[20px] px-8 h-[124px] min-w-[200px] md:min-w-[237px] select-none cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(117.33deg, #FF7418 13.99%, #FF7112 47.79%, #030303 85.72%)'
              }}
            >
              <span className="text-white text-lg md:text-[25px] leading-tight text-center max-w-[220px]">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
