import { Link } from "react-router"
import { Reveal } from "@/shared/ui"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"
import { LINK_CLASS, SKILLS_LINK_TEXT, SKILLS_PATH } from "../model/constants"

const SIGNALS = [
  "Available for focused product work",
  "React / Vite",
  "Automation ready",
]

export const AboutClosing = () => {
  const toVersionedPath = useVersionedPath()

  return (
    <Reveal as="section" preset="section" className="about-closing">
      <div className="about-closing__body">
        <p className="about-closing__text">
          Следующий слой портфолио раскрывает стек, инструменты и рабочую
          систему.
        </p>

        <Reveal
          as={Link}
          preset="inline"
          className={LINK_CLASS}
          to={toVersionedPath(SKILLS_PATH)}
        >
          {SKILLS_LINK_TEXT}
        </Reveal>
      </div>
    </Reveal>
  )
}
