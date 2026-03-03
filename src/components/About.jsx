import { motion } from 'framer-motion';
import { CountUp } from './Animations';

const stats = [
  { end: 3, suffix: '+', label: 'Years Experience' },
  { end: 50, suffix: '+', label: 'Happy Cafés' },
  { end: 30, suffix: '+', label: 'Chai Varieties' },
];

const tags = ['100% Fresh', 'Daily Delivery', 'Local Sourcing', 'Quality Assured'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#FFF8F8' }}>

      {/* Background radial blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.05) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.04) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section pill */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            📖 Our Story
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ═══════════════════════════════
              LEFT — Full image + logo + stats
          ═══════════════════════════════ */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image card with floating logo centered on top */}
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                height: '420px',
                /* 1. Soft red drop shadow on left image card */
                boxShadow: '0 8px 32px rgba(232,25,44,0.15)',
              }}
            >
              {/* Full chai ambiance image */}
              <img
                src="/chai_ambiance.png"
                alt="Authentic Chai Café"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)' }}
              />
              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                <p className="text-white text-xs font-medium opacity-75">☕ Freshly brewed, every single day</p>
              </div>

              {/* Logo centered on top of image — flexbox centering (no transform conflict) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative flex items-center justify-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Soft white glow */}
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{ width: '148px', height: '148px', boxShadow: '0 0 48px 20px rgba(255,255,255,0.45)', borderRadius: '50%' }}
                  />
                  {/* Spinning dashed ring */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{ width: '178px', height: '178px', border: '2px dashed white', opacity: 0.65 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Logo — NO badge below it */}
                  <img
                    src="/logo.jpg"
                    alt="Love You Chai Logo"
                    className="rounded-full object-cover relative z-10"
                    style={{
                      width: '148px',
                      height: '148px',
                      border: '5px solid white',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Stats bar — 3 cards below image */}
            <motion.div
              className="mt-5 w-full grid grid-cols-3 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md py-4 px-2 text-center border border-red-50"
                >
                  <div className="font-pacifico text-2xl text-primary font-bold">
                    <CountUp end={s.end} suffix={s.suffix} duration={1600} />
                  </div>
                  <div className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════
              RIGHT — Story card
          ═══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-3xl p-7 sm:p-10 shadow-xl relative overflow-hidden"
              style={{
                background: '#FFF8F8',
                /* Red vertical bookmark accent on far left */
                borderLeft: '5px solid #E8192C',
              }}
            >
              {/* Dot-grid in top-right corner */}
              <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-25"
                style={{
                  backgroundImage: 'radial-gradient(#E8192C 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />

              {/* Heading */}
              <motion.h3
                className="font-pacifico text-2xl sm:text-3xl text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Story
              </motion.h3>

              {/* Body paragraphs */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  <>Born from a deep love for chai and the people who serve it, <strong>Love You Chai</strong> is Bangalore's most trusted supplier. We started with a simple belief: every cup of tea tells a story, and a great cup starts with great ingredients.</>,
                  <>Based in Bangalore on Sarjapur Road, we supply premium tea premixes, fresh dairy essentials, quality packaging, aromatic spices, and branding materials to cafés across the city — your one-stop partner for all chai café needs.</>,
                  <>We believe in freshness, reliability, and community. When you partner with us, you're not just getting a supplier — you're getting a family as passionate about chai as you are. 🍵</>,
                ].map((txt, i) => (
                  <motion.p
                    key={i}
                    variants={itemVariants}
                    className="text-gray-600 leading-relaxed text-sm sm:text-base"
                  >
                    {txt}
                  </motion.p>
                ))}
              </motion.div>

              {/* Tags — right below the 3 paragraphs with small gap */}
              <motion.div
                className="mt-6 flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, backgroundColor: '#E8192C', color: '#fff' }}
                    className="bg-red-50 text-primary text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border border-red-100 cursor-default transition-colors duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
