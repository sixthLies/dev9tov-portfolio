import { ProcessList } from "./ProcessList"

export const ProcessWrapper = ({ root, list }) => {
  return (
    <div className={root}>
      <ProcessList list={list} />
    </div>
  )
}
