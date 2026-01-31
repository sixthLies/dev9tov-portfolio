import { menuItems } from "@/shared/config/navigation"
import { SKILLS_PAGE } from "../model/constants"

export const selectSkillsLinks = () => {
  const allowed = new Set(SKILLS_PAGE.primaryLinkHrefs)
  return menuItems.filter((link) => allowed.has(link.href))
}
