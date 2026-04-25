import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"
import { WhatIDoCard } from "./WhatIDoCard"

export const WhatIDoGrid = ({ root, card }) => {
  const { about } = useSiteVersionContent()

  return (
    <div className={root}>
      {about.what.cards.map((cardItem, index) => (
        <WhatIDoCard key={cardItem.n} c={cardItem} index={index} {...card} />
      ))}
    </div>
  )
}
