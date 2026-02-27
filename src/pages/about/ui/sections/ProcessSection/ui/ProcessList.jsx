import { STEPS } from "../model/constants"
import { ProcessItem } from "./ProcessItem"

export const ProcessList = ({ list }) => {
  return (
    <div className={list.root}>
      {STEPS.map((step, index) => (
        <ProcessItem
          key={step.n}
          step={step}
          delay={(index % 4) + 1}
          {...list}
        />
      ))}
    </div>
  )
}
