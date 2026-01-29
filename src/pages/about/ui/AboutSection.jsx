import { BLOCK_CLASS, TITLE_CLASS } from "../model/constants"

export const AboutSection = ({ title, children }) => {
  return (
    <div className={BLOCK_CLASS}>
      <h2 className={TITLE_CLASS}>{title}</h2>
      {children}
    </div>
  )
}
