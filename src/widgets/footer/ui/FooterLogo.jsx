import { Link } from "react-router"
import { FOOTER_HOME_PATH, FOOTER_LOGO } from "../model/constants"
import logo from "@/shared/assets/icons/app/logo.webp"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"

export const FooterLogo = () => {
  const toVersionedPath = useVersionedPath()

  return (
    <Link className="footer__logo" to={toVersionedPath(FOOTER_HOME_PATH)}>
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
