import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Founder',
    role: 'Founder & CEO',
    image: '/founder.jpg',
    objectPosition: 'center 20%',
    quote: 'Every great chai starts with passion — we built this brand to bring that passion to every café in India.',
    socials: { color: 'from-red-400 to-rose-600' },
  },
  {
    name: 'Co-Founder',
    role: 'Co-Founder & Operations',
    image: '/cofounder.jpeg',
    objectPosition: 'center 15%',
    quote: 'We don\'t just supply ingredients — we supply the foundation for thousands of cups of happiness, every single day.',
    socials: { color: 'from-rose-600 to-red-800' },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Founders() {
  return (
    <section id="founders" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#fff' }}>

      {/* Background diagonal stripe */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, #fff5f5 0px, #fff5f5 1px, transparent 1px, transparent 48px)',
          opacity: 0.6,
        }}
      />
      {/* Red accent blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.06) 0%, transparent 70%)', transform: 'translate(-40%, -40%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.05) 0%, transparent 70%)', transform: 'translate(40%, 40%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            👥 The Visionaries
          </span>
          <h2 className="font-pacifico text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            The passionate minds behind Love You Chai — turning a simple love for tea into India's most trusted chai supplier.
          </p>
        </motion.div>

        {/* ── Founder cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {founders.map((person, i) => (
            <motion.div
              key={person.role}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
              style={{ perspective: 1000 }}
            >
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-xl relative"
                style={{ border: '1px solid rgba(232,25,44,0.1)' }}
              >
                {/* Photo area */}
                <div className="relative overflow-hidden" style={{ height: '380px' }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: person.objectPosition || 'center' }}
                  />
                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.25) 40%, transparent 65%)',
                    }}
                  />
                  {/* Name + role over image */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <div
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2"
                      style={{
                        background: 'rgba(232,25,44,0.9)',
                        color: 'white',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {person.role}
                    </div>
                    <h3 className="font-pacifico text-2xl text-white">{person.name}</h3>
                  </div>
                  {/* Top gradient red line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${person.socials.color}`}
                  />
                </div>

                {/* Quote area */}
                <div className="px-6 py-5 relative">
                  {/* Big quote mark */}
                  <div
                    className="absolute top-2 left-4 font-pacifico text-7xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(232,25,44,0.07)', lineHeight: 1 }}
                  >
                    "
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-3 relative z-10 italic">
                    "{person.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div
                      className="h-0.5 w-8 rounded-full"
                      style={{ background: '#E8192C' }}
                    />
                    <span className="text-xs text-gray-400 font-medium">Love You Chai</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            🍵 United by a shared love for chai and the community that brews it
          </p>
        </motion.div>
      </div>
    </section>
  );
}
