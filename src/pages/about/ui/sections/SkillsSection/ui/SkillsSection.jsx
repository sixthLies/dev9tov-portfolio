import { skillsClasses } from "../model/classes"
import { SkillsGrid } from "./SkillsGrid"
import { SkillsHeader } from "./SkillsHeader"

export const SkillsSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={skillsClasses.root}>
      <SkillsHeader {...skillsClasses.header} />
      <SkillsGrid {...skillsClasses.grid} />
    </section>
  )
}
