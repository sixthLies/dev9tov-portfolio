export const GroupTitle = ({ titleClassName, title, img }) => {
  return (
    <h3 className={titleClassName}>
      {title}
      <img className="group__img" src={img} alt="Logo" />
    </h3>
  )
}
