import React, { useState, useEffect, useRef } from 'react'
import { personal } from '../data/content'
import { useScramble } from '../hooks/useScramble'

function MagneticButton({ href, className, label, children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <a ref={ref} href={href} className={className} data-cursor={label}
       onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  )
}

function ScrambleHeading() {
  const [line1] = useScramble('Andrew', { start: 150, speed: 40 })
  const [line2] = useScramble('Cummins', { start: 700, speed: 40 })
  return (
    <h1 className="hero-heading">
      <span className="scramble">{line1}</span>
      <span className="scramble accent">{line2}</span>
    </h1>
  )
}

function M({ children }) { return <span style={{ color: 'var(--accent)' }}>{children}</span> }
function C({ children }) { return <span style={{ color: '#a5f3fc' }}>{children}</span> }
function G({ children }) { return <span style={{ color: 'var(--green)' }}>{children}</span> }
function D({ children }) { return <span style={{ color: 'var(--muted)' }}>{children}</span> }
function Hl({ children }) { return <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{children}</span> }

const CODE = [
  { t: 'key', s: 'const' }, { t: 'sp' }, { t: 'var', s: 'engineer' }, { t: 'sp' }, { t: 'op', s: '=' }, { t: 'sp' }, { t: 'op', s: '{' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'prop', s: 'name' }, { t: 'op', s: ':' }, { t: 'sp' }, { t: 'str', s: "'Andrew Cummins'" }, { t: 'op', s: ',' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'prop', s: 'role' }, { t: 'op', s: ':' }, { t: 'sp' }, { t: 'str', s: "'SDET & Automation Engineer'" }, { t: 'op', s: ',' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'prop', s: 'from' }, { t: 'op', s: ':' }, { t: 'sp' }, { t: 'str', s: "'Kilkenny, Ireland \uD83C\uDDEE\uD83C\uDDEA'" }, { t: 'op', s: ',' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'prop', s: 'stack' }, { t: 'op', s: ': [' },
    { t: 'str', s: "'Selenium'" }, { t: 'op', s: ', ' },
    { t: 'str', s: "'Playwright'" }, { t: 'op', s: ', ' },
    { t: 'str', s: "'Cucumber'" }, { t: 'op', s: '],' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'fn', s: 'greet' }, { t: 'op', s: '() {' }, { t: 'nl' },
  { t: 'sp4' }, { t: 'key', s: 'return' }, { t: 'sp' },
    { t: 'op', s: '`' },
    { t: 'tmp', s: "Hi, I'm " },
    { t: 'op', s: '${' }, { t: 'var', s: 'this' }, { t: 'op', s: '.' }, { t: 'prop', s: 'name' }, { t: 'op', s: '}' },
    { t: 'tmp', s: " - let's build." },
    { t: 'op', s: '`' }, { t: 'op', s: ';' }, { t: 'nl' },
  { t: 'sp2' }, { t: 'op', s: '}' }, { t: 'nl' },
  { t: 'op', s: '};' }, { t: 'nl' },
]

const LOGS = [
  { l: <><M>›</M> <C>node</C> engineer.js</> },
  { l: <><G>✓</G> Program started</>, delay: 220 },
  { l: <>Hi, I'm <Hl>Andrew Cummins</Hl> - let's build.</>, delay: 140 },
  { l: <><D>→ SDET & Automation Engineer</D></>, delay: 90 },
  { l: <><D>→ Kilkenny, Ireland</D></>, delay: 90 },
  { l: <><D>→ Java · JavaScript · BDD · CI/CD</D></>, delay: 90 },
  { l: <><Hl>{'>'}</Hl> Available for new opportunities <G>●</G></>, delay: 300 },
]

function Terminal() {
  const [phase, setPhase] = useState('typing')
  const [charIdx, setCharIdx] = useState(0)
  const [logIdx, setLogIdx] = useState(0)
  const [testProgress, setTestProgress] = useState(0)
  const [testCount, setTestCount] = useState(0)

  const tokens = CODE.map((tok) => {
    if (tok.t === 'nl') return { ...tok, chars: ['\n'] }
    if (tok.t === 'sp') return { ...tok, chars: [' '] }
    if (tok.t === 'sp2') return { ...tok, chars: ['  '] }
    if (tok.t === 'sp4') return { ...tok, chars: ['    '] }
    return { ...tok, chars: (tok.s || '').split('') }
  })
  const totalChars = tokens.reduce((a, t) => a + t.chars.length, 0)

  useEffect(() => {
    if (phase !== 'typing') return
    if (charIdx >= totalChars) { setPhase('running'); return }
    const t = setTimeout(() => setCharIdx((i) => i + 1), 14)
    return () => clearTimeout(t)
  }, [phase, charIdx, totalChars])

  useEffect(() => {
    if (phase !== 'running') return
    if (logIdx >= LOGS.length) {
      const t = setTimeout(() => setPhase('tests'), 400)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setLogIdx((i) => i + 1), LOGS[logIdx]?.delay ?? 120)
    return () => clearTimeout(t)
  }, [phase, logIdx])

  useEffect(() => {
    if (phase !== 'tests') return
    let raf, t0
    const TARGET = 247
    const step = (t) => {
      if (!t0) t0 = t
      const p = Math.min(1, (t - t0) / 2800)
      const eased = 1 - Math.pow(1 - p, 2)
      setTestProgress(eased)
      setTestCount(Math.floor(eased * TARGET))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  const rendered = []
  let remaining = charIdx
  let lineBuf = []
  let lineNo = 1
  const flush = () => {
    rendered.push(
      <div key={`ln-${rendered.length}`} className="code-line">
        <span className="code-ln">{String(lineNo).padStart(2, '0')}</span>
        <span className="code-src">{lineBuf}</span>
      </div>
    )
    lineBuf = []
    lineNo++
  }
  for (const tok of tokens) {
    if (tok.t === 'nl') {
      if (remaining > 0) { remaining -= 1; flush() }
      else break
    } else {
      const take = Math.min(remaining, tok.chars.length)
      if (take > 0) lineBuf.push(
        <span key={`t-${rendered.length}-${lineBuf.length}`} className={`tk tk-${tok.t}`}>
          {tok.chars.slice(0, take).join('')}
        </span>
      )
      remaining -= take
      if (take < tok.chars.length) break
    }
  }
  if (lineBuf.length) flush()

  return (
    <div className="terminal" data-cursor="run">
      <div className="term-bar">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">~/portfolio — engineer.js · node</span>
      </div>
      <div className="term-body">
        <div className="code-block">
          {rendered}
          {phase === 'typing' && <span className="caret" />}
        </div>

        {phase !== 'typing' && (
          <div className="term-divider">
            <span>stdout</span><span className="dash" />
          </div>
        )}

        <div className="term-logs">
          {LOGS.slice(0, logIdx).map((ln, i) => (
            <div key={i} className="term-log-line">{ln.l}</div>
          ))}
        </div>

        {phase === 'tests' && (
          <>
            <div className="term-log-line" style={{ marginTop: '0.5rem' }}>
              <M>›</M> <C>npm test</C>
            </div>
            <div className="test-strip">
              <span>RUN</span>
              <div className="bar"><div className="bar-fill" style={{ transform: `scaleX(${testProgress})` }} /></div>
              <span className="count">{testCount} / 247 ✓</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <div className="hero-badge" data-reveal style={{ '--delay': '0.1s' }}>
          <span className="pulse-dot" />
          Available · {personal.location}
        </div>
        <ScrambleHeading />
        <p className="hero-sub" data-reveal style={{ '--delay': '0.8s' }}>
          <strong>SDET &amp; Automation Engineer</strong> - I build the <span className="hl">frameworks</span> that
          keep software honest. Enterprise-grade test automation, CI/CD pipelines,
          and the quality engineering mindset to back it up.
        </p>
        <div className="hero-cta" data-reveal style={{ '--delay': '1s' }}>
          <MagneticButton href="#work" className="btn btn-primary" label="view">
            View my work <span className="arrow">→</span>
          </MagneticButton>
          <MagneticButton href="#contact" className="btn btn-outline" label="talk">
            Get in touch
          </MagneticButton>
          <span className="hero-meta">
            <span className="kbd">↓</span> scroll
          </span>
        </div>
      </div>
      <div>
        <Terminal />
      </div>
    </section>
  )
}
