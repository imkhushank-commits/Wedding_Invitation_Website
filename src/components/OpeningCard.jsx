import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { wedding } from '../data/weddingData'

const ease = [0.45, 0, 0.15, 1]
const flaps = ['top', 'left', 'right', 'bottom']
const flapAnim = {
  top: { rotateX: 180 }, bottom: { rotateX: -180 }, left: { rotateY: -180 }, right: { rotateY: 180 },
}

export default function OpeningCard({ onReveal, onDone }) {
  const reduce = useReducedMotion()
  const [stage, setStage] = useState(0) // 0 closed, 1 flaps opening, 2 names revealed, 3 leaving
  const timers = useRef([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const open = () => {
    if (stage) return
    window.dispatchEvent(new Event('wedding-open'))
    setStage(1)
    const t = reduce ? [200, 1400, 2600] : [0, 2800, 6200]
    timers.current.push(setTimeout(() => setStage(2), t[1]), setTimeout(() => { setStage(3); onReveal() }, t[2]),
      setTimeout(onDone, t[2] + 1300))
  }

  return (
    <motion.div className="open-screen" animate={{ opacity: stage === 3 ? 0 : 1, scale: stage === 3 ? 1.04 : 1 }}
      transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }} aria-label="Wedding invitation opening">
      <div className="paper-grain" />
      <motion.div className="open-light" animate={{ opacity: stage >= 1 ? 0.9 : 0.4 }} transition={{ duration: 2 }} />
      <div className="perspective">
        <motion.button className="env" onClick={open} aria-label="Open invitation" disabled={stage > 0}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: stage ? -8 : 0, scale: stage === 2 ? 1.06 : 1 }}
          transition={{ duration: stage ? 2.4 : 1.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="env-back" />
          <motion.div className="inner-card" initial={false} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 0.6, duration: 1 }}>
            <div className="inner-frame">
              <motion.p className="small-caps" initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 1.2 }}>&#124;&#124; Shri Mahaviray Namah &#124;&#124;</motion.p>
              <motion.h1 className="script name" initial={{ opacity: 0, y: 14 }} animate={stage >= 2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.4, ease }}>Sarthak</motion.h1>
              <motion.span className="amp" initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 1.2, delay: 0.5 }}>&amp;</motion.span>
              <motion.h1 className="script name" initial={{ opacity: 0, y: 14 }} animate={stage >= 2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.4, ease, delay: 0.9 }}>Bhumi</motion.h1>
              <motion.p className="small-caps" initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 1.2, delay: 1.6 }}>{wedding.dateRange}</motion.p>
            </div>
          </motion.div>
          {flaps.map((f, i) => (
            <motion.div key={f} className={`flap flap-${f}`} style={{ z: i + 1 }}
              initial={false}
              animate={stage >= 1 ? { ...(reduce ? {} : flapAnim[f]), opacity: reduce ? 0 : [1, 1, 1, 0] } : { rotateX: 0, rotateY: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0.8 : 2.6, ease, delay: reduce ? 0 : f === 'top' ? 1.0 : f === 'bottom' ? 0.6 : 0.1, times: reduce ? undefined : [0, 0.65, 0.88, 1] }}>
              <div className="flap-edge" />
            </motion.div>
          ))}
          <motion.div className="seal" style={{ z: 9 }} animate={{ opacity: stage ? 0 : 1, scale: stage ? 0.7 : 1 }} transition={{ duration: 0.7 }}>
            <span>S<i>&amp;</i>B</span>
          </motion.div>
        </motion.button>
      </div>
      <motion.p className="tap-hint" animate={{ opacity: stage ? 0 : [0.5, 1, 0.5] }} transition={stage ? { duration: 0.5 } : { duration: 3, repeat: Infinity }}>Tap to Open</motion.p>
    </motion.div>
  )
}
