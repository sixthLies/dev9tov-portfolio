import { processClasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { ProcessHeader } from "./ProcessHeader"
import { ProcessWrapper } from "./ProcessWrapper"

export const ProcessSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={processClasses.root}>
      <Reveal preset="text">
        <ProcessHeader {...processClasses.header} />
      </Reveal>
      <ProcessWrapper {...processClasses.wrap} />
    </section>
  )
}
