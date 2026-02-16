import { heroClasses } from "../model/classes"
import { HeroBadge } from "./HeroBadge"
import { HeroBtn } from "./HeroBtn"
import { HeroInfo } from "./HeroInfo"

export const HeroSection = ({ id, sectionRef, onMore }) => {
  return (
    <section id={id} ref={sectionRef} className={heroClasses.root}>
      <div className={heroClasses.container}>
        <HeroBadge />
        <HeroInfo />
        <HeroBtn onMore={onMore} />
      </div>
    </section>
  )
}
