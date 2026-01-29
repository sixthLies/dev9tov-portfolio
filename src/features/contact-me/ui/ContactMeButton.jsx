import { CONTACT_ME_BUTTON_TEXT } from "../model/constants"
import { useContactMeModal } from "../model/useContactMeModal"
import { ContactMeModal } from "./ContactMeModal"
import { gmailLink, telegrammLink } from "@/shared/config/profileLinks"

export const ContactMeButton = ({ className = "header__btn" }) => {
  const { isOpen, open, close } = useContactMeModal()

  return (
    <>
      <button className={className} type="button" onClick={open}>
        {CONTACT_ME_BUTTON_TEXT}
      </button>

      <ContactMeModal
        isOpen={isOpen}
        onClose={close}
        email={gmailLink}
        telegramUrl={telegrammLink}
      />
    </>
  )
}
