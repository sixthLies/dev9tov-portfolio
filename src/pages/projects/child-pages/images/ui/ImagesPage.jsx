import React, { useCallback, useEffect, useRef, useState } from "react"
import { InfoBlock } from "@/shared/ui"
import { infoBoxImagesData } from "../model/infoBox"
import { test } from "@/shared/assets/images"

const PAGE_SIZE = 9
const TOTAL_IMAGES = 30

// Обычный массив вместо mockFetchImagesPage
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

  // Служебные ref'ы: не триггерят ререндер и всегда актуальны
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

  // первичная загрузка
  useEffect(() => {
    loadMore()
  }, [loadMore])

  // infinite scroll через IntersectionObserver [web:47]
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

  // модалка: ESC закрывает + фокус на кнопку закрытия [web:39]
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
      <h2 className="title">Архив изображений</h2>
      <InfoBlock data={infoBoxImagesData} />
      <ul className="grid">
        {images.map((img) => (
          <li key={img.id} className="grid-card">
            <button
              type="button"
              className="thumbButton"
              onClick={() => setActive(img)}
              aria-label={`Открыть ${img.title}`}
            >
              <img
                className="thumb"
                src={img.thumbUrl}
                alt={img.title}
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className="cardMeta">
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
        <div className="modalOverlay" onMouseDown={onOverlayMouseDown}>
          <div
            className="modal-img"
            role="dialog"
            aria-modal="true"
            aria-labelledby="img-title"
            aria-describedby="img-desc"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <h2 className="modalTitle" id="img-title">
                {active.title}
              </h2>

              <button
                ref={closeBtnRef}
                type="button"
                className="closeBtn"
                onClick={() => setActive(null)}
              >
                Закрыть
              </button>
            </div>

            <div className="modalBody">
              <img className="full" src={active.fullUrl} alt={active.title} />
              <div className="descTitle">Как создано</div>
              <p className="desc" id="img-desc">
                {active.howCreated}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
