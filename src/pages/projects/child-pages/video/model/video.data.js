import { test } from "@/shared/assets/images"
import { mulberry32 } from "./video.utils"
import {
  TITLE_POOL,
  HOW_CREATED_POOL,
  VIDEO_FORMATS,
  PAGE_SIZE,
  MAX_TOTAL,
} from "./video.constants"

export function buildVideo(id, rnd) {
  const duration = 60 + Math.floor(rnd() * 18 * 60)
  const views = 1000 + Math.floor(rnd() * 7_500_000)
  const title = `${TITLE_POOL[Math.floor(rnd() * TITLE_POOL.length)]} #${id}`
  const howCreated =
    HOW_CREATED_POOL[Math.floor(rnd() * HOW_CREATED_POOL.length)]
  const thumbUrl = test
  const fullUrl = id % 7 === 0 ? VIDEO_FORMATS.mp4 : VIDEO_FORMATS.webm

  return {
    id: String(id),
    title,
    thumbUrl,
    fullUrl,
    duration,
    views,
    howCreated,
  }
}

export function mockFetchVideosPage(cursor, limit) {
  const safeCursor = Math.max(0, Number(cursor) || 0)
  const safeLimit = Math.max(1, Math.min(50, Number(limit) || PAGE_SIZE))

  return new Promise((resolve, reject) => {
    const latency = 250 + Math.floor(Math.random() * 450)
    window.setTimeout(() => {
      if (Math.random() < 0.03) {
        reject(new Error("Network error: failed to fetch videos"))
        return
      }

      if (safeCursor >= MAX_TOTAL) {
        resolve({ items: [], nextCursor: safeCursor, hasMore: false })
        return
      }

      const endExclusive = Math.min(MAX_TOTAL, safeCursor + safeLimit)
      const items = []
      for (let id = safeCursor + 1; id <= endExclusive; id += 1) {
        const rnd = mulberry32(id * 1103515245)
        items.push(buildVideo(id, rnd))
      }

      resolve({
        items,
        nextCursor: endExclusive,
        hasMore: endExclusive < MAX_TOTAL,
      })
    }, latency)
  })
}
