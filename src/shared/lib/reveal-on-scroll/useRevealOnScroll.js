import { useEffect, useRef, useState } from "react"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

const isReducedMotionPreferred = () => {
  if (typeof window === "undefined") return false
  if (typeof window.matchMedia !== "function") return false

  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export const useRevealOnScroll = ({
  root = null,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true,
} = {}) => {
  const ref = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (isRevealed && once) return

    if (isReducedMotionPreferred()) {
      setIsRevealed(true)
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return

        setIsRevealed(true)

        if (once) {
          observer.unobserve(entry.target)
          observer.disconnect()
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isRevealed, once, root, rootMargin, threshold])

  return { ref, isRevealed }
}
