import { Link } from "react-router"
import { useVersionedPath } from "@/shared/lib/useSiteVersion"

export const ListMenu = ({
  items,
  className = "",
  itemsClassName = "",
  linkClassName = "",
}) => {
  const toVersionedPath = useVersionedPath()

  return (
    <ul className={className}>
      {items.map(({ href, label, value }) => (
        <li key={href} className={itemsClassName}>
          <Link className={linkClassName} to={toVersionedPath(href)}>
            <b>{label}</b> {value}
          </Link>
        </li>
      ))}
    </ul>
  )
}
