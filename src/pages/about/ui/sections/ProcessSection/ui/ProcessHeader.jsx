import React from "react"

export const ProcessHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Рабочий процесс</h2>
      <p className={subtitle}>
        От задачи до полностью готового к запуску решения
      </p>
    </header>
  )
}
