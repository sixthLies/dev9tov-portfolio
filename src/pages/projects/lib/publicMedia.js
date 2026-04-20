export const normalizePublicBaseUrl = (baseUrl = "/") => {
  const normalized = String(baseUrl).replace(/^\/+|\/+$/g, "")
  return normalized ? `/${normalized}/` : "/"
}

const encodePublicPath = (relativePath = "") =>
  String(relativePath)
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/")

export const createPublicMediaUrl = (relativePath, baseUrl = "/") => {
  const normalizedBaseUrl = normalizePublicBaseUrl(baseUrl)
  const encodedPath = encodePublicPath(relativePath)

  if (!encodedPath) return normalizedBaseUrl
  return `${normalizedBaseUrl}${encodedPath}`
}
