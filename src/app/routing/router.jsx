import { createBrowserRouter } from "react-router"
import { routes } from "./routes/app.routes"
import { Layout } from "../layout/Layout"
import { ROUTE_PATHS } from "./const/paths"

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    element: <Layout />,
    children: routes,
  },
])
