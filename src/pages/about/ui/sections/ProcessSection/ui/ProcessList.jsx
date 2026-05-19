import { PROCESS_STEPS } from "../model/constants"
import { ProcessItem } from "./ProcessItem"

export const ProcessList = ({ getItemRef, list }) => {
  return (
    <ol className={list.root}>
      {PROCESS_STEPS.map((step, index) => (
        <ProcessItem
          getItemRef={getItemRef}
          key={step.n}
          step={step}
          index={index}
          {...list}
        />
      ))}
    </ol>
  )
}
