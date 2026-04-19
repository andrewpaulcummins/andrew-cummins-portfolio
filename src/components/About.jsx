import React from 'react'
import SectionHead from './SectionHead'
import { personal, facts } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="section">
      <SectionHead idx="04 -" title="About me" tag="Background" />
      <div className="about" ref={ref} data-reveal>
        <div>
          <p>
            I'm an SDET and automation engineer based in <strong>Kilkenny, Ireland</strong>.
            I've spent years in quality engineering, but what sets me apart is that I don't
            just run tests — I <span className="hl">architect the infrastructure</span> that makes
            testing at scale possible.
          </p>
          <p>
            Most companies struggle with the same problems: flaky tests, no CI integration,
            frameworks held together with duct tape. I fix that. I've built production BDD
            frameworks from nothing and seen them through to green pipelines and live Allure reporting.
          </p>
          <p>
            Outside of engineering, I'm a football fan and live stream from time to time,
            which has done more for my ability to communicate clearly under pressure than
            any meeting ever has.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            Let's talk <span className="arrow">→</span>
          </a>
        </div>
        <div className="facts">
          {facts.map(([key, val, mod]) => (
            <div key={key} className="fact">
              <span className="k">{key}</span>
              {mod === 'link' ? (
                <a href={personal.github} target="_blank" rel="noreferrer" className="v link">{val}</a>
              ) : (
                <span className={`v${mod === 'hl' ? ' hl' : ''}`}>{val}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
