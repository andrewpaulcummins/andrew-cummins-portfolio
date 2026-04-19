import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function SectionHead({ idx, title, tag }) {
  const ref = useReveal()
  return (
    <div className="section-head" data-reveal ref={ref}>
      <span className="idx">{idx}</span>
      <h2>{title}</h2>
      <span className="rule" />
      {tag && <span className="tag">{tag}</span>}
    </div>
  )
}
