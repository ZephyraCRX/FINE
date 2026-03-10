import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TOPICS = [
  {
    key: 'war',
    icon: '🎯',
    label: 'War Monitor',
    query: 'latest war conflict military news today 2026',
    footer: 'Global panic detected.',
    fine: 'Everything is fine.',
    fallback: [
      { headline: 'New geopolitical tensions reported across several regions', source: 'Reuters', time: '2h ago' },
      { headline: 'Diplomatic talks stall as military posturing increases', source: 'BBC', time: '4h ago' },
      { headline: 'UN emergency session called over escalating crisis', source: 'AP', time: '6h ago' },
    ],
  },
  {
    key: 'markets',
    icon: '⚠️',
    label: 'Markets & Conflict',
    query: 'financial markets global economy crisis news today 2026',
    footer: 'Another bad headline.',
    fine: 'Still fine.',
    fallback: [
      { headline: 'Markets reacting nervously to rising global uncertainty', source: 'Bloomberg', time: '1h ago' },
      { headline: 'Fed signals more hikes as inflation bites again', source: 'WSJ', time: '3h ago' },
      { headline: 'Crypto down 18% in 4 hours. Analysts unsurprised.', source: 'CoinDesk', time: '5h ago' },
    ],
  },
  {
    key: 'leaders',
    icon: '🌐',
    label: 'Global Leaders',
    query: 'world leaders political summit diplomacy news today 2026',
    footer: 'Emergency meetings everywhere.',
    fine: 'Totally fine.',
    fallback: [
      { headline: 'G7 leaders call emergency summit amid rising tensions', source: 'Politico', time: '2h ago' },
      { headline: 'World leaders announce meetings to contain escalation', source: 'Guardian', time: '4h ago' },
      { headline: 'White House issues statement: situation is developing', source: 'NYT', time: '7h ago' },
    ],
  },
]

async function fetchLiveNews(topic, apiKey) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      system: `You are a news aggregator for a memecoin website. Search for the latest real news and return ONLY a JSON array of exactly 3 items. Each: {"headline":"max 12 words","source":"outlet name","time":"e.g. 2h ago"}. Respond ONLY with valid JSON array, no markdown.`,
      messages: [{ role: 'user', content: `Search: ${topic.query}. Return 3 items as JSON array.` }],
    }),
  })
  const data = await res.json()
  const text = data.content?.map(b => b.type === 'text' ? b.text : '').join('') || ''
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}

function NewsCard({ topic, apiKey }) {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const load = async () => {
    if (!apiKey) { setItems(topic.fallback); return }
    setLoading(true); setError(false)
    try {
      const results = await fetchLiveNews(topic, apiKey)
      setItems(results)
    } catch {
      setError(true)
      setItems(topic.fallback)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { const t = setTimeout(load, topic.key === 'war' ? 1200 : topic.key === 'markets' ? 1800 : 2400); return () => clearTimeout(t) }, [apiKey])

  return (
    <motion.div
      className="fade-up"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '20px', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column' }}
      whileHover={{ borderColor: 'rgba(232,160,32,0.5)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid rgba(180,100,10,0.2)' }}>
        <span style={{ fontSize: '16px' }}>{topic.icon}</span>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>
          {topic.label}
        </span>
      </div>

      {/* News items */}
      <div style={{ flex: 1, marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {loading ? (
          <div style={{ color: 'rgba(160,100,20,0.6)', fontSize: '12px', display: 'flex', alignItems: 'center', padding: '8px 0' }}>
            <span className="nc-spinner" /> Fetching live news...
          </div>
        ) : items ? items.map((item, i) => (
          <div key={i} style={{ paddingBottom: i < items.length - 1 ? '10px' : 0, borderBottom: i < items.length - 1 ? '1px solid rgba(180,100,10,0.12)' : 'none' }}>
            <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: '#E8C870', lineHeight: 1.5, marginBottom: '4px' }}>{item.headline}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', color: 'rgba(160,100,20,0.7)', letterSpacing: '1px' }}>
              {item.source} · {item.time} {error ? '(cached)' : ''}
            </div>
          </div>
        )) : null}
      </div>

      {/* Footer */}
      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: 'rgba(160,100,20,0.6)', borderTop: '1px solid rgba(180,100,10,0.2)', paddingTop: '10px' }}>
        {topic.footer} <strong style={{ color: 'var(--gold)' }}>{topic.fine}</strong>
        {apiKey && (
          <button onClick={load} style={{ marginLeft: '8px', background: 'none', border: 'none', color: 'rgba(232,160,32,0.5)', cursor: 'pointer', fontSize: '14px' }} title="Refresh">↻</button>
        )}
      </div>
    </motion.div>
  )
}

export default function NewsSection({ apiKey }) {
  return (
    <section id="news" style={{ position: 'relative', zIndex: 2, padding: '0 24px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Fire line */}
        <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(232,160,32,0.5), rgba(255,80,0,0.7), rgba(232,160,32,0.5), transparent)', marginBottom: '48px', boxShadow: '0 0 12px rgba(255,100,0,0.4)' }} />

        <div className="fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', display: 'flex', alignItems: 'center' }}>
            <span className="live-pip" />Latest World News
          </h2>
          {!apiKey && (
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', letterSpacing: '2px', color: 'rgba(160,100,20,0.5)', textTransform: 'uppercase' }}>
              cached headlines — add API key for live
            </span>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {TOPICS.map(topic => <NewsCard key={topic.key} topic={topic} apiKey={apiKey} />)}
        </div>
      </div>
    </section>
  )
}
