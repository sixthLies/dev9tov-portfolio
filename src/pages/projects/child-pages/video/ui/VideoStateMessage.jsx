import React from "react"

export const VideoStateMessage = ({ type, error, onRetry }) => {
  const stateClasses = {
    loading: "videoGallery__state--loading",
    error: "videoGallery__state--error",
    empty: "videoGallery__state--empty",
    loadingMore: "videoGallery__state--loadingMore",
  }

  if (type === "loading") {
    return (
      <div
        className={`videoGallery__state ${stateClasses.loading}`}
        role="status"
        aria-live="polite"
      >
        Загрузка…
      </div>
    )
  }

  if (type === "error") {
    return (
      <div className={`videoGallery__state ${stateClasses.error}`} role="alert">
        <div className="videoGallery__errorText">{error}</div>
        <button
          className="videoGallery__retryButton"
          type="button"
          onClick={onRetry}
        >
          Повторить
        </button>
      </div>
    )
  }

  if (type === "empty") {
    return (
      <div
        className={`videoGallery__state ${stateClasses.empty}`}
        role="status"
        aria-live="polite"
      >
        Нет видео.
      </div>
    )
  }

  if (type === "loadingMore") {
    return (
      <div
        className={`videoGallery__state ${stateClasses.loadingMore}`}
        role="status"
        aria-live="polite"
      >
        Загрузка ещё…
      </div>
    )
  }

  return null
}
