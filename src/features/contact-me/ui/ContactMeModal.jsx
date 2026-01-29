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
      className="contactMeModal__overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="contactMeModal"
        role="dialog"
        aria-modal="true"
        aria-label={CONTACT_ME_TITLE}
      >
        <h2 className="contactMeModal__title">{CONTACT_ME_TITLE}</h2>

        <div className="contactMeModal__actions">
          <a
            className="contactMeModal__action"
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
          >
            Открыть Gmail
          </a>

          {telegramUrl && (
            <a
              className="contactMeModal__action"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
          )}
        </div>

        <button
          className="contactMeModal__close"
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
