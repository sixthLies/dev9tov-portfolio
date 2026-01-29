import { resources } from "./model/pageConfig"

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
}) => (
  <section className={root}>
    {skillsInfo.map((block) => (
      <section className={group} key={block.id}>
        <h3 className={title}>
          {block.title}
          <img className="group__img" src={block.img} alt="Logo" />
        </h3>

        {block.groups.map((group) => (
          <div className={row} key={group.label}>
            <strong className={label}>{group.label}</strong>

            <ul className={tagsList}>
              {group.items.map((item) => {
                const resourse = resources[item.key]
                if (!resourse) return null

                return (
                  <li className={tagsListSecondary} key={item.name}>
                    <a
                      className={link}
                      href={resourse.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="skills-table__img"
                        src={resourse.logo}
                        alt="itemLogo"
                      />
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </section>
    ))}
  </section>
)
