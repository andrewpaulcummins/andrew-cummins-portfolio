import { useEffect, useRef } from 'react'

export function useReveal(opts = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el) } },
      { threshold: opts.threshold ?? 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
