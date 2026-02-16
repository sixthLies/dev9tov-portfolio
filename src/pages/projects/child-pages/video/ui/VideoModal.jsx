import React from "react"

export const VideoModal = ({
  selected,
  selectedVideoError,
  onClose,
  onOverlayMouseDown,
  onVideoError,
  closeButtonRef,
}) => {
  if (!selected) return null

  return (
    <div
      className="videoModal is-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="videoModalTitle"
      onMouseDown={onOverlayMouseDown}
    >
      <div className="videoModal__panel is-open">
        <div className="videoModal__header">
          <h2 className="videoModal__title" id="videoModalTitle">
            {selected.title}
          </h2>

          <button
            className="videoModal__closeButton"
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
          >
            Закрыть
          </button>
        </div>

        <div className="videoModal__player">
          {selectedVideoError ? (
            <div className="videoModal__videoError" role="alert">
              Видео не загрузилось.{" "}
              <a
                className="videoModal__videoLink"
                href={selected.fullUrl}
                target="_blank"
                rel="noreferrer"
              >
                Открыть ссылку
              </a>
            </div>
          ) : (
            <video
              className="videoModal__video"
              controls
              preload="none"
              poster={selected.thumbUrl}
              loading="lazy"
              onError={onVideoError}
            >
              <source src={selected.fullUrl} />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          )}
        </div>

        <div className="videoModal__details">
          <div className="videoModal__detailsTitle">Как создано</div>
          <div className="videoModal__detailsText">{selected.howCreated}</div>
        </div>
      </div>
    </div>
  )
}
