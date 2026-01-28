import { MailButton } from "../../../buttons/MailButton"
import {
  EMAIL_MARKER,
  GMAIL_MARKER,
  FALLBACK_EMAIL_TO,
  LABEL_GMAIL,
  LABEL_MAIL_RU,
} from "../constants"

export const ContactButton = ({ socialLink, subject }) => {
  const hasEmail = socialLink?.includes(EMAIL_MARKER)
  if (!hasEmail) return null

  const isGmail = socialLink.includes(GMAIL_MARKER)
  const to = isGmail ? socialLink : FALLBACK_EMAIL_TO
  const label = isGmail ? LABEL_GMAIL : LABEL_MAIL_RU

  return (
    <MailButton to={to} subject={subject}>
      {label}
    </MailButton>
  )
}
