import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { heroClasses } from "../model/classes"

export const HeroInfo = () => {
  const { title, desc } = heroClasses
  const { about } = useSiteVersionContent()

  return (
    <>
      <h1 className={title}>{about.hero.title}</h1>
      <p className={desc}>{about.hero.description}</p>
    </>
  )
}
