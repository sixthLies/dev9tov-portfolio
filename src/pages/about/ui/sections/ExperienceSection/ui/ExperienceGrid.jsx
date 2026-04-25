import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { ExperienceCard } from "./ExperienceCard"

export const ExperienceGrid = ({ root, card }) => {
  const { about } = useSiteVersionContent()

  return (
    <div className={root}>
      {about.experience.items.map((item, index) => (
        <ExperienceCard key={item.id} item={item} index={index} {...card} />
      ))}
    </div>
  )
}
