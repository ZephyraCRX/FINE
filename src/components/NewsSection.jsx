import { motion } from 'framer-motion'

const NEWS = [
  {
    category: '🌍 War Monitor',
    headline: 'New geopolitical tensions reported across several regions.',
    tag: 'Global panic detected.',
    fine: 'Everything is fine.',
    color: '#ff4400',
  },
  {
    category: '⚠️ Markets & Conflict',
    headline: 'Markets reacting nervously to rising global uncertainty.',
    tag: 'Another bad headline.',
    fine: 'Still fine.',
    color: '#ff8c00',
  },
  {
    category: '🌐 Global Leaders',
    headline: 'International leaders announce emergency meetings to contain escalation.',
    tag: 'Emergency meetings everywhere.',
    fine: 'Totally fine.',
    color: '#ffaa00',
  },
  {
    category: '📉 Crypto Markets',
    headline: 'Bitcoin drops 18% in 4 hours. Altcoins down 40–90%.',
    tag: 'Your portfolio is bleeding.',
    fine: 'Financially fine.',
    color: '#ff6600',
  },
  {
    category: '🔥 Environment',
    headline: 'Record temperatures recorded globally. Again.',
    tag: 'Literally on fire.',
    fine: 'Thermally fine.',
    color: '#ff3300',
  },
  {
    category: '☕ $FINE Update',
    headline: '$FINE remains stable. The dog has not moved. Coffee still hot.',
    tag: 'No changes.',
    fine: 'Extremely fine.',
    color: '#ffd700',
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="relative z-10 py-20 px-4">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,100,0,0.4), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 fade-up">
          <div>
            <p className="text-xs tracking-widest uppercase text-orange-500 mb-1">Live Feed</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Latest World News</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-gray-500 tracking-widest uppercase">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEWS.map((item, i) => (
            <motion.div
              key={i}
              className="fade-up border border-orange-900/40 p-5 relative overflow-hidden group hover:border-orange-600/50 transition-all duration-300"
              style={{ background: 'rgba(10,4,0,0.7)', backdropFilter: 'blur(6px)' }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />

              <p className="text-xs font-bold mb-2 pl-1" style={{ color: item.color }}>
                {item.category}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-3 pl-1">
                {item.headline}
              </p>
              <p className="text-xs text-gray-600 pl-1">
                {item.tag}{' '}
                <span className="font-bold" style={{ color: item.color }}>
                  {item.fine}
                </span>
              </p>

              {/* Corner glow on hover */}
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle, ${item.color}15, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="fade-up text-center text-xs text-gray-700 mt-8 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All headlines are equally fine. None of this is financial advice. All of this is fine.
        </motion.p>
      </div>
    </section>
  )
}
