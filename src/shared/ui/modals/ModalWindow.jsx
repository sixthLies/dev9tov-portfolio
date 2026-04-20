import { useEffect, useRef } from "react"

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    const rootStyle = document.documentElement.style
    const previousOverflow = rootStyle.overflow

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation()
        onClose?.()
      }
    }

    rootStyle.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      rootStyle.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
      previouslyFocusedElement?.focus?.()
    }
  }, [isOpen, onClose])

  const overlayClassName = `modal-overlay ${isOpen ? "is-open" : "is-hidden"}`
  const modalClassName = `modal ${isOpen ? "is-open" : ""}`

  return (
    <div className={overlayClassName} onClick={onClose} aria-hidden={!isOpen}>
      <div
        className={modalClassName}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          x
        </button>
        {children}
      </div>
    </div>
  )
}
