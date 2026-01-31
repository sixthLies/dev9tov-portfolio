import React from "react"

export function ImagesModal({
  active,
  onClose,
  onOverlayMouseDown,
  closeBtnRef,
}) {
  if (!active) return null

  return (
    <div className="gallery-modalOverlay" onMouseDown={onOverlayMouseDown}>
      <div
        className="gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="img-title"
        aria-describedby="img-desc"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="gallery-modal__header">
          <h3 className="gallery-modal__title" id="img-title">
            {active.title}
          </h3>

          <button
            ref={closeBtnRef}
            type="button"
            className="closeBtn"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>

        <div className="gallery-modal__body">
          <img
            className="gallery-modal__img"
            src={active.fullUrl}
            alt={active.title}
          />
          <div className="gallery-modal__descTitle">Как создано</div>
          <p className="gallery-modal__text" id="img-desc">
            {active.howCreated}
          </p>
        </div>
      </div>
    </div>
  )
}
