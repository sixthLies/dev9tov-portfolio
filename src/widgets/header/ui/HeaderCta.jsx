import { CONTACT_BUTTON_TEXT } from "../model/constants"

export const HeaderCta = ({ onClick }) => {
  return (
    <button className="header__btn" type="button" onClick={onClick}>
      {CONTACT_BUTTON_TEXT}
    </button>
  )
}
