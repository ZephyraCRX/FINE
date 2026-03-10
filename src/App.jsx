import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import HowToBuy from './components/HowToBuy'
import Community from './components/Community'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import EmberField from './components/EmberField'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    gsap.utils.toArray('.fade-up').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      <EmberField />
      <Navbar />
      <Hero />
      <NewsSection />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Community />
      <Footer />
    </div>
  )
}
