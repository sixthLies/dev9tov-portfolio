import { Link } from "react-router"
import { useState } from "react"
import { ModalWindow } from "../modals/ModalWindow"
import { ModalWindowCard } from "../modals/modalWindowCard"
import { Reveal } from "../reveal"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"

export const Card = ({ card, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isDisabled = Boolean(card.disabled)
  const isNavigational = Boolean(card.link) && !isDisabled
  const toVersionedPath = useVersionedPath()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleOpen()
    }
  }

  const cardContent = (
    <article className={`card${isDisabled ? " card--disabled" : ""}`}>
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
        {card.disabledText ? (
          <p className="card__disabled-text">{card.disabledText}</p>
        ) : null}
      </div>
    </article>
  )

  return (
    <>
      {isDisabled ? (
        <Reveal
          as="div"
          preset="card"
          index={index}
          aria-disabled="true"
        >
          {cardContent}
        </Reveal>
      ) : isNavigational ? (
        <Reveal
          as={Link}
          preset="card"
          index={index}
          to={toVersionedPath(card.link)}
        >
          {cardContent}
        </Reveal>
      ) : (
        <>
          <Reveal
            as="div"
            preset="card"
            index={index}
            role="button"
            tabIndex={0}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
          >
            {cardContent}
          </Reveal>

          <ModalWindow isOpen={isOpen} onClose={handleClose}>
            <ModalWindowCard card={card} />
          </ModalWindow>
        </>
      )}
    </>
  )
}
