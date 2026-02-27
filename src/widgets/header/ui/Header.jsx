import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"
import { ThemeToggle } from "./ThemeToggle"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        <HeaderNav />
        <ThemeToggle />
        {/* <ContactMeButton /> */}
      </div>
    </header>
  )
}
