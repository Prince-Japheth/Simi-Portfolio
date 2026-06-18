import React from 'react';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import CaseStudyDetailContent from '@/components/CaseStudyDetail/CaseStudyDetailContent';

const caseStudiesData: Record<
  string,
  {
    title: string;
    description: string;
    heroImage: string;
    gallery: [string, string];
  }
> = {
  cardly: {
    title: 'Cardly',
    description:
      'Cardly is a digital payments platform built to make financial transactions more seamless, accessible, and user-friendly. As the Product Designer, I focused on simplifying key payment journeys, improving onboarding experiences, and creating intuitive user flows that reduced friction across the product. Through thoughtful interaction design and usability improvements, I helped translate complex financial processes into clear experiences that strengthened trust, improved accessibility, and supported user adoption.',
    heroImage: '/images/case-studies/details/cardly/hero.jpg',
    gallery: [
      '/images/case-studies/details/cardly/gallery-1.png',
      '/images/case-studies/details/cardly/gallery-2.png',
    ],
  },
  homify: {
    title: 'Homify',
    description:
      'Homify is a home services platform designed to connect homeowners with trusted professionals for repairs, maintenance, and renovations. As Product Designer, I shaped end-to-end booking flows, service discovery, and provider profiles to reduce friction and build confidence in every interaction. The work focused on clarity, trust signals, and mobile-first patterns that made finding and booking home services feel simple and reliable.',
    heroImage: '/images/case-studies/details/homify/hero.jpg',
    gallery: [
      '/images/case-studies/details/homify/gallery-1.png',
      '/images/case-studies/details/homify/gallery-2.png',
    ],
  },
  scheweppes: {
    title: 'Scheweppes',
    description:
      'Scheweppes is a brand-forward digital experience exploring bold visual identity and engaging product storytelling. I led the design direction across key screens, balancing playful aesthetics with clear navigation and conversion-focused layouts. The project emphasized motion, typography, and immersive visuals that captured brand personality while keeping the experience intuitive across devices.',
    heroImage: '/images/case-studies/details/scheweppes/hero.jpg',
    gallery: [
      '/images/case-studies/details/scheweppes/gallery-1.png',
      '/images/case-studies/details/scheweppes/gallery-2.png',
    ],
  },
};

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseStudiesData[slug] ?? {
    title: slug,
    description: '',
    heroImage: `/images/case-studies/details/${slug}/hero.jpg`,
    gallery: [
      `/images/case-studies/details/${slug}/gallery-1.png`,
      `/images/case-studies/details/${slug}/gallery-2.png`,
    ] as [string, string],
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      <CaseStudyDetailContent data={data} />
      <Footer />
    </main>
  );
}
