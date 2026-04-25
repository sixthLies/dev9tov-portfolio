import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { heroClasses } from "../model/classes"

export const HeroBadge = () => {
  const { root, dot } = heroClasses.badge
  const { about } = useSiteVersionContent()

  return (
    <div className={root}>
      <span className={dot} aria-hidden="true" />
      {about.hero.badge}
    </div>
  )
}
