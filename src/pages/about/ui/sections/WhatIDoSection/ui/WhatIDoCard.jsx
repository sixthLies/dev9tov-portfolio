import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

export const WhatIDoCard = ({ root, num, title, text, c, index }) => {
  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <article className={root}>
        <div className={num} aria-hidden="true">
          {c.n}
        </div>
        <h3 className={title}>{c.title}</h3>
        <p className={text}>{c.text}</p>
      </article>
    </Reveal>
  )
}
