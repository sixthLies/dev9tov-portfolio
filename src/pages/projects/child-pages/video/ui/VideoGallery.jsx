import React from "react"
import { VideoCard, VideoStateMessage, VideoModal } from "./"

export function VideoGallery({
  items,
  isLoadingInitial,
  error,
  isEmpty,
  showGrid,
  showLoadingMore,
  selected,
  selectedVideoError,
  sentinelRef,
  closeButtonRef,
  onRetry,
  openVideo,
  onCardKeyDown,
  onOverlayMouseDown,
  closeModal,
  setSelectedVideoError,
}) {
  return (
    <div className="videoGallery">
      {isLoadingInitial && <VideoStateMessage type="loading" />}

      {!isLoadingInitial && error && (
        <VideoStateMessage type="error" error={error} onRetry={onRetry} />
      )}

      {isEmpty && <VideoStateMessage type="empty" />}

      {showGrid && (
        <div
          className="videoGallery__grid"
          role="list"
          aria-label="Видеогалерея"
        >
          {items.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onOpen={openVideo}
              onKeyDown={onCardKeyDown}
            />
          ))}
        </div>
      )}

      <div
        className="videoGallery__sentinel"
        ref={sentinelRef}
        aria-hidden="true"
      />

      {showLoadingMore && <VideoStateMessage type="loadingMore" />}

      <VideoModal
        selected={selected}
        selectedVideoError={selectedVideoError}
        onClose={closeModal}
        onOverlayMouseDown={onOverlayMouseDown}
        onVideoError={() => setSelectedVideoError(true)}
        closeButtonRef={closeButtonRef}
      />
    </div>
  )
}
