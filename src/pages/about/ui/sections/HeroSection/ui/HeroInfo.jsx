import { heroClasses } from "../model/classes"

export const HeroInfo = () => {
  const { title, desc } = { ...heroClasses }
  return (
    <>
      <h1 className={title}>
        Специалист по
        <br />
        automation-first архитектуре
        <br />и AI-интеграциям
      </h1>

      <p className={desc}>
        Создаю удобные цифровые продукты, выстраивая понятный и стабильный
        процесс разработки. Рутину автоматизирую, а AI использую как помощника
        для идей, анализа и аккуратного результата.
      </p>
    </>
  )
}
