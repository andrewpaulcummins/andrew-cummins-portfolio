import React, { useState, useEffect, useRef } from 'react'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Stats    from './components/Stats'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
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
  { id: 'top',        label: 'Home'       },
  { id: 'skills',     label: 'Skills'     },
  { id: 'work',       label: 'Work'       },
  { id: 'experience', label: 'Experience' },
  { id: 'about',      label: 'About'      },
  { id: 'contact',    label: 'Contact'    },
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
const HUES = [
  { label: 'Blue',   val: '210', color: 'oklch(65% 0.2 210)' },
  { label: 'Orange', val: '38',  color: 'oklch(65% 0.2 38)'  },
  { label: 'Purple', val: '280', color: 'oklch(65% 0.2 280)' },
  { label: 'Green',  val: '145', color: 'oklch(65% 0.2 145)' },
  { label: 'Red',    val: '15',  color: 'oklch(65% 0.2 15)'  },
]

function TweaksPanel() {
  const [open, setOpen]     = useState(false)
  const [hue, setHue]       = useState('210')
  const [grid, setGrid]     = useState(true)
  const [noise, setNoise]   = useState(true)
  const [cursor, setCursor] = useState('default')
  const [motion, setMotion] = useState('normal')

  const html = document.documentElement

  const applyHue = (v) => {
    setHue(v)
    html.style.setProperty('--accent-h', v)
  }
  const toggleGrid = (on) => {
    setGrid(on)
    html.classList.toggle('no-grid', !on)
  }
  const applyMotion = (mode) => {
    setMotion(mode)
    const map = { off: '0.001', slow: '0.4', normal: '1', fast: '2.5' }
    html.style.setProperty('--motion', map[mode])
  }
  const applyCursor = (mode) => {
    setCursor(mode)
    html.classList.toggle('cursor-none', mode === 'none')
    html.classList.toggle('cursor-crosshair', mode === 'crosshair')
  }

  const noiseEl = document.querySelector('.noise')
  useEffect(() => {
    if (noiseEl) noiseEl.style.opacity = noise ? '.025' : '0'
  }, [noise, noiseEl])

  return (
    <>
      <button className="tweaks-toggle" onClick={() => setOpen((o) => !o)}>
        <span className="t-icon">⚙</span> Customise
      </button>
      <div className={`tweaks-panel${open ? ' visible' : ''}`}>
        <div className="tweaks-head">
          <b>// customise</b>
          <span style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>✕ close</span>
        </div>

        <div className="tweak-row">
          <span className="lbl">Accent colour</span>
          <div className="hue-swatches">
            {HUES.map((h) => (
              <button key={h.val} className={`hue-swatch${hue === h.val ? ' active' : ''}`}
                style={{ background: h.color }} title={h.label}
                onClick={() => applyHue(h.val)} />
            ))}
          </div>
          <span className="lbl" style={{ marginTop: '.35rem' }}>Fine-tune hue</span>
          <input type="range" min="0" max="360" value={hue}
            onChange={(e) => applyHue(e.target.value)} />
        </div>

        <div className="tweak-row">
          <span className="lbl">Animation speed</span>
          <div className="opts">
            <button className={`tweak-opt${motion === 'off'    ? ' active' : ''}`} onClick={() => applyMotion('off')}>Off</button>
            <button className={`tweak-opt${motion === 'slow'   ? ' active' : ''}`} onClick={() => applyMotion('slow')}>Slow</button>
            <button className={`tweak-opt${motion === 'normal' ? ' active' : ''}`} onClick={() => applyMotion('normal')}>Normal</button>
            <button className={`tweak-opt${motion === 'fast'   ? ' active' : ''}`} onClick={() => applyMotion('fast')}>Fast</button>
          </div>
        </div>

        <div className="tweak-row">
          <span className="lbl">Noise overlay</span>
          <div className="opts">
            <button className={`tweak-opt${noise ? ' active' : ''}`}  onClick={() => setNoise(true)}>On</button>
            <button className={`tweak-opt${!noise ? ' active' : ''}`} onClick={() => setNoise(false)}>Off</button>
          </div>
        </div>

        <div className="tweak-row">
          <span className="lbl">Grid background</span>
          <div className="opts">
            <button className={`tweak-opt${grid ? ' active' : ''}`}  onClick={() => toggleGrid(true)}>On</button>
            <button className={`tweak-opt${!grid ? ' active' : ''}`} onClick={() => toggleGrid(false)}>Off</button>
          </div>
        </div>

        <div className="tweak-row">
          <span className="lbl">Cursor</span>
          <div className="opts">
            <button className={`tweak-opt${cursor === 'default'    ? ' active' : ''}`} onClick={() => applyCursor('default')}>Custom</button>
            <button className={`tweak-opt${cursor === 'crosshair'  ? ' active' : ''}`} onClick={() => applyCursor('crosshair')}>Cross</button>
            <button className={`tweak-opt${cursor === 'none'       ? ' active' : ''}`} onClick={() => applyCursor('none')}>Off</button>
          </div>
        </div>
      </div>
    </>
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
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel />
    </>
  )
}
