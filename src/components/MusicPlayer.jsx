import { useEffect, useRef, useState } from 'react'
import { Music2, Pause } from 'lucide-react'
import { wedding } from '../data/weddingData'

export default function MusicPlayer({ ready }) {
  const a = useRef(null)
  const [on, setOn] = useState(false)
  const [note, setNote] = useState('')

  const play = async () => {
    try {
      await a.current?.play()
      setOn(true)
      localStorage.setItem('wd-music', 'on')
    } catch {
      setOn(false)
      setNote('Tap Music to play')
      setTimeout(() => setNote(''), 2500)
    }
  }

  const pause = () => {
    a.current?.pause()
    setOn(false)
    try { localStorage.setItem('wd-music', 'off') } catch {}
  }

  useEffect(() => {
    const startFromOpening = () => { play() }
    window.addEventListener('wedding-open', startFromOpening)

    if (ready) {
      try {
        if (localStorage.getItem('wd-music') === 'on') play()
      } catch {}
    }

    return () => window.removeEventListener('wedding-open', startFromOpening)
  }, [ready])

  if (!wedding.music) return null

  return (
    <>
      <audio
        ref={a}
        src={wedding.music}
        loop
        preload="metadata"
        onPlay={() => setOn(true)}
        onPause={() => setOn(false)}
        onError={() => {
          setOn(false)
          setNote('Music unavailable')
          setTimeout(() => setNote(''), 2500)
        }}
      />
      {ready && (
        <button
          className="music-btn"
          onClick={on ? pause : play}
          aria-pressed={on}
          aria-label={on ? 'Pause music' : 'Play music'}
        >
          {on ? <Pause size={16} /> : <Music2 size={16} />}
          <span>{note || 'Music'}</span>
        </button>
      )}
    </>
  )
}
