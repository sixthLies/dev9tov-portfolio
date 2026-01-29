import { InfoBlock, LinksBlock } from "@/shared/ui"
import { infoBoxSkillsData } from "../model/infoBox"
import { skillsInfo } from "../model/pageConfig"
import { root, skillsClasses } from "../model/classes"
import { SKILLS_PAGE } from "../model/constants"
import { selectPrimaryLinks } from "../lib/selectPrimaryLinks"
import { SkillsTable } from "./skills-table"

export const SkillsPage = () => {
  const links = selectPrimaryLinks()

  return (
    <section className={root.rootClass}>
      <h2 className={root.titleClass}>{SKILLS_PAGE.titleText}</h2>

      <InfoBlock data={infoBoxSkillsData} />

      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />

      <LinksBlock links={links} />
    </section>
  )
}
