import { createBrowserRouter } from "react-router"
import { routes } from "./routes/app.routes"
import { Layout } from "../layout/Layout"
import { ROUTE_PATHS } from "./const/paths"
import { getRouterBasename } from "@/shared/config/routes"

const versionedRoutes = routes.map((route) => ({
  ...route,
  id: `version-${route.id}`,
}))

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    id: "layout",
    element: <Layout />,
    children: routes,
  },
  {
    path: ROUTE_PATHS.versionRoot,
    id: "version-layout",
    element: <Layout />,
    children: versionedRoutes,
  },
], {
  basename: getRouterBasename(import.meta.env.BASE_URL),
})
