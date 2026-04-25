import { Link } from "react-router"
import logo from "@/shared/assets/icons/app/logo.webp"
import { HOME_ROUTE, LOGO, LOGO_ARIA_LABEL } from "../model/constants"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"

export const HeaderLogo = () => {
  const toVersionedPath = useVersionedPath()

  return (
    <Link
      className="header__logo"
      to={toVersionedPath(HOME_ROUTE)}
      aria-label={LOGO_ARIA_LABEL}
    >
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
