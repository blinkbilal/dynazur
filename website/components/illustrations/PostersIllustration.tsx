'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function PostersIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background blobs */}
      <circle cx="400" cy="100" r="55" fill="rgba(7, 30, 252, 0.04)" />
      <circle cx="100" cy="380" r="40" fill="rgba(255, 213, 79, 0.05)" />

      {/* Wall texture - subtle horizontal lines */}
      <line x1="0" y1="340" x2="500" y2="340" stroke="#050505" strokeWidth="1.5" opacity="0.3" />

      {/* Gallery wall - Frame 1 (large center) with filled abstract art */}
      <g transform="translate(140, 20)">
        <rect x="0" y="0" width="200" height="250" rx="3" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="180" height="230" rx="2" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.3)" />
        {/* Landscape art - filled mountains and sun */}
        <path d="M20 180 L55 100 L80 140 L120 70 L160 130 L180 110 L180 230 L20 230 Z" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M20 180 L55 120 L80 160 L100 140 L100 230 L20 230 Z" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
        {/* Sun - yellow filled */}
        <circle cx="155" cy="50" r="22" stroke="#FFD54F" strokeWidth="2" fill="rgba(255, 213, 79, 0.3)" />
        {/* Sun rays */}
        <line x1="155" y1="22" x2="155" y2="14" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="175" y1="35" x2="180" y2="28" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="135" y1="35" x2="130" y2="28" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        {/* Typography */}
        <line x1="25" y1="30" x2="85" y2="30" stroke="#050505" strokeWidth="2.5" />
        <line x1="25" y1="44" x2="70" y2="44" stroke="#050505" strokeWidth="1.2" opacity="0.5" />
        {/* Hanging wire */}
        <path d="M80 0 L100 -15 L120 0" stroke="#050505" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Frame 2 - small left (portrait photo frame) */}
      <g transform="translate(28, 50)">
        <rect x="0" y="0" width="80" height="110" rx="2" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="6" y="6" width="68" height="98" rx="1" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.3)" />
        {/* Abstract circles - filled */}
        <circle cx="40" cy="40" r="18" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.12)" />
        <circle cx="28" cy="55" r="10" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
        <path d="M20 75 L40 55 L60 75 L40 90 Z" stroke="#050505" strokeWidth="1.2" fill="rgba(5, 5, 5, 0.06)" />
        <path d="M60 0 L80 -12 M20 0 L0 -12" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* Frame 3 - small right (typography art) */}
      <g transform="translate(370, 40)">
        <rect x="0" y="0" width="90" height="120" rx="2" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="6" y="6" width="78" height="108" rx="1" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.3)" />
        {/* Bold typography lines */}
        <line x1="16" y1="25" x2="74" y2="25" stroke="#050505" strokeWidth="3" />
        <line x1="16" y1="40" x2="68" y2="40" stroke="#050505" strokeWidth="2" />
        <line x1="16" y1="52" x2="55" y2="52" stroke="#050505" strokeWidth="1.2" opacity="0.5" />
        {/* Color block - yellow filled */}
        <rect x="16" y="68" width="56" height="35" rx="3" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
        <path d="M25 80 L45 80 M25 88 L40 88" stroke="#050505" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Shelf with decor items */}
      <path d="M20 300 L480 300" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Vase on shelf - blue filled */}
      <g transform="translate(40, 230)">
        <ellipse cx="25" cy="10" rx="15" ry="5" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <path d="M10 10 L12 60 C12 68, 20 72, 25 72 C30 72, 38 68, 38 60 L40 10" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.12)" />
        {/* Flowers */}
        <path d="M25 10 L25 -15" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 10 L15 -8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 10 L35 -8" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="-18" r="5" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
        <circle cx="14" cy="-10" r="4" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.15)" />
        <circle cx="36" cy="-10" r="4" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.2)" />
      </g>

      {/* Candle on shelf */}
      <g transform="translate(420, 258)">
        <rect x="0" y="10" width="20" height="35" rx="2" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
        <ellipse cx="10" cy="10" rx="10" ry="3" stroke="#050505" strokeWidth="1" fill="rgba(255, 213, 79, 0.1)" />
        {/* Wick and flame */}
        <line x1="10" y1="10" x2="10" y2="2" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
        <path d="M10 2 C8 -5, 10 -10, 10 -10 C10 -10, 12 -5, 10 2" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.5)" />
      </g>

      {/* Book stack on shelf */}
      <g transform="translate(240, 266)">
        <rect x="0" y="20" width="50" height="8" rx="1" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <rect x="-3" y="10" width="56" height="10" rx="1" stroke="#050505" strokeWidth="1.5" fill="none" />
        <rect x="2" y="0" width="46" height="10" rx="1" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
      </g>

      {/* Small plant */}
      <g transform="translate(150, 255)">
        <rect x="0" y="20" width="28" height="28" rx="4" stroke="#050505" strokeWidth="1.5" fill="rgba(5, 5, 5, 0.04)" />
        <path d="M14 20 C14 10, 8 5, 4 0" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 22 C14 12, 20 6, 24 0" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 18 C18 8, 26 8, 30 4" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Leaves */}
        <ellipse cx="4" cy="-2" rx="6" ry="3" transform="rotate(-30 4 -2)" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
        <ellipse cx="24" cy="-2" rx="6" ry="3" transform="rotate(30 24 -2)" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
      </g>

      {/* Photo leaning against wall */}
      <g transform="translate(340, 310) rotate(-8)">
        <rect x="0" y="0" width="50" height="60" rx="2" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.4)" />
        <rect x="4" y="4" width="42" height="52" rx="1" stroke="#050505" strokeWidth="0.8" fill="none" />
        <circle cx="25" cy="25" r="10" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.1)" />
      </g>

      {/* Decorative sparkles */}
      <path d="M480 200 L483 210 L493 210 L485 216 L488 226 L480 220 L472 226 L475 216 L467 210 L477 210 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.25)" />
      <circle cx="15" cy="180" r="3" stroke="#071EFC" strokeWidth="1.2" fill="rgba(7, 30, 252, 0.12)" />
      <circle cx="310" cy="15" r="2" stroke="#050505" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
    </SketchDrawAnimation>
  );
}
