import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CountUp } from './Animations';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textYSpring = useSpring(textY, { stiffness: 80, damping: 20 });

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-16 md:pt-20"
    >
      {/* ═══════════════════════════════════════
          LAYER 1 — Right image panel (full height)
          clips on the LEFT with a diagonal edge
      ═══════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{ scale: imgScale }}
      >
        <img
          src="/chai_ambiance.png"
          alt="Chai café ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Right-side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(192,0,30,0.15) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════
          LAYER 2 — Red left panel
          clip-path creates the diagonal cut:
          top-left → top-60% → bottom-55% → bottom-left
      ═══════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(160deg, #E8192C 0%, #C0001E 55%, #8B0000 100%)',
          clipPath: 'polygon(0 0, 62% 0, 48% 100%, 0 100%)',
        }}
      />

      {/* Mobile fallback — full red background */}
      <div
        className="absolute inset-0 z-10 md:hidden"
        style={{
          background:
            'linear-gradient(160deg, #E8192C 0%, #C0001E 55%, #8B0000 100%)',
        }}
      />

      {/* Floating particles on red side */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {[
          { size: 5, top: '18%', left: '8%', delay: 0 },
          { size: 3, top: '45%', left: '5%', delay: 1 },
          { size: 4, top: '72%', left: '38%', delay: 0.5 },
          { size: 3, top: '25%', left: '52%', delay: 1.5 },
          { size: 5, top: '60%', left: '12%', delay: 2 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left, opacity: 0.35 }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════
          LAYER 3 — Content grid
      ═══════════════════════════════════════ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 py-12 lg:py-16 items-center">

          {/* ── LEFT TEXT BLOCK (60%) ── */}
          <motion.div
            className="md:col-span-7 text-center md:text-left pr-0 md:pr-8"
            style={{ y: textYSpring, opacity: opacityOut }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-6"
            >
              <span>☕</span> Bangalore's Premier Chai Supplier
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-pacifico text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6"
            >
              For the
              <br />
              <motion.span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #ffd5d8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{ rotateY: [0, 4, 0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                Love
              </motion.span>
              <br />of Chai
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-opacity-90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            >
              Supplying everything your tea café needs — freshly, lovingly, daily.
              Your trusted partner for all chai café essentials in Bangalore.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-10"
            >
              <motion.button
                id="hero-explore-btn"
                onClick={() => handleScroll('#about')}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base"
              >
                Our Story
              </motion.button>
              <motion.button
                id="hero-contact-btn"
                onClick={() => handleScroll('#contact')}
                whileHover={{ scale: 1.07, boxShadow: '0 12px 30px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-xl text-sm sm:text-base"
              >
                Contact Us →
              </motion.button>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 justify-center md:justify-start"
            >
              {[
                { end: 30, suffix: '+', label: 'Chai Types' },
                { end: 50, suffix: '+', label: 'Cafes Served' },
                { end: 7, suffix: '', label: 'Days a Week' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-pacifico text-2xl sm:text-3xl text-white">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={1800} />
                  </div>
                  <div className="text-white text-opacity-65 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Clean logo circle, 280px, centered ── */}
          <motion.div
            className="md:col-span-5 hidden md:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center">

              {/* Soft white glow behind the circle */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '280px',
                  height: '280px',
                  boxShadow: '0 0 40px rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                }}
              />

              {/* Single white dashed rotating ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '310px',
                  height: '310px',
                  border: '2px dashed white',
                  opacity: 0.7,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Logo circle — 280px */}
              <img
                src="/logo.jpg"
                alt="Love You Chai"
                className="rounded-full object-cover relative z-10"
                style={{
                  width: '280px',
                  height: '280px',
                  border: '5px solid white',
                  boxShadow: '0 0 40px rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.35)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => handleScroll('#why-us')}
      >
        <span className="text-white text-opacity-50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white border-opacity-35 flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <div className="wave-divider pointer-events-none z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C31.47,118.36,64.95,133.83,100,131.23c50.59-3.72,95.3-29.44,145-34.08C310.48,91.14,276.27,64.7,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
