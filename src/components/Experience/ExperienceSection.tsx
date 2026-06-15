'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    { id: 'picatip', image: '/images/experiences/picatip.avif' },
    { id: 'paymyfees', image: '/images/experiences/paymyfees.avif' },
    { id: 'popkup', image: '/images/experiences/popkup.avif' },
    { id: '1706media', image: '/images/experiences/1706media.avif' },
    { id: 'altermie', image: '/images/experiences/altermie.avif' },
    { id: 'irixinc', image: '/images/experiences/irixinc.avif' },
  ];

  return (
    <section className="relative w-full min-h-[990px] flex flex-col items-center justify-center py-[100px] max-md:py-[60px] max-md:min-h-0 bg-[#030303] overflow-hidden" id="experience">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/herobg.webm" type="video/webm" />
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 md:hidden w-full text-center text-[#FFFFFF] text-[44px] leading-[60px] mb-10 whitespace-nowrap font-rubik-vinyl"
        style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
      >
        Experiences
      </motion.h2>

      {/* Grid */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[31px] justify-items-center">
        {experiences.map((exp, index) => {
          const mobileX = isMobile ? (index % 2 === 0 ? -50 : 50) : 0;
          return (
            <motion.div
              key={`${exp.id}-${isMobile}`}
              initial={{ opacity: 0, y: isMobile ? 0 : 30, x: mobileX }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="w-full flex justify-center"
            >
              <Link href={`/experience/${exp.id}`} className="block relative w-full max-w-[339px] h-[160px] sm:h-[200px] md:h-[284px] rounded-[10px] md:rounded-[15px] border border-[#D35A05] overflow-hidden group">
                <Image src={exp.image} alt={exp.id} fill className="object-cover z-0" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
