import React from "react"
import { heroClasses } from "../model/classes"

export const HeroBadge = () => {
  const { root, dot } = { ...heroClasses.badge }

  return (
    <div className={root}>
      <span className={dot} aria-hidden="true" />
      Открыт к сотрудничеству
    </div>
  )
}
