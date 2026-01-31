import { useEffect, useRef } from "react"
import { ROOT_MARGIN } from "../model"

export function useInfiniteScroll(sentinel, deps, callback) {
  const observerRef = useRef(null)

  useEffect(() => {
    if (!sentinel) return

    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) callback()
      },
      { root: null, rootMargin: ROOT_MARGIN, threshold: 0 },
    )

    observerRef.current.observe(sentinel)

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [sentinel, ...deps])
}
