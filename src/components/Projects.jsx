import React from 'react'
import styles from './Projects.module.css'
import SectionHeader from './SectionHeader'
import Tag from './Tag'
import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Badge({ type, label }) {
  const isLive = type === 'live'
  return (
    <span className={`${styles.badge} ${isLive ? styles.badgeLive : styles.badgeWip}`}>
      {isLive && <span className={styles.liveDot} />}
      {label}
    </span>
  )
}

function Pipeline({ steps }) {
  return (
    <div className={styles.pipeline}>
      <p className={styles.pipelineTitle}>GitHub Actions — latest run</p>
      {steps.map((s, i) => (
        <div key={i} className={styles.pipelineStep}>
          <span className={styles.stepIcon}>✓</span>
          <span className={styles.stepLabel}>{s.label}</span>
          <span className={styles.stepTime}>{s.time}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, delay }) {
  const ref = useReveal()
  const isFeatured = project.featured

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isFeatured ? styles.featured : ''}`}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease` }}
    >
      <div className={styles.cardInner}>
        <div className={styles.meta}>
          <Badge type={project.badge} label={project.badgeLabel} />
          {isFeatured && <span className={styles.featuredLabel}>Featured</span>}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.stack}>
          {project.stack.map(t => <Tag key={t.label} label={t.label} colour={t.colour} />)}
        </div>

        {project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map(l => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                style={l.colour === 'green' ? { color: 'var(--green)' } : {}}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {isFeatured && project.pipeline && (
        <Pipeline steps={project.pipeline} />
      )}
    </div>
  )
}

export default function Projects() {
  const headerRef = useReveal()
  return (
    <section id="projects" className={styles.section}>
      <div
        ref={headerRef}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <SectionHeader index="02" title="Portfolio frameworks" />
      </div>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
