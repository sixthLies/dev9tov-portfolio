import { CardMedia } from "./components/CardMedia"
import { SocialLink } from "./components/SocialLink"
import { PROFILE_INTEREST_SUBJECT } from "./constants"
import { ContactButton } from "./components/ContactButton"

export const ModalWindowCard = ({ card }) => {
  const subject = PROFILE_INTEREST_SUBJECT

  const { img, title, avatar, name, socialLink } = card

  return (
    <article className="social-card">
      <div className="social-card__body">
        <CardMedia img={img} title={title} />

        <div className="social-card__content">
          <img className="social-card__avatar" src={avatar} alt="avatar" />

          <div className="social-card__text">
            <p className="social-card__description">Ник: {name}</p>

            <SocialLink href={socialLink} />

            <ContactButton socialLink={socialLink} subject={subject} />
          </div>
        </div>
      </div>
    </article>
  )
}
