export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Love You Chai"
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <span className="font-pacifico text-white text-lg block leading-tight">Love You Chai</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              For the Love of Chai — your trusted partner for all chai café essentials in Bangalore.
            </p>
            <div className="flex gap-3">
              {['☕', '🫖', '❤️'].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                  style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C' }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-gray-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Contact Info
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5 flex-shrink-0">📞</span>
                <a href="tel:9914789164" className="text-gray-400 text-sm hover:text-primary transition-colors">
                  9914789164
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5 flex-shrink-0">✉️</span>
                <a href="mailto:nanichandu610@gmail.com" className="text-gray-400 text-sm hover:text-primary transition-colors break-all">
                  nanichandu610@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5 flex-shrink-0 text-sm">📍</span>
                <p className="text-gray-400 text-sm">
                  Opp. New Wipro Gate 1, Sarjapur Road, Ambedkar Nagar, Bangalore – 560035
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5 flex-shrink-0">🕐</span>
                <p className="text-gray-400 text-sm">Mon–Sun, 5:00 AM – 11:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Follow Us
            </h4>
            <p className="text-gray-400 text-sm mb-5">
              Stay updated with our latest offerings and chai love on Instagram!
            </p>
            <a
              href="https://www.instagram.com/loveyouchai_india"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-instagram-link"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-medium hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @loveyouchai_india
            </a>

            {/* WhatsApp link in footer too */}
            <a
              href="https://wa.me/919914789164"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-medium hover:scale-105 transition-all duration-300 bg-green-600"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 Love You Chai. All rights reserved.</p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with <span className="text-primary">❤️</span> in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
