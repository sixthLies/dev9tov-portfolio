import React, { useRef, useEffect, useCallback } from 'react'
import './Waveform.scss'

/**
 * Waveform - Animated waveform visualization using Web Audio API
 * Renders frequency bars on a canvas element, synced to current playback.
 * Shows animated bars when playing, idle/flat bars when paused.
 * Uses accent colors on dark background to match the app theme.
 * Responsive: adapts bar count to container width.
 */
function Waveform({ analyserNode, isPlaying }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const dataArrayRef = useRef(null)

  // Resize canvas to match container dimensions (responsive)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const rect = container.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
  }, [])

  // Draw frequency bars on the canvas
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const width = canvas.width / dpr
    const height = canvas.height / dpr

    // Clear canvas with transparent background (dark bg comes from CSS)
    ctx.clearRect(0, 0, width, height)

    if (!analyserNode || !dataArrayRef.current) {
      // Draw idle state - small flat bars
      drawIdleBars(ctx, width, height)
      return
    }

    // Get frequency data
    analyserNode.getByteFrequencyData(dataArrayRef.current)

    const bufferLength = dataArrayRef.current.length
    // Calculate number of bars based on container width for responsiveness
    const barCount = Math.max(16, Math.min(64, Math.floor(width / 6)))
    const barWidth = (width / barCount) * 0.7
    const barGap = (width / barCount) * 0.3

    // Sample from the frequency data
    const step = Math.floor(bufferLength / barCount)

    for (let i = 0; i < barCount; i++) {
      // Average a range of frequency bins for smoother visualization
      let sum = 0
      const sampleStart = i * step
      const sampleEnd = Math.min(sampleStart + step, bufferLength)
      for (let j = sampleStart; j < sampleEnd; j++) {
        sum += dataArrayRef.current[j]
      }
      const avg = sum / (sampleEnd - sampleStart)

      // Normalize to 0-1, with minimum bar height
      const normalized = avg / 255
      const barHeight = Math.max(3, normalized * (height - 4))

      const x = i * (barWidth + barGap) + barGap / 2
      const y = height - barHeight

      // Gradient from accent-primary (#6c63ff) to accent-secondary (#f72585)
      const gradient = ctx.createLinearGradient(x, y, x, height)
      const intensity = normalized

      // More intense bars get more pink, less intense stay purple
      const r = Math.round(108 + (247 - 108) * intensity)
      const g = Math.round(99 + (37 - 99) * intensity)
      const b = Math.round(255 + (133 - 255) * intensity)
      const alpha = 0.6 + intensity * 0.4

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`)
      gradient.addColorStop(1, `rgba(108, 99, 255, 0.3)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      // Rounded top corners
      const radius = Math.min(barWidth / 2, 3)
      ctx.moveTo(x, height)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.lineTo(x + barWidth - radius, y)
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius)
      ctx.lineTo(x + barWidth, height)
      ctx.closePath()
      ctx.fill()
    }

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(draw)
    }
  }, [analyserNode, isPlaying])

  // Draw idle/paused state with small flat bars
  const drawIdleBars = useCallback((ctx, width, height) => {
    const barCount = Math.max(16, Math.min(64, Math.floor(width / 6)))
    const barWidth = (width / barCount) * 0.7
    const barGap = (width / barCount) * 0.3

    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + barGap) + barGap / 2
      const barHeight = 3 + Math.sin(i * 0.3) * 2

      ctx.fillStyle = 'rgba(108, 99, 255, 0.35)'
      ctx.beginPath()
      const radius = Math.min(barWidth / 2, 2)
      const y = height - barHeight
      ctx.moveTo(x, height)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.lineTo(x + barWidth - radius, y)
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius)
      ctx.lineTo(x + barWidth, height)
      ctx.closePath()
      ctx.fill()
    }
  }, [])

  // Initialize data array when analyser becomes available
  useEffect(() => {
    if (analyserNode) {
      dataArrayRef.current = new Uint8Array(analyserNode.frequencyBinCount)
    } else {
      dataArrayRef.current = null
    }
  }, [analyserNode])

  // Start/stop animation loop based on isPlaying
  useEffect(() => {
    if (isPlaying && analyserNode) {
      // Start animation loop
      animationRef.current = requestAnimationFrame(draw)
    } else {
      // Stop animation loop
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      // Draw idle state
      draw()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isPlaying, analyserNode, draw])

  // Handle resize
  useEffect(() => {
    resizeCanvas()

    const handleResize = () => {
      resizeCanvas()
      // Redraw after resize
      if (!isPlaying) {
        requestAnimationFrame(draw)
      }
    }

    window.addEventListener('resize', handleResize)

    // Use ResizeObserver for container-specific resizing
    let observer
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        resizeCanvas()
        if (!isPlaying) {
          requestAnimationFrame(draw)
        }
      })
      observer.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (observer) observer.disconnect()
    }
  }, [resizeCanvas, draw, isPlaying])

  return (
    <div
      className={`waveform ${isPlaying ? 'waveform--active' : 'waveform--idle'}`}
      ref={containerRef}
      aria-label="Audio waveform visualization"
      role="img"
    >
      <canvas ref={canvasRef} className="waveform__canvas" />
    </div>
  )
}

export default Waveform

