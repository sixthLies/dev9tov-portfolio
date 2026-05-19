import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { goalsClasses } from "../model/classes"
import { useGoalsConnector } from "../lib/useGoalsConnector"
import { GoalItem } from "./GoalItem"

export const GoalsList = () => {
  const { about } = useSiteVersionContent()
  const { flow } = goalsClasses
  const { connector, getItemRef, rootRef } = useGoalsConnector(
    about.goals.items.length,
  )
  const { list } = flow

  return (
    <div className={flow.root} ref={rootRef}>
      <ol className={list.root}>
        {about.goals.items.map((goal, index) => (
          <GoalItem
            getItemRef={getItemRef}
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
