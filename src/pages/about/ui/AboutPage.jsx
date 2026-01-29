import { Link } from "react-router"
import { PortfolioList, PersonalInfoList } from "@/shared/ui"
import { personalInfo, portfolioInfo } from "../model/pageConfig"
import { aboutClasses, portfolioClasses } from "../model/classes"
import {
  CONTENT_CLASS,
  LINK_CLASS,
  PAGE_CLASS,
  SKILLS_LINK_TEXT,
  SKILLS_PATH,
  TITLES,
} from "../model/constants"
import { AboutSection } from "./AboutSection"

export const AboutPage = () => {
  return (
    <section className={PAGE_CLASS}>
      <div className={CONTENT_CLASS}>
        <AboutSection title={TITLES.aboutMe}>
          <PersonalInfoList personalInfo={personalInfo} {...aboutClasses} />
        </AboutSection>

        <AboutSection title={TITLES.techExperience}>
          <PortfolioList portfolioInfo={portfolioInfo} {...portfolioClasses} />
        </AboutSection>
      </div>

      <Link className={LINK_CLASS} to={SKILLS_PATH}>
        {SKILLS_LINK_TEXT}
      </Link>
    </section>
  )
}
