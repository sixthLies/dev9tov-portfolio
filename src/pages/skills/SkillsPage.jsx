import { SkillsTable } from "./SkillsTable"
import { skillsClasses } from "@/config/ui/classNames"
import { skillsInfo } from "@/config/pages/skills.config."
import { infoBoxSkillsData } from "@/config/ui/infoBox.config"
import { InfoBlock, LinksBlock } from "@/shared/ui"
import { menuItems } from "../../config/app/navigation"

export const SkillsPage = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Мой Стек</h2>

      <InfoBlock data={infoBoxSkillsData} />

      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />

      <LinksBlock
        links={menuItems.filter(
          (link) => link.href === "/about" || link.href === "/projects",
        )}
      />
    </section>
  )
}
