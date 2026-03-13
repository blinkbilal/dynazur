'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    submenu: [
      { name: 'Apparel', href: '/products/apparel' },
      { name: 'Books', href: '/products/books' },
      { name: 'Mugs', href: '/products/mugs' },
      { name: 'Home Decor', href: '/products/home-decor' },
    ],
  },
  { name: 'Digital', href: '/digital-products' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo with yellow highlight */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Dynazur homepage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logos/logo-blue.png`}
            alt="Dynazur"
            className="h-7 lg:h-8 w-auto hidden sm:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logos/mark-blue.png`}
            alt="Dynazur"
            className="h-8 w-auto sm:hidden"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.submenu ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200 relative ${
                      isActive(link.href) ? 'text-dynazur-blue' : 'text-dynazur-black hover:text-dynazur-blue'
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    {isActive(link.href) && <NavUnderline />}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-card shadow-lg border border-dynazur-gray/30 py-2 min-w-[180px]">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm font-medium transition-colors ${
                              isActive(sub.href) ? 'text-dynazur-blue bg-dynazur-blue/5' : 'text-dynazur-black hover:text-dynazur-blue hover:bg-dynazur-bg'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`text-[15px] font-semibold transition-colors duration-200 relative group ${
                    isActive(link.href) ? 'text-dynazur-blue' : 'text-dynazur-black hover:text-dynazur-blue'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) ? (
                    <NavUnderline />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-dynazur-blue transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA - pill shape */}
        <Link
          href="/shop"
          className="hidden lg:inline-flex items-center px-6 py-2 text-sm font-bold border-[1.5px] border-dynazur-black rounded-full transition-all duration-300 hover:bg-dynazur-black hover:text-white active:scale-[0.97]"
        >
          Shop Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 90, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <X className="w-6 h-6 text-dynazur-black" />
            </motion.div>
          ) : (
            <Menu className="w-6 h-6 text-dynazur-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {link.submenu ? (
                    <>
                      <button
                        className={`w-full text-left py-3 text-lg font-semibold flex items-center justify-between ${
                          isActive(link.href) ? 'text-dynazur-blue' : 'text-dynazur-black'
                        }`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 pb-2">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block py-2 text-base font-medium ${
                                isActive(sub.href) ? 'text-dynazur-blue' : 'text-dynazur-text hover:text-dynazur-blue'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-3 text-lg font-semibold ${
                        isActive(link.href) ? 'text-dynazur-blue' : 'text-dynazur-black'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 text-base font-bold bg-dynazur-yellow text-dynazur-black rounded-full transition-all duration-300 hover:brightness-95 active:scale-[0.97]"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavUnderline() {
  return (
    <svg
      className="absolute -bottom-1 left-0 w-full h-[6px] pointer-events-none"
      viewBox="0 0 100 6"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M1 4 C20 1, 40 5, 60 2.5 C80 0, 95 4, 99 2.5"
        stroke="#071EFC"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
