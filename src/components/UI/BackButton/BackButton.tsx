'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className={`flex items-center justify-center shrink-0 border border-transparent rounded-[4px] hover:bg-white/10 transition-colors ${className}`}
      aria-label="Go back"
    >
      <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35.5" y="0.500002" width="35" height="35" rx="3.5" transform="rotate(90 35.5 0.500002)" stroke="#989898"/>
        <path d="M22.4999 27C22.4999 27 13.5 20.3717 13.5 18C13.5 15.6282 22.5 9 22.5 9" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
