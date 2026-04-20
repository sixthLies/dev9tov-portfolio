import { Reveal } from "@/shared/ui"
import { experienceClasses } from "../model/classes"
import { EXPERIENCE_INTRO } from "../model/constants"
import { ExperienceGrid } from "./ExperienceGrid"
import { ExperienceHeader } from "./ExperienceHeader"

export const ExperienceSection = ({ id, sectionRef }) => {
  const { root, header, intro, grid } = experienceClasses

  return (
    <section id={id} ref={sectionRef} className={root}>
      <Reveal preset="text">
        <ExperienceHeader {...header} />
      </Reveal>

      <Reveal as="p" preset="text" index={1} className={intro}>
        {EXPERIENCE_INTRO}
      </Reveal>

      <ExperienceGrid {...grid} />
    </section>
  )
}
