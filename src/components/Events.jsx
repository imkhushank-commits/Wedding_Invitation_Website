import EventCard from './EventCard'
import Reveal from './Reveal'
import Orn from './Orn'
import { events } from '../data/weddingData'

export default function Events() {
  return (
    <section id="celebrations" className="section events">
      <Reveal><p className="small-caps light">Celebrations</p></Reveal>
      <Reveal delay={0.1}><h2 className="script h2 light">Join us for the festivities</h2></Reveal>
      <Orn light />
      <div className="event-grid">{events.map((e, i) => <EventCard key={e.id} ev={e} i={i} />)}</div>
    </section>
  )
}
