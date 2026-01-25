import { Link } from "react-router"
import { PortfolioList, PersonalInfoList } from "@/shared/ui"
import { personalInfo, portfolioInfo } from "@/config/pages/about.config."
import { aboutClasses, portfolioClasses } from "@/config/ui/classNames"

export const AboutPage = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="block">
          <h2 className="about__title">Обо мне:</h2>
          <PersonalInfoList personalInfo={personalInfo} {...aboutClasses} />
        </div>

        <div className="block">
          <h2 className="about__title">О моём техническом опыте:</h2>
          <PortfolioList portfolioInfo={portfolioInfo} {...portfolioClasses} />
        </div>
      </div>

      <Link className="about__link" to="/skills">
        Подробнее о моих навыках &#8594;
      </Link>
    </section>
  )
}
