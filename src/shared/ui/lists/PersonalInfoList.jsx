export const PersonalInfoList = ({
  personalInfo,
  className = "",
  itemsClassName = "",
}) => {
  return (
    <ul className={className}>
      {personalInfo.map((item) => (
        <li key={item.label} className={itemsClassName}>
          <b>{item.label}</b> {item.value}
        </li>
      ))}
    </ul>
  )
}
