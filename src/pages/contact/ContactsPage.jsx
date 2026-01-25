import { contactsPageCards } from "@/config/pages/contact.config."
import { infoBoxContactsData } from "@/config/ui/infoBox.config"
import { Link } from "react-router"
import { Cards, InfoBlock } from "../../shared/ui"

export const ContactsPage = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Мои Контакты</h2>
      <InfoBlock data={infoBoxContactsData} />

      <Cards cards={contactsPageCards} />

      <div className="skills-links__block">
        <Link className="skills__link" to="/projects">
          &#8592; Мои Проекты
        </Link>
        <Link className="skills__link" to="/">
          Домашняя страница &#8594;
        </Link>
      </div>
    </section>
  )
}
