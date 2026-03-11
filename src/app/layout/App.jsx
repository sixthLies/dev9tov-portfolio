import { RouterProvider } from "react-router"
import { router } from "../routing"
import { ThemeProvider } from "@/shared/lib/theme"

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
