export const ModalWindowCard = ({ card }) => {
  return (
    <article className="social-card">
      <div className="social-card__body">
        {card.img &&
        typeof card.img === "string" &&
        card.img.startsWith("<") ? (
          <div dangerouslySetInnerHTML={{ __html: card.img }} />
        ) : card.img ? (
          <img className="social-card__qr" src={card.img} alt={card.title} />
        ) : null}
        <div className="social-card__content">
          <img className="social-card__avatar" src={card.avatar} alt="avatar" />
          <div className="social-card__text">
            <p className="social-card__description">Ник: {card.name}</p>
            <a
              className="social-card__link"
              href={card.socialLink}
              target="_blank"
            >
              {card.socialLink}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
