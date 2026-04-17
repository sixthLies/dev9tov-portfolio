import { HomePage } from "../../../pages/home"
import { AboutPage } from "../../../pages/about"
import { SkillsPage } from "../../../pages/skills"
import { ContactsPage } from "../../../pages/contacts"
import { NotFoundPage } from "../../../pages/not-found"
import { createChildRoute, createIndexRoute } from "../lib/routeFactories"
import { PAGE_ROUTE_RECORDS } from "../const/paths"
import { ProjectsPage } from "@/pages/projects"

const routeElements = {
  home: <HomePage />,
  about: <AboutPage />,
  skills: <SkillsPage />,
  contacts: <ContactsPage />,
  projects: <ProjectsPage />,
  notFound: <NotFoundPage />,
}

export const routes = PAGE_ROUTE_RECORDS.map(({ id, index, segment }) => {
  const element = routeElements[id]

  if (index) {
    return { id, ...createIndexRoute(element) }
  }

  return {
    id,
    ...createChildRoute(segment, element),
  }
})
