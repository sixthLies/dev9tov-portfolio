import { menuItems } from "@/shared/config/navigation"
import { CONTACTS_ALLOWED_LINK_HREFS } from "../model/constants"

export const selectContactsLinks = () => {
  const allowed = new Set(CONTACTS_ALLOWED_LINK_HREFS)
  return menuItems.filter((link) => allowed.has(link.href))
}
