import React from "react"

export const ProcessHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Рабочий процесс</h2>
      <p className={subtitle}>От идеи до готового результата</p>
    </header>
  )
}
