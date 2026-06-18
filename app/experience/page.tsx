import React from 'react';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import ExperienceSection from '@/components/Experience/ExperienceSection';

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
