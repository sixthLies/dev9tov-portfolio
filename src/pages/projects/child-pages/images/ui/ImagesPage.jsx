import React, { useCallback, useEffect, useRef, useState } from "react"
import { InfoBlock } from "@/shared/ui"
import { infoBoxImagesData } from "../model/infoBox"
import { test } from "@/shared/assets/images"

const PAGE_SIZE = 9
const TOTAL_IMAGES = 30

const IMAGES_DATA = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
  const id = i + 1
  return {
    id: String(id),
    title: `Изображение #${id}`,
    thumbUrl: test,
    fullUrl: test,
    howCreated:
      `Создано: генерация → апскейл → цветокоррекция. ` +
      `Параметры: seed=${id}, формат 1400×900, постобработка в редакторе.`,
  }
})

export const ImagesPage = () => {
  const [images, setImages] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState(null)

  const sentinelRef = useRef(null)
  const closeBtnRef = useRef(null)

  const isFetchingRef = useRef(false)
  const cursorRef = useRef(0)
  const hasMoreRef = useRef(true)

  const loadMore = useCallback(async () => {
    if (isFetchingRef.current) return
    if (!hasMoreRef.current) return

    isFetchingRef.current = true
    setIsLoading(true)

    try {
      const start = cursorRef.current
      const end = start + PAGE_SIZE
      const nextItems = IMAGES_DATA.slice(start, end)
      const nextCursor = end
      const nextHasMore = nextCursor < IMAGES_DATA.length

      setImages((prev) => prev.concat(nextItems))

      cursorRef.current = nextCursor
      hasMoreRef.current = nextHasMore
      setHasMore(nextHasMore)
    } finally {
      setIsLoading(false)
      isFetchingRef.current = false
    }
  }, [])

  useEffect(() => {
    loadMore()
  }, [loadMore])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    if (!hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        loadMore()
      },
      { root: null, threshold: 0, rootMargin: "800px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, loadMore])

  useEffect(() => {
    if (!active) return

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null)
    }

    document.addEventListener("keydown", onKeyDown)
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0)

    return () => {
      clearTimeout(t)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [active])

  const onOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) setActive(null)
  }

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
              onClick={() => setActive(img)}
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

      {active && (
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
                onClick={() => setActive(null)}
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
      )}
    </section>
  )
}
