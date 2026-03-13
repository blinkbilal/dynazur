'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function AboutIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* Elegant fountain pen */}
      <g transform="rotate(20, 200, 195)">

        {/* Cap */}
        <rect x="186" y="50" width="28" height="80" rx="8" stroke="#050505" strokeWidth="2" fill="rgba(7, 30, 252, 0.07)" />
        <path d="M192 58 L208 58" stroke="#050505" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
        <line x1="209" y1="54" x2="210" y2="126" stroke="#050505" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
        <circle cx="209" cy="52" r="2.5" stroke="#050505" strokeWidth="1" fill="rgba(255, 213, 79, 0.6)" />

        {/* Yellow accent ring */}
        <rect x="183" y="126" width="34" height="7" rx="2" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.25)" />

        {/* Barrel */}
        <rect x="187" y="133" width="26" height="130" rx="3" stroke="#050505" strokeWidth="2" fill="rgba(7, 30, 252, 0.06)" />
        <line x1="200" y1="148" x2="200" y2="258" stroke="#050505" strokeWidth="0.6" opacity="0.12" />

        {/* Grip section */}
        <path d="M187 263 L213 263 L210 295 L190 295 Z" stroke="#050505" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(5,5,5,0.05)" />
        <line x1="189" y1="271" x2="211" y2="271" stroke="#050505" strokeWidth="0.7" opacity="0.18" />
        <line x1="190" y1="279" x2="210" y2="279" stroke="#050505" strokeWidth="0.7" opacity="0.15" />
        <line x1="191" y1="287" x2="209" y2="287" stroke="#050505" strokeWidth="0.7" opacity="0.12" />

        {/* Nib */}
        <path d="M190 295 L210 295 L200 334 Z" stroke="#050505" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(7, 30, 252, 0.1)" />
        <line x1="200" y1="306" x2="200" y2="334" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <ellipse cx="200" cy="337" rx="2.5" ry="3.5" fill="rgba(7,30,252,0.5)" />

      </g>

      {/* Flowing ink signature */}
      <path
        d="M 153 326 C 190 348, 255 326, 300 340 C 330 350, 350 340, 370 342"
        stroke="#071EFC"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      {/* Secondary flourish */}
      <path
        d="M 153 326 C 147 336, 149 352, 162 356"
        stroke="#071EFC"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Floor shadow */}
      <ellipse cx="200" cy="380" rx="90" ry="8" fill="rgba(5, 5, 5, 0.04)" />

      {/* Star accent */}
      <path d="M56 118 L59 128 L69 128 L61 134 L64 144 L56 138 L48 144 L51 134 L43 128 L53 128 Z"
        stroke="#FFD54F" strokeWidth="1.2" fill="rgba(255, 213, 79, 0.15)" />

      {/* Circle accent */}
      <circle cx="350" cy="195" r="20" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.03)" opacity="0.45" />

    </svg>
    </SketchDrawAnimation>
  );
}
