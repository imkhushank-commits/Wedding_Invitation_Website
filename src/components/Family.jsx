import Reveal from './Reveal'
import Orn from './Orn'
import { wedding } from '../data/weddingData'

const Side = ({ p }) => (
  <Reveal className="fam-side">
    <h3 className="script fam-name">{p.name}</h3>
    <p className="small-caps">{p.relation}</p>
    <p className="fam-par">{p.parents[0]}</p><p className="fam-and">&amp;</p><p className="fam-par">{p.parents[1]}</p>
  </Reveal>
)
export default function Family() {
  return (
    <section className="section family">
      <Reveal><p className="small-caps">With blessings of the {wedding.family}</p></Reveal>
      <Orn />
      <div className="fam-grid"><Side p={wedding.groom} /><div className="fam-div" aria-hidden="true" /><Side p={wedding.bride} /></div>
    </section>
  )
}
