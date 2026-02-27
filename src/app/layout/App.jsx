import { RouterProvider } from "react-router"
import { router } from "../routing"
import { MusicPlayerProvider } from "@/pages/projects/child-pages/music/model/MusicPlayerContext"

export const App = () => {
  return (
    <MusicPlayerProvider>
      <RouterProvider router={router} />
    </MusicPlayerProvider>
  )
}
