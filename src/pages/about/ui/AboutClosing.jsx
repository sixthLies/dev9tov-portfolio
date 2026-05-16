import { Link } from "react-router"
import { Reveal } from "@/shared/ui"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"
import { LINK_CLASS, SKILLS_LINK_TEXT, SKILLS_PATH } from "../model/constants"

const SIGNALS = ["Available for focused product work", "React / Vite", "Automation ready"]

export const AboutClosing = () => {
  const toVersionedPath = useVersionedPath()

  return (
    <Reveal as="section" preset="section" className="about-closing">
      <div className="about-closing__status">
        <span className="about-closing__pulse" aria-hidden="true" />
        <span>Engineering status: ready for the next build</span>
      </div>

      <div className="about-closing__body">
        <div>
          <h2 className="about-closing__title">Собираю интерфейсы, которые держатся под нагрузкой.</h2>
          <p className="about-closing__text">
            Следующий слой портфолио раскрывает стек, инструменты и рабочую систему,
            на которой строятся эти решения.
          </p>
        </div>

        <Reveal
          as={Link}
          preset="inline"
          className={LINK_CLASS}
          to={toVersionedPath(SKILLS_PATH)}
        >
          {SKILLS_LINK_TEXT}
        </Reveal>
      </div>

      <div className="about-closing__signals" aria-label="Current engineering signals">
        {SIGNALS.map((signal) => (
          <span className="about-closing__signal" key={signal}>
            {signal}
          </span>
        ))}
      </div>
    </Reveal>
  )
}
