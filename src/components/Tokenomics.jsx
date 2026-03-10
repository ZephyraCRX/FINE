import { useState } from 'react'
import { motion } from 'framer-motion'

const CARDS = [
  { icon: '💰', label: 'Total Supply',        val: '1,000,000,000',  sub: '1 Billion $FINE tokens' },
  { icon: '🔄', label: 'Circulating Supply',  val: '847,320,000',    sub: '84.7% in circulation' },
  { icon: '🔥', label: 'Burned Forever',      val: '152,680,000',    sub: 'Gone. Like your savings.' },
  { icon: '💎', label: 'Tax',                  val: '0 / 0',          sub: 'Buy/Sell tax. Totally fine.' },
]

const CONTRACT = '[ To be announced — stay calm ]'

export default function Tokenomics() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="tokenomics" style={{ position: 'relative', zIndex: 2, padding: '96px 24px' }}>
      {/* Subtle glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,160,32,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Tokenomics
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)', color: '#fff', lineHeight: 1 }}>
            The Numbers.<br />They're Fine.
          </h2>
        </div>

        {/* 4 stat cards */}
        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                padding: '28px 24px',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.2s',
              }}
              whileHover={{ borderColor: 'rgba(232,160,32,0.6)' }}
            >
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{card.icon}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '2.5px', color: '#B07010', textTransform: 'uppercase', marginBottom: '8px' }}>
                {card.label}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: 'var(--gold-bright)', marginBottom: '6px', letterSpacing: '1px' }}>
                {card.val}
              </div>
              <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: 'rgba(232,213,160,0.5)' }}>
                {card.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract address */}
        <div className="fade-up" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '24px 28px', backdropFilter: 'blur(10px)' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: '#B07010', textTransform: 'uppercase', marginBottom: '12px' }}>
            Contract Address
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-light)', flex: 1, minWidth: 0, wordBreak: 'break-all' }}>
              {CONTRACT}
            </span>
            <button
              onClick={handleCopy}
              style={{
                padding: '8px 18px', flexShrink: 0,
                background: copied ? 'rgba(232,160,32,0.2)' : 'transparent',
                border: `1px solid ${copied ? 'var(--gold)' : 'var(--card-border)'}`,
                color: copied ? 'var(--gold-bright)' : 'var(--gold)',
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {copied ? 'COPIED!' : 'COPY'}
            </button>
          </div>
          <div style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(160,100,20,0.6)', fontFamily: 'Barlow, sans-serif' }}>
            ⚠️ Always verify the contract address. The world is chaotic. <strong style={{ color: 'rgba(160,100,20,0.9)' }}>But this address is fine.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
