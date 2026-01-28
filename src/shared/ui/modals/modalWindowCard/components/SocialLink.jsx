import { SOCIAL_LINK_PREVIEW_LENGTH } from "../constants"

export const SocialLink = ({ href }) => (
  <a className="social-card__link" href={href} target="_blank">
    {href.slice(0, SOCIAL_LINK_PREVIEW_LENGTH)}
  </a>
)
