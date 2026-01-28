import { HomePage } from "../../pages/home"
import { AboutPage } from "../../pages/about"
import { ProjectsPage } from "../../pages/projects"
import { SkillsPage } from "../../pages/skills"
import { ContactsPage } from "../../pages/contacts"
import { NotFoundPage } from "../../pages/not-found"

export const routes = [
  { index: true, element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "*", element: <NotFoundPage /> },
]
