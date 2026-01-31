import { Cards, LinksBlock } from "@/shared/ui"
import { root, title } from "../model/classes"
import { selectProjectsLinks } from "../lib/selectProjectsLink"
import { projectsCardsContent } from "../model/pageConfig"

export const ProjectsOverviewPage = () => {
  const links = selectProjectsLinks()

  return (
    <section className={root}>
      <h2 className={title}>Мои проекты</h2>
      <Cards cards={projectsCardsContent} />
      <LinksBlock links={links} />
    </section>
  )
}
