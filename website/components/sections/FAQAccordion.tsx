'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { faqItems } from '@/lib/data';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <AnimateOnScroll key={index} variant="fadeInUp" delay={index * 0.05}>
          <div className="border border-dynazur-gray/30 rounded-card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 text-left hover:bg-dynazur-bg/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-bold text-dynazur-black text-[15px] pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-dynazur-text shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5">
                <p className="text-dynazur-text text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
