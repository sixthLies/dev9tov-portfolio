import { Link } from "react-router"
import { FOOTER_HOME_PATH, FOOTER_LOGO } from "../model/constants"
import { logo } from "@/shared/assets/icons"

export const FooterLogo = () => {
  return (
    <Link className="footer__logo" to={FOOTER_HOME_PATH}>
      <img
        className="logo__img"
        src={logo}
        alt={FOOTER_LOGO.alt}
        width={FOOTER_LOGO.width}
        height={FOOTER_LOGO.heightAttr}
      />
    </Link>
  )
}
