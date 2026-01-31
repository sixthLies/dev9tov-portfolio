import { telegrammLink } from "@/shared/config/profileLinks"
import { FOOTER_AUTHOR_HANDLE, FOOTER_COPYRIGHT_YEAR } from "../model/constants"

export const FooterCopyright = () => {
  return (
    <p className="copyright__text">
      © {FOOTER_COPYRIGHT_YEAR}
      <a className="copyright-link" target="blank" href={telegrammLink}>
        {FOOTER_AUTHOR_HANDLE}
      </a>
      All rights reserved.
    </p>
  )
}
