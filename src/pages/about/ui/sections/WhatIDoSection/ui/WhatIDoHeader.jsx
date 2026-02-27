import React from "react"

export const WhatIDoHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Что я делаю</h2>
      <p className={subtitle}>
        Выстраиваю процесс работы так, чтобы разработка, AI и автоматизация
        дополняли друг друга и помогали создавать результат быстрее и
        качественнее.
      </p>
    </header>
  )
}
