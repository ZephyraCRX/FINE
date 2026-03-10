export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(180,100,10,0.3)', padding: '48px 24px 32px', background: 'rgba(6,2,0,0.80)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px', marginBottom: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '22px' }}>☕</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', letterSpacing: '4px', color: 'var(--gold)' }}>$FINE</span>
            </div>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: 'rgba(120,70,10,0.65)', maxWidth: '260px', lineHeight: 1.6 }}>
              The official currency of the global meltdown. No roadmap. No utility. No stress.
            </p>
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
            {['About', 'Tokenomics', 'Roadmap', 'Community'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px',
                  letterSpacing: '3px', textTransform: 'uppercase',
                  color: 'rgba(120,70,10,0.6)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(120,70,10,0.6)'}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div style={{
          border: '1px solid rgba(180,100,10,0.25)', padding: '16px 20px', marginBottom: '24px',
          fontFamily: 'Barlow, sans-serif', fontSize: '11px', color: 'rgba(120,70,10,0.55)', lineHeight: 1.7,
          background: 'rgba(255,80,0,0.02)',
        }}>
          <span style={{ color: 'rgba(200,120,20,0.8)', fontWeight: 700 }}>⚠️ Disclaimer: </span>
          $FINE is a meme coin created for entertainment purposes only. It has no intrinsic value,
          no expectation of financial return, and no roadmap because we're already at the final
          destination. Invest only what you can afford to lose — preferably an amount that won't
          make you check the charts at 3am. Past performance of burning rooms is not indicative
          of future results. Everything is $FINE.
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '2px', color: 'rgba(100,60,10,0.45)' }}>
            © 2026 $FINE. All rights reserved. Nothing is reserved. It's all burning.
          </p>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '2px', color: 'rgba(100,60,10,0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built with</span>
            <span>🔥</span>
            <span>and a stable internet connection</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
