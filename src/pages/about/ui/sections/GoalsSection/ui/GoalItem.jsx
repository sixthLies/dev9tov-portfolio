import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

export const GoalItem = ({ goal, row, icon, iconInner, text, index }) => {
  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <div className={row}>
        <div className={icon} aria-hidden="true">
          <span className={iconInner} />
        </div>
        <div className={text}>{goal}</div>
      </div>
    </Reveal>
  )
}
