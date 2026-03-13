'use client';

import SketchDrawAnimation from '@/components/animations/SketchDrawAnimation';

interface SketchIconProps {
  className?: string;
  size?: number;
}

function IconWrapper({ children, size, className }: { children: React.ReactNode; size: number; className: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <div className="absolute rounded-full bg-dynazur-yellow/[0.08]" style={{ width: size + 8, height: size + 8 }} />
      <SketchDrawAnimation trigger="scroll" speed="fast" staggerDelay={0.04} duration={0.6}>
        {children}
      </SketchDrawAnimation>
    </div>
  );
}

export function ApparelIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <path d="M10 14 L16 10 L22 7 L26 7 L32 10 L38 14 L34 20 L30 17 L30 40 L18 40 L18 17 L14 20 Z" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="24" r="5" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.08)" />
        <rect x="20" y="32" width="8" height="4" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
      </svg>
    </IconWrapper>
  );
}

export function BookIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <path d="M10 8 L10 40 L38 40 L38 8 L10 8 Z" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 8 L14 40" stroke="#050505" strokeWidth="1" fill="none" />
        <line x1="18" y1="16" x2="34" y2="16" stroke="#071EFC" strokeWidth="1.5" />
        <line x1="18" y1="22" x2="30" y2="22" stroke="#050505" strokeWidth="1" opacity="0.4" />
        <line x1="18" y1="28" x2="32" y2="28" stroke="#050505" strokeWidth="1" opacity="0.4" />
        <rect x="28" y="5" width="6" height="12" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
      </svg>
    </IconWrapper>
  );
}

export function MugIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <path d="M8 12 L10 40 C10 44 16 46 22 46 C28 46 34 44 34 40 L36 12" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="22" cy="12" rx="14" ry="4" stroke="#050505" strokeWidth="1.5" fill="none" />
        <path d="M36 16 C42 16 44 22 44 28 C44 34 42 38 36 38" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M16 5 C16 0, 20 0, 20 -3" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M24 5 C24 -1, 28 -1, 28 -4" stroke="#050505" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
        <rect x="14" y="20" width="16" height="10" rx="2" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
      </svg>
    </IconWrapper>
  );
}

export function PosterIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="6" y="4" width="36" height="40" rx="2" stroke="#050505" strokeWidth="1.5" fill="none" />
        <rect x="10" y="8" width="28" height="32" rx="1" stroke="#050505" strokeWidth="1" fill="none" />
        <path d="M14 30 L22 18 L30 28 L35 22 L36 36 L12 36 Z" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.06)" />
        <circle cx="32" cy="14" r="4" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
      </svg>
    </IconWrapper>
  );
}

export function PlannerIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="8" y="4" width="32" height="40" rx="4" stroke="#050505" strokeWidth="1.5" fill="none" />
        <rect x="12" y="10" width="24" height="6" rx="1" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.08)" />
        <line x1="12" y1="22" x2="36" y2="22" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <line x1="12" y1="28" x2="36" y2="28" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <line x1="12" y1="34" x2="36" y2="34" stroke="#050505" strokeWidth="0.8" opacity="0.3" />
        <rect x="14" y="23" width="6" height="4" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.12)" />
        <path d="M15 25 L17 27 L19 24" stroke="#071EFC" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    </IconWrapper>
  );
}

export function TrackerIcon({ className = '', size = 56 }: SketchIconProps) {
  return (
    <IconWrapper size={size} className={className}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#050505" strokeWidth="1.5" fill="none" />
        <rect x="12" y="28" width="5" height="8" rx="1" stroke="#050505" strokeWidth="1" fill="none" />
        <rect x="20" y="22" width="5" height="14" rx="1" stroke="#071EFC" strokeWidth="1" fill="rgba(7, 30, 252, 0.08)" />
        <rect x="28" y="16" width="5" height="20" rx="1" stroke="#FFD54F" strokeWidth="1" fill="rgba(255, 213, 79, 0.15)" />
        <path d="M14 26 L22 20 L30 14 L38 10" stroke="#071EFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </IconWrapper>
  );
}
