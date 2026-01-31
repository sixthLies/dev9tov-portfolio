import React from "react"
import { InfoBlock } from "@/shared/ui"
import { infoBoxImagesData } from "../model/infoBox"
import { IMAGES_DATA } from "../model/images.data"
import { useInfiniteImages } from "../lib/useInfiniteImages"
import { useImageModal } from "../lib/useImageModal"
import { ImagesModal } from "./ImagesModal"
import { imagesPageClasses } from "../model/images.classes"

export const ImagesPage = () => {
  const {
    items: items,
    hasMore,
    isLoading,
    sentinelRef,
  } = useInfiniteImages(IMAGES_DATA)
  const { active, open, close, closeBtnRef, onOverlayMouseDown } =
    useImageModal()

  const {
    root,
    title,
    list,
    list_item,
    button,
    img,
    meta,
    card_title,
    sentinel,
    loading,
    end,
  } = {
    ...imagesPageClasses,
  }

  return (
    <section className={root} aria-label="Галерея изображений">
      <h2 className={title}>Архив изображений</h2>
      <InfoBlock data={infoBoxImagesData} />

      <ul className={list}>
        {items.map((item) => (
          <li key={item.id} className={list_item}>
            <button
              type="button"
              className={button}
              onClick={() => open(item)}
              aria-label={`Открыть ${item.title}`}
            >
              <img
                className={img}
                src={item.thumbUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className={meta}>
              <div className={card_title}>{item.title}</div>
            </div>
          </li>
        ))}
      </ul>

      {isLoading && (
        <div className={loading} role="status" aria-live="polite">
          Загрузка…
        </div>
      )}

      {hasMore && (
        <div ref={sentinelRef} className={sentinel} aria-hidden="true" />
      )}

      {!hasMore && items.length > 0 && (
        <div className={end}>Все изображения загружены.</div>
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
