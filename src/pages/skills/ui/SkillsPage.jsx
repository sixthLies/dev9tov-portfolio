import { InfoBlock, LinksBlock } from "@/shared/ui"
import { infoBoxSkillsData } from "../model/infoBox"
import { skillsInfo } from "../model/pageConfig"
import { root, skillsClasses } from "../model/classes"
import { SKILLS_PAGE } from "../model/constants"
import { SkillsTable } from "./skills-table"
import { selectSkillsLinks } from "../lib/selectSkillsLinks"

export const SkillsPage = () => {
  const links = selectSkillsLinks()

  return (
    <section className={root.rootClass}>
      <h2 className={root.titleClass}>{SKILLS_PAGE.titleText}</h2>

      <InfoBlock data={infoBoxSkillsData} />

      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />

      <LinksBlock links={links} />
    </section>
  )
}
