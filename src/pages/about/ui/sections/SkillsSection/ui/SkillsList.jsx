import React from "react"
import { SkillsItem } from "./SkillsItem"

export const SkillsList = ({ skill, root, itemLi }) => {
  return (
    <ul className={root}>
      {skill.items.map((item) => (
        <SkillsItem key={item} item={item} itemLi={itemLi} />
      ))}
    </ul>
  )
}
