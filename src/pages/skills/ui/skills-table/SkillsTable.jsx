import { GroupTitle } from "./GroupTitle"
import { SkillItemLink } from "./SkillItemLink"
import { Reveal } from "@/shared/ui"

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
      {skillsInfo.map((block, blockIndex) => (
        <Reveal
          as="section"
          className={group}
          preset="section"
          index={blockIndex}
          key={block.id}
        >
          <GroupTitle
            title={block.title}
            titleClassName={title}
            img={block.img}
          />

          {block.groups.map((skillGroup, groupIndex) => (
            <Reveal
              as="div"
              className={row}
              preset="text"
              index={groupIndex}
              key={skillGroup.label}
            >
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
            </Reveal>
          ))}
        </Reveal>
      ))}
    </section>
  )
}
