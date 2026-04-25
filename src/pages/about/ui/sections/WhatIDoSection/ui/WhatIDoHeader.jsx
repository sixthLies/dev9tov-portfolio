import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"

export const WhatIDoHeader = ({ root, title, subtitle }) => {
  const { about } = useSiteVersionContent()

  return (
    <header className={root}>
      <h2 className={title}>{about.what.title}</h2>
      <p className={subtitle}>{about.what.subtitle}</p>
    </header>
  )
}
