import { MailButton } from "@/shared/ui/buttons/MailButton"
import {
  EMAIL_MARKER,
  GMAIL_MARKER,
  FALLBACK_EMAIL_TO,
  LABEL_GMAIL,
  LABEL_MAIL_RU,
} from "../constants"
import { extractEmailAddress } from "../utils"

export const ContactButton = ({ socialLink, subject }) => {
  const emailAddress = extractEmailAddress(socialLink)
  const hasEmail = emailAddress?.includes(EMAIL_MARKER)
  if (!hasEmail || !emailAddress) return null

  const isGmail = emailAddress.includes(GMAIL_MARKER)
  const to = isGmail ? emailAddress : FALLBACK_EMAIL_TO
  const label = isGmail ? LABEL_GMAIL : LABEL_MAIL_RU

  return (
    <MailButton to={to} subject={subject}>
      {label}
    </MailButton>
  )
}
