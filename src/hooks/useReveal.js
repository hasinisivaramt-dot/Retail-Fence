import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element with a fade/rise transition the first time it
 * scrolls into view. Returns a ref to attach and a boolean "shown".
 */
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, shown]
}
