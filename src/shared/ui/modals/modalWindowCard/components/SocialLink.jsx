import { SOCIAL_LINK_PREVIEW_LENGTH } from "../constants"
import { formatSocialLabel, normalizeSocialHref } from "../utils"

export const SocialLink = ({ href }) => {
  const normalizedHref = normalizeSocialHref(href)
  const label = formatSocialLabel(href, SOCIAL_LINK_PREVIEW_LENGTH)

  if (!normalizedHref) return null

  return (
    <a
      className="social-card__link"
      href={normalizedHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
