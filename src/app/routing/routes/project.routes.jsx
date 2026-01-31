import { PROJECTS_CHILD_PATHS, ROUTE_PATHS } from "../const/paths"
import { createChildRoute, createIndexRoute } from "../lib/routeFactories"
import {
  AssigmentsPage,
  ImagesPage,
  MusicPage,
  ProjectsOverviewPage,
  ProjectsPage,
  VideoPage,
} from "../../../pages/projects"

export const projectsRoute = {
  path: ROUTE_PATHS.projects,
  element: <ProjectsPage />,
  children: [
    createIndexRoute(<ProjectsOverviewPage />),
    createChildRoute(PROJECTS_CHILD_PATHS.images, <ImagesPage />),
    createChildRoute(PROJECTS_CHILD_PATHS.music, <MusicPage />),
    createChildRoute(PROJECTS_CHILD_PATHS.video, <VideoPage />),
    createChildRoute(PROJECTS_CHILD_PATHS.assigments, <AssigmentsPage />),
  ],
}
