import { Outlet } from "react-router"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { Stars } from "@/widgets/stars"

export const Layout = () => {
  return (
    <div className="container">
      <Stars />
      <Header />
      <main className="page__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
