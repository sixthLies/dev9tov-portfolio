import { EXPERIENCE_ITEMS } from "../model/constants"
import { ExperienceCard } from "./ExperienceCard"

export const ExperienceGrid = ({ root, card }) => {
  return (
    <div className={root}>
      {EXPERIENCE_ITEMS.map((item, index) => (
        <ExperienceCard key={item.id} item={item} index={index} {...card} />
      ))}
    </div>
  )
}
