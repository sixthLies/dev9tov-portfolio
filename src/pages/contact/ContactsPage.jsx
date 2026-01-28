import { contactsPageCards } from "@/config/pages/contact.config."
import { Cards, InfoBlock, LinksBlock } from "@/shared/ui"
import { infoBoxContactsData } from "./model/infoBox"
import { menuItems } from "@/shared/config/navigation"

export const ContactsPage = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Мои Контакты</h2>
      <InfoBlock data={infoBoxContactsData} />

      <Cards cards={contactsPageCards} />

      <LinksBlock
        links={menuItems.filter(
          (link) => link.href === "/" || link.href === "/projects",
        )}
      />
    </section>
  )
}
