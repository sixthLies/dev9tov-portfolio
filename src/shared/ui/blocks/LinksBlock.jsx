import { Link } from "react-router"

export const LinksBlock = ({ links }) => {
  if (!links?.length) return null

  const [first, ...rest] = links

  return (
    <div className="skills-links__block">
      {[first, ...rest].map((link) => (
        <Link key={link.href} className="skills__link" to={link.href}>
          {link.href === first.href ? `← ${link.label}` : `${link.label} →`}
        </Link>
      ))}
    </div>
  )
}
