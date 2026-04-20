import { resolveResource } from "../../lib/resolveResource"

export const SkillItemLink = ({ item, linkClassName, itemClassName }) => {
  const resource = resolveResource(item.key)
  if (!resource) return null

  return (
    <li className={itemClassName}>
      <a
        className={linkClassName}
        href={resource.href}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="skills-table__img"
          src={resource.logo}
          alt={`${item.name} logo`}
        />
        {item.name}
      </a>
    </li>
  )
}
