export const GalleryFooter = ({
  isLoading,
  hasMore,
  hasItems,
  sentinelRef,
  classes,
}) => {
  const { loading, sentinel, end } = classes
  const showEnd = !hasMore && hasItems

  return (
    <>
      {isLoading ? (
        <div className={loading} role="status" aria-live="polite">
          Загрузка…
        </div>
      ) : null}

      {hasMore ? (
        <div ref={sentinelRef} className={sentinel} aria-hidden="true" />
      ) : null}

      {showEnd ? <div className={end}>Все изображения загружены.</div> : null}
    </>
  )
}
