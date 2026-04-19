import React from 'react'
import styles from './About.module.css'
import SectionHeader from './SectionHeader'
import { personal } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const facts = [
  { key: 'location',    val: 'Kilkenny, Ireland' },
  { key: 'speciality',  val: 'SDET & Test Automation' },
  { key: 'primary_lang',val: 'Java (17 Temurin)' },
  { key: 'frameworks',  val: 'Selenium, Playwright, Cucumber' },
  { key: 'ci_platforms',val: 'GitHub Actions, Jenkins' },
  { key: 'availability',val: 'Open to opportunities', highlight: true },
  { key: 'github',      val: personal.github, isLink: true, display: 'andrewpaulcummins' },
]

export default function About() {
  const textRef  = useReveal()
  const factsRef = useReveal()

  return (
    <section id="about" className={styles.section}>
      <div
        ref={textRef}
        className={styles.text}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        <SectionHeader index="03" title="About me" />

        <p>
          I'm an SDET and automation engineer based in <strong>Kilkenny, Ireland</strong>.
          I've spent years in quality engineering, but what sets me apart is that I don't
          just run tests, I <strong>architect the infrastructure</strong> that makes
          testing at scale possible.
        </p>
        <p>
          Most companies I've spoken to struggle with the same problems: flaky tests,
          no CI integration, frameworks held together with duct tape. I fix that. I've
          built production BDD frameworks from nothing and seen them through to green
          pipelines and live Allure reporting.
        </p>
        <p>
          Outside of engineering, I'm a football fan and I live stream from time to time,
          which has done more for my ability to communicate clearly under pressure than
          any meeting ever has.
        </p>

        <a href="#contact" className={styles.btn}>Let's talk</a>
      </div>

      <div
        ref={factsRef}
        className={styles.facts}
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease' }}
      >
        {facts.map(f => (
          <div key={f.key} className={styles.factRow}>
            <span className={styles.factKey}>{f.key}</span>
            {f.isLink ? (
              <a href={f.val} target="_blank" rel="noreferrer" className={styles.factLink}>
                {f.display}
              </a>
            ) : (
              <span className={`${styles.factVal} ${f.highlight ? styles.highlight : ''}`}>
                {f.val}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
