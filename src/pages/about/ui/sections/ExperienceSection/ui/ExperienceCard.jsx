import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

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
  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <article className={root}>
        <span className={badge}>{item.focus}</span>
        <h3 className={company}>{item.company}</h3>
        <p className={summary}>{item.summary}</p>

        <ul className={list}>
          {item.points.map((point) => (
            <li key={point} className={listItem}>
              {point}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}
