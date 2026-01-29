import { GroupTitle } from "./GroupTitle"
import { SkillItemLink } from "./SkillItemLink"

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
