'use client';

import React from 'react';
import { useInView, animate } from 'framer-motion';
import localFont from 'next/font/local';

const sora = localFont({ src: '../../../public/fonts/Sora/Sora-VariableFont_wght.ttf' });

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number; suffix?: string }) {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node || !inView) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function AboutStatsSection() {
  return (
    <section className={`relative w-full flex justify-center items-center py-[49px] max-md:py-[40px] bg-[#080707] overflow-hidden ${sora.className}`}>
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute w-[756px] h-[435px] left-[-222px] top-[13px] bg-[#5A189A] blur-[100px]" />
        <div className="absolute w-[756px] h-[435px] left-[871px] top-[395px] bg-[#FF9E00] blur-[100px] rotate-180" />
        <div className="absolute w-[756px] h-[435px] left-[85px] top-[-85px] bg-[#FFFFFF] blur-[100px]" />
        <div className="absolute w-[756px] h-[435px] left-[564px] top-[493px] bg-[#FFFFFF] blur-[100px] rotate-180" />
      </div>

      <div className="relative z-10 w-full max-w-[1137px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-[44px]">
        
        <div className="flex flex-col items-center gap-[8px]">
          <span className="font-bold text-[46px] leading-[1.2] text-[#FCFCFD]">
            <Counter from={0} to={20000} duration={2} suffix="+" />
          </span>
          <span className="font-light text-[22px] leading-[1.2] text-[#ECEDEF] text-center">Assets Produced</span>
        </div>

        <div className="flex flex-col items-center gap-[8px]">
          <span className="font-bold text-[46px] leading-[1.2] text-[#FCFCFD]">
            <Counter from={0} to={5} duration={2} suffix="+" />
          </span>
          <span className="font-light text-[22px] leading-[1.2] text-[#ECEDEF] text-center">Years Building</span>
        </div>

        <div className="flex flex-col items-center gap-[8px]">
          <span className="font-bold text-[46px] leading-[1.2] text-[#FCFCFD]">
            <Counter from={0} to={20} duration={2} suffix="+" />
          </span>
          <span className="font-light text-[22px] leading-[1.2] text-[#ECEDEF] text-center">Projects done</span>
        </div>

        <div className="flex flex-col items-center gap-[8px]">
          <span className="font-bold text-[46px] leading-[1.2] text-[#FCFCFD] text-center whitespace-nowrap">
            Cross Functional
          </span>
          <span className="font-light text-[22px] leading-[1.2] text-[#ECEDEF] text-center">Design × Product × Operations</span>
        </div>

      </div>
    </section>
  );
}
