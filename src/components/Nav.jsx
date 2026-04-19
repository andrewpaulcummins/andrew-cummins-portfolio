import React, { useState, useEffect } from 'react'
import { personal } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = [
    ['skills',  '01', 'Skills'],
    ['work',    '02', 'Work'],
    ['about',   '03', 'About'],
    ['contact', '04', 'Contact'],
  ]
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo" data-cursor="top">
        <span className="logo-mark">AC</span>
        <span>Andrew Cummins<span className="dot">.</span></span>
      </a>
      <ul className="nav-links">
        {links.map(([id, num, label]) => (
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
    </nav>
  )
}
