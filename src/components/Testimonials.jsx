import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dipan Kumar Rout',
    role: 'Local Guide',
    review: 'Their elaichi chai is too good. Give it a try.',
    rating: 5,
    initial: 'D',
    color: 'from-red-400 to-rose-500',
  },
  {
    name: 'Ak B',
    role: 'Local Guide',
    review: 'They mastered just one thing—chai. And they’ve been delivering it with unwavering consistency. Go to place for many now.',
    rating: 5,
    initial: 'A',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Srinivas Sai',
    role: '1 review',
    review: "If you're having tea here then you feel you're out of this world. If you're a tea person and when you get a perfect tea then it will relax you. The same feeling i get here when i take a sip.",
    rating: 5,
    initial: 'S',
    color: 'from-pink-500 to-red-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 70, rotateX: -12 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">

      {/* Rich layered background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #fff5f5 0%, #ffe8ea 50%, #ffd5d8 100%)' }} />
      {/* Large decorative quote */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-pacifico text-[200px] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(232,25,44,0.04)' }}>
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 bg-white border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            💬 Customer Reviews
          </motion.span>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl">Community Speaks</h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Hear from passionate café owners who trust Love You Chai every single day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ perspective: 900 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full flex flex-col relative">
                {/* Coloured top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${t.color}`} />

                <div className="p-7 sm:p-8 flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.span
                        key={j}
                        className="text-primary text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.07 + 0.4 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 relative">
                    {/* Opening quote */}
                    <span className="font-pacifico text-4xl text-primary opacity-20 leading-none absolute -top-2 -left-1">"</span>
                    <span className="relative z-10 pl-4">{t.review}</span>
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-red-50">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                    <div className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ⭐ Loved by chai café owners across India
        </motion.p>
      </div>
    </section>
  );
}
