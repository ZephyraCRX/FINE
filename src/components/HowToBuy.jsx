import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Get a Wallet',
    body: 'Download Phantom or any Solana wallet. This is the easy part. Everything after this is on you.',
    icon: '👛',
  },
  {
    number: '02',
    title: 'Get Some SOL',
    body: "Buy SOL from any exchange. Coinbase, Binance, whatever's on fire near you.",
    icon: '◎',
  },
  {
    number: '03',
    title: 'Go to a DEX',
    body: 'Head to Raydium or Jupiter. Connect your wallet. Try not to look at the price of anything else.',
    icon: '🔄',
  },
  {
    number: '04',
    title: 'Swap for $FINE',
    body: 'Paste the $FINE contract address. Set slippage to 1-3%. Click swap. Close your eyes. It\'s fine.',
    icon: '☕',
  },
]

export default function HowToBuy() {
  return (
    <section id="howtobuy" className="relative z-10 py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs tracking-widest uppercase text-orange-500 mb-3">Simple</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How to Buy
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Four steps. Then it's out of your hands. Just like the market always was.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-600/60 via-orange-800/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="fade-up relative flex flex-col sm:flex-row items-start sm:items-center gap-6"
                style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                {/* Card */}
                <div
                  className="flex-1 border border-orange-900/40 p-6 group hover:border-orange-500/60 transition-all duration-300"
                  style={{ background: 'rgba(255,80,0,0.04)', backdropFilter: 'blur(4px)' }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-orange-600 tracking-widest">{step.number}</span>
                        <h3 className="text-base font-bold text-orange-400 tracking-wide uppercase">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot for timeline */}
                <div className="hidden sm:flex flex-shrink-0 w-16 items-center justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-orange-500"
                    style={{ backgroundColor: '#ff6b00', boxShadow: '0 0 12px #ff6b00' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contract address placeholder */}
        <div className="fade-up mt-16 text-center">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">Contract Address</p>
          <div
            className="inline-flex items-center gap-3 border border-orange-900/50 px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm"
            style={{ background: 'rgba(255,80,0,0.06)' }}
          >
            <span className="text-orange-300 break-all">[ To be announced — stay calm ]</span>
            <button className="text-gray-600 hover:text-orange-400 transition-colors text-xs uppercase tracking-widest flex-shrink-0">
              Copy
            </button>
          </div>
          <p className="text-xs text-gray-700 mt-3">
            Always verify the contract. There are fake $FINEs. The irony is not lost on us.
          </p>
        </div>
      </div>
    </section>
  )
}
