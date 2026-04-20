import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

export const GoalItem = ({ goal, row, icon, iconInner, text, index }) => {
  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <div className={row}>
        <div className="goals__icon" aria-hidden="true">
          <span className="process__dotNum">{index + 1}</span>
        </div>
        <div className={text}>{goal}</div>
      </div>
    </Reveal>
  )
}
