import { Cards, InfoBlock, LinksBlock } from "@/shared/ui"
import { infoBoxContactsData } from "../model/infoBox"
import { contactsPageCards } from "../model/pageConfig"
import {
  CONTACTS_PAGE_CLASS,
  CONTACTS_TITLE,
  CONTACTS_TITLE_CLASS,
} from "../model/constants"
import { selectContactsLinks } from "../lib/selectContactsLinks"

export const ContactsPage = () => {
  const links = selectContactsLinks()

  return (
    <section className={CONTACTS_PAGE_CLASS}>
      <h2 className={CONTACTS_TITLE_CLASS}>{CONTACTS_TITLE}</h2>

      <InfoBlock data={infoBoxContactsData} />

      <Cards cards={contactsPageCards} />

      <LinksBlock links={links} />
    </section>
  )
}
