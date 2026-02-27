import { useRevealOnScroll } from "@/shared/lib/reveal-on-scroll/useRevealOnScroll"

const getDelayStep = (delay) => {
  const normalized = Number.parseInt(delay, 10)
  if (Number.isNaN(normalized)) return 0
  return Math.min(Math.max(normalized, 0), 4)
}

export const Reveal = ({
  as: Component = "div",
  className = "",
  delay = 0,
  once = true,
  root = null,
  rootMargin,
  threshold,
  children,
  ...props
}) => {
  const { ref, isRevealed } = useRevealOnScroll({
    once,
    root,
    rootMargin,
    threshold,
  })

  const delayStep = getDelayStep(delay)
  const classes = [
    "reveal",
    delayStep ? `reveal--delay-${delayStep}` : "",
    isRevealed ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
}
