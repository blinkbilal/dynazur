'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function MugsIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background blobs */}
      <circle cx="340" cy="60" r="40" fill="rgba(7, 30, 252, 0.04)" />
      <circle cx="60" cy="260" r="35" fill="rgba(255, 213, 79, 0.06)" />

      {/* Main large mug - yellow filled body */}
      <g transform="translate(120, 80)">
        <ellipse cx="70" cy="8" rx="60" ry="14" stroke="#050505" strokeWidth="2" fill="rgba(255, 213, 79, 0.12)" />
        <path d="M10 8 L15 180 C15 195, 40 205, 70 205 C100 205, 125 195, 125 180 L130 8" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="rgba(255, 213, 79, 0.15)" />
        {/* Handle - blue accent */}
        <path d="M130 30 C160 30, 170 60, 170 90 C170 120, 160 140, 130 140" stroke="#071EFC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Design on mug - blue mountain scene filled */}
        <rect x="25" y="55" width="90" height="55" rx="4" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <path d="M30 95 L50 70 L65 82 L85 60 L105 80 L105 105 L30 105 Z" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.12)" />
        <circle cx="95" cy="65" r="8" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
        {/* Steam */}
        <path d="M40 -5 C40 -20, 55 -22, 55 -38" stroke="#050505" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M65 -3 C65 -22, 80 -25, 80 -42" stroke="#050505" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <path d="M90 -5 C90 -18, 100 -20, 100 -35" stroke="#050505" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* Small mug 1 (left) - blue filled */}
      <g transform="translate(20, 180)">
        <ellipse cx="35" cy="5" rx="30" ry="8" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <path d="M5 5 L8 90 C8 100, 22 105, 35 105 C48 105, 62 100, 62 90 L65 5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M65 18 C78 18, 82 35, 82 48 C82 60, 78 72, 65 72" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Pattern - stripes highlighted */}
        <line x1="15" y1="30" x2="55" y2="30" stroke="#FFD54F" strokeWidth="2" />
        <line x1="15" y1="45" x2="55" y2="45" stroke="#FFD54F" strokeWidth="2" />
        <line x1="15" y1="60" x2="55" y2="60" stroke="#FFD54F" strokeWidth="2" />
        {/* Steam */}
        <path d="M25 -3 C25 -12, 32 -14, 32 -22" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M42 -3 C42 -14, 48 -16, 48 -24" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </g>

      {/* Small mug 2 (right) - with D logo */}
      <g transform="translate(310, 160)">
        <ellipse cx="30" cy="5" rx="28" ry="7" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M2 5 L5 85 C5 95, 18 98, 30 98 C42 98, 55 95, 55 85 L58 5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M58 15 C70 15, 74 30, 74 42 C74 54, 70 65, 58 65" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* D mark logo on mug */}
        <circle cx="28" cy="48" r="16" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <text x="22" y="55" fontSize="18" fontWeight="900" fill="#071EFC" fontFamily="sans-serif" opacity="0.5">d</text>
      </g>

      {/* Surface/table line */}
      <line x1="10" y1="290" x2="390" y2="290" stroke="#050505" strokeWidth="2" strokeLinecap="round" />

      {/* Coffee beans scattered - filled */}
      <g>
        <ellipse cx="300" cy="280" rx="6" ry="4" transform="rotate(-20 300 280)" stroke="#050505" strokeWidth="1.5" fill="rgba(139, 90, 43, 0.15)" />
        <ellipse cx="320" cy="275" rx="5" ry="3.5" transform="rotate(15 320 275)" stroke="#050505" strokeWidth="1.5" fill="rgba(139, 90, 43, 0.12)" />
        <ellipse cx="340" cy="282" rx="5" ry="3.5" transform="rotate(-10 340 282)" stroke="#050505" strokeWidth="1.5" fill="rgba(139, 90, 43, 0.15)" />
      </g>

      {/* Sugar cubes */}
      <g transform="translate(50, 270)">
        <rect x="0" y="0" width="14" height="12" rx="1" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.6)" />
        <rect x="10" y="-4" width="14" height="12" rx="1" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.5)" transform="rotate(8 17 2)" />
      </g>

      {/* Sparkles */}
      <path d="M360 30 L363 40 L373 40 L365 46 L368 56 L360 50 L352 56 L355 46 L347 40 L357 40 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
      <circle cx="370" cy="100" r="3" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
      <circle cx="60" cy="120" r="2" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.15)" />
    </svg>
    </SketchDrawAnimation>
  );
}
