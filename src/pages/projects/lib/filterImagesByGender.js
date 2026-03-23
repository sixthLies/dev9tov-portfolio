/**
 * Фильтрует изображения по наличию ключевых слов в имени файла
 * @param {Array} images - Массив изображений
 * @param {string} keyword - Ключевое слово для фильтрации ("Мужчина" или "Женщина")
 * @returns {Array} Отфильтрованный массив изображений
 */
export const filterImagesByGender = (images, keyword) => {
  if (!images || !keyword) return []

  const normalizedKeyword = keyword.toLowerCase()

  return images.filter((image) => {
    const fileName = image.fileName?.toLowerCase() ?? ""
    const caption = image.caption?.toLowerCase() ?? ""

    return fileName.includes(normalizedKeyword) || caption.includes(normalizedKeyword)
  })
}

/**
 * Получает изображения с мужчиной
 * @param {Array} images - Массив изображений
 * @returns {Array} Изображения с мужчиной
 */
export const getMaleImages = (images) => {
  return filterImagesByGender(images, "Мужчина")
}

/**
 * Получает изображения с женщиной
 * @param {Array} images - Массив изображений
 * @returns {Array} Изображения с женщиной
 */
export const getFemaleImages = (images) => {
  return filterImagesByGender(images, "Женщина")
}
