import { Link } from "react-router"
import { SkillsTable } from "./SkillsTable"
import { skillsClasses } from "@/config/ui/classNames"
import { skillsInfo } from "@/config/pages/skills.config."
import { InfoBox } from "@/shared/ui/InfoBox"
import { infoBoxSkillsData } from "@/config/ui/infoBox.config"

export const SkillsPage = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Мой Стек</h2>

      <InfoBox data={infoBoxSkillsData} />

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
