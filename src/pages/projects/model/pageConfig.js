import { image, music, project, video } from "@/shared/assets/icons"

export const projectsCardsContent = [
  {
    img: image,
    title: "Изображения",
    description: "Проекты в формате изображений: от концепта до финала.",
    link: projects_route + "/images",
  },
  {
    img: music,
    title: "Музыка",
    description: "Проекты в формате аудио: треки и вариации.",
    link: projects_route + "/music",
  },
  {
    img: video,
    title: "Видео",
    description: "Проекты в формате видео: черновики и релизные версии.",
    link: projects_route + "/video",
  },
  {
    img: project,
    title: "Мои работы",
    description: "Полный каталог AI‑проектов и материалов.",
    link: projects_route + "/assigments",
  },
]
