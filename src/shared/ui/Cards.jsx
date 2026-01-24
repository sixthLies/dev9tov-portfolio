import { Link } from "react-router"

export const Cards = ({ cards }) => {
  return (
    <div id="cards-container" className="cards__container">
      {cards.map((card) => (
        <Link key={card.link} to={card.link}>
          <article className="holographic__card">
            <div className="card__content">
              {/* если img — это SVG‑строка, можно отрендерить через dangerouslySetInnerHTML */}
              {/* <div dangerouslySetInnerHTML={{ __html: card.img }} /> */}
              {/* если img — это путь/импорт, используй <img> */}
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
      ))}
    </div>
  )
}
