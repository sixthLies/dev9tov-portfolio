import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { ProcessItem } from "./ProcessItem"

export const ProcessList = ({ list }) => {
  const { about } = useSiteVersionContent()

  return (
    <div className={list.root}>
      {about.process.steps.map((step, index) => (
        <ProcessItem
          key={step.n}
          step={step}
          index={index}
          {...list}
        />
      ))}
    </div>
  )
}
