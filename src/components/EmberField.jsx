import { useEffect, useRef } from 'react'

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function EmberField() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const embersRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawnEmber = () => ({
      x: randomBetween(0, canvas.width),
      y: canvas.height + 10,
      size: randomBetween(1.5, 4),
      speedY: randomBetween(0.6, 2.0),
      speedX: randomBetween(-0.8, 0.8),
      opacity: 1,
      hue: randomBetween(10, 50),
      life: 1,
      decay: randomBetween(0.003, 0.008),
      wobble: randomBetween(0, Math.PI * 2),
      wobbleSpeed: randomBetween(0.02, 0.06),
    })

    // Initial embers
    for (let i = 0; i < 60; i++) {
      const e = spawnEmber()
      e.y = randomBetween(0, canvas.height)
      e.life = randomBetween(0.2, 1)
      embersRef.current.push(e)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn new embers
      if (embersRef.current.length < 80) {
        embersRef.current.push(spawnEmber())
      }

      embersRef.current = embersRef.current.filter((e) => e.life > 0)

      embersRef.current.forEach((e) => {
        e.wobble += e.wobbleSpeed
        e.x += e.speedX + Math.sin(e.wobble) * 0.4
        e.y -= e.speedY
        e.life -= e.decay
        e.opacity = e.life

        ctx.save()
        ctx.globalAlpha = Math.max(0, e.opacity * 0.8)
        ctx.beginPath()
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2)

        const gradient = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2)
        gradient.addColorStop(0, `hsla(${e.hue + 30}, 100%, 90%, 1)`)
        gradient.addColorStop(0.4, `hsla(${e.hue}, 100%, 60%, 0.8)`)
        gradient.addColorStop(1, `hsla(${e.hue - 10}, 100%, 40%, 0)`)
        ctx.fillStyle = gradient

        ctx.shadowBlur = 8
        ctx.shadowColor = `hsla(${e.hue}, 100%, 60%, 0.6)`
        ctx.fill()
        ctx.restore()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
