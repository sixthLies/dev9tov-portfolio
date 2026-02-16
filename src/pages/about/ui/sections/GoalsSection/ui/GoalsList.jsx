import { goalsClasses } from "../model/classes"
import { GOALS } from "../model/constants"
import { GoalItem } from "./GoalItem"

export const GoalsList = () => {
  const { list } = goalsClasses

  return (
    <div className={list.list}>
      {GOALS.map((goal) => (
        <GoalItem key={goal} goal={goal} {...list} />
      ))}
    </div>
  )
}
