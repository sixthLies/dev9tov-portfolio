import { useCallback, useEffect, useRef, useState } from "react"

export function useImageModal() {
  const [active, setActive] = useState(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null)
    }

    document.addEventListener("keydown", onKeyDown)
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0)

    return () => {
      clearTimeout(t)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [active])

  const onOverlayMouseDown = useCallback((e) => {
    if (e.target === e.currentTarget) setActive(null)
  }, [])

  const open = useCallback((img) => setActive(img), [])
  const close = useCallback(() => setActive(null), [])

  return { active, open, close, closeBtnRef, onOverlayMouseDown }
}
