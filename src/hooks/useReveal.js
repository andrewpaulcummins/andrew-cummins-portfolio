import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Make visible immediately — no scroll trigger needed
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'

  }, [])

  return ref
}