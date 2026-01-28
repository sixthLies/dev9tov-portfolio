import { Link } from "react-router"
import { logo } from "@/shared/assets/icons"
import { HOME_ROUTE, LOGO, LOGO_ARIA_LABEL } from "../model/constants"

export const HeaderLogo = () => {
  return (
    <Link className="header__logo" to={HOME_ROUTE} aria-label={LOGO_ARIA_LABEL}>
      <img
        className="logo__img"
        src={logo}
        width={LOGO.width}
        height={LOGO.heightAttr}
        alt={LOGO.alt}
      />
    </Link>
  )
}
