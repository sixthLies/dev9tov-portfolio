import { PROCESS_HEADER } from "../model/constants"

export const ProcessHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>{PROCESS_HEADER.title}</h2>
      <p className={subtitle}>{PROCESS_HEADER.subtitle}</p>
    </header>
  )
}
