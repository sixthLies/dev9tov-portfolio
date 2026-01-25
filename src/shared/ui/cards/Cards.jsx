import { Link } from "react-router"
import { Card } from "./Card"

export const Cards = ({ cards }) => {
  return (
    <div id="cards-container" className="cards__container">
      {cards.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </div>
  )
}
