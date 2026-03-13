'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HandDrawnUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

let underlineId = 0;

export default function HandDrawnUnderline({
  children,
  color = '#FFD54F',
  className = '',
}: HandDrawnUnderlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const idRef = useRef(`underline-rough-${++underlineId}`);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -bottom-2 left-0 w-full h-4 pointer-events-none"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow path for depth */}
        <motion.path
          d="M2 10 C30 3, 50 15, 80 7 C110 -1, 140 14, 170 6 C185 2, 195 8, 198 6"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          style={{ filter: `url(#${idRef.current})` }}
        />
        {/* Main underline with more wave amplitude */}
        <motion.path
          d="M2 9 C30 2, 50 14, 80 6 C110 -2, 140 13, 170 5 C185 1, 195 7, 198 5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          style={{ filter: `url(#${idRef.current})` }}
        />
        <defs>
          <filter id={idRef.current}>
            <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </span>
  );
}
