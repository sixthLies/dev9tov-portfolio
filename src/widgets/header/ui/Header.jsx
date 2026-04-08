import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  )
}
