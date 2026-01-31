import { HomePage } from "../../../pages/home"
import { AboutPage } from "../../../pages/about"
import { SkillsPage } from "../../../pages/skills"
import { ContactsPage } from "../../../pages/contacts"
import { NotFoundPage } from "../../../pages/not-found"
import { createChildRoute, createIndexRoute } from "../lib/routeFactories"
import { ROUTE_PATHS } from "../const/paths"
import { projectsRoute } from "./project.routes"

export const routes = [
  createIndexRoute(<HomePage />),

  createChildRoute(ROUTE_PATHS.about, <AboutPage />),
  createChildRoute(ROUTE_PATHS.skills, <SkillsPage />),
  createChildRoute(ROUTE_PATHS.contacts, <ContactsPage />),

  projectsRoute,

  createChildRoute(ROUTE_PATHS.notFound, <NotFoundPage />),
]
