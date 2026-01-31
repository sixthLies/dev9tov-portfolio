import { menuItems } from "@/shared/config/navigation"
import { PROJECTS_PAGE } from "../model/constants"

export const selectProjectsLinks = () => {
  const allowed = new Set(PROJECTS_PAGE.primaryLinkHrefs)
  return menuItems.filter((link) => allowed.has(link.href))
}
