import { useEffect, useState } from 'react'
import OpeningCard from './components/OpeningCard'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import InvitationPage from './components/InvitationPage'
import FamilyIntro from './components/FamilyIntro'

export default function App() {
  const [phase, setPhase] = useState('closed') // closed → revealing → done
  const opened = phase !== 'closed'
  useEffect(() => {
    document.body.style.overflow = phase === 'done' ? '' : 'hidden'
    if (phase === 'revealing') window.scrollTo(0, 0)
  }, [phase])
  return (
    <>
      {opened && <><Navigation /><main><Hero show /><InvitationPage /><FamilyIntro /><Events /><Gallery /><Venue /><RSVP /></main><Footer /></>}
      {phase !== 'done' && <OpeningCard onReveal={() => setPhase('revealing')} onDone={() => setPhase('done')} />}
      <MusicPlayer ready={phase === 'done'} />
    </>
  )
}
