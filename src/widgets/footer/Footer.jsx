import { Link } from "react-router"
import { githubLink, gmailLink, telegrammLink } from "@/config/appConfig"
import { IconsList } from "@/shared"
import { socialItems } from "@/config/navigation"
import { icons } from "@/shared/assets"
import { footerClasses } from "../../config/classNames"

const links = { telegrammLink, githubLink, gmailLink }

export const Footer = () => {
  return (
    <footer>
      <div class="footer__content">
        <Link class="logo" to="/">
          <img class="logo__img" src={icons.logo} alt="Logo" width="110" />
        </Link>

        <p>
          © 2026{" "}
          <a class="copyright-link" target="blank" href={telegrammLink}>
            @aveaveavenjoyer.
          </a>{" "}
          All rights reserved.
        </p>

        <nav class="menu">
          <IconsList items={socialItems(links, icons)} {...footerClasses} />
        </nav>
      </div>
    </footer>
  )
}
