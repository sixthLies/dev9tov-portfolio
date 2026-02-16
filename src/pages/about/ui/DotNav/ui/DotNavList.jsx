import { DotNavItem } from "./DotNavItem"

export const DotNavList = ({ items, onSelect, activeId, root, item }) => {
  return (
    <ul className={root} role="list">
      {items.map((it) => {
        const isActive = it.id === activeId
        return (
          <DotNavItem
            key={it.id}
            it={it}
            onSelect={onSelect}
            isActive={isActive}
            item={item}
          />
        )
      })}
    </ul>
  )
}
