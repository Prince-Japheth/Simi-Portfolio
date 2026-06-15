'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ExperienceSection() {
  const experiences = [
    { id: 'picatip', image: '/images/experiences/picatip.avif' },
    { id: 'paymyfees', image: '/images/experiences/paymyfees.avif' },
    { id: 'popkup', image: '/images/experiences/popkup.avif' },
    { id: '1706media', image: '/images/experiences/1706media.avif' },
    { id: 'altermie', image: '/images/experiences/altermie.avif' },
    { id: 'irixinc', image: '/images/experiences/irixinc.avif' },
  ];

  return (
    <section className="relative w-full min-h-[990px] flex items-center justify-center py-[100px] bg-[#030303] overflow-hidden" id="experience">
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

      {/* Grid */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] justify-items-center">
        {experiences.map((exp) => (
          <Link key={exp.id} href={`/experience/${exp.id}`} className="block relative w-full max-w-[339px] h-[284px] rounded-[15px] border border-[#D35A05] overflow-hidden group">
            <Image src={exp.image} alt={exp.id} fill className="object-cover z-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}
