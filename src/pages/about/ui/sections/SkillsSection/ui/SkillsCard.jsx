import React from "react"
import { SkillsList } from "./SkillsList"

export const SkillsCard = ({ skill, root, title, list }) => {
  return (
    <article className={root}>
      <div className={title}>{skill.title}</div>
      <SkillsList skill={skill} {...list} />
    </article>
  )
}
