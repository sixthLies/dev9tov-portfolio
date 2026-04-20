import github from "@/shared/assets/icons/socials/github.svg"
import gmail from "@/shared/assets/icons/socials/gmail.svg"
import telegram from "@/shared/assets/icons/socials/telegram.svg"
import { socialItems } from "@/shared/config/navigation"
import {
  githubLink,
  gmailLink,
  telegrammLink,
} from "@/shared/config/profileLinks"
import { IconsList } from "@/shared/ui"
import { footerClasses } from "../model/classes"

const links = { telegrammLink, githubLink, gmailLink }
const icons = { telegram, github, gmail }

export const FooterNav = () => {
  return (
    <nav className="footer__nav">
      <IconsList items={socialItems(links, icons)} {...footerClasses} />
    </nav>
  )
}
