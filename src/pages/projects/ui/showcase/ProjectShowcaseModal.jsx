import { Carousel } from "./Carousel"
import { ProjectVideoPreview } from "./ProjectVideoPreview"
import { getMaleImages, getFemaleImages } from "../../lib/filterImagesByGender"

export const ProjectShowcaseModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  const media = project.media ?? { images: [], videos: [], cover: null }
  const images = media.images ?? []
  const videos = media.videos ?? []

  const maleImages = getMaleImages(images)
  const femaleImages = getFemaleImages(images)

  const overlayClassName = `project-showcase-modal${isOpen ? " project-showcase-modal--open" : ""}`
  const panelClassName = `project-showcase-modal__panel${isOpen ? " project-showcase-modal__panel--open" : ""}`
  const modalTitleId = `project-showcase-title-${project.id}`

  return (
    <div className={overlayClassName} onClick={onClose} aria-hidden={!isOpen}>
      <section
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="project-showcase-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close project overview"
        >
          Закрыть
        </button>

        <header className="project-showcase-modal__header">
          <h4 id={modalTitleId} className="project-showcase-modal__title">
            {project.title}
          </h4>
          <p className="project-showcase-modal__intro">{project.intro}</p>
        </header>

        <div className="project-showcase-modal__body">
          <section className="project-showcase-modal__section">
            <h5 className="project-showcase-modal__section-title">Видео</h5>
            {videos.length ? (
              <div className="project-showcase-modal__video-grid">
                {videos.map((video) => (
                  <figure
                    className="project-showcase-modal__video-card"
                    key={video.id}
                  >
                    <ProjectVideoPreview video={video} />
                    <figcaption>{video.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="project-showcase-modal__empty">
                Video materials will appear here.
              </p>
            )}
          </section>

          <section className="project-showcase-modal__section">
            <Carousel
              items={maleImages}
              emptyMessage="Изображения с мужчиной появятся здесь."
            />
          </section>
          
          <section className="project-showcase-modal__section">
            <Carousel
              items={femaleImages}
              emptyMessage="Изображения с женщиной появятся здесь."
            />
          </section>
        </div>
      </section>
    </div>
  )
}
