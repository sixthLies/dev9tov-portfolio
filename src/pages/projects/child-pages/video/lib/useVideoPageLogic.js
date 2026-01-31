import { useCallback, useEffect, useRef } from "react"
import { useVideosList } from "./useVideosList"
import { useInfiniteScroll } from "./useInfiniteScroll"
import { useVideoModal } from "./useVideoModal"

/**
 * Composition-хук: объединяет логику трёх smaller hooks'ов в одну API.
 * Упрощает VideoPage: передай одну зависимость вместо трёх.
 */
export function useVideoPageLogic() {
  const sentinelRef = useRef(null)

  const {
    items,
    hasMore,
    isLoadingInitial,
    isLoadingMore,
    error,
    query,
    setQuery,
    fetchFirstPage,
    fetchNextPage,
    cancel,
  } = useVideosList()

  const {
    selected,
    selectedVideoError,
    setSelectedVideoError,
    openVideo,
    closeModal,
    closeButtonRef,
  } = useVideoModal()

  // Первичная загрузка + cleanup
  useEffect(() => {
    fetchFirstPage()
    return () => {
      cancel()
    }
  }, [fetchFirstPage, cancel])

  // Infinite scroll
  useInfiniteScroll(
    sentinelRef.current,
    [error, isLoadingInitial, isLoadingMore],
    () => {
      if (isLoadingInitial || isLoadingMore || error) return
      fetchNextPage()
    },
  )

  const onCardKeyDown = useCallback(
    (video) => (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        openVideo(video)
      }
    },
    [openVideo],
  )

  const onOverlayMouseDown = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeModal()
    },
    [closeModal],
  )

  const onRetry = useCallback(() => {
    fetchFirstPage()
  }, [fetchFirstPage])

  // Условия для грида
  const isEmpty = !isLoadingInitial && !error && items.length === 0
  const showGrid = !isLoadingInitial && !error && items.length > 0
  const showLoadingMore =
    !isLoadingInitial && !error && hasMore && isLoadingMore

  return {
    // Данные
    items,
    selectedVideoError,
    query,
    selected,

    // Refs
    sentinelRef,
    closeButtonRef,

    // Флаги состояния
    isLoadingInitial,
    error,
    isEmpty,
    showGrid,
    showLoadingMore,

    // Обработчики
    setQuery,
    onRetry,
    openVideo,
    onCardKeyDown,
    onOverlayMouseDown,
    closeModal,
    setSelectedVideoError,
  }
}
