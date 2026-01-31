import { Cards } from "@/shared/ui"
import { homePageCards } from "../model/pageConfig"
import { homeClass } from "../model/classes"

export const HomePage = () => {
  const { home } = { ...homeClass }

  return (
    <section className={home}>
      <Cards cards={homePageCards} />
    </section>
  )
}
