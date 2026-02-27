import React, { useRef, useEffect, useState } from 'react'
import './TrackDetails.scss'

/**
 * TrackDetails - Expandable panel showing track creation description
 * Slides open beneath a track row in the playlist modal
 * Uses CSS transitions for smooth slide-down/slide-up animations
 */
function TrackDetails({ track, isOpen }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  // Measure content height for smooth animation
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      setHeight(contentHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen, track])

  return (
    <div
      className={`track-details ${isOpen ? 'track-details--open' : ''}`}
      style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      role="region"
      aria-label={track ? `Details for ${track.title}` : 'Track details'}
      aria-hidden={!isOpen}
    >
      <div className="track-details__inner" ref={contentRef}>
        {track && track.creationDescription && (
          <>
            <div className="track-details__label">How it was made</div>
            <p className="track-details__description">{track.creationDescription}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default TrackDetails

