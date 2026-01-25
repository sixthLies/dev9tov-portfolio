import { Link } from "react-router"

export const Card = ({ card }) => {
  return (
    <Link to={card.link}>
      <article className="card">
        <div className="card__content">
          {card.img &&
          typeof card.img === "string" &&
          card.img.startsWith("<") ? (
            <div dangerouslySetInnerHTML={{ __html: card.img }} />
          ) : card.img ? (
            <img className="card__img" src={card.img} alt={card.title} />
          ) : null}

          <h3 className="card__title">{card.title}</h3>
          <p className="card__description">{card.description}</p>
        </div>
      </article>
    </Link>
  )
}
