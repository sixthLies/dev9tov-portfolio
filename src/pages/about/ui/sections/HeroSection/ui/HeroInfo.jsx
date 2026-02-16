import { heroClasses } from "../model/classes"

export const HeroInfo = () => {
  const { title, desc } = { ...heroClasses }
  return (
    <>
      <h1 className={title}>
        Специалист по AI-
        <br />
        генерации и
        <br />
        мультимедиа
      </h1>

      <p className={desc}>
        Создаю пайплайны для генерации и обработки изображений, видео и аудио.
        Применяю современные AI-инструменты для решения практических задач.
      </p>
    </>
  )
}
