import { whatIDoclasses } from "../model/classes"
import { Reveal } from "@/shared/ui"
import { WhatIDoGrid } from "./WhatIDoGrid"
import { WhatIDoHeader } from "./WhatIDoHeader"

export const WhatIDoSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={whatIDoclasses.root}>
      <Reveal preset="text">
        <WhatIDoHeader {...whatIDoclasses.header} />
      </Reveal>
      <WhatIDoGrid {...whatIDoclasses.grid} />
    </section>
  )
}
