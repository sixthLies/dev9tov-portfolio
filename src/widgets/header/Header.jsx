import { Link } from "react-router"
import { ListMenu } from "@/shared/ui"
import { logo } from "@/shared/assets/icons"
import { headerClasses } from "@/config/ui/classNames"
import { menuItems } from "@/config/app/navigation"

export const Header = () => {
  return (
    <header>
      <div className="header__content">
        <Link className="header__logo" to="/">
          <img
            className="logo__img"
            src={logo}
            width="110"
            height=""
            alt="Logo"
          />
        </Link>

        <nav className="menu">
          <ListMenu items={menuItems} {...headerClasses} />
        </nav>

        <button className="header__btn" type="button">
          Написать мне
        </button>
      </div>
    </header>
  )
}
