import { Cards, LinksBlock } from "@/shared/ui"
import { root } from "../model/classes"
import { selectProjectsLinks } from "../lib/selectProjectsLink"
import { projectsCardsContent } from "../model/pageConfig"

export const ProjectsOverviewPage = () => {
  const links = selectProjectsLinks()

  return (
    <section className={root}>
      <Cards cards={projectsCardsContent} />
      <LinksBlock links={links} />
    </section>
  )
}
