import React, { useState, useEffect, useRef } from 'react'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Stats    from './components/Stats'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import { marqueeItems } from './data/content'

/* ── Custom Cursor ─────────────────────────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [label, setLabel] = useState('')
  const [hover, setHover] = useState(false)
  const pos  = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px')
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px')
    }
    const onOver = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) { setLabel(el.dataset.cursor); setHover(true) }
      else if (e.target.closest('a, button, input, [role=button]')) { setLabel('click'); setHover(true) }
      else { setHover(false); setLabel('') }
    }
    const onLeave = () => {
      dotRef.current?.classList.add('hidden')
      ringRef.current?.classList.add('hidden')
    }
    const onEnter = () => {
      dotRef.current?.classList.remove('hidden')
      ringRef.current?.classList.remove('hidden')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    let raf
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.2
      ring.current.y += (pos.current.y - ring.current.y) * 0.2
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px) translate(-50%,-50%)`
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring${hover ? ' hover-link' : ''}`}>
        {hover && label ? label : ''}
      </div>
    </>
  )
}

/* ── Scroll Progress ───────────────────────────────────────────────────── */
function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100
      if (ref.current) ref.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" ref={ref} />
}

/* ── Section Rail ──────────────────────────────────────────────────────── */
const RAIL_ITEMS = [
  { id: 'top',     label: 'Home'    },
  { id: 'skills',  label: 'Skills'  },
  { id: 'work',    label: 'Work'    },
  { id: 'about',   label: 'About'   },
  { id: 'contact', label: 'Contact' },
]

function SectionRail() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-40% 0px -55% 0px' })
    RAIL_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <nav className="rail">
      {RAIL_ITEMS.map((it, i) => (
        <a key={it.id} href={`#${it.id}`}
           className={`rail-item${active === it.id ? ' active' : ''}`}
           data-cursor="go">
          <span className="rail-num">{String(i).padStart(2, '0')}</span>
          <span className="rail-tick" />
          <span className="rail-label">{it.label}</span>
        </a>
      ))}
    </nav>
  )
}

/* ── Marquee ───────────────────────────────────────────────────────────── */
function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="m-item">
            {t}<span className="m-star">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Tweaks Panel ──────────────────────────────────────────────────────── */
function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const setVar = (k, v) => document.documentElement.style.setProperty(k, v)
  return (
    <div className={`tweaks${open ? ' open' : ''}`}>
      <button className="tweaks-toggle" onClick={() => setOpen((o) => !o)} title="Tweaks">⚙</button>
      {open && (
        <div className="tweaks-panel">
          <label className="tweak-row">
            <span>Hue</span>
            <input type="range" min="0" max="360" defaultValue="210"
              onChange={(e) => setVar('--accent-h', e.target.value)} />
          </label>
          <label className="tweak-row">
            <span>Motion</span>
            <input type="range" min="0" max="2" step="0.1" defaultValue="1"
              onChange={(e) => setVar('--motion', e.target.value)} />
          </label>
        </div>
      )}
    </div>
  )
}

/* ── App ───────────────────────────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="noise" />
      <CustomCursor />
      <ScrollProgress />
      <SectionRail />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel />
    </>
  )
}
