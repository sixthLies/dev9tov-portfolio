import { Link } from "react-router"
import { Reveal } from "../reveal"

export const LinksBlock = ({ links }) => {
  if (!links?.length) return null

  const [first, ...rest] = links

  return (
    <div className="skills-links__block">
      {[first, ...rest].map((link, index) => (
        <Reveal
          as={Link}
          key={link.href}
          preset="inline"
          index={index}
          className="skills__link"
          to={link.href}
        >
          {link.href === first.href
            ? `\u2190 ${link.label}`
            : `${link.label} \u2192`}
        </Reveal>
      ))}
    </div>
  )
}
