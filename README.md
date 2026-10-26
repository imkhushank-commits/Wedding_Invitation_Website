# Sarthak & Bhumi — Wedding Invitation

React + Vite + Framer Motion. All content lives in `src/data/weddingData.js`.

## Run
    npm install
    npm run dev      # local dev
    npm run build    # production build → dist/

## Customise
- Names, dates, events, venues, messages, colours: `src/data/weddingData.js`
- Map buttons: set `mapUrl` per venue (otherwise a Google Maps search for the venue name is used)
- Photos: `public/images/` (reference them in the data file; `focus` sets the crop point)
- Music: drop a file at `public/music/wedding-song.mp3` (site works without it; the button shows "Music unavailable")
- RSVP backend: replace `submitRSVP` in `src/components/RSVP.jsx`
- Countdown target: `countdownTarget` (13 Dec 2026, 2:00 PM IST)


### Event images
Each event card uses an illustration from `public/images/events/` (haldi, sangeet, olympics, baraat, reception — .svg). Replace a file (same name) or change the `image` path of an event in `weddingData.js` to use your own photo/design.

## Footer photo
Replace `public/images/footer-bg.jpg` with your photo (any size; it is shown full-bleed behind the footer text).
