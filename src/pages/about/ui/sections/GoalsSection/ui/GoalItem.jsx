import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

export const GoalItem = ({
  goal,
  index,
  getItemRef,
  item,
  card,
  top,
  icon,
  number,
  label,
  text,
}) => {
  const itemClassName = `${item} ${item}--${index + 1}`
  const goalLabel =
    index === 0 ? "Strategic focus" : `Mission step 0${index + 1}`

  return (
    <Reveal
      as="li"
      preset="card"
      index={index}
      className={itemClassName}
      {...ABOUT_CARD_REVEAL_PROPS}
    >
      <article className={card} ref={getItemRef(index)}>
        <div className={top}>
          <span className={number}>0{index + 1}</span>
        </div>
        <p className={text}>{goal}</p>
      </article>
    </Reveal>
  )
}
