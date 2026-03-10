import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsSection from './components/NewsSection'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import HowToBuy from './components/HowToBuy'
import Community from './components/Community'
import Footer from './components/Footer'
import EmberField from './components/EmberField'

gsap.registerPlugin(ScrollTrigger)

// Optional: set your Anthropic API key here to enable live news
// Leave empty string to use cached fallback headlines
const ANTHROPIC_API_KEY = ''

export default function App() {
  useEffect(() => {
    // Intersection Observer for fade-up elements
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
      {/* Fixed fire background — stays during scroll */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/hero-bg.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.45) saturate(1.1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, transparent 70%, rgba(12,4,0,0.85) 100%)' }} />
      </div>
      <EmberField />
      <Navbar />
      <Hero />
      <NewsSection apiKey={ANTHROPIC_API_KEY} />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Community />
      <Footer />
    </div>
  )
}
