import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} <strong>Andrew Cummins</strong> — built by hand in React + Vite.</span>
      <span>SDET · Kilkenny, Ireland</span>
    </footer>
  )
}
