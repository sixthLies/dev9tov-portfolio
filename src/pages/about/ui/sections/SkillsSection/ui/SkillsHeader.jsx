import React from "react"

export const SkillsHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Навыки</h2>
      <p className={subtitle}>Технические компетенции</p>
    </header>
  )
}
