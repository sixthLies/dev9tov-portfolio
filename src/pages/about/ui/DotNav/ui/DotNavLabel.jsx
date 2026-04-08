
export const DotNavLabel = ({ activeLabel, label }) => {
  return (
    <div className={label} aria-hidden="true">
      {activeLabel}
    </div>
  )
}
