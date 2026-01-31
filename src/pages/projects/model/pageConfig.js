import { image, music, project, video } from "@/shared/assets/icons"

const route = "/projects"

export const projectsCardsContent = [
  {
    img: image,
    title: "Изображения AI",
    description: "Проекты в формате изображений: от концепта до финала.",
    link: route + "/images",
  },
  {
    img: music,
    title: "Музыка AI",
    description: "Проекты в формате аудио: треки и вариации.",
    link: route + "/music",
  },
  {
    img: video,
    title: "Видео AI",
    description: "Проекты в формате видео: черновики и релизные версии.",
    link: route + "/video",
  },
  {
    img: project,
    title: "Мои работы AI",
    description: "Полный каталог AI‑проектов и материалов.",
    link: route + "/assigments",
  },
]
