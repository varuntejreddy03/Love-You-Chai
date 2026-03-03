import { motion } from 'framer-motion';

// ── Red-toned SVG icons ─────────────────────────────────────────────────────
const icons = {
  Tea: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="18" width="28" height="22" rx="4" stroke="#E8192C" strokeWidth="2.5" />
      <path d="M36 22h4a4 4 0 0 1 0 8h-4" stroke="#E8192C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 18V12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 10V8M24 10V7M28 10V8" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 40h28" stroke="#E8192C" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  Milk: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M16 8h16l4 8v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V16l4-8z" stroke="#E8192C" strokeWidth="2.5" />
      <path d="M12 16h24" stroke="#E8192C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="27" r="4" stroke="#E8192C" strokeWidth="2" />
    </svg>
  ),
  Cup: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M14 10h20l-3 28H17L14 10z" stroke="#E8192C" strokeWidth="2.5" />
      <path d="M11 10h26M21 6v4M27 6v4M17 38h14" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Spice: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M24 6c-6 0-10 4-10 9 0 3 1.5 5.5 3.5 7L16 40h16l-1.5-18c2-1.5 3.5-4 3.5-7 0-5-4-9-10-9z" stroke="#E8192C" strokeWidth="2.5" />
      <path d="M19 15s2-3 5-3 5 3 5 3M17 40h14M24 6v4" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Machine: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="28" rx="3" stroke="#E8192C" strokeWidth="2.5" />
      <rect x="14" y="22" width="10" height="10" rx="2" stroke="#E8192C" strokeWidth="2" />
      <circle cx="33" cy="19" r="3" stroke="#E8192C" strokeWidth="2" />
      <path d="M14 18h10M19 32v6M14 38h10" stroke="#E8192C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="33" cy="29" r="1.5" fill="#E8192C" />
      <circle cx="33" cy="34" r="1.5" fill="#E8192C" />
    </svg>
  ),
  Brand: () => (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="12" width="32" height="24" rx="3" stroke="#E8192C" strokeWidth="2.5" />
      <path d="M14 20h12M14 25h8M14 30h10" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="21" r="4" stroke="#E8192C" strokeWidth="2" />
    </svg>
  ),
};

const services = [
  { Icon: icons.Tea, title: 'Tea Premixes & Blends', desc: 'Premium quality tea premixes and specialty blends for every café taste preference.', badge: 'Bestseller' },
  { Icon: icons.Milk, title: 'Milk & Dairy Essentials', desc: 'Fresh milk, condensed milk, and dairy products sourced and delivered daily.', badge: null },
  { Icon: icons.Cup, title: 'Cups, Straws & Packaging', desc: 'Eco-friendly disposables and custom branded packaging for your café.', badge: 'Eco' },
  { Icon: icons.Spice, title: 'Spices & Masala', desc: 'Authentic chai masala and hand-picked spices for that signature aroma.', badge: null },
  { Icon: icons.Machine, title: 'Equipment & Machines', desc: 'Tea dispensers, boilers, and café equipment for smooth operations.', badge: null },
  { Icon: icons.Brand, title: 'Branding Materials', desc: 'Custom banners, signage, and branding materials to grow your chai brand.', badge: 'New' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#FFF0F0' }}
    >
      {/* Subtle dot-grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: 'radial-gradient(#E8192C 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />
      {/* Top / bottom fade */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #FFF0F0 0%, transparent 10%, transparent 90%, #FFF0F0 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-white border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
            🛒 Our Supplies
          </span>
          <h2 className="font-pacifico text-4xl sm:text-5xl md:text-6xl mb-3" style={{ color: '#E8192C' }}>
            What We Supply
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Everything your chai café needs, delivered fresh to your doorstep every single day.
          </p>
        </motion.div>

        {/* ── Showcase image ── */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/chai_supplies.png"
            alt="Chai Supplies — Premix, Spices, Cups, Milk"
            className="w-full object-cover"
            style={{
              height: '350px',
              objectPosition: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(232,25,44,0.12), 0 2px 8px rgba(0,0,0,0.08)',
            }}
          />
        </motion.div>

        {/* Pill badge below image */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <span className="inline-flex items-center gap-2 bg-white border border-red-200 text-primary text-sm font-semibold px-6 py-2 rounded-full shadow-md">
            🛒 Everything you need, all in one place
          </span>
        </motion.div>

        {/* ── Premium service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group"
            >
              <div
                className="bg-white rounded-2xl h-full overflow-hidden relative"
                style={{
                  border: '1px solid rgba(232,25,44,0.1)',
                  boxShadow: '0 4px 16px rgba(232,25,44,0.07)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,25,44,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(232,25,44,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,25,44,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(232,25,44,0.1)';
                }}
              >
                {/* Gradient top stripe — reveals on hover */}
                <div
                  className="h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: 'linear-gradient(90deg, #E8192C, #ff6b6b)' }}
                />

                <div className="p-6 sm:p-7">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon circle */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #fff5f5, #ffe0e0)',
                        border: '1.5px solid rgba(232,25,44,0.12)',
                        boxShadow: '0 2px 8px rgba(232,25,44,0.1)',
                      }}
                      whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.35 }}
                    >
                      <svc.Icon />
                    </motion.div>

                    {/* Optional badge */}
                    {svc.badge && (
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: svc.badge === 'Eco' ? '#f0fff4' : svc.badge === 'New' ? '#fff7ed' : '#fff5f5',
                          color: svc.badge === 'Eco' ? '#16a34a' : svc.badge === 'New' ? '#ea580c' : '#E8192C',
                          border: `1px solid ${svc.badge === 'Eco' ? 'rgba(22,163,74,0.2)' : svc.badge === 'New' ? 'rgba(234,88,12,0.2)' : 'rgba(232,25,44,0.2)'}`,
                        }}
                      >
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ lineHeight: 1.3 }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description — forced gray, never link color */}
                  <p
                    style={{
                      color: '#6b7280',
                      fontSize: '0.8125rem',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {svc.desc}
                  </p>

                  {/* Arrow appears on hover */}
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center mt-14 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-500 mb-5 text-base sm:text-lg">Need something specific? We've got you covered!</p>
          <motion.a
            href="tel:9914789164"
            id="services-call-btn"
            whileHover={{ scale: 1.07, boxShadow: '0 16px 40px rgba(232,25,44,0.30)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base shadow-lg"
            style={{ background: 'linear-gradient(135deg, #E8192C, #C0001E)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us: 9914789164
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
