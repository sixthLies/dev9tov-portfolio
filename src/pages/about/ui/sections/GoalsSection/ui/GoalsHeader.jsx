import { useSiteVersionContent } from "@/shared/lib/useSiteVersion"

export const GoalsHeader = ({ head, title }) => {
  const { about } = useSiteVersionContent()

  return (
    <header className={head}>
      <h2 className={title}>{about.goals.title}</h2>
    </header>
  )
}
