import { motion } from 'framer-motion'

const cards = [
  {
    icon: '🔥',
    title: 'No Roadmap',
    body: "We're already at the final destination. You're sitting in a burning room. There's nowhere left to go.",
  },
  {
    icon: '☕',
    title: 'No Utility',
    body: "What do you do with $FINE? You hold it. You sip your coffee. You watch the charts melt. That's it.",
  },
  {
    icon: '⚠️',
    title: 'No Lies',
    body: "Every other coin promises the moon. We promise the inside of a furnace. At least we're honest about it.",
  },
  {
    icon: '🟡',
    title: 'Pure Stoicism',
    body: "The portfolio is red. The market is crashing. You put on your yellow hat. You nod. Everything is fine.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-xs tracking-widest uppercase text-orange-500 mb-3">What is this</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6" style={{
            background: 'linear-gradient(to right, #ffffff, #ff8c00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            A Meme Coin for the<br />End of Everything
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            $FINE was born the moment the third red candle hit and someone in the trading room said
            <em className="text-orange-400 not-italic"> "it's fine"</em>. It wasn't fine.
            Nothing was fine. And yet — here we are.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="fade-up border border-orange-900/40 p-6 sm:p-8 relative overflow-hidden group"
              style={{
                background: 'rgba(255,80,0,0.04)',
                backdropFilter: 'blur(4px)',
              }}
              whileHover={{ borderColor: 'rgba(255,140,0,0.6)' }}
              transition={{ duration: 0.2 }}
            >
              {/* Corner glow on hover */}
              <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle, rgba(255,100,0,0.15), transparent)' }} />

              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-lg font-bold text-orange-400 tracking-widest uppercase mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <div className="fade-up mt-16 border-l-4 border-orange-500 pl-6 py-2">
          <p className="text-xl sm:text-2xl text-white/80 italic leading-relaxed">
            "Stop checking the charts. Put on your yellow hat.<br />
            <span className="text-orange-400 not-italic font-bold">Everything is $FINE.</span>"
          </p>
          <p className="text-xs text-gray-600 mt-3 tracking-widest uppercase">— The Dog, probably</p>
        </div>
      </div>
    </section>
  )
}
