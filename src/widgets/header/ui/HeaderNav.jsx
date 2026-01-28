import { ListMenu } from "@/shared/ui"
import { NAV_ARIA_LABEL } from "../model/constants"
import { headerClasses } from "../model/classes"
import { menuItems } from "@/shared/config/navigation"

const listMenuProps = { items: menuItems, ...headerClasses }

export const HeaderNav = () => {
  return (
    <nav className="menu" aria-label={NAV_ARIA_LABEL}>
      <ListMenu {...listMenuProps} />
    </nav>
  )
}
