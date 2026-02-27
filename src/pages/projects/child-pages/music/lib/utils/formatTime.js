/**
 * Formats a duration in seconds to mm:ss format
 * @param {number} seconds - Duration in seconds
 * @returns {string} Formatted time string (e.g., "3:45")
 */
export function formatTime(seconds) {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '0:00'
  }

  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
