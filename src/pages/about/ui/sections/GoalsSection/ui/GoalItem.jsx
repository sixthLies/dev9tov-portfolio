export const GoalItem = ({ goal, row, icon, iconInner, text }) => {
  return (
    <div className={row}>
      <div className={icon} aria-hidden="true">
        <span className={iconInner} />
      </div>
      <div className={text}>{goal}</div>
    </div>
  )
}
