'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function AboutIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorative blobs */}
      <circle cx="420" cy="100" r="65" fill="rgba(7, 30, 252, 0.04)" />
      <circle cx="80" cy="420" r="50" fill="rgba(255, 213, 79, 0.06)" />
      <circle cx="250" cy="50" r="40" fill="rgba(7, 30, 252, 0.03)" />

      {/* Main figure - creative person at large monitor workspace */}
      {/* Person - upper body with style */}
      <g transform="translate(140, 70)">
        {/* Head */}
        <ellipse cx="85" cy="25" rx="22" ry="26" stroke="#050505" strokeWidth="2.2" fill="none" />
        {/* Hair - flowing swept style */}
        <path d="M63 18 C60 -2, 80 -15, 100 -10 C115 -6, 118 5, 115 20" stroke="#050505" strokeWidth="2.2" strokeLinecap="round" fill="rgba(5, 5, 5, 0.06)" />
        <path d="M63 22 C58 10, 62 0, 72 -6" stroke="#050505" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Face features */}
        <path d="M74 20 C76 17, 82 17, 84 20" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M92 20 C94 17, 100 17, 102 20" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="79" cy="19" r="1" fill="#050505" opacity="0.5" />
        <circle cx="97" cy="19" r="1" fill="#050505" opacity="0.5" />
        <path d="M88 28 C90 35, 86 38, 84 40" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M78 45 C85 50, 95 50, 102 45" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Glasses */}
        <circle cx="79" cy="22" r="8" stroke="#050505" strokeWidth="1.2" fill="none" opacity="0.5" />
        <circle cx="97" cy="22" r="8" stroke="#050505" strokeWidth="1.2" fill="none" opacity="0.5" />
        <line x1="87" y1="22" x2="89" y2="22" stroke="#050505" strokeWidth="1" opacity="0.5" />

        {/* Neck */}
        <line x1="82" y1="50" x2="80" y2="62" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
        <line x1="92" y1="50" x2="94" y2="62" stroke="#050505" strokeWidth="2" strokeLinecap="round" />

        {/* Torso - wearing a nice shirt */}
        <path d="M55 68 L72 60 L100 60 L118 68 L125 85 L118 92 L118 160 L55 160 L55 92 L48 85 Z" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(7, 30, 252, 0.06)" />
        {/* Collar V-neck */}
        <path d="M76 60 L87 78 L98 60" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Shirt pocket - yellow filled */}
        <rect x="96" y="82" width="14" height="16" rx="2" stroke="#FFD54F" strokeWidth="1.2" fill="rgba(255, 213, 79, 0.2)" />
        <line x1="99" y1="82" x2="99" y2="86" stroke="#FFD54F" strokeWidth="0.8" />

        {/* Left arm reaching to keyboard */}
        <path d="M55 75 C35 90, 25 120, 30 155" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Right arm to mouse */}
        <path d="M118 75 C140 90, 155 120, 158 155" stroke="#050505" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Hands */}
        <circle cx="30" cy="157" r="4" stroke="#050505" strokeWidth="1.5" fill="none" />
        <circle cx="158" cy="157" r="4" stroke="#050505" strokeWidth="1.5" fill="none" />
      </g>

      {/* Large monitor on desk */}
      <g transform="translate(115, 205)">
        {/* Monitor screen */}
        <rect x="0" y="0" width="250" height="155" rx="8" stroke="#050505" strokeWidth="2.2" fill="rgba(255, 255, 255, 0.4)" />
        {/* Inner bezel */}
        <rect x="8" y="8" width="234" height="135" rx="4" stroke="#050505" strokeWidth="1" fill="none" />

        {/* Screen content - design workspace with filled elements */}
        {/* Toolbar */}
        <rect x="12" y="12" width="226" height="16" rx="2" stroke="#050505" strokeWidth="0.8" fill="rgba(5, 5, 5, 0.04)" />
        <circle cx="22" cy="20" r="3" fill="rgba(255, 100, 100, 0.4)" stroke="none" />
        <circle cx="32" cy="20" r="3" fill="rgba(255, 213, 79, 0.5)" stroke="none" />
        <circle cx="42" cy="20" r="3" fill="rgba(100, 200, 100, 0.4)" stroke="none" />

        {/* Design canvas - blue filled shapes */}
        <rect x="14" y="32" width="80" height="60" rx="3" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.1)" />
        {/* Color palette inside */}
        <circle cx="35" cy="50" r="8" fill="rgba(7, 30, 252, 0.15)" stroke="#071EFC" strokeWidth="1" />
        <circle cx="55" cy="50" r="8" fill="rgba(255, 213, 79, 0.25)" stroke="#FFD54F" strokeWidth="1" />
        <circle cx="75" cy="50" r="8" fill="rgba(5, 5, 5, 0.08)" stroke="#050505" strokeWidth="1" />
        {/* Text lines */}
        <line x1="25" y1="70" x2="82" y2="70" stroke="#050505" strokeWidth="1" opacity="0.3" />
        <line x1="25" y1="78" x2="70" y2="78" stroke="#050505" strokeWidth="1" opacity="0.25" />

        {/* Sidebar panels */}
        <rect x="100" y="32" width="136" height="28" rx="2" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.3" />
        <rect x="100" y="64" width="136" height="28" rx="2" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.3" />
        <line x1="105" y1="42" x2="180" y2="42" stroke="#050505" strokeWidth="0.8" opacity="0.2" />
        <line x1="105" y1="50" x2="160" y2="50" stroke="#050505" strokeWidth="0.8" opacity="0.2" />
        <line x1="105" y1="74" x2="180" y2="74" stroke="#050505" strokeWidth="0.8" opacity="0.2" />
        <line x1="105" y1="82" x2="170" y2="82" stroke="#050505" strokeWidth="0.8" opacity="0.2" />

        {/* Dynazur D mark on screen - yellow highlight */}
        <circle cx="45" cy="115" r="18" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.06)" />
        <text x="37" y="122" fontSize="22" fontWeight="900" fill="#071EFC" fontFamily="sans-serif" opacity="0.4">d</text>

        {/* Progress bar */}
        <rect x="80" y="110" width="150" height="6" rx="3" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.3" />
        <rect x="80" y="110" width="100" height="6" rx="3" fill="rgba(7, 30, 252, 0.12)" stroke="#071EFC" strokeWidth="0.8" />
        <line x1="80" y1="124" x2="190" y2="124" stroke="#050505" strokeWidth="0.8" opacity="0.2" />
        <line x1="80" y1="132" x2="160" y2="132" stroke="#050505" strokeWidth="0.8" opacity="0.15" />

        {/* Monitor stand */}
        <path d="M100 155 L150 155 L145 175 L105 175 Z" stroke="#050505" strokeWidth="2" fill="none" />
        <path d="M80 175 L170 175" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Desk surface */}
      <path d="M50 382 L450 382" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
      {/* Desk legs */}
      <line x1="75" y1="382" x2="70" y2="440" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      <line x1="425" y1="382" x2="430" y2="440" stroke="#050505" strokeWidth="2" strokeLinecap="round" />

      {/* Keyboard on desk */}
      <g transform="translate(155, 382)">
        <rect x="0" y="-18" width="120" height="16" rx="3" stroke="#050505" strokeWidth="1.5" fill="rgba(5, 5, 5, 0.04)" />
        {/* Keys row */}
        <g opacity="0.3">
          <rect x="5" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="14" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="23" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="32" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="41" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="50" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="59" y="-14" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
        </g>
        <g opacity="0.3">
          <rect x="5" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="14" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="23" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="32" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="41" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="50" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
          <rect x="59" y="-8" width="6" height="4" rx="0.5" stroke="#050505" strokeWidth="0.5" />
        </g>
      </g>

      {/* Mouse */}
      <g transform="translate(310, 365)">
        <rect x="0" y="0" width="18" height="28" rx="9" stroke="#050505" strokeWidth="1.5" fill="none" />
        <line x1="9" y1="2" x2="9" y2="10" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* Coffee mug - yellow filled */}
      <g transform="translate(385, 348)">
        <ellipse cx="20" cy="5" rx="18" ry="5" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.12)" />
        <path d="M2 5 L5 32 C5 36, 12 38, 20 38 C28 38, 35 36, 35 32 L38 5" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
        <path d="M38 10 C45 10, 48 16, 48 22 C48 28, 45 32, 38 32" stroke="#050505" strokeWidth="1.5" fill="none" />
        {/* Steam */}
        <path d="M14 0 C14 -8, 20 -10, 20 -18" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.25" />
        <path d="M24 -1 C24 -10, 28 -12, 28 -20" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" />
      </g>

      {/* Small plant in pot - filled pot */}
      <g transform="translate(60, 330)">
        <path d="M5 25 L10 52 C10 55, 18 56, 22 56 C26 56, 34 55, 34 52 L39 25" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <ellipse cx="22" cy="25" rx="17" ry="5" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.06)" />
        {/* Plant leaves */}
        <path d="M22 25 C22 10, 12 2, 6 -5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M22 22 C22 8, 32 0, 38 -5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M22 20 C28 6, 38 4, 45 0" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="5" cy="-7" rx="7" ry="4" transform="rotate(-40 5 -7)" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
        <ellipse cx="39" cy="-7" rx="7" ry="4" transform="rotate(40 39 -7)" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
        <ellipse cx="46" cy="-1" rx="7" ry="4" transform="rotate(20 46 -1)" stroke="#050505" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
      </g>

      {/* Stack of books on desk */}
      <g transform="translate(70, 362)">
        <rect x="0" y="6" width="38" height="8" rx="1" stroke="#050505" strokeWidth="1.2" fill="rgba(7, 30, 252, 0.08)" />
        <rect x="-2" y="-2" width="42" height="8" rx="1" stroke="#050505" strokeWidth="1.2" fill="rgba(255, 213, 79, 0.15)" />
        <rect x="2" y="-10" width="34" height="8" rx="1" stroke="#050505" strokeWidth="1.2" fill="none" />
      </g>

      {/* Floating idea bubbles / lightbulb */}
      <g transform="translate(420, 130)">
        <path d="M20 0 C8 0, 0 10, 0 22 C0 32, 6 38, 12 42 L12 50 L28 50 L28 42 C34 38, 40 32, 40 22 C40 10, 32 0, 20 0 Z" stroke="#FFD54F" strokeWidth="1.8" fill="rgba(255, 213, 79, 0.15)" />
        <line x1="14" y1="50" x2="26" y2="50" stroke="#FFD54F" strokeWidth="1" />
        <line x1="15" y1="54" x2="25" y2="54" stroke="#FFD54F" strokeWidth="1" />
        {/* Light rays */}
        <line x1="20" y1="-8" x2="20" y2="-14" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="8" x2="50" y2="4" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-4" y1="8" x2="-10" y2="4" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="28" x2="50" y2="32" stroke="#FFD54F" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="-4" y1="28" x2="-10" y2="32" stroke="#FFD54F" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Decorative Dynazur D watermark */}
      <text x="30" y="200" fontSize="120" fontWeight="900" fill="rgba(7, 30, 252, 0.03)" fontFamily="sans-serif">d</text>

      {/* Stars and sparkles */}
      <path d="M465 280 L468 290 L478 290 L470 296 L473 306 L465 300 L457 306 L460 296 L452 290 L462 290 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />
      <circle cx="40" cy="100" r="4" stroke="#071EFC" strokeWidth="1.2" fill="rgba(7, 30, 252, 0.12)" />
      <circle cx="480" cy="380" r="3" stroke="#050505" strokeWidth="1" fill="none" opacity="0.25" />

      {/* Notebook on desk */}
      <rect x="420" y="365" width="30" height="20" rx="2" stroke="#050505" strokeWidth="1.2" fill="rgba(255, 255, 255, 0.4)" />
      <line x1="425" y1="370" x2="445" y2="370" stroke="#050505" strokeWidth="0.6" opacity="0.3" />
      <line x1="425" y1="375" x2="442" y2="375" stroke="#050505" strokeWidth="0.6" opacity="0.25" />
      <line x1="425" y1="380" x2="438" y2="380" stroke="#050505" strokeWidth="0.6" opacity="0.2" />

      {/* Pencil */}
      <g transform="translate(455, 365) rotate(-25)">
        <rect x="0" y="0" width="4" height="30" rx="1" stroke="#050505" strokeWidth="1" fill="none" />
        <path d="M0.5 30 L2 36 L3.5 30" stroke="#050505" strokeWidth="0.8" fill="none" />
        <rect x="0" y="0" width="4" height="6" rx="1" stroke="#FFD54F" strokeWidth="0.8" fill="rgba(255, 213, 79, 0.3)" />
      </g>
    </svg>
    </SketchDrawAnimation>
  );
}
