'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { type TimelineMilestone } from '@/lib/data';

interface TimelineVerticalProps {
  milestones: TimelineMilestone[];
}

export default function TimelineVertical({ milestones }: TimelineVerticalProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative">
      {/* Central line - draws on scroll */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-dynazur-blue/10">
        <motion.div
          className="w-full bg-dynazur-blue/40 origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <AnimateOnScroll
            key={milestone.year}
            variant={index % 2 === 0 ? 'slideInFromLeft' : 'slideInFromRight'}
            delay={index * 0.15}
          >
            <div className={`relative flex items-start gap-6 md:gap-0 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Content */}
              <div className={`flex-1 md:w-[calc(50%-32px)] ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <h4 className="font-bold text-dynazur-black text-lg mb-2">{milestone.title}</h4>
                <p className="text-dynazur-text text-sm leading-relaxed">{milestone.description}</p>
              </div>

              {/* Year badge - yellow pill */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <TimelineBadge year={milestone.year} />
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block flex-1 md:w-[calc(50%-32px)]" />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

function TimelineBadge({ year }: { year: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-dynazur-yellow text-dynazur-black font-extrabold text-xs rounded-full px-4 py-1.5 whitespace-nowrap shadow-sm"
    >
      {year}
    </motion.div>
  );
}
