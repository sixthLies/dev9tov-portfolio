import { useEffect } from "react"

const NUM_STARS = 250

export const Stars = () => {
  useEffect(() => {
    const container = document.createElement("div")
    container.className = "stars-container"
    container.style.position = "fixed"
    container.style.inset = "0"
    container.style.pointerEvents = "none"
    container.style.zIndex = "-1"

    for (let i = 0; i < NUM_STARS; i++) {
      const star = document.createElement("span")
      star.className = "star"

      const xPos = Math.round(Math.random() * window.innerWidth)
      const yPos = Math.round(Math.random() * window.innerHeight)

      star.style.position = "absolute"
      star.style.left = xPos + "px"
      star.style.top = yPos + "px"

      container.appendChild(star)
    }

    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  // Ничего не рендерим напрямую, всё добавляется в DOM в useEffect
  return null
}
