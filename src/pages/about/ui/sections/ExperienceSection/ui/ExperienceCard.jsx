import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"
import { getExperienceImpact } from "../model/impact"

export const ExperienceCard = ({
  item,
  index,
  root,
  badge,
  company,
  summary,
  list,
  listItem,
}) => {
  const impact = getExperienceImpact(item.id)

  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <article className={root}>
        <div className="experience__topline">
          <span className={badge}>{item.focus}</span>
          <span className="experience__index">0{index + 1}</span>
        </div>

        <h3 className={company}>{item.company}</h3>
        <p className={summary}>{item.summary}</p>

        <div className="experience__metrics" aria-label="Key impact areas">
          {impact.metrics.map((metric) => (
            <span className="experience__metric" key={metric}>
              {metric}
            </span>
          ))}
        </div>

        <ul className={list}>
          {item.points.slice(0, 4).map((point) => (
            <li key={point} className={listItem}>
              {point.replace(/^-\s*/, "")}
            </li>
          ))}
        </ul>

        <div className="experience__outcomes">
          {impact.outcomes.map((outcome) => (
            <span className="experience__outcome" key={outcome}>
              {outcome}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  )
}
