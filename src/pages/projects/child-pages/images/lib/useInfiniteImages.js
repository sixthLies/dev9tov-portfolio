import { useCallback, useEffect, useRef, useState } from "react"
import { PAGE_SIZE } from "../model/images.constants"
import {
  getIntersectionRoot,
  isSentinelNearViewport,
} from "@/shared/lib/infinite-scroll/observer"

const PREFETCH_OFFSET_PX = 320

export function useInfiniteImages(data, { rootMargin = "320px 0px" } = {}) {
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const sentinelRef = useRef(null)
  const observerRootRef = useRef(null)
  const rafRef = useRef(0)

  const cursorRef = useRef(0)
  const hasMoreRef = useRef(true)
  const isFetchingRef = useRef(false)

  const loadMore = useCallback(async () => {
    if (isFetchingRef.current) return
    if (!hasMoreRef.current) return

    isFetchingRef.current = true
    setIsLoading(true)

    try {
      const start = cursorRef.current
      const end = start + PAGE_SIZE

      const nextItems = data.slice(start, end)
      const nextCursor = end
      const nextHasMore = nextCursor < data.length

      setItems((prev) => prev.concat(nextItems))

      cursorRef.current = nextCursor
      hasMoreRef.current = nextHasMore
      setHasMore(nextHasMore)
    } finally {
      setIsLoading(false)
      isFetchingRef.current = false
    }
  }, [data])

  const runIfNeeded = useCallback(() => {
    if (!hasMoreRef.current || isFetchingRef.current) return

    const sentinel = sentinelRef.current
    if (!sentinel) return

    const root = observerRootRef.current || getIntersectionRoot(sentinel)
    observerRootRef.current = root

    if (isSentinelNearViewport(sentinel, root, PREFETCH_OFFSET_PX)) {
      loadMore()
    }
  }, [loadMore])

  const throttledCheck = useCallback(() => {
    if (rafRef.current) return

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = 0
      runIfNeeded()
    })
  }, [runIfNeeded])

  // Initial load.
  useEffect(() => {
    loadMore()
  }, [loadMore])

  // Infinite scroll (observer + fallback listeners + cleanup).
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) return

    const root = getIntersectionRoot(sentinel)
    observerRootRef.current = root

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        loadMore()
      },
      { root, threshold: 0, rootMargin },
    )

    observer.observe(sentinel)
    runIfNeeded()

    const scrollTarget = root || window
    scrollTarget.addEventListener("scroll", throttledCheck, { passive: true })
    window.addEventListener("resize", throttledCheck, { passive: true })
    window.addEventListener("orientationchange", throttledCheck, {
      passive: true,
    })

    return () => {
      observer.disconnect()
      scrollTarget.removeEventListener("scroll", throttledCheck)
      window.removeEventListener("resize", throttledCheck)
      window.removeEventListener("orientationchange", throttledCheck)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }
    }
  }, [hasMore, loadMore, rootMargin, runIfNeeded, throttledCheck])

  // Continue loading while sentinel remains visible after an append.
  useEffect(() => {
    if (!hasMore || isLoading) return
    runIfNeeded()
  }, [hasMore, isLoading, items.length, runIfNeeded])

  return { items, hasMore, isLoading, sentinelRef, loadMore }
}

