import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import MotionDesignPageContent from '@/components/MotionDesign/MotionDesignPageContent';

export const metadata: Metadata = {
  title: 'Simi | Motion Design & Product Animation',
  description:
    'Explore motion design showcases, product UI choreography, 3D kinetic branding, and interactive micro-animations crafted by Simi.',
  openGraph: {
    title: 'Simi | Motion Design & Product Animation',
    description:
      'Explore motion design showcases, product UI choreography, 3D kinetic branding, and interactive micro-animations crafted by Simi.',
    images: [
      {
        url: '/simihero.avif',
        width: 1200,
        height: 630,
        alt: 'Simi Motion Design Portfolio',
      },
    ],
  },
};

export default function MotionDesignPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      <MotionDesignPageContent />
      <Footer />
    </main>
  );
}
