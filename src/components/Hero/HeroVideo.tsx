'use client';

import React, { useRef, useEffect } from 'react';

const START_TIME = 5;

interface HeroVideoProps {
  className?: string;
}

export default function HeroVideo({
  className = 'w-full h-full object-cover object-center scale-[1.05]',
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const jumpToStart = () => {
      if (video.readyState >= 1) {
        video.currentTime = START_TIME;
      }
    };

    const handleTimeUpdate = () => {
      if (video.currentTime < START_TIME) {
        video.currentTime = START_TIME;
      }
    };

    video.addEventListener('loadedmetadata', jumpToStart);
    video.addEventListener('timeupdate', handleTimeUpdate);
    jumpToStart();

    return () => {
      video.removeEventListener('loadedmetadata', jumpToStart);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay loop muted playsInline className={className}>
      <source src="/herobg.webm" type="video/webm" />
      <source src="/herobg.mp4" type="video/mp4" />
    </video>
  );
}
