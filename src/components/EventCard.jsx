import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { venues, mapLink } from '../data/weddingData'

export default function EventCard({ ev, i }) {
  const v = venues[ev.venue]
  return (
    <motion.article className={`event ev-${ev.theme}`} style={{ willChange: 'transform, opacity' }} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }} transition={{ duration: 1.5, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}>
      <div className="ev-frame">
        <div className="ev-img-wrap">
          <img className="ev-img" src={ev.image} alt={`${ev.title} decoration`} loading="lazy" />
        </div>
        <h3 className="ev-title">{ev.title}</h3>
        {ev.sub && <p className="ev-sub">{ev.sub}</p>}
        <div className="ev-line" />
        <p className="ev-date">{ev.date}</p>
        <p className="ev-time"><Clock size={14} strokeWidth={1.4} /> {ev.time}</p>
        <p className="ev-venue">{v.name}<br /><span>{v.place}</span></p>
        <a className="btn-line" href={mapLink(v)} target="_blank" rel="noopener noreferrer" aria-label={`View ${v.name} on map`}><MapPin size={14} /> View on Map</a>
      </div>
    </motion.article>
  )
}
