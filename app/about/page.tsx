import React from 'react';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import AboutHeroSection from '@/components/AboutHero/AboutHeroSection';
import AboutStatsSection from '@/components/AboutStats/AboutStatsSection';
import ExperienceSection from '@/components/Experience/ExperienceSection';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      <AboutHeroSection />
      <AboutStatsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
