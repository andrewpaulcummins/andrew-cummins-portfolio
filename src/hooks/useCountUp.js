import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, { duration = 1600, start = 0 } = {}) {
  const ref = useRef(null)
  const [val, setVal] = useState(start)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf, t0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const step = (t) => {
        if (!t0) t0 = t
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(start + (target - start) * eased))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.3 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target])

  return [val, ref]
}
