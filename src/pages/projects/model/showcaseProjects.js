import { getProjectMedia } from "../lib/projectMediaRegistry"

const projectsBlueprint = [
  {
    id: "ecommerce-automation-flow",
    mediaFolder: "eCommerce-shows",
    title: "Создание коммерческой фотосессии с помощью n8n и Gemini AI",
    summary:
      "Концепция премиальной витрины с ИИ-контентом, автогенерацией креативов и оркестрацией рабочих процессов.",
    intro:
      "Этот пример демонстрирует, как генерация медиаконтента может работать в рамках единого автоматизированного цикла.",
    techBadges: ["n8n", "Gemini AI", "Промпт-инжиниринг", "Автоматизация"],
    highlights: [
      {
        title: "Автоматизированный поток контента",
        description:
          "От брифа до готовых к публикации материалов в рамках единого связного конвейера.",
      },
      {
        title: "Многоразовые шаблоны промптов",
        description:
          "Структурированные шаблоны обеспечивают стабильное качество текстов и медиаконтента от релиза к релизу.",
      },
      {
        title: "Цикл быстрых итераций",
        description:
          "Новые варианты кампаний можно генерировать и сравнивать за считанные минуты.",
      },
    ],
  },
]

const withResolvedMedia = (project) => {
  return {
    ...project,
    media: getProjectMedia(project.mediaFolder),
  }
}

const projectShowcases = projectsBlueprint.map(withResolvedMedia)
export const featuredProject = projectShowcases[0] ?? null
