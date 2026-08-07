'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MOTION_VIDEOS, MotionVideoItem } from '@/data/motionDesignData';
import MotionVideoModal from './MotionVideoModal';
import Footer from '@/components/Footer/Footer';

export default function MotionDesignPageContent() {
  const [selectedVideo, setSelectedVideo] = useState<MotionVideoItem | null>(null);

  const landscapeVideos = MOTION_VIDEOS.filter((v) => !v.isMobile);
  const mobileVideos = MOTION_VIDEOS.filter((v) => v.isMobile);

  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-x-hidden text-white flex flex-col justify-between">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF7418]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#D5543C]/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-36 pb-20">
        {/* Back Button & Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
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
        </div>

        {/* Pure Video Showcase Grid */}
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Featured First Landscape Video */}
          {landscapeVideos[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/15 bg-[#0E0B0E] shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer group"
              onClick={() => setSelectedVideo(landscapeVideos[0])}
            >
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={landscapeVideos[0].videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
                
                {/* Floating Expand Indicator */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </div>
              </div>
            </motion.div>
          )}

          {/* Two Mobile Oriented Videos side-by-side / centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
            {mobileVideos.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + idx * 0.15 }}
                className="w-full max-w-[420px] mx-auto relative rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/15 bg-[#0E0B0E] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer group hover:border-[#FF7418]/50 transition-colors"
                onClick={() => setSelectedVideo(item)}
              >
                <div className="relative w-full aspect-[9/16] rounded-[24px] md:rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
                  {/* Subtle ambient glow behind */}
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125"
                  />
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="relative z-10 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none z-20" />

                  {/* Expand Indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Landscape Video */}
          {landscapeVideos[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="w-full relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/15 bg-[#0E0B0E] shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer group"
              onClick={() => setSelectedVideo(landscapeVideos[1])}
            >
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={landscapeVideos[1].videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />

                {/* Floating Expand Indicator */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Video Modal Player */}
      <MotionVideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Footer />
    </div>
  );
}
