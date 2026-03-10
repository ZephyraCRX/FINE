import { motion } from 'framer-motion'

const PHASES = [
  {
    num: '1', name: '🔥 SURVIVE', status: 'done', badge: 'COMPLETED',
    items: ['Deploy contract ✓', 'Launch website ✓', 'World still burning ✓', 'Dog still sitting ✓'],
  },
  {
    num: '2', name: '☕ THRIVE', status: 'active', badge: 'IN PROGRESS',
    items: ['1,000 holders', 'CEX listing', 'Chaos News goes live', 'Dog gets second cup of coffee'],
  },
  {
    num: '3', name: '🚀 ASCEND', status: 'locked', badge: 'SOON™',
    items: ['10,000 holders', 'Major CEX listing', '$FINE merch drop', 'Dog buys a better chair'],
  },
  {
    num: '4', name: '🌍 DOMINATE', status: 'locked', badge: 'WHEN CHAOS PEAKS',
    items: ['100,000 holders', 'The world collapses', '$FINE remains', 'Dog smiles. Everything is fine.'],
  },
]

const badgeColors = {
  done:   { bg: 'rgba(20,160,20,0.15)', border: 'rgba(20,160,20,0.4)',   color: '#40d040' },
  active: { bg: 'rgba(232,160,32,0.15)', border: 'rgba(232,160,32,0.5)', color: '#F5C842' },
  locked: { bg: 'rgba(100,60,10,0.2)',   border: 'rgba(100,60,10,0.4)',  color: '#8a6020' },
}
const dotColors = { done: '#40d040', active: '#F5C842', locked: '#4a3010' }

export default function HowToBuy() {
  return (
    <section id="roadmap" style={{ position: 'relative', zIndex: 2, padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Roadmap
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)', color: '#fff', lineHeight: 1 }}>
            The Plan.<br />(Everything is Going to Plan.)
          </h2>
        </div>

        {/* Phases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {PHASES.map((phase, i) => (
            <div key={phase.num}>
              <motion.div
                className="fade-up"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}
              >
                {/* Dot + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '4px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'var(--card-bg)',
                    border: `2px solid ${dotColors[phase.status]}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px',
                    color: dotColors[phase.status],
                    boxShadow: phase.status !== 'locked' ? `0 0 12px ${dotColors[phase.status]}55` : 'none',
                  }}>
                    {phase.status === 'done' ? '✓' : phase.status === 'active' ? '◉' : phase.num}
                  </div>
                  {i < PHASES.length - 1 && (
                    <div style={{ width: '2px', height: '100%', minHeight: '40px', background: 'rgba(180,100,10,0.25)', margin: '6px 0' }} />
                  )}
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  background: 'var(--card-bg)',
                  border: `1px solid ${phase.status !== 'locked' ? 'rgba(232,160,32,0.4)' : 'var(--card-border)'}`,
                  padding: '24px 28px',
                  marginBottom: i < PHASES.length - 1 ? '12px' : 0,
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '3px', color: '#8a6020', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Phase {phase.num}
                      </div>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: 'var(--text-light)', letterSpacing: '1px' }}>
                        {phase.name}
                      </div>
                    </div>
                    <span style={{
                      padding: '5px 12px',
                      background: badgeColors[phase.status].bg,
                      border: `1px solid ${badgeColors[phase.status].border}`,
                      color: badgeColors[phase.status].color,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                    }}>
                      {phase.badge}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {phase.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: 'rgba(232,213,160,0.65)' }}>
                        <span style={{ color: dotColors[phase.status], flexShrink: 0 }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
