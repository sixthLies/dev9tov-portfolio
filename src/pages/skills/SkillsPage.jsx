import { Link } from "react-router"
import { skillsInfo } from "@/config/pages/skillInfo"
import { SkillsTable } from "./SkillsTable"
import { skillsClasses } from "../../config/classNames"

export const SkillsPage = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Мой Стек</h2>
      <SkillsTable skillsInfo={skillsInfo} {...skillsClasses} />
      <Link className="skills__link" to="/projects">
        Мои Проекты &#8594;
      </Link>
    </section>
  )
}
