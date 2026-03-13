'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HandDrawnCircleProps {
  children: React.ReactNode;
  color?: 'blue' | 'yellow' | string;
  className?: string;
}

const colorPresets = {
  blue: { stroke: 'rgba(7, 30, 252, 0.5)', width: 2.5, freq: '0.05' },
  yellow: { stroke: 'rgba(255, 213, 79, 0.7)', width: 3, freq: '0.015 0.04' },
};

let circleId = 0;

export default function HandDrawnCircle({
  children,
  color = 'blue',
  className = '',
}: HandDrawnCircleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const idRef = useRef(`roughen-${++circleId}`);
  const preset = color in colorPresets
    ? colorPresets[color as keyof typeof colorPresets]
    : { stroke: color, width: 2.5, freq: '0.05' };

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.ellipse
          cx="100"
          cy="40"
          rx="90"
          ry="32"
          stroke={preset.stroke}
          strokeWidth={preset.width}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
          style={{
            filter: `url(#${idRef.current})`,
          }}
        />
        <defs>
          <filter id={idRef.current}>
            <feTurbulence type="turbulence" baseFrequency={preset.freq} numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </span>
  );
}
