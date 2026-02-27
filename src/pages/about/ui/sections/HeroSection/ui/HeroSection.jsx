import { heroClasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { HeroBadge } from "./HeroBadge"
import { HeroBtn } from "./HeroBtn"
import { HeroInfo } from "./HeroInfo"

export const HeroSection = ({ id, sectionRef, onMore }) => {
  return (
    <section id={id} ref={sectionRef} className={heroClasses.root}>
      <div className={heroClasses.container}>
        <Reveal preset="inline">
          <HeroBadge />
        </Reveal>
        <Reveal preset="section" index={1}>
          <HeroInfo />
        </Reveal>
        <Reveal preset="inline" index={2}>
          <HeroBtn onMore={onMore} />
        </Reveal>
      </div>
    </section>
  )
}
