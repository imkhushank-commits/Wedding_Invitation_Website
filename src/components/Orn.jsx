export default function Orn({ light }) {
  return (
    <div className={`orn ${light ? 'light' : ''}`} aria-hidden="true">
      <span /><svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2c1.5 4 4 6.5 8 8-4 1.5-6.5 4-8 8-1.5-4-4-6.5-8-8 4-1.500 6.500-4 8-8z" fill="currentColor" /></svg><span />
    </div>
  )
}
