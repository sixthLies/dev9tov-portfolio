import { menuItems } from "@/config/app/navigation"
import { LinksBlock } from "@/shared/ui"

export const ProjecsPage = () => {
  const primaryLinks = ["/skills", "/contacts"]

  return (
    <div>
      <LinksBlock
        links={menuItems.filter((link) => primaryLinks.includes(link.href))}
      />
    </div>
  )
}
