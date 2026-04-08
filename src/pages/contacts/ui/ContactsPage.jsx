import { Cards, InfoBlock, LinksBlock, Reveal } from "@/shared/ui"
import { infoBoxContactsData } from "../model/infoBox"
import { contactsPageCards } from "../model/pageConfig"
import { CONTACTS_TITLE } from "../model/constants"
import { selectContactsLinks } from "../lib/selectContactsLinks"
import { contactsPageClasses } from "../model/classes"

export const ContactsPage = () => {
  const links = selectContactsLinks()
  const { CONTACTS_PAGE_CLASS, CONTACTS_TITLE_CLASS } = contactsPageClasses

  return (
    <section className={CONTACTS_PAGE_CLASS}>
      <Reveal as="h2" className={CONTACTS_TITLE_CLASS} preset="text">
        {CONTACTS_TITLE}
      </Reveal>

      <InfoBlock data={infoBoxContactsData} />

      <Cards cards={contactsPageCards} />

      <LinksBlock links={links} />
    </section>
  )
}
