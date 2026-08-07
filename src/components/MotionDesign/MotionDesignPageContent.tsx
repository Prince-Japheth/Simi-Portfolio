'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MOTION_VIDEOS, MotionVideoItem } from '@/data/motionDesignData';
import MotionVideoModal from './MotionVideoModal';

export default function MotionDesignPageContent() {
  const [selectedVideo, setSelectedVideo] = useState<MotionVideoItem | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-x-hidden text-white">
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-36 pb-24">
        {/* Back Button & Page Header */}
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:border-[#FF7418]/50"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>

            <span className="text-white/40 text-xs sm:text-sm font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5">
              4 Showcases
            </span>
          </div>

          <div>
            <h1
              className="text-[32px] sm:text-[44px] md:text-[56px] text-white leading-tight font-rubik-vinyl"
              style={{ fontFamily: 'var(--font-rubik-vinyl)' }}
            >
              Motion Design
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mt-2 font-light">
              A curated collection of mobile UI choreography, interactive prototype flows, and kinetic product design.
            </p>
          </div>
        </div>

        {/* 4-Item Balanced Video Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {MOTION_VIDEOS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.1 }}
              className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#0A0A0A] p-3 sm:p-4 group cursor-pointer hover:border-[#FF7418]/60 hover:shadow-[0_20px_50px_rgba(255,116,24,0.15)] transition-all duration-500 flex items-center justify-center"
              onClick={() => setSelectedVideo(item)}
            >
              {/* Number Badge */}
              <div className="absolute top-5 left-5 z-30 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90 text-xs font-mono font-medium tracking-wider shadow-lg">
                0{idx + 1} / 04
              </div>

              {/* Video Content Rendering */}
              {item.isMobile ? (
                /* Mobile Portrait Video with ambient glow */
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[22px] md:rounded-[28px] bg-[#050505]">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
                  />
                  <div className="relative z-10 h-full max-h-[92%] w-auto aspect-[9/16] rounded-[18px] md:rounded-[22px] overflow-hidden bg-black border border-white/20 shadow-2xl flex items-center justify-center">
                    <video
                      src={item.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              ) : (
                /* Landscape Video */
                <div className="relative z-10 w-full h-full rounded-[22px] md:rounded-[28px] overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}

              {/* Expand / Play CTA Indicator */}
              <div className="absolute bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#FF7418] group-hover:bg-[#FF7418] group-hover:text-black transition-all duration-300 shadow-xl">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Video Modal Player */}
      <MotionVideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
