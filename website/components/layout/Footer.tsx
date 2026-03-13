import Link from 'next/link';
import Image from 'next/image';
import { Mail, Gift } from 'lucide-react';

const shopLinks = [
  { name: 'Apparel', href: '/products/apparel' },
  { name: 'Books', href: '/products/books' },
  { name: 'Mugs', href: '/products/mugs' },
  { name: 'Home Decor', href: '/products/home-decor' },
  { name: 'Digital Products', href: '/digital-products' },
];

const companyLinks = [
  { name: 'About', href: '/about' },

  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Blue CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-6 mb-8">
        <div className="bg-dynazur-blue rounded-section px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <Image
            src="/logos/mark-milky-gray.png"
            alt=""
            width={834}
            height={1228}
            className="absolute -right-4 -bottom-6 h-44 md:h-56 w-auto opacity-[0.07] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Ready to discover something special?</h3>
            <p className="text-white/80 text-base font-normal">Find products designed for those who live in tomorrow.</p>
          </div>
          <Link
            href="/shop"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-3 bg-dynazur-yellow text-dynazur-black font-bold rounded-btn transition-all duration-300 hover:brightness-90 hover:scale-[1.03] shrink-0 text-base active:scale-[0.97]"
          >
            <Gift className="w-4 h-4" />
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-b from-dynazur-navy to-dynazur-black">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Logo column */}
            <div>
              <Link href="/" className="inline-block mb-5">
                <img
                  src="/logos/logo-milky-gray.png"
                  alt="Dynazur"
                  className="h-8 w-auto brightness-90"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                <span className="text-white/70">for those who live in </span>
                <span className="text-dynazur-blue font-semibold">tomorrow</span>
                <span className="text-white/70">.</span>
              </p>
            </div>

            {/* Shop links */}
            <div>
              <h4 className="font-bold text-base mb-4" style={{ color: '#FFD54F' }}>Shop</h4>
              <ul className="space-y-2.5">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-bold text-base mb-4" style={{ color: '#FFD54F' }}>Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base mb-4" style={{ color: '#FFD54F' }}>Contact</h4>
              <a href="mailto:hello@dynazur.com" className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200 mb-4">
                <Mail className="w-4 h-4" />
                hello@dynazur.com
              </a>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                {['Facebook', 'Instagram', 'TikTok'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-dynazur-blue hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={platform}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 py-5">
            <p className="text-white/30 text-xs text-center">
              &copy; 2026 Dynazur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'Facebook':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'Instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'TikTok':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );
    default:
      return null;
  }
}
