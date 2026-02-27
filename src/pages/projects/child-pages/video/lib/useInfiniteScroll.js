import { useEffect, useRef } from "react"
import { ROOT_MARGIN } from "../model"
import {
  getIntersectionRoot,
  isSentinelNearViewport,
} from "@/shared/lib/infinite-scroll/observer"

const PREFETCH_OFFSET_PX = 320

export function useInfiniteScroll(sentinel, deps, callback) {
  const observerRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    if (!sentinel) return

    const root = getIntersectionRoot(sentinel)

    if (observerRef.current) observerRef.current.disconnect()
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }

    const runIfNeeded = () => {
      if (isSentinelNearViewport(sentinel, root, PREFETCH_OFFSET_PX)) {
        callback()
      }
    }

    const throttledCheck = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0
        runIfNeeded()
      })
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) callback()
      },
      { root, rootMargin: ROOT_MARGIN, threshold: 0 },
    )

    observerRef.current.observe(sentinel)
    runIfNeeded()

    const scrollTarget = root || window
    scrollTarget.addEventListener("scroll", throttledCheck, { passive: true })
    window.addEventListener("resize", throttledCheck, { passive: true })
    window.addEventListener("orientationchange", throttledCheck, {
      passive: true,
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
      scrollTarget.removeEventListener("scroll", throttledCheck)
      window.removeEventListener("resize", throttledCheck)
      window.removeEventListener("orientationchange", throttledCheck)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }
    }
  }, [callback, sentinel, ...deps])
}
