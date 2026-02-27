const SCROLLABLE_OVERFLOW = /(auto|scroll|overlay)/i

export function getIntersectionRoot(element) {
  if (!element || typeof window === "undefined") return null

  let current = element.parentElement

  while (current) {
    const style = window.getComputedStyle(current)
    const overflowY = style.overflowY || style.overflow

    if (SCROLLABLE_OVERFLOW.test(overflowY)) {
      return current
    }

    current = current.parentElement
  }

  return null
}

export function isSentinelNearViewport(sentinel, root, offsetPx = 0) {
  if (!sentinel || typeof window === "undefined") return false

  const sentinelRect = sentinel.getBoundingClientRect()
  const rootBottom = root
    ? root.getBoundingClientRect().bottom
    : window.innerHeight

  return sentinelRect.top <= rootBottom + offsetPx
}

