import React, { useState, useEffect } from 'react'
import { personal } from '../data/content'

const LINKS = [
  ['skills',     '01', 'Skills'],
  ['work',       '02', 'Work'],
  ['experience', '03', 'Experience'],
  ['about',      '04', 'About'],
  ['contact',    '05', 'Contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="logo" data-cursor="top" onClick={close}>
          <span className="logo-mark">AC</span>
          <span>Andrew Cummins<span className="dot">.</span></span>
        </a>
        <ul className="nav-links">
          {LINKS.map(([id, num, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link">
                <span className="num">{num}</span>{label}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${personal.email}`} className="nav-cta" data-cursor="email">
          Get in touch
        </a>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={`burger-line${open ? ' open' : ''}`} />
          <span className={`burger-line${open ? ' open' : ''}`} />
          <span className={`burger-line${open ? ' open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-nav${open ? ' open' : ''}`} onClick={close}>
        <div className="mobile-nav-inner" onClick={e => e.stopPropagation()}>
          <div className="mobile-nav-head">
            <span className="logo-mark">AC</span>
            <button className="mobile-nav-close" onClick={close}>✕</button>
          </div>
          <ul className="mobile-nav-links">
            {LINKS.map(([id, num, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="mobile-nav-link" onClick={close}>
                  <span className="num">{num}</span>{label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${personal.email}`} className="btn btn-primary mobile-nav-cta" onClick={close}>
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </>
  )
}
