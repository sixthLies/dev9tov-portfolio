import { InfoBlock } from "@/shared/ui"
import { infoBoxImagesData } from "../model/images.infoBox"
import { IMAGES_DATA } from "../model/images.data"
import { useInfiniteImages } from "../lib/useInfiniteImages"
import { useImageModal } from "../lib/useImageModal"
import { ImagesModal, ImagesGrid, GalleryFooter } from "./"
import { imagesPageClasses } from "../model/images.classes"

export const ImagesPage = () => {
  const { items, hasMore, isLoading, sentinelRef } =
    useInfiniteImages(IMAGES_DATA)
  const { active, open, close, closeBtnRef, onOverlayMouseDown } =
    useImageModal()

  const { root, title, sentinel, loading, end } = imagesPageClasses
  const hasItems = items.length > 0

  return (
    <section className={root} aria-label="Галерея изображений">
      <h2 className={title}>Архив изображений</h2>
      <InfoBlock data={infoBoxImagesData} />

      <ImagesGrid items={items} onOpen={open} classes={imagesPageClasses} />

      <GalleryFooter
        isLoading={isLoading}
        hasMore={hasMore}
        hasItems={hasItems}
        sentinelRef={sentinelRef}
        classes={{ loading, sentinel, end }}
      />

      <ImagesModal
        active={active}
        onClose={close}
        onOverlayMouseDown={onOverlayMouseDown}
        closeBtnRef={closeBtnRef}
      />
    </section>
  )
}
