import { menuItems } from "@/shared/config/navigation"
import { ROUTE_PATHS } from "@/shared/config/routes"
import { CONTACTS_ALLOWED_LINK_HREFS } from "../model/constants"

const TECHNICAL_SUPPORT_VERSION_ID = "technical-support"

const getContactsLinkHrefs = (versionId) => {
  if (versionId !== TECHNICAL_SUPPORT_VERSION_ID) {
    return CONTACTS_ALLOWED_LINK_HREFS
  }

  return CONTACTS_ALLOWED_LINK_HREFS.map((href) =>
    href === ROUTE_PATHS.projects ? ROUTE_PATHS.skills : href,
  )
}

export const selectContactsLinks = (versionId) => {
  const allowed = new Set(getContactsLinkHrefs(versionId))
  return menuItems.filter((link) => allowed.has(link.href))
}
