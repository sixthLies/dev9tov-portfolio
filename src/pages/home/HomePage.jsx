import { Cards } from "@/shared/ui"
import { homePageCards } from "@/config/pages/home.config"

export const HomePage = () => {
  return (
    <section className="home">
      <Cards cards={homePageCards} />
    </section>
  )
}
