import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';
import BackButton from '@/components/UI/BackButton/BackButton';

const experiencesData: Record<string, any> = {
  picatip: {
    title: 'Picatip',
    subtitle: 'AI Decision Intelligence (B2B,B2C)',
    role: 'Product Designer → Product Manager (Design & Strategy)',
    desc: 'Started as a Product Designer, shaping the experience of an AI-driven platform for market forecasting and decision-making.\nProgressed into Product Management, structuring the product, defining features, and aligning predictive systems with clear user workflows and decision logic.',
    link: 'www.picatip.com',
    logo: '/images/experiences/picatip.avif',
    impact: null
  },
  popkup: {
    title: 'Popkup',
    subtitle: 'Commerce (B2B,B2C)',
    role: 'UI/UX Designer → Lead Product Designer → Product Manager (Strategy & Direction)',
    desc: 'Joined as a founding UI/UX designer, shaping the core experience of a creator-driven affiliate commerce platform.\nProgressed into Lead Product Designer, refining key user flows, improving usability, and building a scalable product structure.\nNow working across product direction, contributing to feature decisions, product systems, and growth-focused execution.',
    link: 'www.popkup.com',
    logo: '/images/experiences/popkup.avif',
    impact: 'Helped evolve Popkup from an early concept into a structured, scalable product.'
  },
  paymyfees: {
    title: 'PayMyFees',
    subtitle: 'Financial Infrastructure for Education Systems',
    role: 'Product Designer → Growth & Product (Design & Strategy)',
    desc: 'Started as a Product Designer, working on the core experience of a fintech + EdTech platform providing financial access for students, schools, and educators.\nExpanded into growth and product, designing web app experiences alongside marketing assets, campaign visuals, and communication systems that supported user acquisition and engagement.',
    link: '',
    logo: '/images/experiences/paymyfees.avif',
    impact: 'Helped align product experience with growth combining UI/UX, web design, and marketing execution into a unified system.'
  },
  '1706media': {
    title: '1706 Media',
    subtitle: '',
    role: 'Product Designer → Creative Director (Design & Systems)',
    desc: 'Started as a Product Designer, working on visual systems and merchandise outputs for campaign-driven projects.\nProgressed into Creative Direction, leading the design and structure of production workflows shaping how campaign visuals, merchandise, and brand assets were created and executed at scale.',
    link: '',
    logo: '/images/experiences/1706media.avif',
    impact: 'Built structured creative systems that improved consistency and scalability across campaign production.'
  },
  irixinc: {
    title: 'Irix Inc',
    subtitle: 'Apparell (B2B,B2C)',
    role: 'Product Designer',
    desc: 'Started as a Product Designer, working on apparel product concepts and defining how ideas were translated into structured design outputs across collections.\nExpanded into product and operations, taking ownership of how products moved through the system from design development into production coordination and final execution.\nLed the operational flow behind product delivery, working closely across design decisions, production timelines, and launch readiness to ensure consistency from concept to final release.',
    link: '',
    logo: '/images/experiences/irixinc.avif',
    impact: 'Developed hands-on experience in product operations by connecting design, production, and launch into a structured and repeatable system for an apparel brand.'
  },
  altermie: {
    title: 'Altermie',
    subtitle: 'Ed Tech (B2B,B2C)',
    role: 'Product Designer',
    desc: 'Led product design and brand experience initiatives at Altermie, a tech education platform focused on digital skills, mentorship, and career development.\nWorked across product, growth, and operations to create seamless learning experiences and strengthen the connection between education and employment opportunities.',
    link: '',
    logo: '/images/experiences/altermie.avif',
    impact: 'Helped build a scalable learning ecosystem that empowers aspiring tech professionals through practical training, community, and internship pathways.'
  }
};

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = experiencesData[slug] || {
    title: slug,
    subtitle: '',
    role: '',
    desc: '',
    link: '',
    logo: '/images/experiences/1706media.avif',
    impact: null
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      
      <section className="relative w-full min-h-[990px] pt-[150px] pb-[100px] flex flex-col items-center bg-[#030303] overflow-hidden">
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1143px] mx-auto px-6 flex flex-col items-start">
          
          {/* Top Bar with Back Button and Title */}
          <div className="relative flex items-center justify-center w-full mb-[60px] md:mb-[100px]">
            <div className="absolute left-0">
              <BackButton />
            </div>
            <h1 className="font-rufina font-normal text-[35px] leading-[43px] text-white text-center capitalize px-12">
              {data.title}
            </h1>
          </div>

          <div className="flex flex-col items-start w-full">
            
            {/* Logo */}
            <div className="relative w-[124px] h-[124px] rounded-[15px] border border-[#D35A05] overflow-hidden mb-[22px]">
              <Image src={data.logo} alt={data.title} fill className="object-cover" />
            </div>

            {/* Subtitle */}
            {data.subtitle && (
              <h2 className="font-rufina font-normal text-[35px] max-md:text-[28px] leading-[43px] max-md:leading-[34px] text-white text-left mb-[23px]">
                {data.subtitle}
              </h2>
            )}

            {/* Link */}
            {data.link && (
              <a href={`https://${data.link}`} target="_blank" rel="noopener noreferrer" className="font-rufina font-normal text-[25px] max-md:text-[20px] leading-[31px] text-white text-left underline mb-[36px] hover:text-[#D35A05] transition-colors">
                {data.link}
              </a>
            )}

            {/* Description */}
            <div className="max-w-[1143px] w-full mt-4">
              <p className="font-rufina font-normal text-[25px] max-md:text-[18px] leading-[31px] max-md:leading-[26px] text-white text-left whitespace-pre-line">
                <span className="font-bold">{data.role}</span> <br/><br/>
                {data.desc}
              </p>
              
              {data.impact && (
                <p className="font-rufina font-normal text-[25px] max-md:text-[18px] leading-[31px] max-md:leading-[26px] text-white text-left mt-8 whitespace-pre-line">
                  <span className="font-bold">Impact</span> <br/><br/>
                  {data.impact}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
