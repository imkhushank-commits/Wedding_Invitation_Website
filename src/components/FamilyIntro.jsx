import { motion } from 'framer-motion'
import Orn from './Orn'
import { wedding } from '../data/weddingData'

// This is the family-introduction page that sits BEFORE the "Join Us" page.
// The existing Join Us / InvitationPage is kept unchanged.
export default function FamilyIntro() {
  const { groom, bride, family } = wedding

  return (
    <section className="family-intro" aria-label="Bride and groom family introduction">
      <motion.div
        className="family-intro-content"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <p className="small-caps family-intro-kicker">
          With blessings of the {family}
        </p>

        <Orn />

        <div className="family-intro-person">
          <h2 className="script family-intro-name">{groom.name}</h2>
          <p className="small-caps family-intro-relation">{groom.relation}</p>
          <p className="family-intro-parent">{groom.parents[0]}</p>
          <p className="family-intro-and">&amp;</p>
          <p className="family-intro-parent">{groom.parents[1]}</p>
        </div>

        <div className="family-intro-divider" aria-hidden="true" />

        <div className="family-intro-person">
          <h2 className="script family-intro-name">{bride.name}</h2>
          <p className="small-caps family-intro-relation">{bride.relation}</p>
          <p className="family-intro-parent">{bride.parents[0]}</p>
          <p className="family-intro-and">&amp;</p>
          <p className="family-intro-parent">{bride.parents[1]}</p>
        </div>
      </motion.div>
    </section>
  )
}
