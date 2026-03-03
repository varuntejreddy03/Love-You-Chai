import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [showTop, setShowTop] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setShowTop(v > 0.12);
      setPct(Math.round(v * 100));
    });
    return unsub;
  }, [scrollYProgress]);

  const RADIUS = 17;
  const CIRC = 2 * Math.PI * RADIUS;
  const dashOffset = CIRC - (pct / 100) * CIRC;

  return (
    <>
      {/* ── Animated gradient scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] origin-left"
        style={{ scaleX, height: '4px' }}
      >
        <div
          className="h-full w-full"
          style={{
            background: 'linear-gradient(90deg, #E8192C 0%, #ff6b6b 50%, #E8192C 100%)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 3s ease infinite',
          }}
        />
      </motion.div>

      {/* ── Scroll-to-top button with circular progress ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="scroll-top"
            id="scroll-to-top-btn"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="fixed bottom-[5.5rem] right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: '#fff' }}
          >
            {/* SVG ring showing scroll % */}
            <svg
              width="48" height="48"
              viewBox="0 0 48 48"
              className="absolute inset-0"
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Track */}
              <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="#f5e5e5" strokeWidth="3" />
              {/* Progress */}
              <motion.circle
                cx="24" cy="24" r={RADIUS}
                fill="none"
                stroke="#E8192C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ duration: 0.1 }}
              />
            </svg>
            {/* Arrow */}
            <svg className="relative z-10 w-4 h-4" fill="none" stroke="#E8192C" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
