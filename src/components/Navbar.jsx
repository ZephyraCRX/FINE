import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#howtobuy' },
]

function LogoIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#1a0a00" stroke="#c87820" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="16" fill="#d4891a" />
      <circle cx="18" cy="20" r="4.5" fill="white" />
      <circle cx="30" cy="20" r="4.5" fill="white" />
      <circle cx="19" cy="20" r="2.8" fill="#1a1005" />
      <circle cx="31" cy="20" r="2.8" fill="#1a1005" />
      <circle cx="20" cy="19" r="1" fill="white" />
      <circle cx="32" cy="19" r="1" fill="white" />
      <ellipse cx="24" cy="28" rx="7" ry="5" fill="#b8720f" />
      <ellipse cx="24" cy="26" rx="3.5" ry="2.5" fill="#1a1005" />
      <path d="M 19 32 Q 24 36 29 32" stroke="#1a1005" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="12" cy="18" rx="5" ry="8" fill="#b8720f" transform="rotate(-10 12 18)" />
      <ellipse cx="36" cy="18" rx="5" ry="8" fill="#b8720f" transform="rotate(10 36 18)" />
      <ellipse cx="24" cy="11" rx="16" ry="4" fill="#e8c020" />
      <rect x="14" y="4" width="20" height="10" rx="3" fill="#f0cc22" />
      <rect x="14" y="11" width="20" height="3" fill="#c8a010" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-orange-900/50'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-700/60 flex-shrink-0"
            style={{ boxShadow: '0 0 12px rgba(200,120,0,0.4)' }}>
            <img src="/logo-coin.jpg" alt="$FINE logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-sm tracking-widest text-orange-400 group-hover:text-yellow-400 transition-colors uppercase">
              Everything is Fine
            </span>
            <span className="text-xs text-gray-500 tracking-wide">$FINE — memecoin</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href}
                className="text-sm tracking-widest text-gray-400 hover:text-orange-400 transition-colors duration-200 uppercase">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#howtobuy"
            className="px-4 py-2 border border-orange-500 text-orange-400 text-xs tracking-widest uppercase font-bold hover:bg-orange-500/20 transition-all duration-200">
            Buy $FINE
          </a>
          <a href="#community"
            className="px-4 py-2 border border-gray-700 text-gray-400 text-xs tracking-widest uppercase font-bold hover:border-orange-700 hover:text-orange-400 transition-all duration-200">
            X Community
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-orange-400 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-orange-400 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-orange-400 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-orange-900/40"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={() => setMenuOpen(false)}
                    className="block text-sm tracking-widest text-gray-400 hover:text-orange-400 transition-colors duration-200 uppercase py-1">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a href="#howtobuy" onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 border border-orange-500 text-orange-400 text-xs tracking-widest uppercase font-bold">
                  Buy $FINE
                </a>
                <a href="#community" onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 border border-gray-700 text-gray-400 text-xs tracking-widest uppercase font-bold">
                  X Community
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
