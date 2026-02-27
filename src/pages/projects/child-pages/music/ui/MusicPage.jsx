import { MusicMiniApp } from "./MusicMiniApp"
import { Reveal } from "@/shared/ui"

export const MusicPage = () => {
  return (
    <section className="music-page l-page-section l-scroll-panel">
      <Reveal preset="section">
        <MusicMiniApp />
      </Reveal>
    </section>
  )
}
