import { useEffect, useState } from "react"
import { Reveal } from "@/shared/ui"
import { ProjectShowcaseModal } from "./ProjectShowcaseModal"

export const ProjectShowcaseSection = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (!isModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    const rootStyle = document.documentElement.style
    const previousOverflow = rootStyle.overflow
    rootStyle.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      rootStyle.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isModalOpen])

  if (!project) return null

  const media = project.media ?? { images: [], videos: [], cover: null }
  const coverImage = media.cover
  const previewHighlights = (project.highlights ?? []).slice(0, 4)
  const techBadges = project.techBadges ?? []

  return (
    <>
      <section
        className="projects-showcase"
        aria-label={`${project.title} preview`}
      >
        <div className="projects-showcase__header">
          <Reveal as="h3" className="projects-showcase__title" preset="text">
            {project.title}
          </Reveal>

          <Reveal
            as="button"
            className="projects-showcase__open-btn"
            preset="inline"
            type="button"
            onClick={openModal}
            aria-label={`Open full overview for ${project.title}`}
          >
            Открыть
          </Reveal>
        </div>

        <div className="projects-showcase__preview">
          <Reveal as="div" className="projects-showcase__media" preset="media">
            {coverImage ? (
              <img
                className="projects-showcase__image"
                src={coverImage.src}
                alt={`${project.title} preview cover`}
                loading="lazy"
              />
            ) : (
              <div className="projects-showcase__media-fallback">
                Media preview will be added soon.
              </div>
            )}

            <span className="projects-showcase__media-label">
              Основная модель
            </span>

            <div className="projects-showcase__media-stats">
              <span>{media.images.length} изображений</span>
              <span>{media.videos.length} видео</span>
            </div>
          </Reveal>

          <div className="projects-showcase__content">
            <Reveal as="p" className="projects-showcase__summary" preset="text">
              {project.summary}
            </Reveal>

            <div className="projects-showcase__badges">
              {techBadges.map((badge, index) => (
                <Reveal
                  as="span"
                  className="projects-showcase__badge"
                  preset="inline"
                  index={index}
                  key={badge}
                >
                  {badge}
                </Reveal>
              ))}
            </div>

            <div className="projects-showcase__highlight-grid">
              {previewHighlights.map((highlight, index) => (
                <Reveal
                  as="article"
                  className="projects-showcase__highlight-card"
                  preset="card"
                  index={index}
                  key={highlight.title}
                >
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectShowcaseModal
        project={project}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
