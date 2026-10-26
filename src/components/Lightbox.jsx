import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, setIndex }) {
  const open = index !== null
  const go = (d) => setIndex((i) => (i + d + items.length) % items.length)
  useEffect(() => {
    if (!open) return
    const k = (e) => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={() => setIndex(null)}>
          <button className="lb-btn lb-close" aria-label="Close" onClick={() => setIndex(null)} autoFocus><X /></button>
          <button className="lb-btn lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1) }}><ChevronLeft /></button>
          <button className="lb-btn lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1) }}><ChevronRight /></button>
          <AnimatePresence mode="wait">
            <motion.img key={index} src={items[index].src} alt={items[index].alt} className="lb-img" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}
              onDragEnd={(_, i) => { if (i.offset.x < -70) go(1); else if (i.offset.x > 70) go(-1) }} onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.45 }} />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
