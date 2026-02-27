import { goalsClasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { GoalsHeader } from "./GoalsHeader"
import { GoalsList } from "./GoalsList"

export const GoalsSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={goalsClasses.root}>
      <Reveal preset="text">
        <GoalsHeader {...goalsClasses.header} />
      </Reveal>
      <GoalsList />
    </section>
  )
}
