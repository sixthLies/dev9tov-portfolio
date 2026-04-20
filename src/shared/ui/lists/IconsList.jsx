export const IconsList = ({ items, listClass, itemClass, linkClass }) => (
  <ul className={listClass}>
    {items.map(({ href, img, alt, target }) => (
      <li className={itemClass} key={href ?? alt}>
        <a
          className={linkClass}
          href={href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
        >
          <img src={img} alt={alt} />
        </a>
      </li>
    ))}
  </ul>
)
