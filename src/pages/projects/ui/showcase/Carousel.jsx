import { useState } from "react"

export const Carousel = ({ items, emptyMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items || items.length === 0) {
    return <p className="project-showcase-modal__empty">{emptyMessage}</p>
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentImage = items[currentIndex]
  const hasMultipleItems = items.length > 1

  return (
    <div className="project-showcase-modal__carousel">
      <div className="project-showcase-modal__carousel-viewport">
        {hasMultipleItems && (
          <button
            className="project-showcase-modal__carousel-arrow project-showcase-modal__carousel-arrow--prev"
            type="button"
            onClick={goToPrevious}
            aria-label="Предыдущее изображение"
          >
            ←
          </button>
        )}

        <figure className="project-showcase-modal__carousel-slide">
          <img
            className="project-showcase-modal__carousel-image"
            src={currentImage.src}
            alt={currentImage.caption}
            loading="lazy"
          />
        </figure>

        {hasMultipleItems && (
          <button
            className="project-showcase-modal__carousel-arrow project-showcase-modal__carousel-arrow--next"
            type="button"
            onClick={goToNext}
            aria-label="Следующее изображение"
          >
            →
          </button>
        )}
      </div>

      {hasMultipleItems && (
        <div
          className="project-showcase-modal__carousel-indicators"
          role="tablist"
          aria-label="Индикаторы слайдов"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`project-showcase-modal__carousel-indicator${
                index === currentIndex
                  ? " project-showcase-modal__carousel-indicator--active"
                  : ""
              }`}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  )
}
