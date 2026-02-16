import { goalsClasses } from "../model/classes"
import { GoalsHeader } from "./GoalsHeader"
import { GoalsList } from "./GoalsList"

export const GoalsSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={goalsClasses.root}>
      <GoalsHeader {...goalsClasses.header} />
      <GoalsList />
    </section>
  )
}
