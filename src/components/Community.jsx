import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Twitter / X', handle: '@FINE_coin',
    description: 'Calm takes on a burning market. Daily.',
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    href: '#',
  },
  {
    name: 'Telegram', handle: 't.me/FINE_coin',
    description: 'The lounge is on fire. Join us.',
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>,
    href: '#',
  },
  {
    name: 'DEXScreener', handle: 'dexscreener.com',
    description: 'Watch the number go up. Or down. Mostly down.',
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
    href: '#',
  },
  {
    name: 'Discord', handle: 'discord.gg/fine',
    description: 'Unbothered. Mostly. Sometimes screaming.',
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.012.048.044.101.085.127.882.618 1.823 1.098 2.79 1.397.078.02.16-.007.209-.068a14.035 14.035 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.201 13.201 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .209.069c.975-.302 1.916-.78 2.798-1.397a.077.077 0 0 0 .084-.127C23.32 13.58 22.467 9.04 20.349 4.397a.061.061 0 0 0-.032-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>,
    href: '#',
  },
]

export default function Community() {
  return (
    <section id="community" style={{ position: 'relative', zIndex: 2, padding: '96px 24px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,2,0,0.72)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(255,80,0,0.06), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
            The Lounge
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)', color: '#fff', lineHeight: 1, marginBottom: '16px' }}>
            Join the Community
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: 'rgba(160,100,20,0.7)', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
            Thousands of people sitting in burning rooms, sipping coffee, completely unbothered. Come join them.
          </p>
        </div>

        {/* Social grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '48px' }}>
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              className="fade-up"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 4, borderColor: 'rgba(232,160,32,0.5)' }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                padding: '20px 22px', textDecoration: 'none',
                backdropFilter: 'blur(10px)', transition: 'border-color 0.2s',
              }}
            >
              <div style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>{s.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '14px', color: '#E8C870', letterSpacing: '1px', marginBottom: '4px' }}>{s.name}</div>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--gold)', marginBottom: '6px' }}>{s.handle}</div>
                <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: 'rgba(160,100,20,0.65)', lineHeight: 1.5 }}>{s.description}</div>
              </div>
              <div style={{ color: 'rgba(120,70,10,0.5)', flexShrink: 0, alignSelf: 'center' }}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="fade-up"
          style={{
            textAlign: 'center', padding: '48px 32px',
            background: 'var(--card-bg)', border: '1px solid var(--card-border)',
            backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,80,0,0.08), transparent)', pointerEvents: 'none' }} />
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>☕</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', marginBottom: '12px', letterSpacing: '1px' }}>
            The Coffee Is Still Hot.
          </h3>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: 'rgba(160,100,20,0.65)', marginBottom: '28px', maxWidth: '400px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Markets crash. Protocols rug. Seasons change. But in the $FINE lounge,
            the coffee is always hot and nobody is panicking.
          </p>
          <a
            href="#roadmap"
            style={{
              display: 'inline-block', padding: '14px 36px',
              background: 'linear-gradient(135deg, #F5C842, #E8A020)',
              color: '#0C0400', fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: '14px', letterSpacing: '2px',
              textTransform: 'uppercase', textDecoration: 'none',
              boxShadow: '0 0 30px rgba(232,160,32,0.4)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(232,160,32,0.65)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(232,160,32,0.4)' }}
          >
            I'm Fine With This ☕
          </a>
        </motion.div>
      </div>
    </section>
  )
}
