import { useCallback, useEffect, useRef, useState } from "react"
import { PAGE_SIZE } from "../model/images.constants"

export function useInfiniteImages(data, { rootMargin = "800px 0px" } = {}) {
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const sentinelRef = useRef(null)

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

  // первичная загрузка
  useEffect(() => {
    loadMore()
  }, [loadMore])

  // infinite scroll (observer + cleanup)
  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    if (!hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        loadMore()
      },
      { root: null, threshold: 0, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, loadMore, rootMargin])

  return { items, hasMore, isLoading, sentinelRef, loadMore }
}
