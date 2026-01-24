import { Link } from "react-router"
import { ListMenu } from "@/shared"
import { logo } from "@/shared/assets/icons"
import { headerClasses } from "@/config/ui/classNames"
import { menuItems } from "@/config/app/navigation"

export const Header = () => {
  return (
    <header>
      <div class="header__content">
        <Link class="header__logo" to="/">
          <img class="logo__img" src={logo} width="110" height="" alt="Logo" />
        </Link>

        <nav class="menu">
          <ListMenu items={menuItems} {...headerClasses} />
        </nav>

        <button class="header__btn" type="button">
          Написать мне
        </button>
      </div>
    </header>
  )
}
