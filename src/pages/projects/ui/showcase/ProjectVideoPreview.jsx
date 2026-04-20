import { useRef } from "react"

const DEFAULT_VIDEO_VOLUME = 0.25
const FIRST_FRAME_PREVIEW_TIME = 0.01

const VIDEO_MIME_TYPES = {
  mp4: "video/mp4",
  webm: "video/webm",
  ogg: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/x-m4v",
}

const getVideoMimeType = (fileName = "") => {
  const extension = fileName.split(".").pop()?.toLowerCase()
  return VIDEO_MIME_TYPES[extension] ?? "video/mp4"
}

const prepareVideoElement = (videoElement) => {
  if (!videoElement) return

  videoElement.volume = DEFAULT_VIDEO_VOLUME

  if (videoElement.dataset.previewReady === "true") return

  const previewTime =
    Number.isFinite(videoElement.duration) &&
    videoElement.duration > FIRST_FRAME_PREVIEW_TIME
      ? FIRST_FRAME_PREVIEW_TIME
      : 0

  try {
    videoElement.currentTime = previewTime
  } catch {
    videoElement.dataset.previewReady = "true"
  }
}

export const ProjectVideoPreview = ({ video }) => {
  const videoRef = useRef(null)

  const handleLoadedMetadata = () => {
    prepareVideoElement(videoRef.current)
  }

  const handleSeeked = () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    videoElement.pause()
    videoElement.dataset.previewReady = "true"
  }

  return (
    <video
      ref={videoRef}
      className="project-showcase-modal__video"
      controls
      preload="auto"
      playsInline
      onLoadedMetadata={handleLoadedMetadata}
      onSeeked={handleSeeked}
    >
      <source src={video.src} type={getVideoMimeType(video.fileName)} />
      Your browser does not support the video tag.
    </video>
  )
}
