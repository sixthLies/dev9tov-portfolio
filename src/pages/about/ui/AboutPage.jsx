import { Link } from "react-router"
import { Reveal } from "@/shared/ui"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"
import {
  LINK_CLASS,
  PAGE_CLASS,
  SKILLS_LINK_TEXT,
  SKILLS_PATH,
} from "../model/constants"
import { useAboutNavigation } from "../hooks/useAboutNavigation"
import {
  ExperienceSection,
  GoalsSection,
  HeroSection,
  ProcessSection,
  WhatIDoSection,
} from "./sections"

export const AboutPage = () => {
  const toVersionedPath = useVersionedPath()
  const {
    sectionIds,
    sectionRefSetters,
    scrollToSection,
  } = useAboutNavigation()

  return (
    <section className={PAGE_CLASS}>
      <HeroSection
        id={sectionIds.hero}
        sectionRef={sectionRefSetters[sectionIds.hero]}
        onMore={() => scrollToSection(sectionIds.what)}
      />
      <WhatIDoSection
        id={sectionIds.what}
        sectionRef={sectionRefSetters[sectionIds.what]}
      />
      <ExperienceSection
        id={sectionIds.experience}
        sectionRef={sectionRefSetters[sectionIds.experience]}
      />
      <ProcessSection
        id={sectionIds.process}
        sectionRef={sectionRefSetters[sectionIds.process]}
      />
      <GoalsSection
        id={sectionIds.goals}
        sectionRef={sectionRefSetters[sectionIds.goals]}
      />

      <Reveal
        as={Link}
        preset="inline"
        className={LINK_CLASS}
        to={toVersionedPath(SKILLS_PATH)}
      >
        {SKILLS_LINK_TEXT}
      </Reveal>
    </section>
  )
}
