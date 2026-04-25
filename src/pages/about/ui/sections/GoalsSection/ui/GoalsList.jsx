import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { goalsClasses } from "../model/classes"
import { GoalItem } from "./GoalItem"

export const GoalsList = () => {
  const { list } = goalsClasses
  const { about } = useSiteVersionContent()

  return (
    <div className={list.list}>
      {about.goals.items.map((goal, index) => (
        <GoalItem key={goal} goal={goal} index={index} {...list} />
      ))}
    </div>
  )
}
