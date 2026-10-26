import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import Orn from './Orn'
import { wedding, events } from '../data/weddingData'

// Backend hook: replace the body of this function (fetch to your own endpoint, Google Sheet, etc.)
async function submitRSVP(data) { return data }

// Builds the WhatsApp message the guest sends to the family
function buildMessage({ name, guests, message }) {
  const n = Number(guests)
  const lines = [
    'Namaste 🙏',
    '',
    `I am *${name.trim()}*, and it is our absolute joy to confirm our presence at the wedding celebrations of *Sarthak & Bhumi* ✨`,
    '',
    `👥 *Guests attending:* ${n} ${n === 1 ? 'person' : 'people'}`,
    `📅 *Dates:* ${wedding.dateRange}`,
    '',
    '*Celebrations we will be joining:*',
    ...events.map((e) => `• ${e.title} — ${e.date}`),
  ]
  if (message.trim()) lines.push('', `💌 *Our message for you:*`, message.trim())
  lines.push('', 'Thank you so much for the warm invitation. We are really looking forward to celebrating this beautiful journey with you and sharing in all the happiness, love and laughter 🤍', '', 'With love & blessings,', name.trim())
  return lines.join('\n')
}

export default function RSVP() {
  const [f, setF] = useState({ name: '', guests: '1', message: '' })
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    // open WhatsApp straight from the click so mobile/desktop browsers don't block it
    const url = `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(buildMessage(f))}`
    const w = window.open(url, '_blank', 'noopener,noreferrer')
    if (!w) window.location.href = url
    setBusy(true); await submitRSVP(f); setBusy(false); setDone(true)
  }
  return (
    <section id="rsvp" className="section rsvp">
      <Reveal><p className="small-caps light">RSVP</p></Reveal>
      <Reveal delay={0.1}><h2 className="script h2 light">Kindly respond</h2></Reveal>
      <Orn light />
      <div className="rsvp-card">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div key="ok" className="rsvp-ok" role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <h3 className="script">Thank you, {f.name.split(' ')[0]}</h3>
              <p>WhatsApp has opened with your message. Please press <b>Send</b> there to complete your RSVP. We look forward to celebrating with you.</p>
              <button className="btn-line dark" onClick={() => { setDone(false); setF({ name: '', guests: '1', message: '' }) }}>Respond for another guest</button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit} exit={{ opacity: 0 }}>
              <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Number of guests<select value={f.guests} onChange={set('guests')}>{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}</select></label>
              <label>Message<textarea rows="3" value={f.message} onChange={set('message')} /></label>
              <button className="btn-solid gold" disabled={busy}>{busy ? 'Opening WhatsApp…' : 'Confirm Presence'}</button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
