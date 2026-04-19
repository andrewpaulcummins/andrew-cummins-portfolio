import React, { useState, useEffect, useRef } from 'react'
import SectionHead from './SectionHead'
import Tag from './Tag'
import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function AnimatedPipeline({ steps }) {
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let step = 0
    const tick = () => {
      step++
      if (step <= steps.length) {
        setActive(step)
        setTimeout(tick, 650)
      } else {
        setTimeout(() => { setActive(0); setTimeout(tick, 400) }, 2200)
      }
    }
    const t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [started])

  const totalSec = steps.reduce((a, s) => a + parseInt(s.time, 10), 0)
  return (
    <div className="pipeline" ref={ref}>
      <div className="pipeline-head">
        <span><span className="sha">a7c1f0e</span> ci: run suite</span>
        <span className="right">
          <span className="pulse-dot" style={{ background: 'var(--green)' }} />
          passing
        </span>
      </div>
      {steps.map((s, i) => {
        const cls = i < active ? 'done' : i === active ? 'active' : ''
        return (
          <div key={i} className={`pipeline-step ${cls}`}>
            <span className="step-icon">{cls === 'done' ? '✓' : cls === 'active' ? '●' : '○'}</span>
            <span className="step-label">{s.label}</span>
            <span className="step-time">{s.time}</span>
          </div>
        )
      })}
      <div className="pipeline-summary">
        <span>{steps.length} jobs · {totalSec}s</span>
        <span className="pass">✓ passed</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, i }) {
  const ref = useReveal()
  const isFeat = project.featured
  return (
    <article className={`p-card ${isFeat ? 'featured' : ''}`} ref={ref} data-reveal
             style={{ '--delay': `${i * 80}ms` }} data-cursor="read">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="p-meta">
          <span className={`p-badge ${project.badge}`}>
            <span className="dot" />
            {project.badgeLabel}
          </span>
          {isFeat && <span className="p-featured-label">★ Featured</span>}
        </div>
        <h3 className="p-title">{project.title}</h3>
        <p className="p-desc">{project.desc}</p>
        <div className="p-stack">
          {project.stack.map(([l, c]) => <Tag key={l} label={l} colour={c} />)}
        </div>
        {project.links.length > 0 && (
          <div className="p-links">
            {project.links.map((l, k) => (
              <a key={k} href={l.url} target="_blank" rel="noreferrer"
                 className={`p-link ${l.green ? 'green' : ''}`} data-cursor="open">
                {l.green ? '●' : '↗'} {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {isFeat && project.pipeline && <AnimatedPipeline steps={project.pipeline} />}
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="section alt">
      <SectionHead idx="02 -" title="Selected work" tag="Featured + recent" />
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} i={i} />)}
      </div>
    </section>
  )
}
