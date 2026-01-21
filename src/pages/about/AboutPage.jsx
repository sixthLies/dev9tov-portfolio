import { Link } from "react-router"
import { personalInfo, portfolioInfo } from "@/config/pages/personalInfo"
import { PortfolioList, PersonalInfoList } from "@/shared"
import { portfolioClasses, aboutClasses } from "@/config/classNames"

export const AboutPage = () => {
  return (
    <section class="about">
      <div className="about__content">
        <div className="block">
          <h2 class="about__title">Обо мне:</h2>
          <PersonalInfoList personalInfo={personalInfo} {...aboutClasses} />
        </div>

        <div className="block">
          <h2 class="about__title">О моём техническом опыте:</h2>
          <PortfolioList portfolioInfo={portfolioInfo} {...portfolioClasses} />
        </div>

        <Link className="about__link" to="/skills">
          Подробнее о моих навыках &#8594;
        </Link>
      </div>
    </section>
  )
}
