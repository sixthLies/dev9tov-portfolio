import React from "react"
import { Reveal } from "@/shared/ui"

export const WhatIDoCard = ({ root, num, title, text, c, delay }) => {
  return (
    <Reveal delay={delay}>
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
