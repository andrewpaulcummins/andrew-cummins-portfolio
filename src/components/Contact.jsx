import React from 'react'
import SectionHead from './SectionHead'
import { personal } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="section">
      <SectionHead idx="04 -" title="Get in touch" tag="Open to opportunities" />
      <div className="contact-inner" ref={ref} data-reveal>
        <h3 className="contact-headline">
          Let's build something<span className="accent"> great.</span>
        </h3>
        <p className="contact-sub">
          Open to SDET, automation engineering and QA roles in Ireland and remote.
          Drop me a message and I'll get back to you.
        </p>
        <div className="contact-links">
          <a href={`mailto:${personal.email}`} className="btn btn-primary" data-cursor="email">
            Email me <span className="arrow">→</span>
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline" data-cursor="open">
            GitHub ↗
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" data-cursor="open">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
