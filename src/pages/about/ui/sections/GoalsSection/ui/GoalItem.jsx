import { Reveal } from "@/shared/ui"

export const GoalItem = ({ goal, row, icon, iconInner, text, delay }) => {
  return (
    <Reveal delay={delay}>
      <div className={row}>
        <div className={icon} aria-hidden="true">
          <span className={iconInner} />
        </div>
        <div className={text}>{goal}</div>
      </div>
    </Reveal>
  )
}
