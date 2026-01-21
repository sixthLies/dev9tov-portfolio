import { Link } from "react-router"

export const ListMenu = ({
  items,
  className = "",
  itemsClassName = "",
  linkClassName = "",
}) => {
  return (
    <ul className={className}>
      {items.map(({ href, label, value }, index) => (
        <li key={index} className={itemsClassName}>
          <Link className={linkClassName} to={href}>
            <b>{label}</b> {value}
          </Link>
        </li>
      ))}
    </ul>
  )
}
