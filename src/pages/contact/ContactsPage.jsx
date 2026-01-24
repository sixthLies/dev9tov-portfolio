import { Cards } from "@/shared/ui/Cards"
import { contactsPageCards } from "@/config/pages/contact.config."
import { InfoBox } from "../../shared/ui/InfoBox"
import { infoBoxContactsData } from "@/config/ui/infoBox.config"

export const ContactsPage = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Мои Контакты</h2>
      <InfoBox data={infoBoxContactsData} />
      <Cards cards={contactsPageCards} />
    </section>
  )
}
