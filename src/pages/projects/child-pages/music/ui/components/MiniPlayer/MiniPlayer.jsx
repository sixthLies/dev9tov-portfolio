import React, { useRef, useCallback } from 'react'
import { formatTime } from '../../../lib/utils/formatTime'
import { useSeekDrag } from '../../../lib/hooks/useSeekDrag'
import { useVolumeDrag } from '../../../lib/hooks/useVolumeDrag'
import RepeatControls from '../RepeatControls/RepeatControls.jsx'
import './MiniPlayer.scss'

/**
 * MiniPlayer - Persistent bottom bar showing current track info and controls
 * Pinned to the bottom of the screen when a track is playing and modal is closed
 * Features: play/pause, seek bar, volume, skip next, track info
 */
function MiniPlayer({
  track,
  playlist,
  isVisible,
  isPlaying,
  isLoading,
  audioError = null,
  currentTime,
  duration,
  volume,
  isMuted,
  repeatMode,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  onToggleMute,
  onSkipNext,
  onExpand,
  onToggleRepeat,
}) {
  // Seek bar with click-to-seek and drag-to-seek
  const {
    seekBarRef,
    isDragging: isSeekDragging,
    handleSeekMouseDown,
    handleSeekTouchStart,
    handleSeekClick: handleSeekBarClick,
  } = useSeekDrag(duration, onSeek)

  // Volume bar with click-to-set and drag-to-adjust
  const {
    volumeBarRef,
    isDragging: isVolumeDragging,
    handleVolumeMouseDown,
    handleVolumeTouchStart,
    handleVolumeClick,
  } = useVolumeDrag(onVolumeChange)

  if (!isVisible || !track) return null

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0
  const volumePercent = isMuted ? 0 : (volume * 100)

  const hasError = audioError !== null

  return (
    <div className={`mini-player${hasError ? ' mini-player--error' : ''}`} role="complementary" aria-label="Mini player">
      {/* Progress bar at the very top of mini-player */}
      <div
        className={`mini-player__progress-bar${isSeekDragging ? ' mini-player__progress-bar--dragging' : ''}`}
        ref={seekBarRef}
        onClick={handleSeekBarClick}
        onMouseDown={handleSeekMouseDown}
        onTouchStart={handleSeekTouchStart}
        role="slider"
        aria-label="Seek"
        aria-valuenow={Math.round(currentTime)}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        tabIndex={0}
      >
        <div
          className="mini-player__progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mini-player__content" onClick={onExpand} role="button" tabIndex={0} aria-label="Open playlist" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onExpand(); } }}>
        {/* Album art thumbnail */}
        {playlist && playlist.coverImage && (
          <div className="mini-player__artwork">
            <img
              src={playlist.coverImage}
              alt={`${playlist.title} cover`}
              className="mini-player__artwork-img"
            />
          </div>
        )}

        {/* Track info - clickable to expand */}
        <div className="mini-player__track-info">
          <span className="mini-player__title">{track.title}</span>
          {hasError ? (
            <span className="mini-player__error-msg">{audioError.message}</span>
          ) : (
            <span className="mini-player__producer">{track.producer}</span>
          )}
        </div>

        {/* Time display */}
        <span className="mini-player__time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Controls */}
        <div className="mini-player__controls" onClick={(e) => e.stopPropagation()}>
          <button
            className={`mini-player__btn mini-player__btn--play ${isPlaying ? 'mini-player__btn--active' : ''}${isLoading ? ' mini-player__btn--loading' : ''}${hasError ? ' mini-player__btn--error' : ''}`}
            onClick={onTogglePlay}
            aria-label={hasError ? 'Audio error' : isLoading ? 'Loading' : isPlaying ? 'Pause' : 'Play'}
            type="button"
            disabled={isLoading || hasError}
          >
            {isLoading ? (
              <span className="mini-player__spinner" aria-label="Loading audio" />
            ) : hasError ? (
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="16.5" r="0.75" fill="currentColor"/>
              </svg>
            ) : isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            )}
          </button>

          <button
            className="mini-player__btn mini-player__btn--skip"
            onClick={onSkipNext}
            aria-label="Skip to next track"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <polygon points="4,4 16,12 4,20" />
              <rect x="16" y="4" width="3" height="16" rx="1" />
            </svg>
          </button>

          <RepeatControls mode={repeatMode || 'off'} onToggle={onToggleRepeat} />

          {/* Volume controls */}
          <div className="mini-player__volume">
            <button
              className={`mini-player__btn mini-player__btn--mute ${isMuted ? 'mini-player__btn--muted' : ''}`}
              onClick={onToggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              type="button"
            >
              {isMuted || volume === 0 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" />
                </svg>
              )}
            </button>
            <div
              className={`mini-player__volume-bar${isVolumeDragging ? ' mini-player__volume-bar--dragging' : ''}`}
              ref={volumeBarRef}
              onClick={handleVolumeClick}
              onMouseDown={handleVolumeMouseDown}
              onTouchStart={handleVolumeTouchStart}
              role="slider"
              aria-label="Volume"
              aria-valuenow={Math.round(volume * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <div
                className="mini-player__volume-fill"
                style={{ width: `${volumePercent}%` }}
              />
              <div
                className="mini-player__volume-thumb"
                style={{ left: `${volumePercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniPlayer

