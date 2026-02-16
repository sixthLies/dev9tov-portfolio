import React from "react"

export const WhatIDoCard = ({ root, num, title, text, c }) => {
  return (
    <article className={root}>
      <div className={num} aria-hidden="true">
        {c.n}
      </div>
      <h3 className={title}>{c.title}</h3>
      <p className={text}>{c.text}</p>
    </article>
  )
}
