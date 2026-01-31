import React from "react"
import { InfoBlock } from "@/shared/ui"

import { infoBoxImagesData, IMAGES_DATA, imagesPageClasses } from "../model"
import { useInfiniteImages, useImageModal } from "../lib"
import { ImagesGrid, ImagesModal } from "./"

export const ImagesPage = () => {
  const { items, hasMore, isLoading, sentinelRef } =
    useInfiniteImages(IMAGES_DATA)
  const { active, open, close, closeBtnRef, onOverlayMouseDown } =
    useImageModal()

  // классы — без лишнего spread/объекта
  const { root, title, sentinel, loading, end } = imagesPageClasses

  // условия для “сканируемости”
  const hasItems = items.length > 0
  const showEnd = !hasMore && hasItems

  const loadingNode = isLoading ? (
    <div className={loading} role="status" aria-live="polite">
      Загрузка…
    </div>
  ) : null

  const sentinelNode = hasMore ? (
    <div ref={sentinelRef} className={sentinel} aria-hidden="true" />
  ) : null

  const endNode = showEnd ? (
    <div className={end}>Все изображения загружены.</div>
  ) : null

  return (
    <section className={root} aria-label="Галерея изображений">
      <h2 className={title}>Архив изображений</h2>
      <InfoBlock data={infoBoxImagesData} />

      <ImagesGrid items={items} onOpen={open} classes={imagesPageClasses} />

      {loadingNode}
      {sentinelNode}
      {endNode}

      <ImagesModal
        active={active}
        onClose={close}
        onOverlayMouseDown={onOverlayMouseDown}
        closeBtnRef={closeBtnRef}
      />
    </section>
  )
}
