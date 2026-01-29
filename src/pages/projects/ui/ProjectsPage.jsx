import { LinksBlock } from "@/shared/ui"
import { menuItems } from "@/shared/config/navigation"

export const ProjectsPage = () => {
  const primaryLinks = ["/skills", "/contacts"]

  return (
    <div>
      <LinksBlock
        links={menuItems.filter((link) => primaryLinks.includes(link.href))}
      />
    </div>
  )
}
