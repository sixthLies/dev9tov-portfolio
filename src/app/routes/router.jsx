import { createBrowserRouter } from "react-router"
import { routes } from "./routes"
import { Layout } from "../Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
])
