import { telegrammLink } from "@/shared/config/profileLinks"
import { FOOTER_AUTHOR_HANDLE, FOOTER_COPYRIGHT_YEAR } from "../model/constants"

export const FooterCopyright = () => {
  return (
    <p className="footer__copyright">
      {"\u00A9"} {FOOTER_COPYRIGHT_YEAR}
      <a
        className="footer__copyright-link"
        target="_blank"
        rel="noreferrer"
        href={telegrammLink}
      >
        {FOOTER_AUTHOR_HANDLE}
      </a>
      All rights reserved.
    </p>
  )
}
