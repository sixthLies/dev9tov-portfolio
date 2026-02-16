import { dotNavClasses } from "../model/classes"
import { DOT_NAV_ARIA_LABEL } from "../model/constants"
import { DotNavLabel } from "./DotNavLabel"
import { DotNavList } from "./DotNavList"

export const DotNav = ({ items, activeId, onSelect }) => {
  const activeLabel = items.find((item) => item.id === activeId)?.label ?? ""

  return (
    <nav className={dotNavClasses.root} aria-label={DOT_NAV_ARIA_LABEL}>
      <DotNavLabel activeLabel={activeLabel} label={dotNavClasses.label} />
      <DotNavList
        items={items}
        activeId={activeId}
        onSelect={onSelect}
        {...dotNavClasses.list}
      />
    </nav>
  )
}
