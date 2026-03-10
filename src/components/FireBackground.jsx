export default function FireBackground() {
  const flames = Array.from({ length: 18 }, (_, i) => i)

  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden z-0">
      {/* Base glow layer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(255,60,0,0.45) 0%, rgba(255,120,0,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Individual flame shapes */}
      {flames.map((i) => {
        const left = (i / flames.length) * 100 + (Math.random() * 4 - 2)
        const height = 60 + Math.random() * 120
        const width = 30 + Math.random() * 50
        const delay = Math.random() * 0.3
        const duration = 0.1 + Math.random() * 0.1

        return (
          <div
            key={i}
            className="flame absolute bottom-0"
            style={{
              left: `${left}%`,
              width: `${width}px`,
              height: `${height}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              background: `radial-gradient(ellipse 60% 100% at 50% 100%,
                rgba(255,220,50,0.9) 0%,
                rgba(255,100,0,0.85) 35%,
                rgba(220,30,0,0.7) 65%,
                transparent 100%)`,
              borderRadius: '50% 50% 30% 30% / 60% 60% 40% 40%',
              filter: 'blur(2px)',
              transformOrigin: 'bottom center',
            }}
          />
        )
      })}

      {/* Floor heat shimmer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8"
        style={{
          background:
            'linear-gradient(to top, rgba(255,80,0,0.6), transparent)',
        }}
      />
    </div>
  )
}
