import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const slices = [
  { label: 'Liquidity Pool', pct: 40, color: '#ff6b00', desc: 'Burned. Like everything else.' },
  { label: 'Community', pct: 30, color: '#ffd700', desc: 'For people who are fine with losing it.' },
  { label: 'Dev Wallet', pct: 15, color: '#ff2200', desc: 'To pay for the fire extinguisher we never bought.' },
  { label: 'Marketing', pct: 10, color: '#ff9500', desc: 'Memes, mostly.' },
  { label: 'Reserve', pct: 5, color: '#cc4400', desc: "In case things get worse. They will." },
]

function DonutChart() {
  const size = 220
  const cx = size / 2
  const cy = size / 2
  const r = 80
  const strokeWidth = 38
  const circumference = 2 * Math.PI * r

  let accumulated = 0
  const segments = slices.map((s) => {
    const dashArray = (s.pct / 100) * circumference
    const dashOffset = circumference - accumulated * circumference / 100 - circumference / 4
    accumulated += s.pct
    return { ...s, dashArray, dashOffset }
  })

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {segments.map((s, i) => (
          <motion.circle
            key={s.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${s.dashArray} ${circumference - s.dashArray}`}
            strokeDashoffset={-s.dashOffset + circumference}
            initial={{ strokeDasharray: `0 ${circumference}` }}
            whileInView={{ strokeDasharray: `${s.dashArray} ${circumference - s.dashArray}` }}
            transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ filter: `drop-shadow(0 0 6px ${s.color}88)` }}
          />
        ))}
        {/* Center text */}
        <text x={cx} y={cy - 8} textAnchor="middle" fill="white" fontSize="13" fontFamily="Courier New" fontWeight="bold">
          1,000,000,000
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#ff8c00" fontSize="10" fontFamily="Courier New">
          TOTAL SUPPLY
        </text>
        <text x={cx} y={cy + 26} textAnchor="middle" fill="#666" fontSize="9" fontFamily="Courier New">
          (it's a lot, relax)
        </text>
      </svg>
    </div>
  )
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative z-10 py-28 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,60,0,0.05), transparent)' }} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs tracking-widest uppercase text-orange-500 mb-3">The Numbers</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-gray-500 text-sm tracking-widest">
            We did math so you don't have to. You're welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Donut chart */}
          <div className="fade-up flex justify-center">
            <DonutChart />
          </div>

          {/* Legend */}
          <div className="fade-up space-y-4">
            {slices.map((s) => (
              <div key={s.label} className="flex items-start gap-4 group">
                <div
                  className="mt-1 flex-shrink-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-bold text-white tracking-wide">{s.label}</span>
                    <span className="text-sm font-mono text-orange-400">{s.pct}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-0.5 bg-gray-800 rounded overflow-hidden mb-1">
                    <motion.div
                      className="h-full rounded"
                      style={{ backgroundColor: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="fade-up mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-orange-900/30 pt-12">
          {[
            { label: 'Tax', value: '0%', sub: 'buy & sell' },
            { label: 'Mint', value: 'Revoked', sub: 'obviously' },
            { label: 'Freeze', value: 'Revoked', sub: 'let it burn' },
            { label: 'Utility', value: 'None', sub: 'as promised' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 border border-orange-900/30"
              style={{ background: 'rgba(255,80,0,0.04)' }}>
              <p className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
              <p className="text-xs text-gray-600 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
