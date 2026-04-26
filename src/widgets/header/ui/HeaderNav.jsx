import { ListMenu } from "@/shared/ui"
import { NAV_ARIA_LABEL } from "../model/constants"
import { headerClasses } from "../model/classes"
import { menuItems } from "@/shared/config/navigation"
import { useSiteVersion } from "@/shared/lib/useSiteVersion"

const TECHNICAL_SUPPORT_VERSION_ID = "technical-support"
const TEMPORARILY_DISABLED_PROJECTS_MENU_ITEM_ID = "projects"

export const HeaderNav = () => {
  const { versionId } = useSiteVersion()
  const visibleMenuItems =
    versionId === TECHNICAL_SUPPORT_VERSION_ID
      ? menuItems.filter(
          // Temporarily hide the portfolio link for the technical support landing.
          ({ id }) => id !== TEMPORARILY_DISABLED_PROJECTS_MENU_ITEM_ID,
        )
      : menuItems

  return (
    <nav className="header__nav" aria-label={NAV_ARIA_LABEL}>
      <ListMenu
        items={visibleMenuItems}
        {...headerClasses}
      />
    </nav>
  )
}
