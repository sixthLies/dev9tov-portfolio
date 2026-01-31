import React from "react"
import { InfoBlock } from "@/shared/ui"
import { infoBoxImagesData } from "../model/infoBox"

import { IMAGES_DATA } from "../model/images.data"
import { useInfiniteImages } from "../lib/useInfiniteImages"
import { useImageModal } from "../lib/useImageModal"
import { ImagesModal } from "./ImagesModal"

export const ImagesPage = () => {
  const {
    items: images,
    hasMore,
    isLoading,
    sentinelRef,
  } = useInfiniteImages(IMAGES_DATA)
  const { active, open, close, closeBtnRef, onOverlayMouseDown } =
    useImageModal()

  return (
    <section className="gallery" aria-label="Галерея изображений">
      <h2 className="gallery__title">Архив изображений</h2>
      <InfoBlock data={infoBoxImagesData} />

      <ul className="gallery__list">
        {images.map((img) => (
          <li key={img.id} className="gallery-card__item">
            <button
              type="button"
              className="thumbButton"
              onClick={() => open(img)}
              aria-label={`Открыть ${img.title}`}
            >
              <img
                className="gallery-thumb__img"
                src={img.thumbUrl}
                alt={img.title}
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className="gallery__card-meta">
              <div className="cardTitle">{img.title}</div>
            </div>
          </li>
        ))}
      </ul>

      {isLoading && (
        <div className="status" role="status" aria-live="polite">
          Загрузка…
        </div>
      )}

      {hasMore && (
        <div ref={sentinelRef} className="sentinel" aria-hidden="true" />
      )}

      {!hasMore && images.length > 0 && (
        <div className="end">Все изображения загружены.</div>
      )}

      <ImagesModal
        active={active}
        onClose={close}
        onOverlayMouseDown={onOverlayMouseDown}
        closeBtnRef={closeBtnRef}
      />
    </section>
  )
}
