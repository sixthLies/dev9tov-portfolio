import { RouterProvider } from "react-router"
import { router } from "../routing"
import { MusicPlayerProvider } from "@/pages/projects/child-pages/music/model/MusicPlayerContext"
import { ThemeProvider } from "@/shared/lib/theme"

export const App = () => {
  return (
    <ThemeProvider>
      <MusicPlayerProvider>
        <RouterProvider router={router} />
      </MusicPlayerProvider>
    </ThemeProvider>
  )
}
