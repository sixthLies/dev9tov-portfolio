import { heroClasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { HeroBadge } from "./HeroBadge"
import { HeroBtn } from "./HeroBtn"
import { HeroInfo } from "./HeroInfo"

export const HeroSection = ({ id, sectionRef, onMore }) => {
  return (
    <section id={id} ref={sectionRef} className={heroClasses.root}>
      <div className={heroClasses.container}>
        <Reveal>
          <HeroBadge />
        </Reveal>
        <Reveal delay={1}>
          <HeroInfo />
        </Reveal>
        <Reveal delay={2}>
          <HeroBtn onMore={onMore} />
        </Reveal>
      </div>
    </section>
  )
}
