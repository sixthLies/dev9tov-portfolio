import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"

export const ProcessHeader = ({ root, title, subtitle }) => {
  const { about } = useSiteVersionContent()

  return (
    <header className={root}>
      <h2 className={title}>{about.process.title}</h2>
      <p className={subtitle}>{about.process.subtitle}</p>
    </header>
  )
}
