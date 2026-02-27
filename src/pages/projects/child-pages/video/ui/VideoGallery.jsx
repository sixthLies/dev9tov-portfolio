import React from "react"
import { VideoCard, VideoStateMessage, VideoModal } from "./"

export function VideoGallery({
  items,
  isLoadingInitial,
  error,
  isEmpty,
  showGrid,
  showLoadingMore,
  showEndOfList,
  hasMore,
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
          {items.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onOpen={openVideo}
              onKeyDown={onCardKeyDown}
            />
          ))}
        </div>
      )}

      {hasMore && (
        <div
          className="videoGallery__sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      )}

      {showLoadingMore && <VideoStateMessage type="loadingMore" />}
      {showEndOfList && <VideoStateMessage type="end" />}

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
