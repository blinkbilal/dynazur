'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation trigger="immediate" delay={0.3}>
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk */}
      <path d="M60 320 L440 320 L460 340 L40 340 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="80" y1="340" x2="70" y2="390" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      <line x1="420" y1="340" x2="430" y2="390" stroke="#050505" strokeWidth="2" strokeLinecap="round" />

      {/* Laptop */}
      <rect x="140" y="200" width="200" height="120" rx="6" stroke="#050505" strokeWidth="2" fill="none" />
      <rect x="155" y="212" width="170" height="96" rx="2" stroke="#050505" strokeWidth="1.5" fill="none" />
      {/* Screen content - design grid */}
      <rect x="165" y="222" width="50" height="36" rx="2" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
      <rect x="225" y="222" width="50" height="36" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
      <rect x="285" y="222" width="30" height="36" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
      <rect x="165" y="268" width="70" height="30" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
      <rect x="245" y="268" width="70" height="30" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
      {/* Laptop base */}
      <path d="M120 320 L140 320 L140 322 L120 322 Z" stroke="#050505" strokeWidth="1.5" fill="none" />
      <path d="M100 320 L400 320" stroke="#050505" strokeWidth="2" strokeLinecap="round" />

      {/* T-shirt (left) */}
      <g transform="translate(30, 160)">
        <path d="M10 20 L25 8 L40 0 L55 0 L70 8 L85 20 L72 35 L65 25 L65 75 L30 75 L30 25 L23 35 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Design on shirt */}
        <circle cx="47" cy="42" r="12" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M41 42 L47 36 L53 42 L47 48 Z" stroke="#071EFC" strokeWidth="1" fill="none" />
      </g>

      {/* Coffee mug (right of laptop) */}
      <g transform="translate(370, 250)">
        <path d="M5 10 C5 5, 10 0, 20 0 L55 0 C65 0, 70 5, 70 10 L65 55 C65 65, 55 70, 38 70 C20 70, 10 65, 10 55 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Handle */}
        <path d="M70 15 C85 15, 90 25, 90 35 C90 45, 85 50, 70 50" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Steam */}
        <path d="M25 -5 C25 -15, 35 -15, 35 -25" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M40 -5 C40 -18, 50 -18, 50 -28" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M55 -5 C55 -12, 62 -12, 62 -22" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Mug pattern */}
        <rect x="18" y="18" width="38" height="18" rx="2" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
      </g>

      {/* Book stack (left of laptop) */}
      <g transform="translate(50, 265)">
        <rect x="0" y="30" width="60" height="12" rx="2" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="-3" y="18" width="66" height="12" rx="2" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="2" y="6" width="56" height="12" rx="2" stroke="#071EFC" strokeWidth="2" fill="rgba(7, 30, 252, 0.08)" />
        {/* Open book on top */}
        <path d="M10 6 C10 -2, 30 -5, 30 0 C30 -5, 50 -2, 50 6" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <line x1="30" y1="0" x2="30" y2="6" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Pen/tablet stylus */}
      <g transform="translate(340, 280) rotate(-25)">
        <rect x="0" y="0" width="6" height="50" rx="3" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M1 50 L3 58 L5 50" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Small poster/frame on wall */}
      <g transform="translate(380, 80)">
        <rect x="0" y="0" width="70" height="90" rx="2" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="6" y="6" width="58" height="78" rx="1" stroke="#050505" strokeWidth="1" fill="none" />
        {/* Poster content */}
        <path d="M15 30 L30 18 L45 40 L55 32 L60 60 L10 60 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.12)" />
      </g>

      {/* Small plant */}
      <g transform="translate(100, 240)">
        <rect x="5" y="30" width="25" height="28" rx="3" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M17 30 C17 20, 5 15, 10 5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M17 30 C17 22, 28 18, 25 8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M17 32 C17 25, 35 22, 32 15" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Floating elements - stars/sparkles */}
      <g opacity="0.6">
        <path d="M280 100 L283 108 L291 108 L285 113 L287 121 L280 116 L273 121 L275 113 L269 108 L277 108 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
        <circle cx="150" cy="120" r="4" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.15)" />
        <circle cx="320" cy="160" r="3" stroke="#050505" strokeWidth="1" fill="none" />
        <path d="M200 90 L202 96 L208 96 L203 100 L205 106 L200 102 L195 106 L197 100 L192 96 L198 96 Z" stroke="#071EFC" strokeWidth="1" fill="none" />
      </g>
    </svg>
    </SketchDrawAnimation>
  );
}
