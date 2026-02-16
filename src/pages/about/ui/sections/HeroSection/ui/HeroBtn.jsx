import { heroClasses } from "../model/classes"

export const HeroBtn = ({ onMore }) => {
  const { button, moreText, arrow } = { ...heroClasses }

  return (
    <button type="button" className={button} onClick={onMore}>
      <span className={moreText}>Подробнее</span>
      <span className={arrow} aria-hidden="true">
        ↓
      </span>
    </button>
  )
}
