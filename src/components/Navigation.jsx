import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/weddingData'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50) }
  return (
    <motion.header className="nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8 }}>
      <a href="#home" className="nav-logo script" onClick={go('home')} aria-label="Home">S &amp; B</a>
      <nav className="nav-links" aria-label="Main">{nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={go(id)}>{l}</a>)}</nav>
      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <AnimatePresence>
        {open && (
          <motion.nav className="drawer" aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {nav.map(([l, id], i) => <motion.a key={id} href={`#${id}`} onClick={go(id)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>{l}</motion.a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
