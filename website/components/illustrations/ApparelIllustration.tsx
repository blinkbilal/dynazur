'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function ApparelIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* Single elegant coat on hanger — center stage */}

      {/* Hanger */}
      <path d="M135 68 C135 48, 155 38, 200 38 C245 38, 265 48, 265 68" stroke="#050505" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <line x1="200" y1="38" x2="200" y2="22" stroke="#050505" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="200" cy="18" r="5" stroke="#050505" strokeWidth="1.8" fill="none" />

      {/* Coat body — deep, filled silhouette */}
      <path
        d="M135 68
           L108 90 L95 115 L108 118 L118 100 L118 310
           C118 320, 125 326, 140 326
           L260 326
           C275 326, 282 320, 282 310
           L282 100 L292 118 L305 115 L292 90 L265 68
           L240 58 L200 72 L160 58 Z"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(7, 30, 252, 0.07)"
      />

      {/* Lapels */}
      <path d="M160 58 L172 90 L200 82 L228 90 L240 58" stroke="#050505" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(7, 30, 252, 0.04)" />

      {/* Center button placket */}
      <line x1="200" y1="82" x2="200" y2="290" stroke="#050505" strokeWidth="1" strokeDasharray="1 8" strokeLinecap="round" opacity="0.4" />

      {/* Buttons — subtle yellow */}
      <circle cx="200" cy="130" r="4" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
      <circle cx="200" cy="165" r="4" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />
      <circle cx="200" cy="200" r="4" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.3)" />

      {/* Left pocket */}
      <path d="M138 205 L138 230 C138 234, 141 236, 148 236 L168 236 C175 236, 178 234, 178 230 L178 210" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="rgba(7, 30, 252, 0.04)" />

      {/* Right pocket */}
      <path d="M262 205 L262 230 C262 234, 259 236, 252 236 L232 236 C225 236, 222 234, 222 230 L222 210" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="rgba(7, 30, 252, 0.04)" />

      {/* Subtle collar stitch line */}
      <path d="M175 70 C180 80, 195 84, 200 82 C205 84, 220 80, 225 70" stroke="#050505" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Clothing tag hanging from bottom hem */}
      <g transform="translate(193, 326)">
        <line x1="7" y1="0" x2="7" y2="10" stroke="#050505" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        <rect x="0" y="10" width="14" height="20" rx="2" stroke="#050505" strokeWidth="1" fill="rgba(255, 255, 255, 0.6)" opacity="0.6" />
        <line x1="3" y1="17" x2="11" y2="17" stroke="#050505" strokeWidth="0.6" opacity="0.25" />
        <line x1="3" y1="22" x2="9" y2="22" stroke="#050505" strokeWidth="0.6" opacity="0.2" />
      </g>

      {/* Minimal floor shadow */}
      <ellipse cx="200" cy="375" rx="75" ry="8" fill="rgba(5, 5, 5, 0.04)" />

      {/* One subtle star accent */}
      <path d="M60 120 L63 130 L73 130 L65 136 L68 146 L60 140 L52 146 L55 136 L47 130 L57 130 Z"
        stroke="#FFD54F" strokeWidth="1.2" fill="rgba(255, 213, 79, 0.15)" />

      {/* One small circle accent */}
      <circle cx="345" cy="200" r="18" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.03)" opacity="0.5" />

    </svg>
    </SketchDrawAnimation>
  );
}
