import { motion } from 'framer-motion'
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as]
  return <M className={className} style={{ willChange: 'transform, opacity' }} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</M>
}
