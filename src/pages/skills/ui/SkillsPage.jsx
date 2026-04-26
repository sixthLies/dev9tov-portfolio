import { InfoBlock, LinksBlock, Reveal } from "@/shared/ui"
import { useSiteVersion } from "@/shared/lib/useSiteVersion"
import { infoBoxSkillsData } from "../model/infoBox"
import { root, skillsClasses } from "../model/classes"
import { SKILLS_PAGE } from "../model/constants"
import { SkillsTable } from "./skills-table"
import { selectSkillsLinks } from "../lib/selectSkillsLinks"

export const SkillsPage = () => {
  const { content, versionId } = useSiteVersion()
  const links = selectSkillsLinks(versionId)
  const { skills } = content

  return (
    <section className={root.rootClass}>
      <Reveal as="h2" className={root.titleClass} preset="text">
        {SKILLS_PAGE.titleText}
      </Reveal>

      <InfoBlock data={infoBoxSkillsData} />

      <SkillsTable skillsInfo={skills} {...skillsClasses} />

      <LinksBlock links={links} />
    </section>
  )
}
