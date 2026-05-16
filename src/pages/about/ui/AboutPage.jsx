import { PAGE_CLASS } from "../model/constants"
import { useAboutNavigation } from "../hooks/useAboutNavigation"
import { AboutClosing } from "./AboutClosing"
import {
  ExperienceSection,
  GoalsSection,
  HeroSection,
  ProcessSection,
  WhatIDoSection,
} from "./sections"

export const AboutPage = () => {
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
      <AboutClosing />
    </section>
  )
}
