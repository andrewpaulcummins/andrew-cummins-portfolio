import { useState, useEffect, useRef } from 'react'

export function useScramble(target, { start = 0, speed = 50 } = {}) {
  const [out, setOut] = useState(() => target.split('').map(() => ' ').join(''))
  const timer = useRef()

  const scramble = () => {
    const chars = '!<>-_\\/[]{}-=+*^?#01ABCXYZ$%'
    let iter = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      const next = target.split('').map((c, i) => {
        if (c === ' ') return ' '
        if (i < iter) return c
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')
      setOut(next)
      iter += 0.5
      if (iter >= target.length) { clearInterval(timer.current); setOut(target) }
    }, speed)
  }

  useEffect(() => {
    const t = setTimeout(scramble, start)
    return () => { clearTimeout(t); clearInterval(timer.current) }
  }, [target])

  return [out, scramble]
}
