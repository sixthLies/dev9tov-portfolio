import { useCallback, useEffect, useRef, useState } from "react"

export function useVideoModal() {
  const [selected, setSelected] = useState(null)
  const [selectedVideoError, setSelectedVideoError] = useState(false)
  const closeButtonRef = useRef(null)

  const openVideo = useCallback((video) => {
    setSelected(video)
    setSelectedVideoError(false)
  }, [])

  const closeModal = useCallback(() => {
    setSelected(null)
    setSelectedVideoError(false)
  }, [])

  useEffect(() => {
    if (!selected) return

    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus?.()
    }, 0)

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [closeModal, selected])

  return {
    selected,
    selectedVideoError,
    setSelectedVideoError,
    openVideo,
    closeModal,
    closeButtonRef,
  }
}
