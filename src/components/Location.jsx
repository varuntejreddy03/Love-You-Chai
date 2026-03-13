import { motion } from 'framer-motion';

const info = [
  {
    icon: '📍',
    label: 'Address',
    value: 'opposite to New Wipro Gate1, Sarjapur Road, Ambedkar Nagar-5600035',
    href: null,
  },
  { icon: '📞', label: 'Phone', value: '9914789164', href: 'tel:9914789164' },
  { icon: '✉️', label: 'Email', value: 'nanichandu610@gmail.com', href: 'mailto:nanichandu610@gmail.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon – Sun  ·  5:00 AM – 11:00 PM', href: null },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Location() {
  return (
    <section id="location" className="relative py-20 md:py-28 overflow-hidden bg-white">

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#E8192C 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, white 0%, transparent 20%, transparent 80%, white 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            📍 Find Us
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl">Visit Us</h2>
          <p className="text-gray-500 text-base sm:text-lg">Open every day — rain or shine!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-7 sm:p-10 h-full border border-red-50 relative overflow-hidden">
              {/* Decorative dot grid top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#E8192C 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <h3 className="font-pacifico text-2xl text-primary mb-7">Business Info</h3>

              <div className="space-y-5">
                {info.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-xl flex-shrink-0"
                      whileHover={{ scale: 1.15, backgroundColor: '#E8192C' }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-charcoal font-medium hover:text-primary transition-colors text-sm break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-charcoal font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="tel:9914789164"
                  id="location-call-btn"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md"
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/919914789164"
                  id="location-whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md"
                >
                  💬 WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl shadow-xl bg-white border border-red-50 p-8 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden h-full"
            style={{ minHeight: '320px' }}
          >
            {/* Subtle diagonal stripe background */}
            <div className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff5f5 0px, #fff5f5 2px, transparent 2px, transparent 15px)',
              }}
            />
            {/* Soft red glow spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-20 blur-3xl bg-primary" />

            <h3 className="text-gray-500 text-lg sm:text-xl font-medium mb-8 relative z-10 text-center">
              Trusted by chai café owners across <span className="font-semibold text-charcoal">India</span>
            </h3>

            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap relative z-10">
              {['Hyderabad', 'Sarjapur Road', 'Koramangala', 'Electronic City', 'Whitefield', 'HSR Layout'].map((area, i) => (
                <motion.div
                  key={area}
                  className="flex items-center text-sm md:text-base text-gray-600 bg-red-50 px-5 py-2.5 rounded-full border border-red-100 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(232, 25, 44, 0.1)' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <span className="text-primary mr-2 text-lg leading-none">📍</span>
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
