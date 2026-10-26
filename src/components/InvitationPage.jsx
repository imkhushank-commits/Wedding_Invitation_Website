import { motion } from 'framer-motion'
import Orn from './Orn'

export default function InvitationPage() {
  return (
    <section className="invitation-page" aria-label="Wedding invitation message">
      <div className="invitation-pattern" />
      <motion.div
        className="invitation-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <p className="small-caps invitation-kicker">With the Grace of Trance Ariyaka Maa</p>
        <h2 className="script invitation-maata">“Vikalshree Mataji”</h2>

        <p className="invitation-beloved">(Homed beloved Maa “Meerabai Jain”)</p>

        <Orn />

        <p className="invitation-main">
          The journey of a lifetime begins here!<br />
          You are Cordially invited to Join us
        </p>

        <div className="invitation-flower" aria-hidden="true">✦</div>
      </motion.div>
    </section>
  )
}
