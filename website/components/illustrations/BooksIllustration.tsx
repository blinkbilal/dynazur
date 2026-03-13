'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function BooksIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stack of books */}
      <g transform="translate(80, 120)">
        <rect x="0" y="80" width="160" height="25" rx="3" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="-5" y="55" width="170" height="25" rx="3" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="5" y="30" width="150" height="25" rx="3" stroke="#071EFC" strokeWidth="2" fill="rgba(7, 30, 252, 0.06)" />
        <rect x="-2" y="5" width="164" height="25" rx="3" stroke="#050505" strokeWidth="2" fill="none" />
        {/* Book spines details */}
        <line x1="20" y1="80" x2="20" y2="105" stroke="#050505" strokeWidth="1" />
        <line x1="60" y1="55" x2="60" y2="80" stroke="#050505" strokeWidth="1" />
        <line x1="100" y1="30" x2="100" y2="55" stroke="#071EFC" strokeWidth="1" />
      </g>

      {/* Open book */}
      <g transform="translate(120, 40)">
        <path d="M80 0 C80 10, 60 15, 0 20 L0 100 C60 95, 80 90, 80 80 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M80 0 C80 10, 100 15, 160 20 L160 100 C100 95, 80 90, 80 80 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Page lines left */}
        <line x1="15" y1="35" x2="65" y2="28" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="15" y1="48" x2="65" y2="41" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="15" y1="61" x2="65" y2="54" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="15" y1="74" x2="65" y2="67" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        {/* Page lines right */}
        <line x1="95" y1="28" x2="145" y2="35" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="95" y1="41" x2="145" y2="48" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="95" y1="54" x2="145" y2="61" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        {/* Spine */}
        <line x1="80" y1="0" x2="80" y2="80" stroke="#050505" strokeWidth="1.5" />
      </g>

      {/* Pen */}
      <g transform="translate(310, 100) rotate(15)">
        <rect x="0" y="0" width="8" height="80" rx="4" stroke="#050505" strokeWidth="2" fill="none" />
        <path d="M1 80 L4 95 L7 80" stroke="#050505" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <line x1="0" y1="15" x2="8" y2="15" stroke="#050505" strokeWidth="1" />
        <rect x="2" y="3" width="4" height="8" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.2)" />
      </g>

      {/* Coffee cup */}
      <g transform="translate(270, 200)">
        <ellipse cx="40" cy="5" rx="35" ry="8" stroke="#050505" strokeWidth="2" fill="rgba(255, 213, 79, 0.15)" />
        <path d="M5 5 L10 65 C10 75, 25 80, 40 80 C55 80, 70 75, 70 65 L75 5" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="rgba(255, 213, 79, 0.2)" />
        {/* Saucer */}
        <ellipse cx="40" cy="80" rx="50" ry="10" stroke="#050505" strokeWidth="1.5" fill="none" />
        {/* Coffee liquid surface */}
        <ellipse cx="40" cy="8" rx="30" ry="5" fill="rgba(139, 90, 43, 0.15)" stroke="none" />
        {/* Steam */}
        <path d="M28 -5 C28 -15, 36 -18, 36 -28" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M42 -3 C42 -16, 50 -20, 50 -30" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* Bookmark */}
      <g transform="translate(200, 25)">
        <path d="M0 0 L20 0 L20 45 L10 35 L0 45 Z" stroke="#FFD54F" strokeWidth="2" strokeLinejoin="round" fill="rgba(255, 213, 79, 0.15)" />
      </g>

      {/* Reading glasses */}
      <g transform="translate(60, 260)">
        <circle cx="20" cy="15" r="15" stroke="#050505" strokeWidth="1.5" fill="none" />
        <circle cx="55" cy="15" r="15" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M35 15 L40 15" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="10" x2="-10" y2="8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="10" x2="85" y2="8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Sparkles */}
      <path d="M50 50 L53 58 L61 58 L55 63 L57 71 L50 66 L43 71 L45 63 L39 58 L47 58 Z" stroke="#071EFC" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="350" cy="280" r="3" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
    </svg>
    </SketchDrawAnimation>
  );
}
