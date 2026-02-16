import { createPortal } from "react-dom"
import { CONTACT_ME_TITLE, DEFAULT_SUBJECT } from "../model/constants"
import { buildMailtoHref } from "../lib/buildMailtoHref"
import { buildGmailComposeUrl } from "../lib/buildGmailComposeUrl"

export const ContactMeModal = ({
  isOpen,
  onClose,
  email,
  telegramUrl,
  subject = DEFAULT_SUBJECT,
}) => {
  if (!isOpen) return null

  const mailtoHref = buildMailtoHref({ to: email, subject })
  const gmailUrl = buildGmailComposeUrl({ to: email, subject })

  return createPortal(
    <div
      className="contact-modal__overlay is-open"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="contact-modal is-open"
        role="dialog"
        aria-modal="true"
        aria-label={CONTACT_ME_TITLE}
      >
        <h2 className="contact-modal__title">{CONTACT_ME_TITLE}</h2>

        <div className="contact-modal__actions">
          <a
            className="contact-modal__action"
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
          >
            Открыть Gmail
          </a>

          {telegramUrl && (
            <a
              className="contact-modal__action"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
          )}
        </div>

        <button
          className="contact-modal__close"
          type="button"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>,
    document.body,
  )
}
