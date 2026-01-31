import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"
import { ContactMeButton } from "@/features/contact-me"

export const Header = () => {
  const handleContactClick = undefined

  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        <HeaderNav />
        {/* <ContactMeButton onClick={handleContactClick} /> */}
      </div>
    </header>
  )
}
