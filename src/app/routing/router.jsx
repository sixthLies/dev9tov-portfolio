import { createBrowserRouter } from "react-router"
import { routes } from "./routes/app.routes"
import { Layout } from "../layout/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
])
