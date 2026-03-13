'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Sketch illustration - confused question mark */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 mb-8"
        viewBox="0 0 120 120"
        fill="none"
      >
        <motion.path
          d="M45 38 C45 22, 58 15, 68 15 C78 15, 90 22, 90 38 C90 50, 80 55, 72 60 C68 63, 65 68, 65 75"
          stroke="#050505"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.circle
          cx="65"
          cy="90"
          r="3.5"
          fill="#050505"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        {/* Decorative elements */}
        <motion.path
          d="M25 30 L28 22 L31 30"
          stroke="#FFD54F"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
        />
        <motion.circle
          cx="100"
          cy="80"
          r="4"
          stroke="#071EFC"
          strokeWidth="1.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.6 }}
        />
      </motion.svg>

      {/* 404 text with blue hand-drawn circle */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-7xl md:text-8xl font-black text-dynazur-black mb-4"
      >
        <HandDrawnCircle color="blue">404</HandDrawnCircle>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-xl md:text-2xl font-bold text-dynazur-black mb-3"
      >
        Page not found
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-dynazur-text mb-8 max-w-md"
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-dynazur-yellow text-dynazur-black font-bold rounded-btn transition-all duration-300 hover:brightness-90 hover:shadow-md active:scale-[0.97]"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
