'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function ApparelIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorative blobs */}
      <circle cx="420" cy="80" r="60" fill="rgba(7, 30, 252, 0.04)" />
      <circle cx="80" cy="380" r="45" fill="rgba(255, 213, 79, 0.06)" />
      <circle cx="250" cy="420" r="50" fill="rgba(7, 30, 252, 0.03)" />

      {/* Clothing rack - elegant curved top */}
      <path d="M55 55 C55 35, 75 25, 100 25 L400 25 C425 25, 445 35, 445 55" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="85" y1="55" x2="85" y2="340" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      <line x1="415" y1="55" x2="415" y2="340" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      {/* Rack feet */}
      <path d="M65 340 L105 340" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M395 340 L435 340" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />

      {/* Hanger 1 - Flowing dress / long tee */}
      <g transform="translate(110, 42)">
        <path d="M0 12 L35 0 L70 12" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="35" cy="0" r="3.5" stroke="#050505" strokeWidth="1.5" fill="#FFD54F" />
        {/* Dress shape - filled blue */}
        <path d="M10 22 L22 15 L48 15 L60 22 L55 30 L50 26 L56 100 L62 120 L8 120 L14 100 L20 26 L15 30 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(7, 30, 252, 0.12)" />
        {/* Collar detail */}
        <path d="M28 15 L35 22 L42 15" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Belt/sash - yellow filled */}
        <rect x="16" y="62" width="38" height="6" rx="3" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.35)" />
        {/* Pattern dots on dress */}
        <circle cx="25" cy="80" r="2" fill="rgba(7, 30, 252, 0.2)" />
        <circle cx="35" cy="90" r="2" fill="rgba(7, 30, 252, 0.2)" />
        <circle cx="45" cy="80" r="2" fill="rgba(7, 30, 252, 0.2)" />
        <circle cx="30" cy="100" r="2" fill="rgba(7, 30, 252, 0.15)" />
        <circle cx="42" cy="105" r="2" fill="rgba(7, 30, 252, 0.15)" />
      </g>

      {/* Hanger 2 - Hoodie with detail - center piece */}
      <g transform="translate(210, 42)">
        <path d="M0 12 L40 0 L80 12" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="40" cy="0" r="3.5" stroke="#050505" strokeWidth="1.5" fill="#FFD54F" />
        {/* Hoodie - larger, filled */}
        <path d="M5 26 L18 16 L30 10 L50 10 L62 16 L75 26 L65 42 L58 32 L58 105 L22 105 L22 32 L15 42 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(5, 5, 5, 0.06)" />
        {/* Hood */}
        <path d="M30 10 C28 0, 40 -8, 40 -8 C40 -8, 52 0, 50 10" stroke="#050505" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Hood drawstrings */}
        <line x1="35" y1="16" x2="33" y2="35" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
        <line x1="45" y1="16" x2="47" y2="35" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
        {/* Kangaroo pocket - yellow filled */}
        <path d="M28 60 C28 56, 32 54, 40 54 C48 54, 52 56, 52 60 L52 78 C52 82, 48 84, 40 84 C32 84, 28 82, 28 78 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
        {/* Front zipper line */}
        <line x1="40" y1="10" x2="40" y2="54" stroke="#050505" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        {/* Sleeve ribbing */}
        <path d="M17 38 L13 42" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M63 38 L67 42" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Hanger 3 - T-shirt with print */}
      <g transform="translate(330, 42)">
        <path d="M-5 12 L30 0 L65 12" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="0" r="3.5" stroke="#050505" strokeWidth="1.5" fill="#FFD54F" />
        {/* T-shirt */}
        <path d="M5 22 L15 14 L25 10 L35 10 L45 14 L55 22 L48 34 L42 26 L42 82 L18 82 L18 26 L12 34 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Print on shirt - dynazur D mark blue filled */}
        <circle cx="30" cy="50" r="14" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.1)" />
        <text x="25" y="56" fontSize="16" fontWeight="900" fill="#071EFC" fontFamily="sans-serif" opacity="0.6">d</text>
      </g>

      {/* Mannequin / dress form with styled outfit */}
      <g transform="translate(90, 170)">
        {/* Mannequin stand */}
        <line x1="45" y1="180" x2="45" y2="220" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="45" cy="225" rx="25" ry="6" stroke="#050505" strokeWidth="1.5" fill="none" />
        {/* Torso form */}
        <path d="M20 0 C15 0, 10 10, 10 30 C10 60, 15 80, 18 100 L18 140 C18 155, 25 165, 45 170 C65 165, 72 155, 72 140 L72 100 C75 80, 80 60, 80 30 C80 10, 75 0, 70 0 Z" stroke="#050505" strokeWidth="2" fill="rgba(5, 5, 5, 0.03)" />
        {/* Neckline */}
        <path d="M30 0 C38 8, 52 8, 60 0" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Draped fabric - yellow accent */}
        <path d="M20 30 C25 35, 35 50, 30 70 C28 80, 25 100, 22 120" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M70 30 C65 35, 55 50, 60 70 C62 80, 65 100, 68 120" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Measuring tape around waist */}
        <path d="M12 95 C12 85, 30 80, 45 80 C60 80, 78 85, 78 95" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M78 95 L90 100 L92 96" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Tape markings */}
        <line x1="25" y1="83" x2="25" y2="87" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="35" y1="81" x2="35" y2="85" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="45" y1="80" x2="45" y2="84" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="55" y1="81" x2="55" y2="85" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
        <line x1="65" y1="83" x2="65" y2="87" stroke="#050505" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* Sewing/design tools scattered */}
      {/* Scissors */}
      <g transform="translate(310, 200)">
        <path d="M0 0 C5 15, 10 30, 8 40" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M20 0 C15 15, 10 30, 12 40" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="6" cy="44" r="6" stroke="#050505" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="44" r="6" stroke="#050505" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="32" r="2" fill="#050505" opacity="0.3" />
      </g>

      {/* Thread spool */}
      <g transform="translate(350, 250)">
        <ellipse cx="15" cy="5" rx="15" ry="5" stroke="#050505" strokeWidth="1.5" fill="none" />
        <line x1="0" y1="5" x2="0" y2="35" stroke="#050505" strokeWidth="1.5" />
        <line x1="30" y1="5" x2="30" y2="35" stroke="#050505" strokeWidth="1.5" />
        <ellipse cx="15" cy="35" rx="15" ry="5" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.12)" />
        {/* Thread lines */}
        <path d="M15 10 C20 12, 25 15, 28 20 C30 25, 28 30, 25 33" stroke="#071EFC" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M15 14 C8 16, 4 22, 3 28" stroke="#071EFC" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>

      {/* Fabric swatches */}
      <g transform="translate(300, 310)">
        {/* Swatch 1 - blue */}
        <rect x="0" y="0" width="30" height="30" rx="2" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.15)" transform="rotate(-8 15 15)" />
        {/* Swatch 2 - yellow */}
        <rect x="20" y="5" width="30" height="30" rx="2" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.25)" transform="rotate(5 35 20)" />
        {/* Swatch 3 - dark */}
        <rect x="40" y="-2" width="30" height="30" rx="2" stroke="#050505" strokeWidth="1.5" fill="rgba(5, 5, 5, 0.08)" transform="rotate(12 55 13)" />
      </g>

      {/* Pins and needles */}
      <g transform="translate(250, 180)">
        <line x1="0" y1="0" x2="0" y2="25" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3" fill="#FFD54F" stroke="#050505" strokeWidth="0.8" />
      </g>
      <g transform="translate(270, 195)">
        <line x1="0" y1="0" x2="5" y2="20" stroke="#050505" strokeWidth="1" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3" fill="#071EFC" stroke="#050505" strokeWidth="0.8" opacity="0.7" />
      </g>

      {/* Sketch pad with fashion drawing */}
      <g transform="translate(310, 360)">
        <rect x="0" y="0" width="70" height="55" rx="3" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.5)" />
        <line x1="5" y1="8" x2="65" y2="8" stroke="#050505" strokeWidth="0.5" opacity="0.2" />
        {/* Mini sketch of figure */}
        <ellipse cx="35" cy="18" rx="5" ry="6" stroke="#050505" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M30 24 L28 45 M40 24 L42 45 M30 24 L40 24 L40 38 L30 38 Z" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.4" />
      </g>

      {/* Pencil */}
      <g transform="translate(390, 370) rotate(-20)">
        <rect x="0" y="0" width="5" height="45" rx="1" stroke="#050505" strokeWidth="1.2" fill="none" />
        <path d="M0.5 45 L2.5 54 L4.5 45" stroke="#050505" strokeWidth="1" fill="none" />
        <rect x="0" y="0" width="5" height="8" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.3)" />
      </g>

      {/* Decorative stars and sparkles */}
      <path d="M460 140 L463 150 L473 150 L465 156 L468 166 L460 160 L452 166 L455 156 L447 150 L457 150 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.25)" />
      <circle cx="470" cy="300" r="4" stroke="#071EFC" strokeWidth="1.2" fill="rgba(7, 30, 252, 0.12)" />
      <circle cx="30" cy="120" r="3" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.2)" />
      <path d="M42 290 L45 282" stroke="#050505" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M38 286 L44 278" stroke="#050505" strokeWidth="1" strokeLinecap="round" opacity="0.18" />

      {/* Floating buttons */}
      <circle cx="270" cy="340" r="5" stroke="#050505" strokeWidth="1" fill="none" />
      <circle cx="270" cy="340" r="1.5" fill="#050505" opacity="0.3" />
      <circle cx="285" cy="350" r="4" stroke="#050505" strokeWidth="1" fill="none" />
      <circle cx="285" cy="350" r="1" fill="#050505" opacity="0.3" />
    </svg>
    </SketchDrawAnimation>
  );
}
