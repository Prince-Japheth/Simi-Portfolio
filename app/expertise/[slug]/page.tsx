import React from 'react';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import ExpertiseDetailContent from '@/components/Expertise/ExpertiseDetailContent';

const expertisesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    showcaseImages: string[];
  }
> = {
  'product-design-uiux': {
    title: 'Product Design (UIUX)',
    subtitle: 'Designing intuitive digital experiences, scalable systems, and products (across mobile & web) that align user needs with business goals.',
    showcaseImages: [
      '/images/designing-products/040cc821f200d938c272d3c645b0e7dd3a8a421f.avif',
      '/images/designing-products/079aa6ed1b5bcaf491d65ff13537adfbafad8031.avif',
      '/images/designing-products/0b029ae812a877d20de0610c80c190bcc604f40b.avif',
      '/images/designing-products/1b72bf469d66c85f44bcff2ee2cd1017f31c4e34.avif',
      '/images/designing-products/2443c73db9736b3cf93458d0dae3.avif'
    ]
  },
  'ux-research': {
    title: 'UX Research',
    subtitle: 'Uncovering user insights through interviews, usability testing, and surveys to inform design decisions and drive product success.',
    showcaseImages: [
      '/images/concept-to-product/Group 1000005866.avif',
      '/images/designing-products/5a3d4f59659812f602a2e038f70e0c386940d833.avif',
      '/images/designing-products/700b0ea7354fd23589f39106df853935b1e7e485.avif',
      '/images/designing-products/78b0d9bb670acc476daddebde374e20a5df610c0.avif',
      '/images/designing-products/796f4d60fba0bc918dc33c1bbe9d0415e53bb839.avif'
    ]
  },
  'ux-writing': {
    title: 'UX Writing',
    subtitle: 'Crafting clear, concise, and user-centric copy that guides users through products and enhances the overall experience.',
    showcaseImages: [
      '/images/designing-products/2de102a6893d665856dc48013b9a3649ce02d2b9.avif',
      '/images/designing-products/baff65d4c2c0845ed0769a80a97cc380f2e9df29.avif',
      '/images/designing-products/040cc821f200d938c272d3c645b0e7dd3a8a421f.avif',
      '/images/designing-products/079aa6ed1b5bcaf491d65ff13537adfbafad8031.avif',
      '/images/designing-products/0b029ae812a877d20de0610c80c190bcc604f40b.avif'
    ]
  },
  'growth-campaign-design': {
    title: 'Growth & Campaign Design',
    subtitle: 'Creating high-converting campaign assets, landing pages, and marketing materials that drive user acquisition and engagement.',
    showcaseImages: [
      '/images/showcase/1f5891bc17c7fde57be5030a5380dce3dc730c41.avif',
      '/images/showcase/20c134e16c3bccf20ae2cbda96f21df43f36fff5.avif',
      '/images/showcase/252272175efd029df8daa49ee56ef50773d346f2.avif',
      '/images/showcase/4324dc3078b363b6d15f4c9fb8740659f9899e75.avif',
      '/images/showcase/7bb6e2a46a621d7e05ec2bf5d36fe6e346ff64ab.avif'
    ]
  },
  'brand-experience-design': {
    title: 'Brand Experience Design',
    subtitle: 'Building cohesive brand identities and experiences that resonate with audiences and create lasting impressions.',
    showcaseImages: [
      '/images/case-studies/homifyproject.avif',
      '/images/case-studies/cardly.avif',
      '/images/case-studies/ScheweppesProject.avif',
      '/images/experiences/popkup.avif',
      '/images/experiences/picatip.avif'
    ]
  }
};

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = expertisesData[slug] || {
    title: slug,
    subtitle: '',
    showcaseImages: []
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      <ExpertiseDetailContent data={data} />
      <Footer />
    </main>
  );
}
