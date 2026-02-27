import { Outlet } from "react-router"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { Stars } from "@/widgets/stars"
import { GlobalMusicMiniPlayer } from "./GlobalMusicMiniPlayer"

export const Layout = () => {
  return (
    <div className="l-page container" data-theme="dark">
      <Stars />
      <Header />
      <main className="l-page__content page__content">
        <Outlet />
      </main>
      <Footer />
      <GlobalMusicMiniPlayer />
    </div>
  )
}
