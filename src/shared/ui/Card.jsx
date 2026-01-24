import { Link } from "react-router"

export const Card = ({ as = Link, to, title, description, img, className }) => {
  const Component = as
  const isInlineSvg = typeof img === "string" && img.trim().startsWith("<")

  return (
    <Component to={to} className={`card__${className}`}>
      <article className="card__inner">
        <div className="card__inner">
          {img &&
            (isInlineSvg ? (
              <div
                className="card__img"
                dangerouslySetInnerHTML={{ __html: img }}
              />
            ) : (
              <img className="card__img" src={img} alt={title} />
            ))}

          <h3 className="card__title">{title}</h3>
          {description && <p className="card__description">{description}</p>}
        </div>
      </article>
    </Component>
  )
}
