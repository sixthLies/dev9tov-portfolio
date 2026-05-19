import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

export const ProcessItem = ({
  step,
  index,
  getItemRef,
  item,
  shell,
  content,
  copy,
  icon,
  title,
  text,
}) => {
  const itemClassName = `${item} ${item}--${index + 1}`

  return (
    <Reveal
      as="li"
      preset="card"
      index={index}
      className={itemClassName}
      {...ABOUT_CARD_REVEAL_PROPS}
    >
      <article className={shell} ref={getItemRef(index)}>
        <div className={content}>
          <div className={copy}>
            <h3 className={title}>{step.title}</h3>
            <p className={text}>{step.text}</p>
          </div>
          <img className={icon} src={step.icon} alt="" aria-hidden="true" />
        </div>
      </article>
    </Reveal>
  )
}
