import { heroClasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { HeroBadge } from "./HeroBadge"
import { HeroInfo } from "./HeroInfo"
import { HeroVisual } from "./HeroVisual"

export const HeroSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={heroClasses.root}>
      <div className={heroClasses.container}>
        <div className={heroClasses.copy}>
          <Reveal preset="inline">
            <HeroBadge />
          </Reveal>
          <Reveal preset="section" index={1}>
            <HeroInfo />
          </Reveal>
        </div>

        <Reveal
          preset="media"
          index={2}
          className={heroClasses.visualReveal}
          maxDelayCap={180}
        >
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
