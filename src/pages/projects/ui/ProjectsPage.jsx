import { InfoBlock, LinksBlock } from "@/shared/ui"
import { selectProjectsLinks } from "../lib/selectProjectsLink"
import { root } from "../model/classes"
import { featuredProject } from "../model/showcaseProjects"
import { ProjectShowcaseSection } from "./showcase/ProjectShowcaseSection"

export const ProjectsPage = () => {
  const links = selectProjectsLinks()

  return (
    <section className={root}>
      <ProjectShowcaseSection project={featuredProject} />

      <InfoBlock
        data={{
          info: "Новые примеры работ будут добавлятся чуть позже.",
        }}
        revealPreset="text"
        revealIndex={1}
      />

      <LinksBlock links={links} />
    </section>
  )
}
