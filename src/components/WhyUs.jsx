import { motion } from 'framer-motion';
import { TiltCard } from './Animations';

const features = [
  { icon: '🫖', title: 'Chai Supplies', desc: 'Chai powder and chai masala', color: '#FF6B6B' },
  { icon: '🌿', title: 'Fresh & Locally Sourced', desc: 'Ingredients from trusted local farmers', color: '#4ECDC4' },
  { icon: '🏪', title: 'Trusted across India', desc: 'Serving 50+ happy chai café partners', color: '#FFE66D' },
  { icon: '🚚', title: 'Reliable Daily Delivery', desc: 'Never miss a day — we deliver consistently', color: '#A8E6CF' },
  { icon: '❤️', title: 'For the Love of Chai', desc: 'Passionate about quality in every cup', color: '#FF8B94' },
  { icon: '⏰', title: 'Open 7 Days: 5AM–11PM', desc: 'Early mornings to late nights, always here', color: '#C3A6FF' },
];

const headingVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 overflow-hidden bg-white">

      {/* Subtle diagonal stripe background */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff5f5 0px, #fff5f5 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ⭐ Why Choose Us
          </motion.span>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl">Why Choose Us?</h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            We're more than a supplier — we're your chai café's best partner.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ perspective: 900 }}
            >
              <TiltCard intensity={10} className="h-full rounded-2xl cursor-default" style={{ transformStyle: 'preserve-3d' }}>
                <div
                  className="p-6 sm:p-8 h-full relative overflow-hidden rounded-2xl group"
                  style={{ background: 'linear-gradient(145deg, #fff5f5, #ffe8ea)' }}
                >
                  {/* Coloured glow spot */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 pointer-events-none transition-all duration-500 group-hover:opacity-40 group-hover:scale-150"
                    style={{ background: feat.color }} />

                  {/* Icon */}
                  <motion.div
                    className="text-4xl sm:text-5xl mb-4 inline-block"
                    style={{ transform: 'translateZ(20px)' }}
                    whileHover={{ scale: 1.25, rotate: [0, -12, 12, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {feat.icon}
                  </motion.div>

                  {/* Red top stripe */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35 }}
                  />

                  <h3 className="font-semibold text-charcoal text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ transform: 'translateZ(14px)' }}>
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed"
                    style={{ transform: 'translateZ(8px)' }}>
                    {feat.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by chai café owners across India</p>
          <div className="flex justify-center gap-2 flex-wrap">
            <motion.span
              key="india"
              className="text-xs text-gray-400 bg-red-50 px-3 py-1 rounded-full border border-red-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              📍 India
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
