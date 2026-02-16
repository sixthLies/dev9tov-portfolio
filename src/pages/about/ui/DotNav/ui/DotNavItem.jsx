import {
  DOT_BUTTON_ACTIVE_CLASS,
  DOT_BUTTON_BASE_CLASS,
  DOT_ITEM_ARIA_LABEL_PREFIX,
} from "../model/constants"

const getDotButtonClassName = (isActive) => {
  if (!isActive) return DOT_BUTTON_BASE_CLASS
  return `${DOT_BUTTON_BASE_CLASS} ${DOT_BUTTON_ACTIVE_CLASS}`
}

const getDotAriaLabel = (label) => `${DOT_ITEM_ARIA_LABEL_PREFIX} ${label}`

export const DotNavItem = ({ onSelect, isActive, it, item }) => {
  return (
    <li className={item}>
      <button
        type="button"
        className={getDotButtonClassName(isActive)}
        onClick={() => onSelect(it.id)}
        aria-label={getDotAriaLabel(it.label)}
        aria-current={isActive ? "true" : "false"}
      />
    </li>
  )
}
