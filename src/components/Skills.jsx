import React from 'react'
import styles from './Skills.module.css'
import SectionHeader from './SectionHeader'
import Tag from './Tag'
import { skills } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function SkillCard({ skill, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.6s ${delay}ms ease, transform 0.6s ${delay}ms ease` }}
    >
      <div className={styles.cardTop} />
      <div className={styles.icon}>{skill.icon}</div>
      <h3 className={styles.name}>{skill.name}</h3>
      <p className={styles.desc}>{skill.desc}</p>
      <div className={styles.tags}>
        {skill.tags.map(t => <Tag key={t.label} label={t.label} colour={t.colour} />)}
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useReveal()
  return (
    <section id="skills" className={styles.section}>
      <div
        ref={headerRef}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <SectionHeader index="01" title="Skills & stack" />
      </div>
      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
