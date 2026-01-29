export function generateStars(count, viewport) {
  const { width, height } = viewport

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.round(Math.random() * width),
    top: Math.round(Math.random() * height),
  }))
}
