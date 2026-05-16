import { ProcessList } from "./ProcessList"

export const ProcessWrapper = ({ root, line, list }) => {
  return (
    <div className={root}>
      <span className={line} aria-hidden="true" />
      <ProcessList list={list} />
    </div>
  )
}
