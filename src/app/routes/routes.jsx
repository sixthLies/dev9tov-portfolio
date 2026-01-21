import {
  AboutPage,
  ContactsPage,
  HomePage,
  NotFoundPage,
  ProjecsPage,
  SkillsPage,
} from "../../pages"

export const routes = [
  { index: true, element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjecsPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "*", element: <NotFoundPage /> },
]
