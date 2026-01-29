import { resources } from "../model/pageConfig"

const GroupTitle = ({ titleClassName, title, img }) => {
  return (
    <h3 className={titleClassName}>
      {title}
      <img className="group__img" src={img} alt="Logo" />
    </h3>
  )
}

const SkillItemLink = ({ item, linkClassName, itemClassName }) => {
  const resource = resources[item.key]
  if (!resource) return null

  return (
    <li className={itemClassName} key={item.key}>
      <a
        className={linkClassName}
        href={resource.href}
        target="_blank"
        rel="noreferrer"
      >
        <img className="skills-table__img" src={resource.logo} alt="itemLogo" />
        {item.name}
      </a>
    </li>
  )
}

export const SkillsTable = ({
  skillsInfo,
  root,
  group,
  title,
  row,
  label,
  tagsList,
  tagsListSecondary,
  link,
}) => {
  return (
    <section className={root}>
      {skillsInfo.map((block) => (
        <section className={group} key={block.id}>
          <GroupTitle
            title={block.title}
            titleClassName={title}
            img={block.img}
          />

          {block.groups.map((skillGroup) => (
            <div className={row} key={skillGroup.label}>
              <strong className={label}>{skillGroup.label}</strong>

              <ul className={tagsList}>
                {skillGroup.items.map((item) => (
                  <SkillItemLink
                    key={item.key}
                    item={item}
                    linkClassName={link}
                    itemClassName={tagsListSecondary}
                  />
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </section>
  )
}
