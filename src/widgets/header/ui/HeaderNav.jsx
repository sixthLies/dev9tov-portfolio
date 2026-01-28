import { ListMenu } from "@/shared/ui"
import { headerClasses } from "@/config/ui/classNames"
import { menuItems } from "@/config/app/navigation"
import { NAV_ARIA_LABEL } from "../model/constants"

const listMenuProps = { items: menuItems, ...headerClasses }

export const HeaderNav = () => {
  return (
    <nav className="menu" aria-label={NAV_ARIA_LABEL}>
      <ListMenu {...listMenuProps} />
    </nav>
  )
}
