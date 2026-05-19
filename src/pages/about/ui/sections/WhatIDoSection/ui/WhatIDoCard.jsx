import { Reveal } from "@/shared/ui"
import { ABOUT_CARD_REVEAL_PROPS } from "@/pages/about/model/reveal"

const FeaturedAtmosphere = ({ classes, number }) => {
  const { root, grid, number: numberClass, nodes, node, connector } = classes

  return (
    <div className={root} aria-hidden="true">
      <span className={grid} />
      <span className={numberClass}>0{number}</span>

      <div className={nodes}>
        <span className={`${node} ${node}--a`} />
        <span className={`${node} ${node}--b`} />
        <span className={`${node} ${node}--c`} />
        <span className={connector} />
      </div>
    </div>
  )
}

export const WhatIDoCard = ({
  root,
  title,
  text,
  content,
  copy,
  featured,
  atmosphere,
  c,
  index,
}) => {
  const isFeatured = index === 0 || index === 1 || index === 2
  const cardClassName = isFeatured ? `${root} ${featured}` : root

  return (
    <Reveal preset="card" index={index} {...ABOUT_CARD_REVEAL_PROPS}>
      <article className={cardClassName}>
        {isFeatured ? (
          <FeaturedAtmosphere classes={atmosphere} number={c.n} />
        ) : null}

        <div className={content}>
          <div className={copy}>
            <h3 className={title}>{c.title}</h3>
            <p className={text}>{c.text}</p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
