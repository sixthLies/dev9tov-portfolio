import { useMemo } from "react"
import { DEFAULT_NUM_STARS } from "../model/constants"
import { generateStars } from "../lib/generateStars"

export const Stars = ({ count = DEFAULT_NUM_STARS }) => {
  const stars = useMemo(
    () =>
      generateStars(count, {
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    [count],
  )

  return (
    <div
      className="stars-container"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {stars.map(({ id, left, top }) => (
        <span
          key={id}
          className="star"
          style={{ position: "absolute", left: `${left}px`, top: `${top}px` }}
        />
      ))}
    </div>
  )
}
