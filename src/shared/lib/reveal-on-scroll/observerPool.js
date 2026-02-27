const observerPool = new Map()
const rootIds = new WeakMap()

let rootIdSequence = 0

const getRootId = (root) => {
  if (!root) return "viewport"

  const cachedId = rootIds.get(root)
  if (cachedId) return cachedId

  rootIdSequence += 1
  const nextId = `root-${rootIdSequence}`
  rootIds.set(root, nextId)
  return nextId
}

const normalizeThreshold = (threshold) => {
  if (Array.isArray(threshold)) return threshold.join(",")
  return String(threshold ?? 0)
}

const getObserverKey = ({ root, rootMargin, threshold }) => {
  return [getRootId(root), rootMargin, normalizeThreshold(threshold)].join("|")
}

const createObserverEntry = (options) => {
  const listenersByElement = new Map()
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const listeners = listenersByElement.get(entry.target)
      if (!listeners?.size) return

      listeners.forEach((listener) => listener(entry))
    })
  }, options)

  return { observer, listenersByElement }
}

export const observeWithPool = (element, options, listener) => {
  if (!element || typeof IntersectionObserver === "undefined") {
    return () => {}
  }

  const key = getObserverKey(options)
  const entry = observerPool.get(key) || createObserverEntry(options)

  if (!observerPool.has(key)) {
    observerPool.set(key, entry)
  }

  const currentListeners = entry.listenersByElement.get(element) || new Set()
  if (!entry.listenersByElement.has(element)) {
    entry.listenersByElement.set(element, currentListeners)
    entry.observer.observe(element)
  }

  currentListeners.add(listener)

  return () => {
    const listeners = entry.listenersByElement.get(element)
    if (!listeners) return

    listeners.delete(listener)

    if (listeners.size === 0) {
      entry.listenersByElement.delete(element)
      entry.observer.unobserve(element)
    }

    if (entry.listenersByElement.size === 0) {
      entry.observer.disconnect()
      observerPool.delete(key)
    }
  }
}
