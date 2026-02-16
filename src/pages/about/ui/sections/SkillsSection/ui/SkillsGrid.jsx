import React from "react"
import { SkillsCard } from "./SkillsCard"
import { SKILLS } from "../model/constants"

export const SkillsGrid = ({ root, card }) => {
  return (
    <div className={root}>
      {SKILLS.map((skill) => (
        <SkillsCard key={skill.title} skill={skill} {...card} />
      ))}
    </div>
  )
}
