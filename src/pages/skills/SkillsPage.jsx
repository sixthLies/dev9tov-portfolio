import { SkillsTable } from "./SkillsTable"
import { skillsInfo } from "@/config/pages/skills.config."
import { InfoBlock, LinksBlock } from "@/shared/ui"
import { skillsClasses } from "./model/classes"
import { infoBoxSkillsData } from "./model/infoBox"
import { menuItems } from "@/shared/config/navigation"

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
