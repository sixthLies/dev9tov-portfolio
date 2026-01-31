import { HomePage } from "../../pages/home"
import { AboutPage } from "../../pages/about"
import {
  AssigmentsPage,
  ImagesPage,
  MusicPage,
  ProjectsOverviewPage,
  ProjectsPage,
  VideoPage,
} from "../../pages/projects"
import { SkillsPage } from "../../pages/skills"
import { ContactsPage } from "../../pages/contacts"
import { NotFoundPage } from "../../pages/not-found"

const ROUTE_PATHS = {
  root: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  contacts: "/contacts",
  images: "images",
  music: "music",
  video: "video",
  assigments: "assigments",
  notFound: "*",
}

const createIndexRoute = (element) => ({ index: true, element })
const createChildRoute = (path, element) => ({ path, element })

export const routes = [
  createIndexRoute(<HomePage />),

  createChildRoute(ROUTE_PATHS.about, <AboutPage />),
  createChildRoute(ROUTE_PATHS.skills, <SkillsPage />),
  createChildRoute(ROUTE_PATHS.contacts, <ContactsPage />),

  {
    path: ROUTE_PATHS.projects,
    element: <ProjectsPage />,
    children: [
      createIndexRoute(<ProjectsOverviewPage />),
      createChildRoute(ROUTE_PATHS.images, <ImagesPage />),
      createChildRoute(ROUTE_PATHS.music, <MusicPage />),
      createChildRoute(ROUTE_PATHS.video, <VideoPage />),
      createChildRoute(ROUTE_PATHS.assigments, <AssigmentsPage />),
    ],
  },

  createChildRoute(ROUTE_PATHS.notFound, <NotFoundPage />),
]
