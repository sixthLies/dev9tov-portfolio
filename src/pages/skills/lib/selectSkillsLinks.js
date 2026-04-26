import { menuItems } from "@/shared/config/navigation"
import { ROUTE_PATHS } from "@/shared/config/routes"
import { SKILLS_PAGE } from "../model/constants"

const TECHNICAL_SUPPORT_VERSION_ID = "technical-support"

const getSkillsLinkHrefs = (versionId) => {
  if (versionId !== TECHNICAL_SUPPORT_VERSION_ID) {
    return SKILLS_PAGE.primaryLinkHrefs
  }

  return SKILLS_PAGE.primaryLinkHrefs.map((href) =>
    href === ROUTE_PATHS.projects ? ROUTE_PATHS.contacts : href,
  )
}

export const selectSkillsLinks = (versionId) => {
  const allowed = new Set(getSkillsLinkHrefs(versionId))
  return menuItems.filter((link) => allowed.has(link.href))
}
