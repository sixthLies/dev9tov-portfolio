export const isInlineMarkup = (value) =>
  typeof value === "string" && value.startsWith("<")
