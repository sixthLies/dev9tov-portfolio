import { goalsClasses } from "../model/classes"
import { GOALS } from "../model/constants"
import { GoalItem } from "./GoalItem"

export const GoalsList = () => {
  const { list } = goalsClasses

  return (
    <div className={list.list}>
      {GOALS.map((goal, index) => (
        <GoalItem key={goal} goal={goal} delay={(index % 4) + 1} {...list} />
      ))}
    </div>
  )
}
