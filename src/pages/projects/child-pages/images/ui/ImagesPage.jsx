import { InfoBlock, Reveal } from "@/shared/ui"
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
    <section
      className={root}
      aria-label={"\u0413\u0430\u043b\u0435\u0440\u0435\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}
    >
      <Reveal as="h2" className={title} preset="text">
        {"\u0410\u0440\u0445\u0438\u0432 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}
      </Reveal>
      <InfoBlock data={infoBoxImagesData} revealIndex={1} />

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
