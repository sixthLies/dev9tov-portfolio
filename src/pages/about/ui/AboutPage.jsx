import { Link } from "react-router"
import { Reveal } from "@/shared/ui"
import {
  LINK_CLASS,
  PAGE_CLASS,
  SKILLS_LINK_TEXT,
  SKILLS_PATH,
} from "../model/constants"
import { useAboutNavigation } from "../hooks/useAboutNavigation"
import { DotNav } from "./DotNav"
import {
  GoalsSection,
  HeroSection,
  ProcessSection,
  WhatIDoSection,
} from "./sections"

export const AboutPage = () => {
  const {
    sectionItems,
    sectionIds,
    activeSectionId,
    sectionRefSetters,
    scrollToSection,
  } = useAboutNavigation()

  return (
    <section className={PAGE_CLASS}>
      <DotNav
        items={sectionItems}
        activeId={activeSectionId}
        onSelect={scrollToSection}
      />

      <HeroSection
        id={sectionIds.hero}
        sectionRef={sectionRefSetters[sectionIds.hero]}
        onMore={() => scrollToSection(sectionIds.what)}
      />
      <WhatIDoSection
        id={sectionIds.what}
        sectionRef={sectionRefSetters[sectionIds.what]}
      />
      <ProcessSection
        id={sectionIds.process}
        sectionRef={sectionRefSetters[sectionIds.process]}
      />
      <GoalsSection
        id={sectionIds.goals}
        sectionRef={sectionRefSetters[sectionIds.goals]}
      />

      <Reveal as={Link} preset="inline" className={LINK_CLASS} to={SKILLS_PATH}>
        {SKILLS_LINK_TEXT}
      </Reveal>
    </section>
  )
}
