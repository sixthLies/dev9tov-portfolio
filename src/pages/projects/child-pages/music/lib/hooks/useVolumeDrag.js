import { useState, useRef, useCallback, useEffect } from 'react'

/**
 * useVolumeDrag - Custom hook for click-to-set and drag-to-adjust volume on a volume bar
 *
 * Returns a ref to attach to the volume bar element, drag state, and event handlers.
 * Handles mouse and touch events for smooth volume control.
 *
 * @param {function} onVolumeChange - Callback to set the volume (receives 0-1 value)
 * @returns {object} { volumeBarRef, isDragging, handleVolumeMouseDown, handleVolumeTouchStart, handleVolumeClick }
 */
export function useVolumeDrag(onVolumeChange) {
  const volumeBarRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const isDraggingRef = useRef(false)

  // Calculate percentage from a mouse/touch X position
  const getPercentFromEvent = useCallback((clientX) => {
    if (!volumeBarRef.current) return 0
    const rect = volumeBarRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    return Math.max(0, Math.min(1, x / rect.width))
  }, [])

  // Click to set volume (for simple clicks without drag)
  const handleVolumeClick = useCallback((e) => {
    // If we just finished dragging, don't also fire click
    if (isDraggingRef.current) return
    if (!onVolumeChange) return
    const percent = getPercentFromEvent(e.clientX)
    onVolumeChange(percent)
  }, [onVolumeChange, getPercentFromEvent])

  // Mouse down starts drag
  const handleVolumeMouseDown = useCallback((e) => {
    if (!onVolumeChange) return
    e.preventDefault()
    e.stopPropagation()

    isDraggingRef.current = true
    setIsDragging(true)

    const percent = getPercentFromEvent(e.clientX)
    onVolumeChange(percent)
  }, [onVolumeChange, getPercentFromEvent])

  // Touch start
  const handleVolumeTouchStart = useCallback((e) => {
    if (!onVolumeChange) return
    e.stopPropagation()

    isDraggingRef.current = true
    setIsDragging(true)

    const touch = e.touches[0]
    const percent = getPercentFromEvent(touch.clientX)
    onVolumeChange(percent)
  }, [onVolumeChange, getPercentFromEvent])

  // Global mouse/touch move and up handlers (attached to document during drag)
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current || !onVolumeChange) return
      e.preventDefault()
      const percent = getPercentFromEvent(e.clientX)
      onVolumeChange(percent)
    }

    const handleMouseUp = (e) => {
      if (!isDraggingRef.current) return
      if (onVolumeChange) {
        const percent = getPercentFromEvent(e.clientX)
        onVolumeChange(percent)
      }
      setIsDragging(false)
      // Use a timeout to prevent click from firing after drag
      setTimeout(() => {
        isDraggingRef.current = false
      }, 50)
    }

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || !onVolumeChange) return
      const touch = e.touches[0]
      const percent = getPercentFromEvent(touch.clientX)
      onVolumeChange(percent)
    }

    const handleTouchEnd = (e) => {
      if (!isDraggingRef.current) return
      if (onVolumeChange && e.changedTouches && e.changedTouches[0]) {
        const touch = e.changedTouches[0]
        const percent = getPercentFromEvent(touch.clientX)
        onVolumeChange(percent)
      }
      setIsDragging(false)
      setTimeout(() => {
        isDraggingRef.current = false
      }, 50)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, onVolumeChange, getPercentFromEvent])

  return {
    volumeBarRef,
    isDragging,
    handleVolumeMouseDown,
    handleVolumeTouchStart,
    handleVolumeClick,
  }
}
