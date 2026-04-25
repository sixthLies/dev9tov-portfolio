import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"

export const ExperienceHeader = ({ root, title }) => {
  const { about } = useSiteVersionContent()

  return (
    <header className={root}>
      <h2 className={title}>{about.experience.title}</h2>
    </header>
  )
}
