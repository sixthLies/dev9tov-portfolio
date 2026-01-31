import { useCallback, useMemo, useRef, useState } from "react"
import { mockFetchVideosPage, PAGE_SIZE } from "../model"

export function useVideosList() {
  const [items, setItems] = useState([])
  const [cursor, setCursor] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError] = useState("")
  const [query, setQuery] = useState("")

  const inFlightRef = useRef(false)
  const abortRef = useRef({ cancelled: false })

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((v) => v.title.toLowerCase().includes(q))
  }, [items, query])

  const fetchNextPage = useCallback(async () => {
    if (!hasMore || inFlightRef.current) return

    inFlightRef.current = true
    setIsLoadingMore(true)

    try {
      const res = await mockFetchVideosPage(cursor, PAGE_SIZE)
      if (abortRef.current.cancelled) return

      setItems((prev) => {
        const seen = new Set(prev.map((x) => x.id))
        const merged = prev.slice()
        for (const v of res.items) {
          if (!seen.has(v.id)) merged.push(v)
        }
        return merged
      })

      setCursor(res.nextCursor)
      setHasMore(Boolean(res.hasMore))
      setError("")
    } catch (e) {
      if (!abortRef.current.cancelled) {
        setError(e?.message || "Failed to load videos")
      }
    } finally {
      if (!abortRef.current.cancelled) setIsLoadingMore(false)
      inFlightRef.current = false
    }
  }, [cursor, hasMore])

  const fetchFirstPage = useCallback(async () => {
    abortRef.current.cancelled = false
    inFlightRef.current = true
    setIsLoadingInitial(true)
    setError("")

    try {
      const res = await mockFetchVideosPage(0, PAGE_SIZE)
      if (abortRef.current.cancelled) return

      setItems(res.items)
      setCursor(res.nextCursor)
      setHasMore(Boolean(res.hasMore))
      setError("")
    } catch (e) {
      if (!abortRef.current.cancelled) {
        setItems([])
        setCursor(0)
        setHasMore(true)
        setError(e?.message || "Failed to load videos")
      }
    } finally {
      if (!abortRef.current.cancelled) setIsLoadingInitial(false)
      inFlightRef.current = false
    }
  }, [])

  const cancel = useCallback(() => {
    abortRef.current.cancelled = true
  }, [])

  return {
    items: filteredItems,
    hasMore,
    isLoadingInitial,
    isLoadingMore,
    error,
    query,
    setQuery,
    fetchFirstPage,
    fetchNextPage,
    cancel,
  }
}
