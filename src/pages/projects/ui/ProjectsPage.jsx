import { LinksBlock, Reveal } from "@/shared/ui"
import { Outlet } from "react-router"
import { root, title } from "../model/classes"
import { selectProjectsLinks } from "../lib/selectProjectsLink"

export const ProjectsPage = () => {
  const links = selectProjectsLinks()
  return (
    <section className={root}>
      <Reveal as="h2" className={title} preset="text">
        Мое портфолио
      </Reveal>
      <LinksBlock links={links} />
    </section>
  )
}
