import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

// ── Dog mascot SVG ────────────────────────────────────────────────────────────
function DogMascot() {
  return (
    <svg viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_40px_rgba(255,140,0,0.7)]">
      {/* Chair back */}
      <rect x="60" y="170" width="10" height="90" rx="4" fill="#5c3010" />
      <rect x="190" y="170" width="10" height="90" rx="4" fill="#5c3010" />
      <rect x="60" y="170" width="140" height="12" rx="4" fill="#7a4018" />
      {/* Chair seat */}
      <rect x="50" y="220" width="160" height="16" rx="4" fill="#7a4018" />
      {/* Chair legs */}
      <rect x="58" y="236" width="10" height="50" rx="3" fill="#5c3010" />
      <rect x="192" y="236" width="10" height="50" rx="3" fill="#5c3010" />
      {/* Body */}
      <ellipse cx="130" cy="220" rx="56" ry="44" fill="#d4891a" />
      {/* Belly */}
      <ellipse cx="130" cy="228" rx="32" ry="26" fill="#e8a830" />
      {/* Head */}
      <circle cx="130" cy="132" r="52" fill="#d4891a" />
      {/* Cheeks / snout area */}
      <ellipse cx="130" cy="150" rx="30" ry="22" fill="#b8720f" />
      {/* Nose */}
      <ellipse cx="130" cy="141" rx="10" ry="7" fill="#1a1005" />
      <circle cx="127" cy="139" r="2.5" fill="rgba(255,255,255,0.3)" />
      {/* Eyes – wide, calm */}
      <circle cx="110" cy="124" r="11" fill="white" />
      <circle cx="150" cy="124" r="11" fill="white" />
      <circle cx="112" cy="124" r="7" fill="#1a1005" />
      <circle cx="152" cy="124" r="7" fill="#1a1005" />
      <circle cx="114" cy="121" r="2.5" fill="white" />
      <circle cx="154" cy="121" r="2.5" fill="white" />
      {/* Calm smile */}
      <path d="M 116 158 Q 130 168 144 158" stroke="#1a1005" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="88" cy="100" rx="18" ry="28" fill="#b8720f" transform="rotate(-10 88 100)" />
      <ellipse cx="172" cy="100" rx="18" ry="28" fill="#b8720f" transform="rotate(10 172 100)" />
      {/* Inner ears */}
      <ellipse cx="88" cy="102" rx="9" ry="18" fill="#8a5010" transform="rotate(-10 88 102)" />
      <ellipse cx="172" cy="102" rx="9" ry="18" fill="#8a5010" transform="rotate(10 172 102)" />
      {/* Yellow hat brim */}
      <ellipse cx="130" cy="86" rx="58" ry="12" fill="#e8c020" />
      {/* Hat body */}
      <rect x="90" y="34" width="80" height="54" rx="6" fill="#f0cc22" />
      {/* Hat band */}
      <rect x="90" y="80" width="80" height="10" fill="#c8a010" />
      {/* Hat top highlight */}
      <rect x="96" y="40" width="30" height="8" rx="3" fill="rgba(255,255,255,0.15)" />
      {/* Left arm */}
      <ellipse cx="74" cy="232" rx="22" ry="10" fill="#b8720f" transform="rotate(-30 74 232)" />
      {/* Right arm holding mug */}
      <ellipse cx="186" cy="228" rx="22" ry="10" fill="#b8720f" transform="rotate(20 186 228)" />
      {/* Coffee mug */}
      <rect x="190" y="200" width="38" height="34" rx="5" fill="#e0dcd8" />
      <path d="M 228 210 Q 242 210 242 217 Q 242 224 228 224" stroke="#c0bcb8" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Mug inside */}
      <rect x="193" y="203" width="32" height="10" rx="3" fill="#c8c4c0" />
      {/* Coffee */}
      <rect x="193" y="213" width="32" height="18" rx="2" fill="#3d1c02" />
      {/* Steam */}
      <path d="M 200 198 Q 196 190 200 182" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="float-anim" />
      <path d="M 209 196 Q 205 186 209 177" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="float-anim" style={{animationDelay:'0.4s'}} />
      <path d="M 218 198 Q 214 190 218 182" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="float-anim" style={{animationDelay:'0.8s'}} />
      {/* Tail */}
      <path d="M 182 244 Q 210 230 204 210" stroke="#b8720f" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M 182 244 Q 210 230 204 210" stroke="#d4891a" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// ── Chaos Level Widget ────────────────────────────────────────────────────────
const CHAOS_LEVELS = [
  { range: [0, 20], label: 'Completely Fine', desc: 'Nothing to see here. Relax.' },
  { range: [21, 40], label: 'Slightly Toasty', desc: 'A few candles are lit. Still fine.' },
  { range: [41, 60], label: 'Elevated Chaos', desc: 'The world is burning. Everything is fine.' },
  { range: [61, 80], label: 'Properly On Fire', desc: "It's a lot. Have you tried coffee?" },
  { range: [81, 100], label: 'Absolutely Fine', desc: 'Nothing matters. Sip. Nod. Fine.' },
]

function ChaosWidget() {
  const [level, setLevel] = useState(54)

  useEffect(() => {
    const interval = setInterval(() => {
      setLevel((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2
        return Math.max(10, Math.min(99, prev + delta))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const chaosInfo = CHAOS_LEVELS.find(({ range }) => level >= range[0] && level <= range[1])
  const filledFlames = Math.ceil((level / 100) * 5)

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="border border-orange-700/60 p-4 sm:p-5 w-full max-w-[240px]"
      style={{
        background: 'rgba(10,5,0,0.75)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 30px rgba(255,80,0,0.15), inset 0 0 20px rgba(255,80,0,0.05)',
      }}
    >
      <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Global Chaos Level</p>
      {/* Flame meter */}
      <div className="flex gap-1.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-xl" style={{ filter: i < filledFlames ? 'drop-shadow(0 0 4px #ff6b00)' : 'grayscale(1) opacity(0.2)' }}>
            🔥
          </span>
        ))}
      </div>
      {/* Number */}
      <motion.div
        key={level}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="text-4xl font-black font-mono mb-1"
        style={{ color: level > 70 ? '#ff4400' : level > 40 ? '#ff8c00' : '#ffd700' }}
      >
        {level} <span className="text-lg text-gray-500 font-normal">/ 100</span>
      </motion.div>
      <p className="text-sm font-bold text-orange-400 mb-1">{chaosInfo.label}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{chaosInfo.desc}</p>
    </motion.div>
  )
}

// ── Price Ticker ──────────────────────────────────────────────────────────────
const MOCK_PRICES = {
  btc: { price: '70,944', change: '-2.1%', up: false },
  fine: { price: '$0.000237', change: '+420%', up: true },
}

function PriceTicker() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="flex flex-wrap gap-3 justify-center w-full mt-8"
    >
      {/* BTC */}
      <div className="flex items-center gap-3 border border-orange-900/50 px-5 py-3 text-sm font-mono"
        style={{ background: 'rgba(10,5,0,0.7)', backdropFilter: 'blur(8px)' }}>
        <span className="text-orange-400 text-base">₿</span>
        <span className="text-gray-400 tracking-widest text-xs uppercase">BTC</span>
        <span className="text-white font-bold">${MOCK_PRICES.btc.price}</span>
        <span className="text-red-400 text-xs">{MOCK_PRICES.btc.change}</span>
      </div>

      {/* Chaos news button */}
      <button className="flex items-center gap-2 border border-orange-600/60 px-5 py-3 text-sm font-bold tracking-widest uppercase text-orange-400 hover:bg-orange-600/20 transition-all duration-200"
        style={{ background: 'rgba(255,80,0,0.12)', backdropFilter: 'blur(8px)' }}>
        <span>📰</span> Chaos News
      </button>

      {/* FINE price */}
      <div className="flex items-center gap-3 border border-orange-600/50 px-5 py-3 text-sm font-mono"
        style={{ background: 'rgba(255,80,0,0.1)', backdropFilter: 'blur(8px)' }}>
        <span className="text-orange-400 text-base">🔥</span>
        <span className="text-gray-400 tracking-widest text-xs uppercase">FINE</span>
        <span className="text-white font-bold">{MOCK_PRICES.fine.price}</span>
        <span className="text-green-400 text-xs">{MOCK_PRICES.fine.change}</span>
      </div>
    </motion.div>
  )
}

// ── Fire Background ───────────────────────────────────────────────────────────
function FireBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.6) saturate(1.1)' }}
      />
      {/* Light top gradient so navbar text is readable */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 40%, transparent 70%, rgba(0,0,0,0.4) 100%)',
      }} />
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      <FireBg />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Main grid: text | dog | widget */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          {/* Left: Text */}
          <div ref={titleRef} className="flex-1 text-left min-w-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs tracking-widest uppercase text-orange-500 mb-4"
            >
              The Official Currency of the Meltdown
            </motion.p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-6"
              style={{
                background: 'linear-gradient(160deg, #ffd700 0%, #ff8c00 50%, #ff3300 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(255,140,0,0.4))',
              }}
            >
              EVERYTHING<br />IS FINE
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xs"
            >
              The world is burning. Markets shake.<br />
              <span className="text-orange-400 font-bold">Everything is fine.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#howtobuy"
                className="px-6 py-3 font-black tracking-widest uppercase text-sm text-black hover:scale-105 transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                  boxShadow: '0 0 25px rgba(255,140,0,0.5)',
                }}
              >
                BUY $FINE ☕
              </a>
              <a href="#community"
                className="px-6 py-3 border border-orange-600/60 text-orange-400 font-bold tracking-widest uppercase text-sm hover:bg-orange-600/20 transition-all duration-200"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                X COMMUNITY
              </a>
            </motion.div>
          </div>

          {/* Center: Coin logo */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
            className="float-anim flex-shrink-0"
            style={{ width: '260px' }}
          >
            <img
              src="/logo-coin.jpg"
              alt="$FINE coin"
              className="w-full h-auto rounded-full drop-shadow-[0_0_60px_rgba(255,180,0,0.8)]"
            />
          </motion.div>

          {/* Right: Chaos widget */}
          <div className="flex-1 flex justify-end">
            <ChaosWidget />
          </div>
        </div>

        {/* Price ticker */}
        <PriceTicker />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-gray-700 uppercase">scroll down, it won't help</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-gradient-to-b from-orange-700 to-transparent"
        />
      </motion.div>
    </section>
  )
}
