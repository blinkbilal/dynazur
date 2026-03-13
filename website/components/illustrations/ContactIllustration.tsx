'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

export default function ContactIllustration({ className = '' }: { className?: string }) {
  return (
    <SketchDrawAnimation>
    <svg className={className} viewBox="0 0 500 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorative blobs */}
      <circle cx="400" cy="80" r="55" fill="rgba(7, 30, 252, 0.04)" />
      <circle cx="100" cy="400" r="45" fill="rgba(255, 213, 79, 0.06)" />
      <circle cx="450" cy="350" r="35" fill="rgba(7, 30, 252, 0.03)" />

      {/* Large envelope - center piece with yellow fill */}
      <g transform="translate(110, 100)">
        {/* Envelope body */}
        <rect x="0" y="60" width="280" height="180" rx="8" stroke="#050505" strokeWidth="2.2" fill="rgba(255, 255, 255, 0.5)" />
        {/* Envelope flap - yellow accent */}
        <path d="M0 68 L140 170 L280 68" stroke="#050505" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(255, 213, 79, 0.12)" />
        {/* Envelope bottom fold lines */}
        <path d="M0 240 L110 160" stroke="#050505" strokeWidth="1.2" opacity="0.2" />
        <path d="M280 240 L170 160" stroke="#050505" strokeWidth="1.2" opacity="0.2" />

        {/* Letter popping out of envelope */}
        <g transform="translate(50, -20)">
          <rect x="0" y="0" width="180" height="100" rx="4" stroke="#050505" strokeWidth="1.8" fill="rgba(255, 255, 255, 0.7)" />
          {/* Letter content lines */}
          <line x1="15" y1="18" x2="90" y2="18" stroke="#050505" strokeWidth="1.2" opacity="0.3" />
          <line x1="15" y1="30" x2="165" y2="30" stroke="#050505" strokeWidth="1" opacity="0.25" />
          <line x1="15" y1="40" x2="165" y2="40" stroke="#050505" strokeWidth="1" opacity="0.2" />
          <line x1="15" y1="50" x2="140" y2="50" stroke="#050505" strokeWidth="1" opacity="0.18" />
          <line x1="15" y1="60" x2="155" y2="60" stroke="#050505" strokeWidth="1" opacity="0.15" />
          {/* D mark on letter */}
          <circle cx="155" cy="18" r="10" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
          <text x="149" y="23" fontSize="14" fontWeight="900" fill="#071EFC" fontFamily="sans-serif" opacity="0.3">d</text>
          {/* Stamp */}
          <rect x="130" y="70" width="35" height="22" rx="2" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
          <path d="M140 76 L145 73 L150 76 L155 73 L160 76" stroke="#FFD54F" strokeWidth="0.8" fill="none" opacity="0.5" />
        </g>
      </g>

      {/* Phone with chat bubbles */}
      <g transform="translate(30, 140)">
        {/* Phone */}
        <rect x="0" y="0" width="55" height="100" rx="8" stroke="#050505" strokeWidth="2" fill="rgba(255, 255, 255, 0.4)" />
        {/* Screen */}
        <rect x="4" y="12" width="47" height="72" rx="3" stroke="#050505" strokeWidth="0.8" fill="none" />
        {/* Notch */}
        <rect x="16" y="3" width="23" height="5" rx="2.5" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.3" />
        {/* Chat bubbles on screen */}
        <rect x="8" y="18" width="28" height="10" rx="5" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.1)" />
        <rect x="19" y="32" width="28" height="10" rx="5" stroke="#050505" strokeWidth="0.8" fill="rgba(5, 5, 5, 0.04)" />
        <rect x="8" y="46" width="24" height="10" rx="5" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.08)" />
        {/* Typing indicator */}
        <circle cx="24" cy="66" r="2" fill="#050505" opacity="0.2" />
        <circle cx="31" cy="66" r="2" fill="#050505" opacity="0.15" />
        <circle cx="38" cy="66" r="2" fill="#050505" opacity="0.1" />
        {/* Home button area */}
        <rect x="18" y="88" width="19" height="3" rx="1.5" stroke="#050505" strokeWidth="0.6" fill="none" opacity="0.3" />

        {/* Signal waves emanating from phone */}
        <path d="M55 30 C68 22, 72 18, 68 10" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" />
        <path d="M55 35 C75 28, 80 22, 75 12" stroke="#050505" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.15" />
      </g>

      {/* Email @ symbol - blue filled */}
      <g transform="translate(410, 160)">
        <circle cx="30" cy="30" r="28" stroke="#071EFC" strokeWidth="2" fill="rgba(7, 30, 252, 0.06)" />
        <path d="M44 30 C44 20, 38 14, 30 14 C22 14, 16 20, 16 30 C16 40, 22 46, 30 46 C36 46, 40 44, 44 40" stroke="#071EFC" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="30" r="8" stroke="#071EFC" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.1)" />
        <path d="M38 30 C38 35, 42 38, 44 38 C48 38, 50 35, 50 30" stroke="#071EFC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Paper airplane - flying toward top right */}
      <g transform="translate(330, 40) rotate(15)">
        <path d="M0 30 L60 0 L45 30 L60 60 Z" stroke="#050505" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255, 213, 79, 0.1)" />
        <path d="M0 30 L45 30" stroke="#050505" strokeWidth="1.5" />
        <line x1="45" y1="30" x2="60" y2="0" stroke="#050505" strokeWidth="1" opacity="0.3" />
        {/* Trail */}
        <path d="M-5 30 C-15 28, -25 32, -35 28" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" strokeDasharray="4 4" />
        <path d="M-10 35 C-20 33, -30 37, -40 33" stroke="#050505" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.15" strokeDasharray="3 3" />
      </g>

      {/* Chat bubble cluster - right side */}
      <g transform="translate(400, 260)">
        {/* Large chat bubble */}
        <path d="M0 0 L75 0 C80 0, 85 5, 85 10 L85 45 C85 50, 80 55, 75 55 L20 55 L8 70 L12 55 L10 55 C5 55, 0 50, 0 45 Z" stroke="#050505" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255, 255, 255, 0.4)" />
        {/* Text lines */}
        <line x1="12" y1="15" x2="72" y2="15" stroke="#050505" strokeWidth="1" opacity="0.25" />
        <line x1="12" y1="27" x2="65" y2="27" stroke="#050505" strokeWidth="1" opacity="0.2" />
        <line x1="12" y1="39" x2="50" y2="39" stroke="#050505" strokeWidth="1" opacity="0.15" />
      </g>

      {/* Small reply bubble */}
      <g transform="translate(410, 340)">
        <path d="M0 25 L0 8 C0 3, 5 0, 10 0 L55 0 C60 0, 65 3, 65 8 L65 25 C65 30, 60 33, 55 33 L15 33 L5 42 L8 33 L10 33 C5 33, 0 30, 0 25 Z" stroke="#071EFC" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(7, 30, 252, 0.05)" />
        <circle cx="22" cy="16" r="3" fill="#050505" opacity="0.15" />
        <circle cx="33" cy="16" r="3" fill="#050505" opacity="0.15" />
        <circle cx="44" cy="16" r="3" fill="#050505" opacity="0.15" />
      </g>

      {/* Location pin - yellow filled */}
      <g transform="translate(35, 310)">
        <path d="M25 0 C12 0, 0 12, 0 26 C0 42, 25 65, 25 65 C25 65, 50 42, 50 26 C50 12, 38 0, 25 0 Z" stroke="#FFD54F" strokeWidth="1.8" fill="rgba(255, 213, 79, 0.12)" />
        <circle cx="25" cy="24" r="10" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.15)" />
      </g>

      {/* Social/connection nodes */}
      <g transform="translate(50, 50)">
        <circle cx="0" cy="0" r="8" stroke="#050505" strokeWidth="1.5" fill="rgba(7, 30, 252, 0.06)" />
        <circle cx="50" cy="-15" r="6" stroke="#050505" strokeWidth="1.2" fill="rgba(255, 213, 79, 0.1)" />
        <circle cx="35" cy="30" r="5" stroke="#050505" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Connecting lines */}
        <line x1="7" y1="-3" x2="44" y2="-13" stroke="#050505" strokeWidth="0.8" opacity="0.2" />
        <line x1="5" y1="6" x2="31" y2="26" stroke="#050505" strokeWidth="0.8" opacity="0.15" />
        <line x1="47" y1="-9" x2="38" y2="25" stroke="#050505" strokeWidth="0.8" opacity="0.15" />
      </g>

      {/* Decorative stars */}
      <path d="M480 120 L483 130 L493 130 L485 136 L488 146 L480 140 L472 146 L475 136 L467 130 L477 130 Z" stroke="#FFD54F" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.2)" />

      {/* Floating notification bell */}
      <g transform="translate(360, 395)">
        <path d="M18 0 C18 -4, 22 -4, 22 0" stroke="#050505" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M8 25 C8 12, 12 5, 20 0 C28 5, 32 12, 32 25 Z" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 213, 79, 0.08)" />
        <line x1="5" y1="25" x2="35" y2="25" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28 C16 32, 24 32, 24 28" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Notification dot */}
        <circle cx="32" cy="8" r="4" fill="rgba(255, 213, 79, 0.4)" stroke="#FFD54F" strokeWidth="1" />
      </g>

      {/* Clock icon */}
      <g transform="translate(130, 380)">
        <circle cx="22" cy="22" r="20" stroke="#050505" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.3)" />
        <line x1="22" y1="22" x2="22" y2="10" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="22" x2="32" y2="26" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="2" fill="#050505" opacity="0.3" />
        {/* Hour marks */}
        <circle cx="22" cy="5" r="1.5" fill="#050505" opacity="0.2" />
        <circle cx="39" cy="22" r="1.5" fill="#050505" opacity="0.2" />
        <circle cx="22" cy="39" r="1.5" fill="#050505" opacity="0.2" />
        <circle cx="5" cy="22" r="1.5" fill="#050505" opacity="0.2" />
      </g>

      {/* Pencil - writing */}
      <g transform="translate(220, 410) rotate(-15)">
        <rect x="0" y="0" width="6" height="50" rx="1" stroke="#050505" strokeWidth="1.2" fill="none" />
        <path d="M0.5 50 L3 58 L5.5 50" stroke="#050505" strokeWidth="1" fill="none" />
        <rect x="0" y="0" width="6" height="8" rx="1" stroke="#FFD54F" strokeWidth="0.8" fill="rgba(255, 213, 79, 0.3)" />
        {/* Writing line */}
        <path d="M3 60 C10 65, 18 62, 28 66 C38 70, 48 67, 55 70" stroke="#050505" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.2" />
      </g>

      {/* Subtle D watermark */}
      <text x="200" y="460" fontSize="80" fontWeight="900" fill="rgba(7, 30, 252, 0.025)" fontFamily="sans-serif">d</text>

      {/* Small decorative elements */}
      <circle cx="300" cy="430" r="3" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.1)" />
      <circle cx="480" cy="440" r="2" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.2" />
    </svg>
    </SketchDrawAnimation>
  );
}

