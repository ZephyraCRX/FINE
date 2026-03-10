import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

// ── Chaos Level Widget ────────────────────────────────────────────────────────
const CHAOS_LEVELS = [
  { max: 20,  name: 'Completely Fine',   desc: 'Nothing to see here. Relax.' },
  { max: 40,  name: 'Slightly Toasty',   desc: 'A few candles are lit. Still fine.' },
  { max: 60,  name: 'Elevated Chaos',    desc: 'The world is burning. Everything is fine.' },
  { max: 80,  name: 'Properly On Fire',  desc: "It's a lot. Have you tried coffee?" },
  { max: 100, name: 'Absolutely Fine',   desc: 'Nothing matters. Sip. Nod. Fine.' },
]

function ChaosCard() {
  const [level, setLevel] = useState(54)

  useEffect(() => {
    const iv = setInterval(() => {
      setLevel(prev => Math.max(42, Math.min(68, Math.round(prev + (Math.random() - 0.5) * 3))))
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  const info = CHAOS_LEVELS.find(l => level <= l.max) || CHAOS_LEVELS.at(-1)
  const filledFlames = Math.ceil((level / 100) * 5)

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      style={{
        background: 'rgba(6,2,0,0.88)',
        border: '1px solid rgba(232,160,32,0.5)',
        borderRadius: '12px',
        padding: '20px 22px',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 0 32px rgba(232,160,32,0.12), 0 8px 32px rgba(0,0,0,0.5)',
        width: '240px',
      }}
    >
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: '#a07020', marginBottom: '12px', textTransform: 'uppercase' }}>
        Global Chaos Level
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} style={{
            fontSize: '20px',
            filter: i < filledFlames ? 'drop-shadow(0 0 4px #ff8800)' : 'grayscale(1) opacity(0.2)',
            transition: 'filter 0.4s',
          }}>🔥</span>
        ))}
      </div>

      <motion.div
        key={level}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '46px', lineHeight: 1, color: 'var(--gold-bright)', marginBottom: '6px' }}
      >
        {level} <span style={{ fontSize: '20px', color: '#6b4e10', fontFamily: 'Barlow, sans-serif', fontWeight: 400 }}>/ 100</span>
      </motion.div>

      <div style={{ height: '4px', background: 'rgba(255,140,0,0.15)', borderRadius: '2px', marginBottom: '10px', overflow: 'hidden' }}>
        <div
          className="chaos-bar-fill"
          style={{ height: '100%', width: `${level}%`, background: 'linear-gradient(to right, #E8A020, #F5C842)', borderRadius: '2px', transition: 'width 0.8s ease' }}
        />
      </div>

      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '15px', color: 'var(--gold)', marginBottom: '8px' }}>
        {info.name}
      </div>
      <div style={{ borderTop: '1px solid rgba(180,100,10,0.3)', paddingTop: '10px', fontSize: '12px', color: '#8a6020', lineHeight: '1.5' }}>
        {info.desc}
      </div>
    </motion.div>
  )
}

// ── Price Ticker ──────────────────────────────────────────────────────────────
function PriceTicker() {
  const [btc, setBtc] = useState(70944)
  const [fine, setFine] = useState(0.000237)
  const [btcUp, setBtcUp] = useState(true)
  const [fineUp, setFineUp] = useState(true)

  useEffect(() => {
    const iv = setInterval(() => {
      setBtc(p => { const d = (Math.random() - 0.49) * 180; setBtcUp(d >= 0); return Math.max(60000, p + d) })
      setFine(p => { const m = 1 + (Math.random() - 0.49) * 0.018; setFineUp(m >= 1); return p * m })
    }, 3200)
    return () => clearInterval(iv)
  }, [])

  const pill = {
    display: 'flex', alignItems: 'center', gap: '14px',
    background: 'rgba(6,3,0,0.90)',
    border: '1px solid rgba(180,100,10,0.6)',
    borderRadius: '10px',
    padding: '16px 22px',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 2px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,80,0.06)',
  }

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      style={{ display: 'flex', gap: '10px', width: '100%', flexWrap: 'wrap' }}
    >
      {/* BTC */}
      <div style={{ ...pill, flex: 1, minWidth: 0, borderTop: '2px solid #E8A020', boxShadow: '0 2px 24px rgba(0,0,0,0.5), 0 0 20px rgba(232,160,32,0.12)' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', fontWeight: 700, color: '#F7931A',
          background: 'rgba(247,147,26,0.18)',
          border: '1px solid rgba(247,147,26,0.55)',
          boxShadow: '0 0 16px rgba(247,147,26,0.35)',
        }}>₿</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: 'rgba(180,120,20,0.7)', textTransform: 'uppercase', marginBottom: '3px' }}>BTC</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', color: '#F5C842', letterSpacing: '1px', lineHeight: 1 }}>
            ${Math.round(btc).toLocaleString()}
          </div>
        </div>
        <div style={{ fontSize: '13px', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '1px', color: btcUp ? '#3ed87a' : '#e05050', fontWeight: 700, flexShrink: 0 }}>
          {btcUp ? '▲' : '▼'} {btcUp ? '+' : ''}{((Math.random() * 0.8) + 0.1).toFixed(2)}%
        </div>
      </div>

      {/* CHAOS NEWS */}
      <a href="#news" style={{
        ...pill,
        flex: '0 0 auto',
        background: 'rgba(40,6,0,0.96)',
        border: '1px solid rgba(255,70,0,0.65)',
        borderTop: '2px solid #FF4500',
        boxShadow: '0 2px 24px rgba(0,0,0,0.5), 0 0 32px rgba(255,60,0,0.25)',
        cursor: 'pointer', textDecoration: 'none',
        animation: 'chaosGlow 2s ease-in-out infinite alternate',
        whiteSpace: 'nowrap', gap: '12px',
      }}>
        <span style={{ fontSize: '22px', animation: 'float 1.5s ease-in-out infinite alternate', display: 'inline-block' }}>🔥</span>
        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: 'rgba(255,130,50,0.8)', textTransform: 'uppercase', marginBottom: '3px' }}>Live Feed</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#FF6030', letterSpacing: '2px', lineHeight: 1, textShadow: '0 0 18px rgba(255,80,0,0.7)' }}>CHAOS NEWS</div>
        </div>
        <span className="live-pip" style={{ marginLeft: '2px', flexShrink: 0 }} />
      </a>

      {/* FINE */}
      <div style={{ ...pill, flex: 1, minWidth: 0, borderTop: '2px solid rgba(255,100,0,0.85)', boxShadow: '0 2px 24px rgba(0,0,0,0.5), 0 0 20px rgba(255,80,0,0.1)' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px',
          background: 'rgba(255,80,0,0.18)',
          border: '1px solid rgba(255,80,0,0.5)',
          boxShadow: '0 0 16px rgba(255,80,0,0.3)',
          animation: 'float 2s ease-in-out infinite alternate',
        }}>🔥</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: 'rgba(180,120,20,0.7)', textTransform: 'uppercase', marginBottom: '3px' }}>$FINE</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', color: '#F5C842', letterSpacing: '1px', lineHeight: 1 }}>
            ${fine.toFixed(6)}
          </div>
        </div>
        <div style={{ fontSize: '13px', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '1px', color: fineUp ? '#3ed87a' : '#e05050', fontWeight: 700, flexShrink: 0 }}>
          {fineUp ? '▲' : '▼'} {fineUp ? '+' : ''}{((Math.random() * 2) + 0.1).toFixed(2)}%
        </div>
      </div>
    </motion.div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.15 }
    )
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: '80px', paddingBottom: '48px' }}>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '36px' }}>

        {/* Three column: text | dog space | chaos card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '24px' }}>

          {/* Left: Text */}
          <div ref={titleRef}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>
              The Official Currency of the Meltdown
            </div>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(60px, 9vw, 108px)',
              lineHeight: 0.92,
              marginBottom: '20px',
              background: 'linear-gradient(160deg, #F5C842 0%, #E8A020 45%, #cc5500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(232,160,32,0.35))',
            }}>
              EVERYTHING<br />IS FINE
            </h1>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: 'rgba(232,213,160,0.75)', lineHeight: 1.6, marginBottom: '28px', maxWidth: '340px' }}>
              The world is burning. Markets shake.<br />
              <strong style={{ color: 'var(--gold)' }}>Everything is fine.</strong>
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#tokenomics" style={{
                padding: '13px 30px',
                background: 'linear-gradient(135deg, #F5C842, #E8A020)',
                color: '#0C0400', fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800, fontSize: '14px', letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '6px',
                boxShadow: '0 0 24px rgba(232,160,32,0.45)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(232,160,32,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(232,160,32,0.45)' }}
              >
                BUY $FINE ☕
              </a>
              <a href="#community" style={{
                padding: '13px 30px',
                border: '1px solid rgba(180,100,10,0.6)',
                borderRadius: '6px',
                color: 'var(--gold)', fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: '14px', letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                background: 'rgba(6,3,0,0.7)', backdropFilter: 'blur(6px)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-bright)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(180,100,10,0.6)'; e.currentTarget.style.color = 'var(--gold)' }}
              >
                X COMMUNITY
              </a>
            </div>
          </div>

          {/* Center: empty — dog shows through the fixed background */}
          <div style={{ width: 'clamp(160px, 22vw, 320px)', height: '1px' }} />

          {/* Right: Chaos card */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ChaosCard />
          </div>
        </div>

        {/* Price ticker */}
        <PriceTicker />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 2 }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(100,60,0,0.7)', textTransform: 'uppercase', fontFamily: "'Barlow Condensed', sans-serif" }}>scroll down, it won't help</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, var(--gold-dim), transparent)' }} />
      </motion.div>
    </section>
  )
}
