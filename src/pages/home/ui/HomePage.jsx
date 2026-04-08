import { Cards, Reveal } from "@/shared/ui"
import { homePageCards } from "../model/pageConfig"
import { homeClasses } from "../model/classes"

export const HomePage = () => {
  const { home } = homeClasses

  return (
    <section className={home}>
      <Reveal preset="section">
        <Cards cards={homePageCards} />
      </Reveal>
    </section>
  )
}
