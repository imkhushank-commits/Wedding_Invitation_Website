import { motion } from 'framer-motion'
import Orn from './Orn'
import { wedding } from '../data/weddingData'

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer-img" src="/images/footer-bg.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div className="footer-veil" aria-hidden="true" />
      <motion.div className="footer-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}>
        <h2 className="script big-names">Sarthak<br /><span>&amp;</span><br />Bhumi</h2>
        <Orn />
        <p className="serif-i footer-presence">Looking forward to celebrate these moments with you</p>
        <p className="serif-i footer-presence">Eagerly waiting for your Solidarity &amp; Presence </p>
        <p className="small-caps fam">{wedding.family}</p>
      </motion.div>
    </footer>
  )
}
