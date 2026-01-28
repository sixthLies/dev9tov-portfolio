import { IconsList } from "@/shared/ui"
import { icons } from "@/shared/assets"
import { footerClasses } from "../model/classes"
import { socialItems } from "@/shared/config/navigation"
import {
  githubLink,
  gmailLink,
  telegrammLink,
} from "@/shared/config/profileLinks"

const links = { telegrammLink, githubLink, gmailLink }

export const FooterNav = () => {
  return (
    <nav className="menu">
      <IconsList items={socialItems(links, icons)} {...footerClasses} />
    </nav>
  )
}
