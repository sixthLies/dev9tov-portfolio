import { Link } from "react-router"
import { useState } from "react"
import { ModalWindow } from "../modals/ModalWindow"
import { ModalWindowCard } from "../modals/modalWindowCard"

export const Card = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <Link to={card.link} onClick={handleOpen}>
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

      <ModalWindow isOpen={isOpen} onClose={handleClose}>
        <ModalWindowCard card={card} />
      </ModalWindow>
    </>
  )
}
