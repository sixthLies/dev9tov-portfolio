import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { goalsClasses } from "../model/classes"
import { GoalItem } from "./GoalItem"

export const GoalsList = () => {
  const { about } = useSiteVersionContent()
  const { flow } = goalsClasses
  const { list } = flow

  return (
    <div className={flow.root}>
      <ol className={list.root}>
        {about.goals.items.map((goal, index) => (
          <GoalItem
            key={goal}
            goal={goal}
            index={index}
            {...list}
          />
        ))}
      </ol>
    </div>
  )
}
