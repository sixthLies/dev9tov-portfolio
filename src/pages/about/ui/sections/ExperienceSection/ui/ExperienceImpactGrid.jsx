import { Reveal } from "@/shared/ui"
import { EXPERIENCE_IMPACTS } from "../model/constants"

export const ExperienceImpactGrid = ({ root, card, title, text }) => {
  return (
    <div className={root}>
      {EXPERIENCE_IMPACTS.map((impact, index) => (
        <Reveal key={impact.id} preset="card" index={index}>
          <article className={card}>
            <h3 className={title}>{impact.title}</h3>
            <p className={text}>{impact.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
