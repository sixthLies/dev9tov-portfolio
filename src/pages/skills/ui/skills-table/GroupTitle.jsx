export const GroupTitle = ({ titleClassName, title, img }) => {
  return (
    <h3 className={titleClassName}>
      {title}
      <img className="skills-table__group-img" src={img} alt="Logo" />
    </h3>
  )
}
