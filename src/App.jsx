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
