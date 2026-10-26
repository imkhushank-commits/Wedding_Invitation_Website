import { MapPin } from 'lucide-react'
import Reveal from './Reveal'
import Orn from './Orn'
import { venues, mapLink, events } from '../data/weddingData'

export default function Venue() {
  return (
    <section id="venue" className="section venue">
      <Reveal><p className="small-caps">Venue</p></Reveal>
      <Reveal delay={0.1}><h2 className="script h2">Where to find us</h2></Reveal>
      <Orn />
      <div className="venue-grid">
        {Object.entries(venues).map(([k, v], i) => (
          <Reveal key={k} delay={i * 0.15} className="venue-card">
            <MapPin strokeWidth={1.2} size={30} />
            <h3 className="serif-h">{v.name}</h3>
            <p>{v.address.replace(v.name + ', ', '')}</p>
            <p className="venue-ev">{events.filter((e) => e.venue === k).map((e) => e.title).join(' · ')}</p>
            <a className="btn-solid" href={mapLink(v)} target="_blank" rel="noopener noreferrer">View on Map</a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
