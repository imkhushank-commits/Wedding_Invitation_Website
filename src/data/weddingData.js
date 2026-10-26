// Single source of truth. Edit this file to customise the invitation.
const img = (n) => `/images/${n}.jpg`
const gal = (n) => `/images/gallery/${n}.jpg`

export const wedding = {
  groom: { name: 'Sarthak', parents: ['Mr. Satyapal Jain', 'Mrs. Harshni Jain'], relation: 'Son of' },
  bride: { name: 'Bhumi', parents: ['Mr. Raju Jain', 'Mrs. Lata Jain'], relation: 'Daughter of' },
  family: 'Shravan Family',
  tagline: 'Two Hearts, One Beautiful Journey',
  subTagline: 'Are Getting Married',
  dateRange: '13—14 & 20 December 2026',
  // Countdown target: first event (Haldi), 2:00 PM India Standard Time
  countdownTarget: '2026-12-13T14:00:00+05:30',
  invitation:
    'As two hearts come together and begin a beautiful new journey, we warmly invite you to be a part of these cherished celebrations. Your presence, love, and blessings will make these moments even more special and memorable.',
  closing: ['We look forward to celebrating these beautiful moments with you.', 'We will be eagerly waiting for your presence.'],
  whatsapp: '919424601260', // WhatsApp number with country code (shown on RSVP)
  music: '/music/wedding-instrumental.m4a',
  colors: { burgundy: '#5A0D1B', wine: '#3D0712', ivory: '#F6F0E7', cream: '#EFE5D7', gold: '#B79A63', text: '#2C2522' },
}

// mapUrl: paste an exact Google Maps link here; if left empty a Maps search for the venue is used.
export const venues = {
  dharti: { name: 'Dharti Resort', place: 'Navsari-Surat, Gujarat', address: 'Dharti Resort, Navsari-Surat, Gujarat', mapUrl: '' },
  orchid: { name: 'Royal Orchid Resort', place: 'Indore (M.P)', address: 'Royal Orchid Resort, Indore (M.P)', mapUrl: '' },
}
export const mapLink = (v) => v.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.address)}`

export const events = [
  { id: 'haldi', title: 'Haldi Carnival', sub: 'Ceremony', date: '13 December 2026', time: '2:00 PM onwards', venue: 'dharti', theme: 'haldi', icon: 'sun', image: '/images/events/haldi.jpg' },
  { id: 'sangeet', title: 'Sangeet', date: '13 December 2026', time: '7:00 PM onwards', venue: 'dharti', theme: 'sangeet', icon: 'music', image: '/images/events/Sangeet.jpg' },
  { id: 'olympics', title: 'Wedding Olympics', sub: 'Fun Games and Activation', date: '14 December 2026', time: '10:00 AM onwards', venue: 'dharti', theme: 'olympics', icon: 'trophy', image: '/images/events/WeddingOlympics.jpg' },
  { id: 'baraat', title: 'Baraat and Phere', date: '14 December 2026', time: '2:00 PM onwards', venue: 'dharti', theme: 'baraat', icon: 'sparkles', image: '/images/events/Barrat.jpg' },
  { id: 'reception', title: 'Reception', date: '20 December 2026', time: '12:00 PM onwards', venue: 'orchid', theme: 'reception', icon: 'wine', image: '/images/events/Reception.jpg' },
]

// focus = CSS object-position so the couple is never cropped out.
export const photos = {
  hero: { src: img('hero-bg'), alt: 'Sarthak and Bhumi smiling at each other in golden sunset light', focus: '50% 30%' },
  final: { src: img('highfive-bw'), alt: 'Sarthak and Bhumi sharing a high five across a badminton net', focus: '50% 62%' },
}

export const gallery = [
  { src: img('lift-color'), alt: 'Sarthak lifting Bhumi among green trees', ar: '3/4', focus: '50% 70%' },
  { src: gal('arch-portrait'), alt: 'Sarthak and Bhumi smiling at each other under a sunlit arched doorway', ar: '2/3' },
  { src: img('highfive-bw'), alt: 'Black and white high five over a badminton net', ar: '4/5', focus: '50% 62%', bw: true },
  { src: gal('run-garden'), alt: 'The couple running hand in hand through a garden beside a heritage temple', ar: '3/2' },
  { src: gal('lean-red'), alt: 'Bhumi resting her head on Sarthak in a red anarkali and ivory kurta', ar: '2/3' },
  { src: img('dance-color'), alt: 'Couple dancing on a sunlit lawn', ar: '1/1', focus: '72% 82%' },
  { src: gal('twirl-steps'), alt: 'Bhumi twirling in red on stone steps while Sarthak looks on with a rose', ar: '3/2' },
  { src: gal('anklet'), alt: 'Sarthak fastening a pearl anklet on Bhumi, both smiling', ar: '2/3' },
  { src: img('walk-bw'), alt: 'Black and white photo of the couple walking hand in hand', ar: '3/4', focus: '65% 80%', bw: true },
  { src: gal('forehead-bw'), alt: 'Black and white portrait, foreheads touching', ar: '3/2' },
  { src: gal('walk-path'), alt: 'The couple strolling hand in hand along a tree-lined path', ar: '2/3' },
  { src: img('walk-color'), alt: 'Couple walking hand in hand on the lawn', ar: '4/5', focus: '55% 78%' },
  { src: gal('sunglasses-hill'), alt: 'Sarthak in sunglasses with Bhumi smiling behind him on a hilltop', ar: '3/2' },
  { src: gal('embrace-hill'), alt: 'Sarthak and Bhumi in a joyful embrace on a golden hillside', ar: '2/3' },
  { src: img('dance-bw'), alt: 'Black and white photo of the couple twirling', ar: '1/1', focus: '72% 80%', bw: true },
  { src: gal('chhatri-walk'), alt: 'The couple walking towards the camera in front of a stone chhatri', ar: '2/3' },
]

export const nav = [['Home', 'home'], ['Celebrations', 'celebrations'], ['Gallery', 'gallery'], ['Venue', 'venue'], ['RSVP', 'rsvp']]
