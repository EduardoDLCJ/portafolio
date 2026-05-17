import { useEffect, useRef, useState } from 'react'

const DESKTOP_MQ = '(min-width: 769px)'

function shouldAnimate() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return window.matchMedia(DESKTOP_MQ).matches
}

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => !shouldAnimate())

  useEffect(() => {
    const el = ref.current
    if (!el || !shouldAnimate()) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
        ...options,
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
