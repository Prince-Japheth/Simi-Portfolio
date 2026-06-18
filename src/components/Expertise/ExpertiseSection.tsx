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
      '/images/dashboards/f09a94a79d3326567953f52c06428ef5d2087dc6.png',
      '/images/dashboards/105a71f43833b98d54c3b2d762fa175de06f972b.avif',
      '/images/dashboards/6b613f7979cf688f75a93afe86ab6ede7fc12beb.avif',
      '/images/dashboards/7eb6cd4816fe1a5293fc711c145e32ba94ffce2a.avif',
      '/images/dashboards/978e7226be9ba9fc7475b4b3dfb625e6d6d025db.avif',
      '/images/showcase/1f5891bc17c7fde57be5030a5380dce3dc730c41.avif',
      '/images/showcase/20c134e16c3bccf20ae2cbda96f21df43f36fff5.avif',
      '/images/showcase/252272175efd029df8daa49ee56ef50773d346f2.avif',
      '/images/showcase/4324dc3078b363b6d15f4c9fb8740659f9899e75.avif',
      '/images/showcase/7bb6e2a46a621d7e05ec2bf5d36fe6e346ff64ab.avif'
    ]
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    subtitle: 'Uncovering user insights through interviews, usability testing, and surveys to inform design decisions and drive product success.',
    showcaseImages: [
      '/images/expertise/ux-reseach/picatip-ux-research.avif',
      '/images/expertise/ux-reseach/rootrise-ux-research.avif',
      '/images/expertise/ux-reseach/ux-research.avif'
    ]
  },
  {
    id: 'ux-writing',
    title: 'UX Writing',
    subtitle: 'Crafting clear, concise, and user-centric copy that guides users through products and enhances the overall experience.',
    showcaseImages: [
      '/images/expertise/ux-writing/c88a08fdd9e23368b0dec75cd5978e0735d6921c.avif'
    ]
  },
  {
    id: 'growth-campaign-design',
    title: 'Growth & Campaign Design',
    subtitle: 'Creating high-converting campaign assets, landing pages, and marketing materials that drive user acquisition and engagement.',
    showcaseImages: [
      '/images/expertise/campaign-and-growth/0a7ee54f0efb59e606974aef620cf8ec4751f769.avif',
      '/images/expertise/campaign-and-growth/30a5ee962f315d8331bfa8a40558705b9c12fe62.avif',
      '/images/expertise/campaign-and-growth/414058759aa816f722bae899b1c92ddda26aa056.avif',
      '/images/expertise/campaign-and-growth/56d94f9905cda63b0327f971bb1dc22fe1eab16f.avif',
      '/images/expertise/campaign-and-growth/56ee22a7375cea67ced6a6a3b771425457b95d5b.avif',
      '/images/expertise/campaign-and-growth/66315fc4f31673af8a109aae4260c39057d849fb.avif',
      '/images/expertise/campaign-and-growth/702c5376c00e10a4cf12e22e8fe5ab31db248c3e.avif',
      '/images/expertise/campaign-and-growth/796f4d60fba0bc918dc33c1bbe9d0415e53bb839.avif',
      '/images/expertise/campaign-and-growth/84e0b73edf84a7aef0e0a5e53b33460b0e5039d0.avif',
      '/images/expertise/campaign-and-growth/923db349e5dc21a1cdaf5579153b4e8ed2784dad.avif',
      '/images/expertise/campaign-and-growth/939b7b6ee19d61c81280e6591fbeb8da074f23b2.avif',
      '/images/expertise/campaign-and-growth/a81765e8d2c1462a0024e837085fcf3e3a9e2021.avif',
      '/images/expertise/campaign-and-growth/ba94761b54d8e1ed1d6c3fdc6b886bfe93e19bec.avif',
      '/images/expertise/campaign-and-growth/e0af5695bfca069eda55967c9913805a3ceacf00.avif',
      '/images/expertise/campaign-and-growth/e9da18312d4f759fcc73a73e7a90d93c5918172f.avif'
    ]
  },
  {
    id: 'brand-experience-design',
    title: 'Brand Experience Design',
    subtitle: 'Building cohesive brand identities and experiences that resonate with audiences and create lasting impressions.',
    showcaseImages: [
      '/images/expertise/brand-expertise-and-design/0b029ae812a877d20de0610c80c190bcc604f40b.avif',
      '/images/expertise/brand-expertise-and-design/1340b9ccb99879d5bd06935cb70fd36954e5fd06.avif',
      '/images/expertise/brand-expertise-and-design/226e6e2b0a581942b6dc353209d0b5ffa248c300.avif',
      '/images/expertise/brand-expertise-and-design/5a3d4f59659812f602a2e038f70e0c386940d833.avif',
      '/images/expertise/brand-expertise-and-design/5bb4c86cfb97915311197cf3959b4bc81683a896.avif',
      '/images/expertise/brand-expertise-and-design/700b0ea7354fd23589f39106df853935b1e7e485.avif',
      '/images/expertise/brand-expertise-and-design/7bdfb69f8f54df3cbcb5efa22a96941f233ed49a.avif',
      '/images/expertise/brand-expertise-and-design/8e908cf89895fdf88e44a3ece9c16847446cea38.avif',
      '/images/expertise/brand-expertise-and-design/c0d7c60a88a6bb0b2a5daba2946bc4598a0a245f.avif',
      '/images/expertise/brand-expertise-and-design/deda6da78b329ff842b23800be067166e215f8de.avif',
      '/images/expertise/brand-expertise-and-design/f1a117571ebd3f0b46a347f58578aa28165dafa8.avif'
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
