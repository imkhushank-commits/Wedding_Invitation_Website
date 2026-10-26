import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Countdown from './Countdown'
import { wedding, photos } from '../data/weddingData'

export default function Hero({ show }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.6 })
  const y = useTransform(smooth, [0, 1], ['0%', '12%'])
  return (
    <section id="home" ref={ref} className="hero">
      <motion.img src={photos.hero.src} alt={photos.hero.alt} className="hero-img" style={{ y, objectPosition: photos.hero.focus }}
        initial={{ scale: 1.15 }} animate={show ? { scale: 1 } : {}} transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }} />
      <div className="hero-shade" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.6, delay: 0.4 }}>
        <p className="hero-tagline">{wedding.tagline}</p>
        <h1 className="script hero-names">Sarthak <span>&amp;</span> Bhumi</h1>
        <p className="hero-sub">{wedding.subTagline}</p>
        <p className="hero-date">{wedding.dateRange}</p>
        <Countdown />
      </motion.div>
    </section>
  )
}
