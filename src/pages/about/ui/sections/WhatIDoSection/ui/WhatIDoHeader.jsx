import React from "react"

export const WhatIDoHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Что я делаю</h2>
      <p className={subtitle}>
        Работаю на стыке программирования, AI и визуального контента
      </p>
    </header>
  )
}
