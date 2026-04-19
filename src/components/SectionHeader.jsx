import React from 'react'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ index, title }) {
  return (
    <div className={styles.header}>
      <span className={styles.label}>// {index}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  )
}
