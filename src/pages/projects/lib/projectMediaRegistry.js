import { createPublicMediaUrl } from "./publicMedia"

const IMAGE_MODULES = import.meta.glob(
  "/src/shared/assets/projects/*/images/*.{png,jpg,jpeg,webp,avif,gif}",
  { eager: true, import: "default" },
)

// Heavy project videos live in `public/` so they bypass the Vite asset bundling
// pipeline and keep stable URLs under the configured public base path.
const PUBLIC_VIDEO_FILES = Object.freeze({
  "eCommerce-shows": Object.freeze([
    "n8n workflow mp4.mp4",
    "Модель mp4.mp4",
  ]),
})

const PROJECT_MEDIA_PATH_PATTERN =
  /\/projects\/([^/]+)\/(images|video)\/([^/]+)$/i

const fileNameCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
})

const normalizeFileName = (fileName) => {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

const normalizeKeyPart = (value) => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const parseAssetPath = (assetPath) => {
  const matches = assetPath.match(PROJECT_MEDIA_PATH_PATTERN)
  if (!matches) return null

  const [, projectSlug, mediaType, fileName] = matches
  return { projectSlug, mediaType, fileName }
}

const buildRegistry = (modules, type) => {
  const registry = {}

  Object.entries(modules).forEach(([assetPath, src]) => {
    const parsed = parseAssetPath(assetPath)
    if (!parsed) return

    const { projectSlug, fileName } = parsed
    if (!registry[projectSlug]) {
      registry[projectSlug] = []
    }

    registry[projectSlug].push({
      id: `${projectSlug}-${type}-${normalizeKeyPart(fileName)}`,
      type,
      fileName,
      caption: normalizeFileName(fileName),
      src,
    })
  })

  Object.values(registry).forEach((items) => {
    items.sort((a, b) => fileNameCollator.compare(a.fileName, b.fileName))
  })

  return registry
}

const buildPublicVideoRegistry = (entriesByProject, baseUrl) => {
  const registry = {}

  Object.entries(entriesByProject).forEach(([projectSlug, fileNames]) => {
    registry[projectSlug] = fileNames
      .map((fileName) => ({
        id: `${projectSlug}-video-${normalizeKeyPart(fileName)}`,
        type: "video",
        fileName,
        caption: normalizeFileName(fileName),
        src: createPublicMediaUrl(
          `project-media/${projectSlug}/video/${fileName}`,
          baseUrl,
        ),
      }))
      .sort((a, b) => fileNameCollator.compare(a.fileName, b.fileName))
  })

  return registry
}

const projectImagesRegistry = buildRegistry(IMAGE_MODULES, "image")
const projectVideosRegistry = buildPublicVideoRegistry(
  PUBLIC_VIDEO_FILES,
  import.meta.env.BASE_URL,
)

export const getProjectMedia = (projectSlug) => {
  const images = projectImagesRegistry[projectSlug] ?? []
  const videos = projectVideosRegistry[projectSlug] ?? []

  return {
    images,
    videos,
    cover: images[0] ?? null,
  }
}
