import { Card } from "./Card"

export const Cards = ({ cards }) => {
  return (
    <div id="cards-container" className="cards__container">
      {cards.map((card, index) => (
        <Card card={card} index={index} key={card.title} />
      ))}
    </div>
  )
}
