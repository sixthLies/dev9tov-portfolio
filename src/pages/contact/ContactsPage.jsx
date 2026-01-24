import { Cards } from "@/shared/ui/Cards"
import { contactsPageCards } from "@/config/pages/contact.config."

export const ContactsPage = () => {
  return (
    <div>
      <Cards data={contactsPageCards} />
    </div>
  )
}
