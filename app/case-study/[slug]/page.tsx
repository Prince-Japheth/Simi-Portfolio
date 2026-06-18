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
    heroImage: '/images/case-studies/details/cardly/hero.avif',
    gallery: [
      '/images/case-studies/details/cardly/gallery-1.avif',
      '/images/case-studies/details/cardly/gallery-2.avif',
    ],
  },
  homify: {
    title: 'Homify',
    description:
      'Homify is a rental platform designed to simplify how people discover, evaluate, and secure apartments. The product focused on reducing the friction often associated with property searches by creating a more transparent and user-friendly rental experience. As the Product Designer, I worked on improving apartment discovery, property listing experiences, search and filtering systems, and the overall booking journey. The goal was to help users make informed housing decisions faster while creating a seamless experience from property exploration to inquiry.',
    heroImage: '/images/case-studies/details/homify/hero.avif',
    gallery: [
      '/images/case-studies/details/homify/gallery-1.avif',
      '/images/case-studies/details/homify/gallery-2.avif',
    ],
  },
  scheweppes: {
    title: 'Scheweppes',
    description:
      'Schweppes is a globally recognized beverage brand known for its premium mixers and sparkling drinks. This concept explored how digital design could elevate product discovery, brand engagement, and consumer interaction through a modern, visually-driven experience. The focus was on translating Schweppes\' heritage, sophistication, and vibrant product range into an engaging digital journey that strengthened brand perception and encouraged product exploration.',
    heroImage: '/images/case-studies/details/scheweppes/hero.avif',
    gallery: [
      '/images/case-studies/details/scheweppes/gallery-1.avif',
      '/images/case-studies/details/scheweppes/gallery-2.avif',
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
    heroImage: `/images/case-studies/details/${slug}/hero.avif`,
    gallery: [
      `/images/case-studies/details/${slug}/gallery-1.avif`,
      `/images/case-studies/details/${slug}/gallery-2.avif`,
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
