import { createBrowserRouter } from "react-router"
import { routes } from "./routes/app.routes"
import { Layout } from "../layout/Layout"
import { ROUTE_PATHS } from "./const/paths"
import { getRouterBasename } from "@/shared/config/routes"

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    id: "layout",
    element: <Layout />,
    children: routes,
  },
], {
  basename: getRouterBasename(import.meta.env.BASE_URL),
})
