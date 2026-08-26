import { useEffect, useRef, useState } from 'react'

/**
 * Hook simples de "reveal on scroll" usando IntersectionObserver.
 * Retorna um ref para anexar ao elemento e um boolean de visibilidade.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
