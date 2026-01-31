import { test } from "@/shared/assets/images"
import { TOTAL_IMAGES } from "./images.constants"

export const IMAGES_DATA = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
  const id = i + 1

  return {
    id: String(id),
    title: `Изображение #${id}`,
    thumbUrl: test,
    fullUrl: test,
    howCreated:
      `Создано: генерация → апскейл → цветокоррекция. ` +
      `Параметры: seed=${id}, формат 1400×900, постобработка в редакторе.`,
  }
})
