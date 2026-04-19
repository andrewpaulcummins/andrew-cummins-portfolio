import React from 'react'
import SectionHead from './SectionHead'
import Tag from './Tag'
import { skills } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function SkillCard({ skill, i }) {
  const ref = useReveal()
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    el.style.setProperty('--mx', x + '%')
    el.style.setProperty('--my', y + '%')
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-ny * 4}deg) rotateY(${nx * 6}deg) translateY(-3px)`
  }
  const off = (e) => { e.currentTarget.style.transform = '' }
  return (
    <div className="skill-card" ref={ref} data-reveal style={{ '--delay': `${i * 60}ms` }}
         onMouseMove={onMove} onMouseLeave={off} data-cursor="skill">
      <span className="skill-sheen" />
      <span className="skill-top" />
      <div className="skill-no">S/{String(i + 1).padStart(2, '0')}</div>
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-desc">{skill.desc}</p>
      <div className="skill-tags">
        {skill.tags.map(([l, c]) => <Tag key={l} label={l} colour={c} />)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead idx="01 -" title="Skills & stack" tag="What I bring" />
      <div className="skills-grid">
        {skills.map((s, i) => <SkillCard key={s.name} skill={s} i={i} />)}
      </div>
    </section>
  )
}
