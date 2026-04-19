export const ExperienceHeader = ({ root, title, subtitle }) => {
  return (
    <header className={root}>
      <h2 className={title}>Мой Опыт работы</h2>
      <p className={subtitle}>
        Опыт, из которого вырос мой подход к диагностике, стабильности, и автоматизации процессов.
      </p>
    </header>
  )
}
