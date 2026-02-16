export const getMostVisibleEntry = (entries) => {
  return entries.reduce((bestEntry, currentEntry) => {
    if (!currentEntry.isIntersecting) return bestEntry
    if (!bestEntry) return currentEntry

    const currentRatio = currentEntry.intersectionRatio ?? 0
    const bestRatio = bestEntry.intersectionRatio ?? 0

    return currentRatio > bestRatio ? currentEntry : bestEntry
  }, null)
}
