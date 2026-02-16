import { processClasses } from "../model/classes"
import { ProcessHeader } from "./ProcessHeader"
import { ProcessWrapper } from "./ProcessWrapper"

export const ProcessSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={processClasses.root}>
      <ProcessHeader {...processClasses.header} />
      <ProcessWrapper {...processClasses.wrap} />
    </section>
  )
}
