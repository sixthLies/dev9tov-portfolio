import { InfoBlock, LinksBlock } from "@/shared/ui"
import { menuItems } from "@/shared/config/navigation"
import { SkillsTable } from "./SkillsTable"
import { infoBoxSkillsData } from "../model/infoBox"
import { skillsInfo } from "../model/pageConfig"
import { skillsClasses } from "../model/classes"

export const SkillsPage = () => {
  const primaryLinks = ["/about", "/projects"]

  return (
    <section className="skills">
      <h2 className="skills__title">Мой Стек</h2>

      <InfoBlock data={infoBoxSkillsData} />

      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />

      <LinksBlock
        links={menuItems.filter((link) => primaryLinks.includes(link.href))}
      />
    </section>
  )
}
