import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '📖' },
  { href: '#why-us', label: 'Why Us', icon: '⭐' },
  { href: '#services', label: 'Services', icon: '🛒' },
  { href: '#location', label: 'Location', icon: '📍' },
  { href: '#contact', label: 'Contact', icon: '📞' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300); // wait for menu close animation
  };

  return (
    <>
      {/* ── Navbar Bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
          } bg-white`}
        style={{ borderBottom: '2.5px solid #E8192C' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo group ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="nav-logo-group flex items-center gap-3 flex-shrink-0 select-none"
              style={{ textDecoration: 'none' }}
            >
              {/* Logo circle + rotating dashed ring + steam */}
              <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 60, height: 60 }}>
                {/* Steam emoji — floats up on hover via CSS */}
                <span className="nav-steam">☕</span>

                {/* Rotating dashed red ring */}
                <div
                  className="nav-logo-ring absolute rounded-full"
                  style={{
                    inset: '-5px',
                    border: '2px dashed #E8192C',
                    borderRadius: '50%',
                  }}
                />

                {/* Logo image — 52px */}
                <img
                  src="/logo.jpg"
                  alt="Love You Chai Logo"
                  className="rounded-full object-cover relative z-10"
                  style={{
                    width: 52,
                    height: 52,
                    boxShadow: '0 2px 12px rgba(232,25,44,0.18)',
                    border: '2px solid white',
                  }}
                />
              </div>

              {/* Brand text */}
              <div className="min-w-0 hidden sm:block">
                <span
                  className="font-pacifico block leading-tight truncate"
                  style={{ fontSize: 22, color: '#E8192C', fontWeight: 'bold' }}
                >
                  Love You Chai
                </span>
                <span
                  className="block truncate"
                  style={{ fontSize: 11, color: '#888', fontStyle: 'italic', letterSpacing: '0.5px' }}
                >
                  For the Love of Chai
                </span>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-charcoal font-medium text-sm hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden md:inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                Visit Us
              </a>

              {/* Hamburger — mobile only */}
              <button
                id="hamburger-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full focus:outline-none transition-colors duration-200"
                style={{
                  background: isOpen ? '#E8192C' : 'transparent',
                }}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <div className="w-5 flex flex-col gap-1.5 items-end">
                  <span
                    className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                    style={{
                      width: '20px',
                      color: isOpen ? 'white' : '#1A1A1A',
                      transform: isOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none',
                    }}
                  />
                  <span
                    className="block h-0.5 bg-current rounded-full transition-all duration-300"
                    style={{
                      width: '14px',
                      color: isOpen ? 'white' : '#1A1A1A',
                      opacity: isOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                    style={{
                      width: '20px',
                      color: isOpen ? 'white' : '#1A1A1A',
                      transform: isOpen ? 'rotate(-45deg) translate(3px, -5px)' : 'none',
                    }}
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: 'min(320px, 85vw)',
                background: 'linear-gradient(160deg, #E8192C 0%, #C0001E 60%, #8B0000 100%)',
              }}
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white border-opacity-20">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.jpg"
                    alt="Love You Chai"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white ring-opacity-50"
                  />
                  <div>
                    <span className="font-pacifico text-white text-base block leading-tight">Love You Chai</span>
                    <span className="text-red-200 text-xs">For the Love of Chai</span>
                  </div>
                </div>
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-5 py-6 overflow-y-auto">
                <p className="text-red-200 text-xs font-semibold uppercase tracking-widest mb-4 px-1">
                  Navigation
                </p>
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="flex items-center gap-4 px-4 py-4 rounded-xl text-white font-medium text-base hover:bg-white hover:bg-opacity-15 active:bg-white active:bg-opacity-25 transition-all duration-200 group"
                      >
                        <span className="text-xl w-8 text-center">{link.icon}</span>
                        <span className="flex-1">{link.label}</span>
                        <svg
                          className="w-4 h-4 text-red-200 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-5 py-6 border-t border-white border-opacity-20 space-y-3"
              >
                <a
                  href="tel:9914789164"
                  className="flex items-center justify-center gap-3 w-full bg-white text-primary font-bold py-3.5 rounded-xl hover:bg-red-50 transition-colors duration-200 text-sm"
                >
                  <span>📞</span> Call: 9914789164
                </a>
                <a
                  href="https://wa.me/919914789164?text=Hi%20Love%20You%20Chai!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-colors duration-200"
                  style={{ background: '#25D366' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp Us
                </a>

                <p className="text-center text-red-200 text-xs pt-1">
                  Open 7 days · 5AM – 11PM
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
