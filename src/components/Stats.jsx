import React from 'react'
import { stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ num, suffix, label, idx }) {
  const [val, ref] = useCountUp(num)
  return (
    <div className="stat" ref={ref}>
      <span className="idx">0{idx + 1}</span>
      <span className="num">{val}{suffix}</span>
      <span className="label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => <Stat key={i} {...s} idx={i} />)}
    </div>
  )
}
