import React, { useEffect, useRef, useState, useCallback } from 'react'
import { formatTime } from '../../../lib/utils/formatTime'
import { useSeekDrag } from '../../../lib/hooks/useSeekDrag'
import TrackDetails from '../TrackDetails/TrackDetails.jsx'
import Waveform from '../Waveform/Waveform.jsx'
import './PlaylistModal.scss'

/**
 * PlaylistModal - Modal overlay showing playlist details and track list
 * Opens when a playlist card is clicked, shows playlist info and tracks
 * Clicking a track's info area toggles its details panel
 * Only one details panel can be open at a time
 * Supports smooth open and close animations with a closing state
 * Includes play/pause buttons, seek bar, and queue integration
 */
function PlaylistModal({
  playlist,
  isOpen,
  onClose,
  onTrackPlay,
  onAddToQueue,
  currentTrack,
  isPlaying,
  isLoading,
  audioError = null,
  currentTime,
  duration,
  onTogglePlay,
  onSeek,
  queue = [],
  analyserNode = null,
}) {
  const contentRef = useRef(null)
  const [expandedTrackId, setExpandedTrackId] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  // Handle open/close with animation states
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setIsClosing(false)
    } else if (shouldRender) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setShouldRender(false)
        setIsClosing(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Reset expanded track when modal opens/closes or playlist changes
  useEffect(() => {
    if (!isOpen) {
      setExpandedTrackId(null)
    }
  }, [isOpen, playlist])

  // Handle clicking a track's chevron to toggle its details panel
  const handleTrackDetailsToggle = useCallback((e, trackId) => {
    e.stopPropagation()
    setExpandedTrackId((prev) => (prev === trackId ? null : trackId))
  }, [])

  // Handle close with animation
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  // Handle clicking a track to play it
  const handleTrackPlay = useCallback((track) => {
    if (onTrackPlay) {
      onTrackPlay(track, playlist)
    }
  }, [onTrackPlay, playlist])

  // Handle add to queue
  const handlePlayNextClick = useCallback((e, track) => {
    e.stopPropagation()
    if (onAddToQueue) {
      onAddToQueue(track, playlist)
    }
  }, [onAddToQueue, playlist])

  // Seek bar with click-to-seek and drag-to-seek
  const {
    seekBarRef,
    isDragging: isSeekDragging,
    handleSeekMouseDown,
    handleSeekTouchStart,
    handleSeekClick: handleSeekBarClick,
  } = useSeekDrag(duration, onSeek)

  // Handle Escape key to close modal and trap focus within modal
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }

      // Focus trap: keep Tab within the modal
      if (e.key === 'Tab' && contentRef.current) {
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        const focusableElements = Array.from(
          contentRef.current.querySelectorAll(focusableSelectors)
        ).filter((el) => !el.disabled && el.offsetParent !== null)

        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }

        const firstFocusable = focusableElements[0]
        const lastFocusable = focusableElements[focusableElements.length - 1]
        const isInModal = contentRef.current.contains(document.activeElement)
        const focusIndex = focusableElements.indexOf(document.activeElement)

        if (e.shiftKey) {
          // Shift+Tab: wrap to last if on first element, container, or outside modal
          if (!isInModal || document.activeElement === contentRef.current || focusIndex === 0) {
            e.preventDefault()
            lastFocusable.focus()
          }
        } else {
          // Tab: wrap to first if on last element, container, or outside modal
          if (!isInModal || document.activeElement === contentRef.current || focusIndex === focusableElements.length - 1) {
            e.preventDefault()
            firstFocusable.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    if (contentRef.current) {
      contentRef.current.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleClose])

  if (!shouldRender || !playlist) return null

  const overlayClassName = `music-playlist-modal ${isClosing ? 'music-playlist-modal--closing' : ''}`
  const isTrackCurrent = (track) => currentTrack && currentTrack.id === track.id
  const isTrackActive = (track) => currentTrack && currentTrack.id === track.id && isPlaying
  const isTrackQueued = (track) => queue.some((q) => q.track.id === track.id)
  const hasTrackError = (track) => currentTrack && currentTrack.id === track.id && audioError !== null
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className={overlayClassName} role="dialog" aria-modal="true" aria-label={playlist.title}>
      <div className="modal-backdrop" onClick={handleClose} />
      <div className="modal-content" ref={contentRef} tabIndex={-1}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal-header">
          {playlist.coverImage && (
            <div className="modal-header__cover">
              <img
                src={playlist.coverImage}
                alt={`${playlist.title} cover`}
                className="modal-header__cover-image"
              />
            </div>
          )}
          <div className="modal-header__info">
            <h2>{playlist.title}</h2>
            <p>{playlist.description}</p>
            <span className="modal-header__meta">
              {playlist.tracks?.length || 0} tracks &middot; {playlist.genre}
            </span>
          </div>
        </div>
        <div className="modal-body" tabIndex={-1}>
          {playlist.tracks && playlist.tracks.length > 0 ? (
            <div className="modal-track-list" role="list" aria-label="Track list">
              {playlist.tracks.map((track, index) => {
                const isCurrent = isTrackCurrent(track)
                const playing = isTrackActive(track)

                const queued = isTrackQueued(track)
                const trackError = hasTrackError(track)

                return (
                  <div key={track.id} className="modal-track-wrapper">
                    <div
                      className={`modal-track${isCurrent ? ' modal-track--active' : ''}${playing ? ' modal-track--playing' : ''}${expandedTrackId === track.id ? ' modal-track--expanded' : ''}${queued ? ' modal-track--queued' : ''}${trackError ? ' modal-track--error' : ''}`}
                      role="listitem"
                      tabIndex={0}
                      onClick={() => handleTrackPlay(track)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleTrackPlay(track)
                        }
                      }}
                      aria-label={`${playing ? 'Pause' : 'Play'} ${track.title} by ${track.producer}`}
                      aria-expanded={expandedTrackId === track.id}
                    >
                      <div className="modal-track__play-col">
                        {trackError ? (
                          <span className="modal-track__error-icon" aria-label="Audio error" title={audioError.message}>
                            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M12 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <circle cx="12" cy="16.5" r="0.75" fill="currentColor"/>
                            </svg>
                          </span>
                        ) : isCurrent && isLoading ? (
                          <span className="modal-track__spinner" aria-label="Loading audio" />
                        ) : playing ? (
                          <button
                            className="modal-track__play-btn modal-track__play-btn--pause"
                            onClick={(e) => {
                              e.stopPropagation()
                              onTogglePlay()
                            }}
                            aria-label={`Pause ${track.title}`}
                            type="button"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                              <rect x="6" y="4" width="4" height="16" rx="1" />
                              <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                          </button>
                        ) : isCurrent ? (
                          <button
                            className="modal-track__play-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              onTogglePlay()
                            }}
                            aria-label={`Resume ${track.title}`}
                            type="button"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                              <polygon points="6,4 20,12 6,20" />
                            </svg>
                          </button>
                        ) : (
                          <div className="modal-track__number-wrap">
                            <span className="modal-track__number">{index + 1}</span>
                            <button
                              className="modal-track__play-btn modal-track__play-btn--hover"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleTrackPlay(track)
                              }}
                              aria-label={`Play ${track.title}`}
                              type="button"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <polygon points="6,4 20,12 6,20" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="modal-track__info">
                        <span className="modal-track__title">{track.title}</span>
                        <span className="modal-track__meta">
                          {track.producer} &middot; {track.genre}
                        </span>
                        {trackError && (
                          <span className="modal-track__error-msg" role="alert">
                            {audioError.message}
                          </span>
                        )}
                      </div>
                      <button
                        className={`modal-track__queue-btn${queued ? ' modal-track__queue-btn--queued' : ''}`}
                        onClick={(e) => handlePlayNextClick(e, track)}
                        aria-label={queued ? `${track.title} is in queue` : `Add ${track.title} to play next`}
                        title={queued ? 'In queue' : 'Play next'}
                        type="button"
                      >
                        {queued ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        )}
                      </button>
                      <span className="modal-track__duration">
                        {isCurrent
                          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                          : formatTime(track.duration)
                        }
                      </span>
                      <span
                        className={`modal-track__chevron ${expandedTrackId === track.id ? 'modal-track__chevron--open' : ''}`}
                        onClick={(e) => handleTrackDetailsToggle(e, track.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={expandedTrackId === track.id ? 'Collapse details' : 'Expand details'}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleTrackDetailsToggle(e, track.id)
                          }
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    {/* Seek bar and waveform for the currently selected track */}
                    {isCurrent && (
                      <div className="modal-track__seek-wrapper">
                        <div
                          className={`modal-track__seek-bar${isSeekDragging ? ' modal-track__seek-bar--dragging' : ''}`}
                          ref={seekBarRef}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSeekBarClick(e)
                          }}
                          onMouseDown={(e) => {
                            e.stopPropagation()
                            handleSeekMouseDown(e)
                          }}
                          onTouchStart={(e) => {
                            e.stopPropagation()
                            handleSeekTouchStart(e)
                          }}
                          role="slider"
                          aria-label="Seek"
                          aria-valuenow={Math.round(currentTime)}
                          aria-valuemin={0}
                          aria-valuemax={Math.round(duration)}
                          tabIndex={0}
                        >
                          <div
                            className="modal-track__seek-progress"
                            style={{ width: `${progressPercent}%` }}
                          />
                          <div
                            className="modal-track__seek-thumb"
                            style={{ left: `${progressPercent}%` }}
                          />
                        </div>
                        <Waveform
                          analyserNode={analyserNode}
                          isPlaying={playing}
                        />
                      </div>
                    )}
                    <TrackDetails
                      track={track}
                      isOpen={expandedTrackId === track.id}
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="modal-body__empty">No tracks in this playlist.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaylistModal

