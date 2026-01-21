export const PortfolioList = ({
  portfolioInfo,
  className = "",
  itemsClassName = "",
  titleClassName = "",
  tasksClassName = "",
  taskClassName = "",
}) => {
  return (
    <ul className={className}>
      {portfolioInfo.map((job) => (
        <li key={job.id} className={itemsClassName}>
          <h3 className={titleClassName}>{job.title}</h3>
          <ul className={tasksClassName}>
            {job.responsibilities.map((task, index) => (
              <li key={index} className={taskClassName}>
                - {task}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
