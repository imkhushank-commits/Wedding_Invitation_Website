import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../data/weddingData'

const calc = () => {
  const d = Math.max(0, new Date(wedding.countdownTarget).getTime() - Date.now())
  return { Days: Math.floor(d / 864e5), Hours: Math.floor(d / 36e5) % 24, Minutes: Math.floor(d / 6e4) % 60, Seconds: Math.floor(d / 1e3) % 60 }
}
export default function Countdown() {
  const [t, setT] = useState(calc)
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id) }, [])
  return (
    <div className="countdown" role="timer" aria-label="Time until the celebrations begin">
      {Object.entries(t).map(([k, v]) => (
        <div key={k} className="cd-unit">
          <div className="cd-num"><AnimatePresence mode="popLayout" initial={false}>
            <motion.span key={v} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} transition={{ duration: 0.4 }}>{String(v).padStart(2, '0')}</motion.span>
          </AnimatePresence></div>
          <span className="cd-label">{k}</span>
        </div>
      ))}
    </div>
  )
}
