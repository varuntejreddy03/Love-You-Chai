import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-28 overflow-hidden">

      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #E8192C 0%, #C0001E 60%, #8B0000 100%)',
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[160, 260, 360, 460].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-white"
            style={{ width: size, height: size, opacity: 0.06 - i * 0.01 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.06 - i * 0.01, 0.12 - i * 0.01, 0.06 - i * 0.01] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[
        { size: 5, top: '15%', left: '8%' },
        { size: 3, top: '70%', left: '90%' },
        { size: 4, top: '40%', left: '4%' },
        { size: 3, top: '80%', left: '15%' },
        { size: 5, top: '20%', left: '92%' },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, opacity: 0.3 }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Animated icon */}
        <motion.div
          className="text-5xl sm:text-6xl mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          animate={{ rotate: [0, -8, 8, 0] }}
        >
          ☕
        </motion.div>

        {/* Heading — character stagger */}
        <motion.h2
          className="font-pacifico text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to Stock Your Chai Café?
        </motion.h2>

        <motion.p
          className="text-red-100 text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Get in touch with us today and we'll take care of the rest.
          From premixes to packaging — we deliver freshness every day.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.a
            href="tel:9914789164"
            id="cta-call-btn"
            whileHover={{ scale: 1.07, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white text-primary font-bold px-7 py-4 rounded-2xl text-sm sm:text-base shadow-xl"
          >
            <span className="text-xl">📞</span>
            <div className="text-left">
              <div className="text-xs text-gray-400 leading-none mb-0.5">Call Now</div>
              <div>9914789164</div>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/919914789164?text=Hi%20Love%20You%20Chai!%20I'm%20interested%20in%20your%20supplies."
            id="cta-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 font-bold px-7 py-4 rounded-2xl text-sm sm:text-base text-white shadow-xl"
            style={{ background: '#25D366' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            WhatsApp Us
          </motion.a>
        </motion.div>

        <motion.p
          className="text-red-200 text-xs sm:text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ✉️ nanichandu610@gmail.com &nbsp;·&nbsp; 📍 Sarjapur Road, Bangalore
        </motion.p>
      </div>
    </section>
  );
}
