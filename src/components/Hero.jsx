import React from 'react'
import styles from './Hero.module.css'
import { personal } from '../data/content'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for opportunities · {personal.location} · {personal.commute}
        </div>

        <h1 className={styles.heading}>
          Andrew
          <span className={styles.accent}>Cummins.</span>
        </h1>

        <p className={styles.sub}>
          <strong>SDET &amp; Automation Engineer</strong>, I build the frameworks
          that keep software honest. Enterprise grade test automation, CI/CD pipelines,
          and the quality engineering mindset to back it up.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>View my work</a>
          <a href="#contact"  className={`${styles.btn} ${styles.btnOutline}`}>Get in touch</a>
        </div>
      </div>

      <div className={styles.terminal}>
        <div className={styles.termBar}>
          <span className={`${styles.dot2} ${styles.red}`} />
          <span className={`${styles.dot2} ${styles.yellow}`} />
          <span className={`${styles.dot2} ${styles.green}`} />
          <span className={styles.termTitle}>~/portfolio — zsh</span>
        </div>
        <div className={styles.termBody}>
          <Line prompt cmd="cat engineer.json" />
          <br />
          <Line output="{" />
          <Line output={<>&nbsp;&nbsp;<K>"role"</K>: <V>"SDET / Automation Engineer"</V>,</>} />
          <Line output={<>&nbsp;&nbsp;<K>"location"</K>: <V>"Kilkenny, Ireland"</V>,</>} />
          <Line output={<>&nbsp;&nbsp;<K>"languages"</K>: [<V>"Java"</V>, <V>"JavaScript"</V>],</>} />
          <Line output={<>&nbsp;&nbsp;<K>"frameworks"</K>: [</>} />
          <Line output={<>&nbsp;&nbsp;&nbsp;&nbsp;<V>"Selenium 4"</V>, <V>"Playwright"</V>,</>} />
          <Line output={<>&nbsp;&nbsp;&nbsp;&nbsp;<V>"Cucumber 7"</V>, <V>"TestNG"</V></>} />
          <Line output={<>&nbsp;&nbsp;],</>} />
          <Line output={<>&nbsp;&nbsp;<K>"ci_status"</K>: <V>"✓ passing"</V></>} />
          <Line output="}" />
          <br />
          <Line prompt cmd="" />
        </div>
      </div>
    </section>
  )
}

function Line({ prompt, cmd, output }) {
  if (output !== undefined) {
    return (
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 1.9, paddingLeft: '1.25rem', color: 'var(--text)' }}>
        {output}
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 1.9 }}>
      <span style={{ color: 'var(--accent)' }}>›</span>
      <span style={{ color: '#a5f3fc' }}>{cmd}</span>
      {!cmd && <span style={{ display: 'inline-block', width: 8, height: 15, background: 'var(--accent)', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />}
    </div>
  )
}

function K({ children }) {
  return <span style={{ color: '#c4b5fd' }}>{children}</span>
}
function V({ children }) {
  return <span style={{ color: 'var(--green)' }}>{children}</span>
}
