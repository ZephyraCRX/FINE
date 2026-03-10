import { motion } from 'framer-motion'

const LORE = [
  { year: '2008', text: 'The financial system collapsed. The dog watched.' },
  { year: '2020', text: 'A global pandemic swept the planet. The dog made coffee.' },
  { year: '2022', text: 'Wars erupted. Markets crashed. Crypto imploded. The dog adjusted his hat.' },
  { year: '2024', text: null, html: 'The world reached peak chaos. Someone finally minted the dog. <strong style="color:#F5C842">$FINE was born.</strong>' },
  { year: 'NOW',  text: null, html: 'The world is still burning. The dog is still sitting. <strong style="color:#F5C842">Everything is fine.</strong>' },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 2, padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
            About $FINE
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)', color: '#fff', lineHeight: 1 }}>
            The Lore of the Dog<br />Who Didn't Panic
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Timeline */}
          <div className="fade-up">
            {LORE.map((item, i) => (
              <motion.div
                key={item.year}
                style={{ display: 'flex', gap: '20px', paddingBottom: i < LORE.length - 1 ? '28px' : 0 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '52px' }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif", fontSize: '15px', letterSpacing: '1px',
                    color: item.year === 'NOW' ? '#F5C842' : '#B07010',
                    background: 'var(--card-bg)',
                    border: `1px solid ${item.year === 'NOW' ? 'var(--gold)' : 'var(--card-border)'}`,
                    padding: '3px 6px', textAlign: 'center', width: '100%',
                  }}>
                    {item.year}
                  </div>
                  {i < LORE.length - 1 && (
                    <div style={{ width: '1px', flex: 1, minHeight: '20px', background: 'rgba(180,100,10,0.3)', marginTop: '4px' }} />
                  )}
                </div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: 'rgba(232,213,160,0.7)', lineHeight: 1.65, paddingTop: '4px' }}
                  dangerouslySetInnerHTML={item.html ? { __html: item.html } : undefined}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote + stats */}
          <div className="fade-up" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '32px', backdropFilter: 'blur(12px)' }}>
            <div style={{ fontSize: '36px', marginBottom: '16px', textAlign: 'center' }}>🔥</div>
            <blockquote style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#E8C870', lineHeight: 1.2, marginBottom: '8px', textAlign: 'center' }}>
              "This is fine."
            </blockquote>
            <cite style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: '#B07010', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '2px', marginBottom: '28px' }}>
              — The Dog, always
            </cite>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', borderTop: '1px solid var(--card-border)', paddingTop: '24px' }}>
              {[{ val: '∞', label: 'Chaos Survived' }, { val: '0', label: 'Panics Given' }, { val: '☕', label: 'Coffees Consumed' }].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#F5C842', marginBottom: '4px' }}>{s.val}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '10px', letterSpacing: '1.5px', color: '#B07010', textTransform: 'uppercase', lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
