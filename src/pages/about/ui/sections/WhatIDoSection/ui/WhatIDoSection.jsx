import { whatIDoclasses } from "../model/classes"
import { WhatIDoGrid } from "./WhatIDoGrid"
import { WhatIDoHeader } from "./WhatIDoHeader"

export const WhatIDoSection = ({ id, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className={whatIDoclasses.root}>
      <WhatIDoHeader {...whatIDoclasses.header} />
      <WhatIDoGrid {...whatIDoclasses.grid} />
    </section>
  )
}
