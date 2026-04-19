import React from 'react'
import styles from './Stats.module.css'
import { stats } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Stats() {
  const ref = useReveal()
  return (
    <div className={styles.strip} ref={ref} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <span className={styles.num}>{s.num}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
