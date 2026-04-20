export const isInlineMarkup = (value) =>
  typeof value === "string" && value.startsWith("<")

const MAILTO_PREFIX = /^mailto:/i
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const extractEmailAddress = (value = "") => {
  if (typeof value !== "string") return null

  const normalizedValue = value.replace(MAILTO_PREFIX, "").trim()
  return EMAIL_PATTERN.test(normalizedValue) ? normalizedValue : null
}

export const normalizeSocialHref = (value = "") => {
  const emailAddress = extractEmailAddress(value)
  return emailAddress ? `mailto:${emailAddress}` : value
}

export const formatSocialLabel = (value = "", maxLength) => {
  const label = extractEmailAddress(value) ?? value
  if (typeof maxLength !== "number") return label

  return label.slice(0, maxLength)
}
