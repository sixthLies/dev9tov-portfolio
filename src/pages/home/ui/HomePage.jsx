import { Cards } from "@/shared/ui"
import { homePageCards } from "../model/pageConfig"
import { homeClasses } from "../model/classes"

export const HomePage = () => {
  const { home } = { ...homeClasses }

  return (
    <section className={home}>
      <Cards cards={homePageCards} />
    </section>
  )
}
