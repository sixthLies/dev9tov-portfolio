import { Cards } from "@/shared/ui"
import { homePageCards } from "../model/pageConfig"

export const HomePage = () => {
  return (
    <section className="home">
      <Cards cards={homePageCards} />
    </section>
  )
}
