import { Reveal } from "@/shared/ui"

export const ImagesGrid = ({ items, onOpen, classes }) => {
  const { list, list_item, button, img, meta, card_title } = classes

  return (
    <ul className={list}>
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.id}
          className={list_item}
          preset="media"
          index={index}
        >
          <button
            type="button"
            className={button}
            onClick={() => onOpen(item)}
            aria-label={`Открыть ${item.title}`}
          >
            <img
              className={img}
              src={item.thumbUrl}
              alt={item.title}
              loading="lazy"
              decoding="async"
            />
          </button>

          <div className={meta}>
            <div className={card_title}>{item.title}</div>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}
