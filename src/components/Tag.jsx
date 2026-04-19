import React from 'react'

export default function Tag({ label, colour = 'orange' }) {
  return <span className={`tag tag-${colour}`}>{label}</span>
}
