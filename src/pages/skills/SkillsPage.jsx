import { Link } from "react-router"
import { SkillsTable } from "./SkillsTable"
import { skillsClasses } from "@/config/ui/classNames"
import { skillsInfo } from "@/config/pages/skills.config."
import { InfoBox } from "@/shared/ui/AlertBox"
import { infoBoxSkillsData } from "@/config/ui/infoBox.config"

export const SkillsPage = () => {
  return (
    <section className="skills">
      <InfoBox data={infoBoxSkillsData} />

      <h2 className="skills__title">Мой Стек</h2>

      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />

      <div className="skills-links__block">
        <Link className="skills__link" to="/about">
          &#8592; Обо мне
        </Link>
        <Link className="skills__link" to="/projects">
          Мои Проекты &#8594;
        </Link>
      </div>
    </section>
  )
}
