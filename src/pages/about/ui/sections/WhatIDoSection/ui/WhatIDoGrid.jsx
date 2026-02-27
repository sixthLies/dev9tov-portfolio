import { CARDS } from "../model/constants"
import { WhatIDoCard } from "./WhatIDoCard"

export const WhatIDoGrid = ({ root, card }) => {
  return (
    <div className={root}>
      {CARDS.map((c, index) => (
        <WhatIDoCard key={c.n} c={c} index={index} {...card} />
      ))}
    </div>
  )
}
