import React from 'react'
import styles from './Contact.module.css'
import { personal } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className={styles.section}>
      <div
        ref={ref}
        className={styles.inner}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <h2 className={styles.heading}>
          Let's build something<span> great.</span>
        </h2>
        <p className={styles.sub}>
          Open to SDET, automation engineering, test engineering OR QA engineer roles in Ireland and remote.
          Drop me a message and I'll get back to you.
        </p>
        <div className={styles.links}>
          <a href={`mailto:${personal.email}`} className={`${styles.btn} ${styles.btnPrimary}`}>
            Email me
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
