import { motion } from 'framer-motion';

const info = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Opposite New Wipro Gate 1, Sarjapur Road, Ambedkar Nagar, Bangalore – 560035',
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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ minHeight: '320px' }}
          >
            <iframe
              title="Love You Chai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a6c8b2d7e9%3A0x8c7b65c5b8a59e44!2sSarjapur%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '320px', border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
