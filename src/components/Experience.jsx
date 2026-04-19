import React from 'react'
import SectionHead from './SectionHead'
import Tag from './Tag'
import { experience } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ExpItem({ item, i }) {
  const ref = useReveal()
  return (
    <div
      className={`exp-item${item.current ? ' current' : ''}${item.edu ? ' edu' : ''}`}
      ref={ref}
      data-reveal
      style={{ '--delay': `${i * 80}ms` }}
    >
      <div className="exp-dot" />
      <div className="exp-period">
        {item.current && <span className="pulse-dot" style={{ marginRight: '.5rem' }} />}
        {item.period}
        {item.current && <span className="exp-now">now</span>}
      </div>
      <div className="exp-role">{item.role}</div>
      <div className="exp-company">{item.company} — {item.location}</div>
      <ul className="exp-bullets">
        {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
      </ul>
      <div className="exp-tags">
        {item.tags.map(([l, c]) => <Tag key={l} label={l} colour={c} />)}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead idx="03 -" title="Experience" tag="7 years in QA & automation" />
      <div className="exp-timeline">
        {experience.map((item, i) => <ExpItem key={i} item={item} i={i} />)}
      </div>
    </section>
  )
}
