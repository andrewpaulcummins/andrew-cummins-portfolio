import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} <b>Andrew Cummins</b> built by hand in React + Vite.</span>
      <span>SDET · Kilkenny, Ireland</span>
    </footer>
  )
}
