export const IconsList = ({ items, listClass, itemClass, linkClass }) => (
  <ul className={listClass}>
    {items.map(({ href, img, alt, target }, index) => (
      <li className={itemClass} key={index}>
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
