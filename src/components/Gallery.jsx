import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'
import Reveal from './Reveal'
import Orn from './Orn'
import { gallery } from '../data/weddingData'

export default function Gallery() {
  const [idx, setIdx] = useState(null)
  return (
    <section id="gallery" className="section gallery">
      <Reveal><p className="small-caps">Gallery</p></Reveal>
      <Reveal delay={0.1}><h2 className="script h2">Moments together</h2></Reveal>
      <Orn />
      <div className="masonry">
        {gallery.map((g, i) => (
          <motion.button key={g.src} className={`m-item ${g.bw ? 'bw' : ''}`} style={{ aspectRatio: g.ar }} aria-label={`Open photo: ${g.alt}`} onClick={() => setIdx(i)}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 1.4, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}>
            <img src={g.src} alt={g.alt} loading="lazy" decoding="async" style={{ objectPosition: g.focus }} />
          </motion.button>
        ))}
      </div>
      <Lightbox items={gallery} index={idx} setIndex={setIdx} />
    </section>
  )
}
