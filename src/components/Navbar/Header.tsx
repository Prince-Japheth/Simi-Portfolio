'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isAboutPage = pathname === '/about' || pathname.startsWith('/experience') || pathname.startsWith('/case-study');
  const [show, setShow] = useState(isAboutPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isAboutPage) {
      setShow(true);
    } else {
      setShow(scrollY.get() > 400);
    }
  }, [isAboutPage, scrollY]);

  // Header drops in when we've scrolled past 400px (around when SIMI finishes scaling)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isAboutPage) return;
    if (latest > 400 && !show) {
      setShow(true);
    } else if (latest <= 400 && show) {
      setShow(false);
      setMenuOpen(false);
    }
  });

  return (
    <motion.header
      initial={{ y: isAboutPage ? 0 : -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ type: "spring", damping: 26, stiffness: 100, mass: 0.9 }}
      className="fixed left-0 right-0 top-[19px] z-50 mx-auto flex w-full max-w-[1512px] flex-col md:flex-row items-center justify-between px-6 md:px-[199px] pointer-events-none"
    >
      <div className="flex w-full md:w-auto items-center justify-between pointer-events-auto">
        <Link href="/" className="h-[31px] w-[63px] shrink-0 block cursor-pointer">
          <Logo />
        </Link>
        
        <button 
          className="md:hidden flex items-center justify-center p-2 text-white bg-black/20 backdrop-blur-md rounded-md border border-white/20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <nav className="hidden md:flex flex-row items-center justify-between gap-20 px-[30px] py-[14px] bg-gradient-to-r from-[#D5543C] via-[#FF7418] to-black rounded-[18px] pointer-events-auto shadow-lg">
        <Link href="/about" className="text-[15px] font-semibold text-white hover:text-white/80 transition-colors">About</Link>
        <Link href="/experience" className="text-[15px] font-semibold text-white hover:text-white/80 transition-colors">Experience</Link>
        <Link href="/#outside" className="text-[15px] font-semibold text-white hover:text-white/80 transition-colors whitespace-nowrap">Services</Link>
      </nav>

      <button className="hidden md:flex flex-row items-center justify-center gap-[3px] w-[103px] h-[44px] bg-[#FF7418] border border-[#FF7418] rounded-[20px] pointer-events-auto hover:bg-[#D35A05] transition-colors shadow-lg group">
        <span className="text-[15px] font-bold text-white leading-tight">Contact</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 16C7.80729 16 7.14323 15.9115 6.50781 15.7344C5.8724 15.5573 5.27344 15.3073 4.71094 14.9844C4.14844 14.6615 3.64323 14.2708 3.19531 13.8125C2.7474 13.3542 2.35677 12.8464 2.02344 12.2891C1.6901 11.7318 1.4375 11.1354 1.26562 10.5C1.09375 9.86458 1.00521 9.19792 1 8.5C1 7.80729 1.08854 7.14323 1.26562 6.50781C1.44271 5.8724 1.69271 5.27344 2.01562 4.71094C2.33854 4.14844 2.72917 3.64323 3.1875 3.19531C3.64583 2.7474 4.15365 2.35677 4.71094 2.02344C5.26823 1.6901 5.86458 1.4375 6.5 1.26562C7.13542 1.09375 7.80208 1.00521 8.5 1C9.19271 1 9.85677 1.08854 10.4922 1.26562C11.1276 1.44271 11.7266 1.69271 12.2891 2.01562C12.8516 2.33854 13.3568 2.72917 13.8047 3.1875C14.2526 3.64583 14.6432 4.15365 14.9766 4.71094C15.3099 5.26823 15.5625 5.86458 15.7344 6.5C15.9062 7.13542 15.9948 7.80208 16 8.5C16 9.19271 15.9115 9.85677 15.7344 10.4922C15.5573 11.1276 15.3073 11.7266 14.9844 12.2891C14.6615 12.8516 14.2708 13.3568 13.8125 13.8047C13.3542 14.2526 12.8464 14.6432 12.2891 14.9766C11.7318 15.3099 11.1354 15.5625 10.5 15.7344C9.86458 15.9062 9.19792 15.9948 8.5 16ZM8.5 2C7.90104 2 7.32552 2.07812 6.77344 2.23438C6.22135 2.39062 5.70573 2.60938 5.22656 2.89062C4.7474 3.17188 4.30729 3.51042 3.90625 3.90625C3.50521 4.30208 3.16667 4.73958 2.89062 5.21875C2.61458 5.69792 2.39583 6.21615 2.23438 6.77344C2.07292 7.33073 1.99479 7.90625 2 8.5C2 9.09896 2.07812 9.67448 2.23438 10.2266C2.39062 10.7786 2.60938 11.2943 2.89062 11.7734C3.17188 12.2526 3.51042 12.6927 3.90625 13.0938C4.30208 13.4948 4.73958 13.8333 5.21875 14.1094C5.69792 14.3854 6.21615 14.6042 6.77344 14.7656C7.33073 14.9271 7.90625 15.0052 8.5 15C9.09896 15 9.67448 14.9219 10.2266 14.7656C10.7786 14.6094 11.2943 14.3906 11.7734 14.1094C12.2526 13.8281 12.6927 13.4896 13.0938 13.0938C13.4948 12.6979 13.8333 12.2604 14.1094 11.7812C14.3854 11.3021 14.6042 10.7839 14.7656 10.2266C14.9271 9.66927 15.0052 9.09375 15 8.5C15 7.90104 14.9219 7.32552 14.7656 6.77344C14.6094 6.22135 14.3906 5.70573 14.1094 5.22656C13.8281 4.7474 13.4896 4.30729 13.0938 3.90625C12.6979 3.50521 12.2604 3.16667 11.7812 2.89062C11.3021 2.61458 10.7839 2.39583 10.2266 2.23438C9.66927 2.07292 9.09375 1.99479 8.5 2ZM10.3203 9H5V8H10.3203L8.14844 5.85938L8.85156 5.14062L12.2422 8.5L8.85156 11.8594L8.14844 11.1406L10.3203 9Z" fill="white" />
        </svg>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[60px] left-6 right-6 flex flex-col gap-4 p-5 bg-[#0E0B0E] border border-white/10 pointer-events-auto shadow-2xl rounded-[18px]"
          >
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[16px] font-semibold text-white hover:text-white/80 transition-colors">About</Link>
            <Link href="/experience" onClick={() => setMenuOpen(false)} className="text-[16px] font-semibold text-white hover:text-white/80 transition-colors">Experience</Link>
            <Link href="/#outside" onClick={() => setMenuOpen(false)} className="text-[16px] font-semibold text-white hover:text-white/80 transition-colors">Services</Link>
            <div className="h-[1px] w-full bg-white/10 my-2" />
            <button className="flex flex-row items-center justify-center gap-2 w-full h-[44px] bg-[#FF7418] rounded-[20px] hover:bg-[#D35A05] transition-colors text-white font-bold text-[15px]">
              Contact
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
