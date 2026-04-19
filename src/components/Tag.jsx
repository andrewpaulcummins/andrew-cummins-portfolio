import React from 'react'
import styles from './Tag.module.css'

export default function Tag({ label, colour = 'orange' }) {
  return <span className={`${styles.tag} ${styles[colour]}`}>{label}</span>
}
