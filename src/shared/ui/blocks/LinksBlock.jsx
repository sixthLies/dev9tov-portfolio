import { Link } from "react-router"

export const LinksBlock = ({ links }) => {
  return (
    <div className="skills-links__block">
      {links.map((link) => (
        <Link key={link.href} className="skills__link" to={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}
