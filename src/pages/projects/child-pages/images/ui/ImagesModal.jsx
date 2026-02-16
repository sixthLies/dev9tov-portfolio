import { imagesModalClasses } from "../model/images.classes"

export function ImagesModal({
  active,
  onClose,
  onOverlayMouseDown,
  closeBtnRef,
}) {
  if (!active) return null

  const { root, modal, header, title, button, body, img, desc_title, text } = {
    ...imagesModalClasses,
  }

  return (
    <div className={`${root} is-open`} onMouseDown={onOverlayMouseDown}>
      <div
        className={`${modal} is-open`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="img-title"
        aria-describedby="img-desc"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={header}>
          <h3 className={title} id="img-title">
            {active.title}
          </h3>

          <button
            ref={closeBtnRef}
            type="button"
            className={button}
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>

        <div className={body}>
          <img className={img} src={active.fullUrl} alt={active.title} />
          <div className={desc_title}>Как создано</div>
          <p className={text} id="img-desc">
            {active.howCreated}
          </p>
        </div>
      </div>
    </div>
  )
}
