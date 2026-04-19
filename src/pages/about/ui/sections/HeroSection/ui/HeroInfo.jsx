import { heroClasses } from "../model/classes"

export const HeroInfo = () => {
  const { title, desc } = heroClasses
  return (
    <>
      <h1 className={title}>
        Frontend-инженер
        <br />
        с уклоном в automation-first
        <br />
        архитектуру и AI-интеграции
      </h1>

      <p className={desc}>
        Проектирую и собираю интерфейсы, которые удобно использовать и легко
        поддерживать. Бэкграунд в технической поддержке и стабильности систем
        помогает мне смотреть на frontend шире: учитывать реальные сценарии
        пользователей, быстрее диагностировать сбои и автоматизировать
        повторяемые процессы.
      </p>
    </>
  )
}
