import { Cards, LinksBlock, Reveal } from "@/shared/ui"
import { root, title } from "../model/classes"
import { selectProjectsLinks } from "../lib/selectProjectsLink"
import { projectsCardsContent } from "../model/pageConfig"

export const ProjectsOverviewPage = () => {
  const links = selectProjectsLinks()

  return (
    <section className={root}>
      <Reveal as="h2" className={title} preset="text">
        {/* {"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"} */}
        Мое портфолио
      </Reveal>
      {/* <Cards cards={projectsCardsContent} />
      <LinksBlock links={links} /> */}
    </section>
  )
}
