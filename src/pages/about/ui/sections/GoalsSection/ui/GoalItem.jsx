import { Reveal } from "@/shared/ui"

export const GoalItem = ({ goal, row, icon, iconInner, text, index }) => {
  return (
    <Reveal preset="card" index={index}>
      <div className={row}>
        <div className={icon} aria-hidden="true">
          <span className={iconInner} />
        </div>
        <div className={text}>{goal}</div>
      </div>
    </Reveal>
  )
}
