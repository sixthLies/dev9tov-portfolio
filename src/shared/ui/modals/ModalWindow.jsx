export const ModalWindow = ({ isOpen, onClose, children }) => {
  const overlayClassName = `modal-overlay ${isOpen ? "is-open" : "is-hidden"}`
  const modalClassName = `modal ${isOpen ? "is-open" : ""}`

  return (
    <div className={overlayClassName} onClick={onClose} aria-hidden={!isOpen}>
      <div className={modalClassName} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  )
}
