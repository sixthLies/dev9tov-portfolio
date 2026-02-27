import { useState, useRef, useCallback, useEffect } from 'react'

/**
 * useSeekDrag - Custom hook for click-to-seek and drag-to-seek on a seek bar
 *
 * Returns a ref to attach to the seek bar element, drag state, and event handlers.
 * Handles mouse and touch events for smooth seeking.
 *
 * @param {number} duration - Total duration of the track in seconds
 * @param {function} onSeek - Callback to set the playback position (receives time in seconds)
 * @returns {object} { seekBarRef, isDragging, dragPercent, handleSeekMouseDown, handleSeekClick }
 */
export function useSeekDrag(duration, onSeek) {
  const seekBarRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragPercent, setDragPercent] = useState(0)
  const isDraggingRef = useRef(false)

  // Calculate percentage from a mouse/touch X position
  const getPercentFromEvent = useCallback((clientX) => {
    if (!seekBarRef.current) return 0
    const rect = seekBarRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    return Math.max(0, Math.min(1, x / rect.width))
  }, [])

  // Click to seek (for simple clicks without drag)
  const handleSeekClick = useCallback((e) => {
    // If we just finished dragging, don't also fire click
    if (isDraggingRef.current) return
    if (!duration || !onSeek) return
    const percent = getPercentFromEvent(e.clientX)
    onSeek(percent * duration)
  }, [duration, onSeek, getPercentFromEvent])

  // Mouse down starts drag
  const handleSeekMouseDown = useCallback((e) => {
    if (!duration || !onSeek) return
    e.preventDefault()
    e.stopPropagation()

    isDraggingRef.current = true
    setIsDragging(true)

    const percent = getPercentFromEvent(e.clientX)
    setDragPercent(percent)
    onSeek(percent * duration)
  }, [duration, onSeek, getPercentFromEvent])

  // Touch start
  const handleSeekTouchStart = useCallback((e) => {
    if (!duration || !onSeek) return
    e.stopPropagation()

    isDraggingRef.current = true
    setIsDragging(true)

    const touch = e.touches[0]
    const percent = getPercentFromEvent(touch.clientX)
    setDragPercent(percent)
    onSeek(percent * duration)
  }, [duration, onSeek, getPercentFromEvent])

  // Global mouse/touch move and up handlers (attached to document during drag)
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current || !duration || !onSeek) return
      e.preventDefault()
      const percent = getPercentFromEvent(e.clientX)
      setDragPercent(percent)
      onSeek(percent * duration)
    }

    const handleMouseUp = (e) => {
      if (!isDraggingRef.current) return
      if (duration && onSeek) {
        const percent = getPercentFromEvent(e.clientX)
        onSeek(percent * duration)
      }
      setIsDragging(false)
      // Use a timeout to prevent click from firing after drag
      setTimeout(() => {
        isDraggingRef.current = false
      }, 50)
    }

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || !duration || !onSeek) return
      const touch = e.touches[0]
      const percent = getPercentFromEvent(touch.clientX)
      setDragPercent(percent)
      onSeek(percent * duration)
    }

    const handleTouchEnd = (e) => {
      if (!isDraggingRef.current) return
      if (duration && onSeek && e.changedTouches && e.changedTouches[0]) {
        const touch = e.changedTouches[0]
        const percent = getPercentFromEvent(touch.clientX)
        onSeek(percent * duration)
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
  }, [isDragging, duration, onSeek, getPercentFromEvent])

  return {
    seekBarRef,
    isDragging,
    dragPercent,
    handleSeekMouseDown,
    handleSeekTouchStart,
    handleSeekClick,
  }
}
