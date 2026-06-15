'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const sora = localFont({ src: '../../../public/fonts/Sora/Sora-VariableFont_wght.ttf' });

export default function ProcessSection() {
  const steps = [
    { 
      num: '01', 
      title: 'Discover', 
      desc: 'Every product challenge starts with context. I focus on understanding users, business objectives, constraints, and opportunities before exploring solutions.' 
    },
    { 
      num: '02', 
      title: 'Structure', 
      desc: 'I translate complexity into clear systems, user flows, and product frameworks that create alignment across teams and stakeholders.' 
    },
    { 
      num: '03', 
      title: 'Design', 
      desc: 'With the foundation in place, I design experiences that are intuitive, scalable, and aligned with both user needs and product goals.' 
    },
    { 
      num: '04', 
      title: 'Refine', 
      desc: 'Products improve through feedback, iteration, and execution. I continuously test, learn, and optimize to drive better outcomes over time.' 
    }
  ];

  return (
    <section className={`relative w-full py-20 md:py-32 bg-[#030303] overflow-hidden ${sora.className}`} style={{ fontFamily: sora.style.fontFamily }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col gap-12 md:gap-16">
        
        {/* Section Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-[23px] font-normal tracking-wide"
        >
          How I work
        </motion.h3>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-row items-end justify-between gap-4 md:gap-8 w-full"
            >
              <div className="flex flex-col gap-6 max-w-[500px]">
                <div className="flex flex-col">
                  <span className="text-[#FF7112] text-[30px] leading-[38px]">{step.num}</span>
                  <h4 className="text-white text-[30px] leading-[38px]">{step.title}</h4>
                </div>
                
                <p className="text-white text-[18px] leading-[28px] opacity-90">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="w-[1px] h-[100px] md:h-[153px] bg-[#FF7112] shrink-0 opacity-80" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
