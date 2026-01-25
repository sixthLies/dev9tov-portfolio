import { contactsPageCards } from "@/config/pages/contact.config."
import { infoBoxContactsData } from "@/config/ui/infoBox.config"
import { Cards, InfoBlock, LinksBlock } from "@/shared/ui"
import { menuItems } from "@/config/app/navigation"

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
