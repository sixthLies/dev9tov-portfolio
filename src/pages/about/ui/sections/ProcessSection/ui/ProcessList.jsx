import { STEPS } from "../model/constants"
import { ProcessItem } from "./ProcessItem"

export const ProcessList = ({ list }) => {
  return (
    <div className={list.root}>
      {STEPS.map((step) => (
        <ProcessItem key={step.n} step={step} {...list} />
      ))}
    </div>
  )
}
