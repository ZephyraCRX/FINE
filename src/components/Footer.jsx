export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-orange-900/30 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">☕</span>
              <span className="font-bold text-xl tracking-widest text-orange-400">$FINE</span>
            </div>
            <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
              The official currency of the global meltdown. No roadmap. No utility. No stress.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {['About', 'Tokenomics', 'How to Buy', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '')}`}
                className="text-xs tracking-widest uppercase text-gray-600 hover:text-orange-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div
          className="border border-orange-900/30 p-4 mb-8 text-xs text-gray-600 leading-relaxed"
          style={{ background: 'rgba(255,80,0,0.03)' }}
        >
          <span className="text-orange-600 font-bold">⚠️ Disclaimer: </span>
          $FINE is a meme coin created for entertainment purposes only. It has no intrinsic value,
          no expectation of financial return, and no roadmap because we're already at the final
          destination. Invest only what you can afford to lose — preferably an amount that won't
          make you check the charts at 3am. Past performance of burning rooms is not indicative
          of future results. Everything is $FINE.
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700 tracking-widest">
          <p>© 2025 $FINE. All rights reserved. Nothing is reserved. It's all burning.</p>
          <div className="flex items-center gap-2 text-gray-800">
            <span>Built with</span>
            <span className="text-orange-700">🔥</span>
            <span>and a stable internet connection</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
