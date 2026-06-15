import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Navbar/Header';
import Footer from '@/components/Footer/Footer';

export default function ExperienceDetail({ params }: { params: { slug: string } }) {
  const data = {
    title: params.slug === 'picatip' ? 'Picatip' : params.slug,
    subtitle: 'AI Decision Intelligence (B2B,B2C)',
    role: 'Product Designer → Product Manager (Design & Strategy)',
    desc: 'Started as a Product Designer, shaping the experience of an AI-driven platform for market forecasting and decision-making. Progressed into Product Management, structuring the product, defining features, and aligning predictive systems with clear user workflows and decision logic.',
    link: 'www.picatip.com',
    logo: '/images/experiences/1706media.avif',
  };

  if (params.slug === 'paymyfees') data.logo = '/images/experiences/paymyfees.avif';
  if (params.slug === 'popkup') data.logo = '/images/experiences/popkup.avif';
  if (params.slug === 'altermie') data.logo = '/images/experiences/altermie.avif';
  if (params.slug === 'irixinc') data.logo = '/images/experiences/irixinc.avif';

  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Header />
      
      <section className="relative w-full min-h-[990px] pt-[150px] pb-[100px] flex flex-col items-center bg-[#030303] overflow-hidden">
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1143px] mx-auto px-6 flex flex-col items-start">
          
          {/* Top Bar with Back Button and Title */}
          <div className="flex flex-row items-center w-full mb-[60px] md:mb-[100px] gap-8">
            <Link href="/about" className="flex items-center justify-center shrink-0 border border-transparent rounded-[4px] hover:bg-white/10 transition-colors">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="35.5" y="0.500002" width="35" height="35" rx="3.5" transform="rotate(90 35.5 0.500002)" stroke="#989898"/>
                <path d="M22.4999 27C22.4999 27 13.5 20.3717 13.5 18C13.5 15.6282 22.5 9 22.5 9" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <h1 className="font-rufina font-normal text-[35px] leading-[43px] text-white text-left capitalize">
              {data.title}
            </h1>
          </div>

          <div className="flex flex-col items-start w-full">
            
            {/* Logo */}
            <div className="relative w-[124px] h-[124px] rounded-[15px] border border-[#D35A05] overflow-hidden mb-[22px]">
              <Image src={data.logo} alt={data.title} fill className="object-cover" />
            </div>

            {/* Subtitle */}
            <h2 className="font-rufina font-normal text-[35px] max-md:text-[28px] leading-[43px] max-md:leading-[34px] text-white text-left mb-[23px]">
              {data.subtitle}
            </h2>

            {/* Link */}
            <a href={`https://${data.link}`} target="_blank" rel="noopener noreferrer" className="font-rufina font-normal text-[25px] max-md:text-[20px] leading-[31px] text-white text-left underline mb-[36px] hover:text-[#D35A05] transition-colors">
              {data.link}
            </a>

            {/* Description */}
            <div className="max-w-[1143px] w-full">
              <p className="font-rufina font-normal text-[25px] max-md:text-[18px] leading-[31px] max-md:leading-[26px] text-white text-left">
                <span className="font-bold">{data.role}</span> <br/><br/>
                {data.desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
