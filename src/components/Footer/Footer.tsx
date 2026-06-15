'use client';

import React, { useState } from 'react';
import Logo from '../Navbar/Logo';
import localFont from 'next/font/local';

const sora = localFont({ src: '../../../public/fonts/Sora/Sora-VariableFont_wght.ttf' });

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Therealsimi.mo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#030303] flex flex-col items-center py-12 md:py-[42px] px-6 md:px-[164px]">
      <div className="w-full max-w-[1184px] flex flex-col gap-12 md:gap-[52px]">
        
        {/* Main Content Row */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12 md:gap-[17px]">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start gap-[15px] w-full md:w-[369px]">
            <div className="h-[31px] w-[63px] shrink-0">
              <Logo />
            </div>
            <p className={`text-white text-[22px] leading-[28px] ${sora.className}`} style={{ fontFamily: sora.style.fontFamily }}>
              Building products with clarity, purpose, and intention.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col items-start gap-[22px] w-full md:w-[384px]">
            <h3 className="text-white font-semibold text-[20px] leading-[24px]">
              Services
            </h3>
            <div className="flex flex-col gap-[10px]">
              {['Product Design', 'UX Researcher', 'UX writing', 'Growth & Campaign Design', 'Creative Director'].map((service, idx) => (
                <span key={idx} className="text-white font-medium text-[16px] leading-[20px]">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="flex flex-col items-start gap-[34px] w-full md:w-[395px]">
            
            {/* Contact */}
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-white font-semibold text-[20px] leading-[24px]">
                Contact
              </h3>
              <div className="flex flex-row items-center justify-between bg-[#E7E7E7] border-[3px] border-[#FF7112] rounded-[20px] h-[64px] md:h-[72px] w-full pl-4 md:pl-6 overflow-hidden">
                <span className="text-black font-medium text-[13px] md:text-[15px] whitespace-nowrap tracking-tight truncate">
                  Therealsimi.mo@gmail.com
                </span>
                <button 
                  onClick={handleCopy}
                  className="w-[80px] md:w-[116px] h-full flex items-center justify-center shrink-0 transition-opacity hover:opacity-80 relative rounded-l-[20px]"
                  style={{ background: '#FF7112' }}
                  aria-label="Copy email"
                >
                  {copied ? (
                    <span className="text-black font-semibold text-[12px] md:text-[16px]">Copied!</span>
                  ) : (
                    <svg className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-white font-semibold text-[14px] leading-[17px]">
                Socials
              </h3>
              <div className="flex flex-row gap-4 items-center">
                <a href="#" className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
                  <div className="w-[28px] h-[28px] border-[2px] border-currentColor rounded-[6px] flex items-center justify-center">
                    <span className="font-bold text-[20px]">in</span>
                  </div>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex justify-center items-center mt-4">
          <p className="text-white text-[20px] leading-[25px]">
            © Simisola Orunsolu 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
