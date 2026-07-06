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
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-20 md:gap-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                show: { 
                  opacity: 1, 
                  transition: { staggerChildren: 0.15, delayChildren: index * 0.15 } 
                }
              }}
              className="flex flex-row items-end justify-between gap-2 md:gap-8 w-full group"
            >
              <div className="flex flex-col gap-3 md:gap-6 max-w-[500px]">
                <div className="flex flex-col overflow-hidden perspective-[1000px]">
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 40, rotateX: 90 },
                      show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 14 } }
                    }}
                    className="text-[#FF7112] text-[16px] md:text-[30px] leading-[1.2] md:leading-[38px] origin-bottom inline-block"
                  >
                    {step.num}
                  </motion.span>
                  <motion.h4 
                    variants={{
                      hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
                      show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 100, damping: 12 } }
                    }}
                    className="text-white text-[16px] md:text-[30px] leading-[1.2] md:leading-[38px]"
                  >
                    {step.title}
                  </motion.h4>
                </div>
                
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 0.9, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="text-white text-[11px] md:text-[18px] leading-[1.4] md:leading-[28px]"
                >
                  {step.desc}
                </motion.p>
              </div>

              {/* Decorative Line */}
              <motion.div 
                variants={{
                  hidden: { scaleY: 0, opacity: 0 },
                  show: { scaleY: 1, opacity: 0.8, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="w-[1px] md:w-[2px] h-[70px] md:h-[153px] bg-gradient-to-t from-[#FF7112] to-transparent shrink-0 origin-bottom" 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
