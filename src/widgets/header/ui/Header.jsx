import { HeaderCta } from "./HeaderCta"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"

export const Header = () => {
  // Поведение не меняем: кнопка по умолчанию ничего не делает.
  const handleContactClick = undefined

  return (
    <header>
      <div className="header__content">
        <HeaderLogo />
        <HeaderNav />
        <HeaderCta onClick={handleContactClick} />
      </div>
    </header>
  )
}
