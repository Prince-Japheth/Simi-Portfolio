import React from 'react';
import Footer from '@/components/Footer/Footer';
import ExpertiseDetailContent from '@/components/Expertise/ExpertiseDetailContent';

const expertisesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    showcaseImages: string[];
    defaultActiveIndex?: number;
  }
> = {
  'product-design-uiux': {
    title: 'Product Design (UIUX)',
    subtitle: 'Designing intuitive digital experiences, scalable systems, and products (across mobile & web) that align user needs with business goals.',
    showcaseImages: [
      '/images/dashboards/f09a94a79d3326567953f52c06428ef5d2087dc6.png',
      '/images/dashboards/105a71f43833b98d54c3b2d762fa175de06f972b.avif',
      '/images/dashboards/6b613f7979cf688f75a93afe86ab6ede7fc12beb.avif',
      '/images/dashboards/7eb6cd4816fe1a5293fc711c145e32ba94ffce2a.avif',
      '/images/dashboards/978e7226be9ba9fc7475b4b3dfb625e6d6d025db.avif',
      '/images/showcase/1f5891bc17c7fde57be5030a5380dce3dc730c41.avif',
      '/images/showcase/20c134e16c3bccf20ae2cbda96f21df43f36fff5.avif',
      '/images/showcase/252272175efd029df8daa49ee56ef50773d346f2.avif',
      '/images/showcase/4324dc3078b363b6d15f4c9fb8740659f9899e75.avif',
      '/images/showcase/7bb6e2a46a621d7e05ec2bf5d36fe6e346ff64ab.avif'
    ]
  },
  'ux-research': {
    title: 'UX Research',
    subtitle: 'Uncovering user insights through interviews, usability testing, and surveys to inform design decisions and drive product success.',
    showcaseImages: [
      '/images/expertise/ux-reseach/picatip-ux-research.avif',
      '/images/expertise/ux-reseach/rootrise-ux-research.avif',
      '/images/expertise/ux-reseach/ux-research.avif'
    ]
  },
  'ux-writing': {
    title: 'UX Writing',
    subtitle: 'Crafting clear, concise, and user-centric copy that guides users through products and enhances the overall experience.',
    showcaseImages: [
      '/images/expertise/ux-writing/c88a08fdd9e23368b0dec75cd5978e0735d6921c.avif'
    ]
  },
  'growth-campaign-design': {
    title: 'Growth & Campaign Design',
    subtitle: 'Creating high-converting campaign assets, landing pages, and marketing materials that drive user acquisition and engagement.',
    defaultActiveIndex: 11,
    showcaseImages: [
      '/images/expertise/campaign-and-growth/0a7ee54f0efb59e606974aef620cf8ec4751f769.avif',
      '/images/expertise/campaign-and-growth/30a5ee962f315d8331bfa8a40558705b9c12fe62.avif',
      '/images/expertise/campaign-and-growth/414058759aa816f722bae899b1c92ddda26aa056.avif',
      '/images/expertise/campaign-and-growth/56d94f9905cda63b0327f971bb1dc22fe1eab16f.avif',
      '/images/expertise/campaign-and-growth/56ee22a7375cea67ced6a6a3b771425457b95d5b.avif',
      '/images/expertise/campaign-and-growth/66315fc4f31673af8a109aae4260c39057d849fb.avif',
      '/images/expertise/campaign-and-growth/702c5376c00e10a4cf12e22e8fe5ab31db248c3e.avif',
      '/images/expertise/campaign-and-growth/796f4d60fba0bc918dc33c1bbe9d0415e53bb839.avif',
      '/images/expertise/campaign-and-growth/84e0b73edf84a7aef0e0a5e53b33460b0e5039d0.avif',
      '/images/expertise/campaign-and-growth/923db349e5dc21a1cdaf5579153b4e8ed2784dad.avif',
      '/images/expertise/campaign-and-growth/939b7b6ee19d61c81280e6591fbeb8da074f23b2.avif',
      '/images/expertise/campaign-and-growth/a81765e8d2c1462a0024e837085fcf3e3a9e2021.avif',
      '/images/expertise/campaign-and-growth/ba94761b54d8e1ed1d6c3fdc6b886bfe93e19bec.avif',
      '/images/expertise/campaign-and-growth/e0af5695bfca069eda55967c9913805a3ceacf00.avif',
      '/images/expertise/campaign-and-growth/e9da18312d4f759fcc73a73e7a90d93c5918172f.avif'
    ]
  },
  'brand-experience-design': {
    title: 'Brand Experience Design',
    subtitle: 'Building cohesive brand identities and experiences that resonate with audiences and create lasting impressions.',
    showcaseImages: [
      '/images/expertise/brand-expertise-and-design/0b029ae812a877d20de0610c80c190bcc604f40b.avif',
      '/images/expertise/brand-expertise-and-design/1340b9ccb99879d5bd06935cb70fd36954e5fd06.avif',
      '/images/expertise/brand-expertise-and-design/226e6e2b0a581942b6dc353209d0b5ffa248c300.avif',
      '/images/expertise/brand-expertise-and-design/5a3d4f59659812f602a2e038f70e0c386940d833.avif',
      '/images/expertise/brand-expertise-and-design/5bb4c86cfb97915311197cf3959b4bc81683a896.avif',
      '/images/expertise/brand-expertise-and-design/700b0ea7354fd23589f39106df853935b1e7e485.avif',
      '/images/expertise/brand-expertise-and-design/7bdfb69f8f54df3cbcb5efa22a96941f233ed49a.avif',
      '/images/expertise/brand-expertise-and-design/8e908cf89895fdf88e44a3ece9c16847446cea38.avif',
      '/images/expertise/brand-expertise-and-design/c0d7c60a88a6bb0b2a5daba2946bc4598a0a245f.avif',
      '/images/expertise/brand-expertise-and-design/deda6da78b329ff842b23800be067166e215f8de.avif',
      '/images/expertise/brand-expertise-and-design/f1a117571ebd3f0b46a347f58578aa28165dafa8.avif'
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
      <ExpertiseDetailContent data={data} />
      <Footer />
    </main>
  );
}
