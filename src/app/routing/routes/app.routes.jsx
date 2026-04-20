import { Suspense, lazy } from "react"
import { HomePage } from "../../../pages/home"
import { createChildRoute, createIndexRoute } from "../lib/routeFactories"
import { PAGE_ROUTE_RECORDS } from "../const/paths"

const AboutPage = lazy(() =>
  import("@/pages/about").then((module) => ({ default: module.AboutPage })),
)
const SkillsPage = lazy(() =>
  import("@/pages/skills").then((module) => ({ default: module.SkillsPage })),
)
const ContactsPage = lazy(() =>
  import("@/pages/contacts").then((module) => ({
    default: module.ContactsPage,
  })),
)
const ProjectsPage = lazy(() =>
  import("@/pages/projects").then((module) => ({
    default: module.ProjectsPage,
  })),
)
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  })),
)

const createLazyElement = (Component) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
)

const routeElements = {
  home: <HomePage />,
  about: createLazyElement(AboutPage),
  skills: createLazyElement(SkillsPage),
  contacts: createLazyElement(ContactsPage),
  projects: createLazyElement(ProjectsPage),
  notFound: createLazyElement(NotFoundPage),
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
