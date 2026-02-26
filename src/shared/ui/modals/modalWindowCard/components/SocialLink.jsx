import { SOCIAL_LINK_PREVIEW_LENGTH } from "../constants"

export const SocialLink = ({ href }) => (
  <a
    className="social-card__link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {href && href.slice(0, SOCIAL_LINK_PREVIEW_LENGTH)}
  </a>
)
