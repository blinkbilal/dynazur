'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import SectionCard from '@/components/ui/SectionCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials, brandLogos } from '@/lib/data';

function LogoMarquee() {
  const doubled = [...brandLogos, ...brandLogos];

  return (
    <div className="overflow-hidden py-6">
      <AnimateOnScroll>
        <p className="text-center text-sm font-bold text-dynazur-text/60 uppercase tracking-widest mb-6">
          Companies That Trust Us
        </p>
      </AnimateOnScroll>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        >
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 w-28 h-14 rounded-lg flex items-center justify-center px-3"
              style={{ backgroundColor: logo.color }}
            >
              <span className="text-white text-xs font-bold text-center leading-tight whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ReviewsClient() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-6">
      {/* Header */}
      <div className="text-center mb-4">
        <AnimateOnScroll>
          <h1 className="text-3xl md:text-5xl font-black text-dynazur-black mb-4">
            What Our <HandDrawnCircle>Customers</HandDrawnCircle> Say
          </h1>
          <p className="text-dynazur-text leading-relaxed max-w-lg mx-auto">
            Real stories from real people. Our customers span 12 countries and they love sharing their Dynazur experience.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Logo marquee */}
      <SectionCard>
        <LogoMarquee />
      </SectionCard>

      {/* Testimonials */}
      <SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.id} variant="zoomIn" delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionCard>

      {/* Blue CTA */}
      <div className="bg-dynazur-blue rounded-section px-6 md:px-16 py-14 md:py-20 text-center relative overflow-hidden">
        <Image src="/logos/mark-milky-gray.png" alt="" width={834} height={1228} className="absolute -right-6 -bottom-8 h-48 md:h-64 w-auto opacity-[0.07] pointer-events-none select-none" aria-hidden="true" />
        <AnimateOnScroll variant="zoomIn">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10">Join Thousands of Happy Customers</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Discover the products people are raving about.</p>
          <div className="relative z-10">
            <a href="/shop" className="inline-flex items-center justify-center px-7 py-3 bg-dynazur-yellow text-dynazur-black font-bold rounded-btn transition-all duration-300 hover:brightness-90 hover:shadow-md text-[15px] active:scale-[0.97]">
              Shop Now
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
