import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { observeWithPool } from "./observerPool"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect

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
  const hasRevealedRef = useRef(false)

  useIsomorphicLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    if (once && hasRevealedRef.current) return

    if (isReducedMotionPreferred()) {
      hasRevealedRef.current = true
      setIsRevealed(true)
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      hasRevealedRef.current = true
      setIsRevealed(true)
      return
    }

    let stopObserving = () => {}

    stopObserving = observeWithPool(
      node,
      { root, rootMargin, threshold },
      (entry) => {
        if (once) {
          if (!entry?.isIntersecting) return

          hasRevealedRef.current = true
          setIsRevealed(true)
          stopObserving()
          return
        }

        setIsRevealed(Boolean(entry?.isIntersecting))
      },
    )

    return () => stopObserving()
  }, [once, root, rootMargin, threshold])

  return { ref, isRevealed }
}
