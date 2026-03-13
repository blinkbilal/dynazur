'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function DigitalIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tablet */}
      <g transform="translate(80, 40)">
        <rect x="0" y="0" width="200" height="270" rx="16" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="10" y="15" width="180" height="240" rx="4" stroke="#050505" strokeWidth="1.5" fill="none" />
        {/* Screen content - planner */}
        <line x1="20" y1="40" x2="180" y2="40" stroke="#050505" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="65" x2="180" y2="65" stroke="#050505" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="90" x2="180" y2="90" stroke="#050505" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="115" x2="180" y2="115" stroke="#050505" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="140" x2="180" y2="140" stroke="#050505" strokeWidth="1" opacity="0.3" />
        {/* Header area */}
        <rect x="20" y="20" width="60" height="14" rx="2" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.08)" />
        <line x1="90" y1="27" x2="140" y2="27" stroke="#050505" strokeWidth="1.5" opacity="0.4" />
        {/* Checkboxes */}
        <rect x="25" y="46" width="10" height="10" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
        <rect x="25" y="71" width="10" height="10" rx="2" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M27 76 L30 79 L34 73" stroke="#071EFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="25" y="96" width="10" height="10" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
        <rect x="25" y="121" width="10" height="10" rx="2" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M27 126 L30 129 L34 123" stroke="#071EFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Text lines */}
        <line x1="42" y1="51" x2="120" y2="51" stroke="#050505" strokeWidth="1" opacity="0.4" />
        <line x1="42" y1="76" x2="100" y2="76" stroke="#050505" strokeWidth="1" opacity="0.4" />
        <line x1="42" y1="101" x2="130" y2="101" stroke="#050505" strokeWidth="1" opacity="0.4" />
        <line x1="42" y1="126" x2="110" y2="126" stroke="#050505" strokeWidth="1" opacity="0.4" />
        {/* Calendar mini-view */}
        <rect x="20" y="155" width="160" height="90" rx="4" stroke="#050505" strokeWidth="1" fill="none" />
        <line x1="20" y1="175" x2="180" y2="175" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        {/* Calendar grid */}
        {[0, 1, 2, 3, 4, 5, 6].map((col) => (
          <line key={`cv-${col}`} x1={20 + col * 23} y1="175" x2={20 + col * 23} y2="245" stroke="#050505" strokeWidth="0.5" opacity="0.2" />
        ))}
        {[0, 1, 2].map((row) => (
          <line key={`ch-${row}`} x1="20" y1={195 + row * 18} x2="180" y2={195 + row * 18} stroke="#050505" strokeWidth="0.5" opacity="0.2" />
        ))}
        {/* Highlighted date */}
        <rect x="89" y="177" width="20" height="16" rx="3" fill="rgba(7, 30, 252, 0.12)" stroke="#071EFC" strokeWidth="1" />
      </g>

      {/* Flying calendar pages */}
      <g transform="translate(290, 60) rotate(12)">
        <rect x="0" y="0" width="60" height="70" rx="3" stroke="#050505" strokeWidth="1.5" fill="none" />
        <line x1="0" y1="18" x2="60" y2="18" stroke="#050505" strokeWidth="1" />
        <text x="20" y="14" fontSize="10" fill="#050505" fontFamily="sans-serif" fontWeight="700">MAR</text>
        <line x1="10" y1="30" x2="50" y2="30" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <line x1="10" y1="42" x2="50" y2="42" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
      </g>

      <g transform="translate(310, 120) rotate(-8)">
        <rect x="0" y="0" width="55" height="65" rx="3" stroke="#050505" strokeWidth="1.5" fill="none" opacity="0.6" />
        <line x1="0" y1="16" x2="55" y2="16" stroke="#050505" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Phone */}
      <g transform="translate(310, 200)">
        <rect x="0" y="0" width="60" height="110" rx="10" stroke="#050505" strokeWidth="2" fill="none" />
        <rect x="5" y="12" width="50" height="85" rx="2" stroke="#050505" strokeWidth="1" fill="none" />
        {/* Screen content */}
        <rect x="10" y="18" width="30" height="6" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
        <line x1="10" y1="32" x2="45" y2="32" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <line x1="10" y1="42" x2="40" y2="42" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <line x1="10" y1="52" x2="42" y2="52" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        {/* Progress bar */}
        <rect x="10" y="65" width="40" height="5" rx="2.5" stroke="#050505" strokeWidth="0.8" fill="none" />
        <rect x="10" y="65" width="28" height="5" rx="2.5" fill="rgba(7, 30, 252, 0.15)" stroke="#071EFC" strokeWidth="0.8" />
      </g>

      {/* Pencil */}
      <g transform="translate(40, 150) rotate(-30)">
        <rect x="0" y="0" width="6" height="60" rx="1" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M0.5 60 L3 72 L5.5 60" stroke="#050505" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <rect x="0" y="0" width="6" height="8" fill="rgba(255, 213, 79, 0.2)" stroke="#FFD54F" strokeWidth="1" />
      </g>

      {/* Sparkles */}
      <circle cx="60" cy="80" r="3" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.15)" />
      <path d="M350 40 L352 46 L358 46 L353 50 L355 56 L350 52 L345 56 L347 50 L342 46 L348 46 Z" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.2)" />
    </svg>
    </SketchDrawAnimation>
  );
}
