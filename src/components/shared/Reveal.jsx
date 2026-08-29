// Lightweight scroll-reveal wrapper.
// Fades/slides children in the first time they enter the viewport.
// Honour of prefers-reduced-motion is handled in index.css (.reveal).
import { useEffect, useRef, useState } from 'react'

function Reveal({ className = '', delay = 0, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}

export default Reveal